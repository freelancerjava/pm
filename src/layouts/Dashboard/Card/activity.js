import React, { Component } from 'react';
// import { Box, Table } from "reactbulma";
import './styles.css'
import moment from 'moment'
import { connect } from "react-redux";
import Routines from "../../../common/api/routines";

class LeftCard extends Component {
  onClick(geolocation, id) {
    Routines.admin.geocoder({
      request: {
        lat: geolocation.latitude,
        long: geolocation.longitude,
        id: geolocation.id
      }
    }, this.props.dispatch)
  }
  render() {
    if (!this.props.data) {
      return "loading"
    }
    return (
      <div className="activity-tab" style={{ marginLeft: 0, marginRight: 0, marginBottom: 10 }}>
        <div className="columns">
          <div className="column is-3">
            <div className="c-gray">Number</div>
            {this.props.data && this.props.data.map && this.props.data.map((item, i) => (
              <div key={i} className="act-tab-row">{i + 1}</div>))}
          </div>
          <div className="column is-3">
            <div className="c-gray">Date/Time</div>
            {this.props.data && this.props.data.map && this.props.data.map((item, i) => (
              <div key={i} className="act-tab-row">{moment(item.createdAt).format('HH:mm MM/DD')}</div>))}
          </div>
          <div className="column is-3">
            <div className="c-gray">Zip code</div>
            {this.props.data && this.props.data.map && this.props.data.map((item, i) => (
              <div key={i} className="act-tab-row">{
                item && item.zip_code ?
                  item.zip_code
                  : 'N/A'
              }</div>))}
          </div>
          <div className="column is-3">
            <div className="c-gray">Status</div>
            {this.props.data && this.props.data.map && this.props.data.map((item, i) => (
              <div key={i} className="c-green act-tab-row">{item.status}</div>))}
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
  }
}
export default connect(mapStateToProps)(LeftCard)