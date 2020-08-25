import React from "react";
import "./artistTemplate.scss";

export default function ArtistTemplate({ children }) {

  return (
  <div className="artistSection">
    {children}
  </div>
  )
}