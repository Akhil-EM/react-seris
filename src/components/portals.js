import React from 'react'
import ReactDOM from 'react-dom'
export default function portals() {
    return ReactDOM.createPortal(
        <div>
            Portals Demo
        </div>,
        document.getElementById('portals-root')
    )
}

//how we can render a component outside root div
