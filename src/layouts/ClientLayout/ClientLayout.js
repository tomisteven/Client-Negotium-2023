import React from "react";
import "./ClientLayout.css";

export function ClientLayout(props) {
  const { children } = props;
  return <div className="client-layout">{children}</div>;
}
