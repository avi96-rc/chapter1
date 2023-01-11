import React from "react"
import  ReactDOM  from "react-dom/client"
const heading = React.createElement('h1', {key:'1'}, 'namaste react from parcel')
const heading1 = React.createElement('h1', {key:'2'}, 'heading 1')
const heading2 = React.createElement('h2', {key:3}, 'heading 2')
const container = React.createElement('div', {
    id: 'container',
    className:'ravi',
    pop:'ravi'
}, [heading,heading1, heading2])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(container)