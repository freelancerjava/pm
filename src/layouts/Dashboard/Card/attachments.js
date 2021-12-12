import React from 'react'
// import { Box, table } from "reactbulma";
import './styles.css'
import moment from 'moment'

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

let mylist = [
]

const LeftCard = ({ data, openLightbox }) => {

  if (!data) {
    return "loading"
  }

  return (
    <div style={{ marginLeft: 0, marginRight: 0, marginBottom: 10, marginTop: 24 }}>

      <div className="columns is-multiline is-cols">
        {
          
          data && data.map((item, index) => {
            return (
              <div className="column is-3 is-col">

                <a href=""
                  onClick={(e) => {
                    e.preventDefault()
                    openLightbox(e,index)
                  }}>
                  <div className="img-hover br-5">
                    <span><img src={"./zoom.svg"}/></span>
                  </div>
                  <img className="attachment-img br-5" src={item.url} />
                </a>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, index) {
    console.log('open')
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    let list = this.props.data && (this.props.data.length > 0)? this.props.data : mylist || mylist;
    return (
      <div>
        <LeftCard data={list} openLightbox={this.openLightbox} />
        {this.state.lightboxIsOpen && <Lightbox images={list}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          onCloseRequest={() => this.setState({ lightboxIsOpen: false })}
          mainSrc={list[this.state.currentImage].url}
          nextSrc={list[(this.state.currentImage + 1) % list.length].url}
          prevSrc={list[(this.state.currentImage + list.length - 1) % list.length].url}
          onMovePrevRequest={() =>
            this.setState({
              currentImage: (this.state.currentImage + list.length - 1) % list.length,
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              currentImage: (this.state.currentImage + 1) % list.length,
            })
          }
        />}
      </div>
    )
  }
}

export default App