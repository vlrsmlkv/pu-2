import React from "react";

const InfoBlock = ({children, icon, header, infoText}) => (
  <div className="info-page-block">
    {icon}
    <span><p className="info-heading">{header}</p></span>
    <div className="info-page-text">{children ? children : infoText}</div>
  </div>
);

export default InfoBlock;