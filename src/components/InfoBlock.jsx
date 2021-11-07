import React from "react";

const InfoBlock = ({icon, header, infoText}) => {

  return (
    <div className="info-page-block">
      {icon}
      <span><p className="info-heading">{header}</p></span>
      <div className="info-page-text">{infoText}</div>
    </div>
  );

}

export default InfoBlock;