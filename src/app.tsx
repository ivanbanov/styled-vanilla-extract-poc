import React from 'react'
import { Box } from './box.css'
import { Benchmark } from './benchmark'

export const App = () => (
  <>
    <Box foo='success'>success</Box>
    <Box foo='error'>error</Box>
    <Box foo='info'>info</Box>

    <h1>Benchmark</h1>
    <Benchmark />
  </>
)
