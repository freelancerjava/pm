import React from 'react'
import './styles.css'
// import { Box, Table } from "reactbulma";

const Card = ({ data, handleDeleteModalToggle, chat, geocoder, setChat, setLoadId, setChatOpen }) => {
  if (!data) {
    return "loading"
  }



  // console.log(data)
  let { order_number, from_zip, to_zip, receiver,
    weight, piece, status, id, user } = data
  return (
    <div
      className="info-tab"
      style={{ marginLeft: 0, marginRight: 0, marginBottom: 0 }}>
      <div className="columns">
        <div className="column is-6">
          <div className="c-black"><span className="c-gray">Pickup: </span>{from_zip || "N/A"}</div>
          <div className="c-black"><span className="c-gray">Driver: </span>{data.user && data.user.first_name} {data.user && data.user.last_name}</div>
          <div className="c-black"><span className="c-gray">Receiver: </span>{receiver || "N/A"}</div>
          <div className="c-black"><span className="c-gray">Origin: </span>{from_zip || "N/A"}</div>
          <div className="c-black"><span className="c-gray">Destination: </span>{to_zip || "N/A"}</div>
        </div>
        <div className="column is-6">
          <div className="c-black"><span className="c-gray">Delivery: </span>{to_zip || "N/A"}</div>
          <div className="c-black"><span className="c-gray">Location: </span>{geocoder && geocoder.zip_code}</div>
          <div className="c-black"><span className="c-gray">Weight: </span>{weight || "N/A"} lbs</div>
          <div className="c-black"><span className="c-gray">Pieces: </span>{piece || "N/A"}</div>
          <div className="c-green"><span className="c-gray">Status: </span>{status || "N/A"}</div>
        </div>
      </div>
      <div className="options">
        <span className="del" onClick={(e) => {
          handleDeleteModalToggle(id)
        }}>Delete</span>
        <span className="phone mes"
          onClick={() => {
            setChatOpen(true)
            setLoadId(id)
            setChat(false)
          }}
        >Message</span>
        <span className="phone"><a href={"tel:" + user.phone}>{user.phone}</a></span>
      </div>
    </div>)
}

export default Card