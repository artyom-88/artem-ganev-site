import React from "react";
import "./LoadingIndicator.scss";

/**
 * Simple loading indicator based on SVG-image
 */
export default () => (
  <div className="flexBox flexGrow-1 flexShrink-1 justifyContentCenter">
    <div className="nav-loading__indicator" />
  </div>
);
