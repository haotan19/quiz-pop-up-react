// index.tsx
import Hello from './Hello'
import React from 'react'
import ReactDOM from 'react-dom'

console.log('Hello from tsx!')

ReactDOM.render(
  <div>
    <Hello></Hello>
  </div>,
  document.getElementById('root'),
)