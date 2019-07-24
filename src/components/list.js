import React from "react";
import { relative } from "upath";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item" style={{
    position: 'relative',
    paddingTop: 0,
    paddingBottom: 0,
  }}>{children}</li>;
}
