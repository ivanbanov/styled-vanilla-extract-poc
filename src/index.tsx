import React from 'react'
import ReactDOM from 'react-dom'
import { Box } from './components.css'

const App = () => (
  <>
    <Box foo='success'>success</Box>
    <Box foo='error'>error</Box>
    <Box foo='info'>info</Box>
  </>
)


const rootEl = document.querySelector('#root')

ReactDOM.render(<App />, rootEl)
