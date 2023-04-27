import React from "react";
import ReactDOM from "react-dom/client";
import { Box, Box2 } from './components.css'

const App = () => (
  <>
    <Box foo='success'>success</Box>
    <Box foo='error'>error</Box>
    <Box foo='info'>info</Box>
    <Box2>Box2</Box2>
  </>
)


const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
