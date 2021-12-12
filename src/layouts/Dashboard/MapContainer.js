import React, { Component } from "react";
import { Animation, withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline, InfoWindow } from "react-google-maps"
import './styles.css'
import moment from 'moment'
class MyMapComponent extends Component {
    constructor(props) {
        super(props)
        // console.log("props", props)
        this.state = {
            isOpen: false,
            center: props.data[0] || { lat: 35, lng: 16 },
            position: props.data,
            isFollowing: false,
            followingPos: {},
            zoom: props.data ? 5 : 5
        }

        this.chooseCenter = this.chooseCenter.bind(this)
    }

    onToggleOpen() {
        this.setState({ isOpen: !this.state.isOpen })
    }

    _handleCenterChanged() {
        // this.refs.map.panTo(this.state.center)
        const center = this.mapRef.getCenter();
        if (center.lat && center.lng) {
            let c = {
                lat: center.lat(),
                lng: center.lng()
            }
            this.setState({ center: c });
        }
    }
    componentWillUpdate(props) {
        props.data.map((item, index) => {
            if (item.id != props.data[index].id) {
                const a = item
                const b = props.data[index]
                // this.animate(a, b, 10)
                this.setState({ position: props.data, zoom: 12 })
                if (this.state.isFollowing) {
                    this.setState({ center: this.state.followingPos })
                }
            }
        })
    }

    componentDidMount() {
        this.props.setMapRef(this.mapRef)
    }

    animate(current, moveto, t) {
        var lat = current.lat;
        var lng = current.lng;
        var deltalat = (moveto.lat - current.lat) / 100;
        var deltalng = (moveto.lng - current.lng) / 100;

        var delay = 10 * t;
        var state = this.state
        var that = this
        for (var i = 0; i < 100; i++) {
            (function (ind) {
                setTimeout(
                    function () {
                        lat += deltalat;
                        lng += deltalng;
                        // console.warn(state.position)
                        that.setState({ position: { lat, lng } });
                    }, delay * ind
                );
            })(i)
        }
    }

    renderMarkers() {
        let refreshIntervalId = null;
        let arr = [];

        // console.log("this.state.position",this.state.position)

        return this.props.data.map((item, index) => {
            return (
                <Marker
                    key={item.loadId}
                    animation={1}
                    icon={require('../../components/images/pin.png')}
                    position={item}
                    onClick={() => {
                        this.setState({ isFollowing: true, followingPos: item })
                        this.chooseCenter()
                        this.props.selectMarker(item.loadId)
                        // this._handleCenterChanged()
                        this.props.getAddress(item)
                        this.onToggleOpen()
                    }}>
                    {(this.state.followingPos.loadId == item.loadId) && this.state.isOpen && <InfoWindow key={item.loadId} onCloseClick={() => {
                        // clearInterval(refreshIntervalId)
                        this.onToggleOpen()
                    }}>
                        <div className="marker-info">
                            {this.props.getAddress(item)}
                            {/* {console.log(this.props.geocoder)} */}
                            <div><span> Speed:</span> {Math.round(item.speed * 3.6)} km/h</div>
                            <div><span> Zip code:</span> {this.props.geocoder.filter(it => item.loadId == it.id)[0] && this.props.geocoder.filter(it => item.loadId == it.id)[0].zip_code}</div>
                            <div><span> Address:</span> {this.props.geocoder.filter(it => item.loadId == it.id)[0] && this.props.geocoder.filter(it => item.loadId == it.id)[0].address}</div>
                            <div><span> Timestamp:</span> {moment(item.createdAt).format('HH:mm MM/DD')}</div>
                            <div><span> Location: </span>{moment(item.createdAt).fromNow()}</div>
                            <div>{(moment().diff(moment(item.createdAt)) > 10 * 60 * 1000) ?
                                <span className="offline absolute-pos"></span>
                                : <span className="online absolute-pos"></span>}</div>
                        </div>
                    </InfoWindow>}
                </Marker>
            )
        })
        // return arr;
    }

    chooseCenter() {
        var result = null
        if (this.state.isFollowing && this.state.followingPos.id)
            result = this.state.followingPos
        else result = this.state.center

        // console.log("result", this.props.selectedMarker)

        this.mapRef && this.mapRef.panTo
            && this.mapRef.panTo(
                this.props.selectedMarker && this.props.selectedMarker.lat && this.props.selectedMarker
                || result && result.lat && result
                || { lat: 35, lng: 16 }
            )

        this.setState({ center: result })

        // return this.props.selectedMarker && this.props.selectedMarker.lat && this.props.selectedMarker  || result && result.lat && result || { lat: 35, lng: 16 }
    }
    render() {
        let data = this.props.data
        var refreshIntervalId = null
        // let locationsEveryHour = Data.locationsEveryHour
        let zoom = this.state.zoom

        return <GoogleMap
            defaultZoom={20}
            defaultCenter={this.state.center}
            // center={this.props.selectedMarker}
            onDrag={() => {
                this.setState({ isFollowing: false })
            }}
            zoom={zoom}
            // onZoomChanged={(z) => {
            //     // console.warn(this.refs.map.getZoom())
            // }}
            defaultOptions={{}}
            ref={(ref) => {
                this.mapRef = ref;
            }}
            onCenterChanged={() => this._handleCenterChanged()}
        >
            {
                this.state.position && this.renderMarkers()
            }
        </GoogleMap>
    }
}
export default withScriptjs(withGoogleMap(MyMapComponent));