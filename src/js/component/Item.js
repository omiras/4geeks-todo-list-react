import React from "react";

const Item = ({ id, text, onClickRemoteItem }) => {
  return (
    <li className="list-group-item">
      {text}
      <span id={id} onClick={onClickRemoteItem} style={{ float: "right", cursor: "pointer" }}>X</span>
    </li>
  );
};

export default Item;
