import React from 'react';

export function Container({ fluid, children }) {
    return <div className={`container${fluid ? "-fluid" : ""}`}
    style={{ paddingTop: 20, top: '20%', position: 'relative', paddingBottom: 20, backgroundColor: 'transparent', display: 'flex', width: '900px', height: '400px', overflow: 'visible'}}>{children}</div>
}