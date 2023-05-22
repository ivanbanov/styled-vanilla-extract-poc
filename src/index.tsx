import React from "react";
import ReactDOM from "react-dom/client";
import { Box } from './components.css'

const App = () => (
  <>
    <Box foo='success'>success</Box>
    <Box foo='error'>error</Box>
    <Box foo='info'>info</Box>
  </>
)


const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
