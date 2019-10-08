import React from 'react';

export function Container({ fluid, children }) {
    return <div className={`container${fluid ? "-fluid" : ""}`}
    style={{ paddingTop: 20, top: '20%', left: '33%', position: 'absolute', paddingBottom: 20, backgroundColor: 'transparent'}}>{children}</div>
}