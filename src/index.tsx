import React from "react";
import ReactDOM from "react-dom/client";
import { Box, Box2 } from './components.css'
import { themeClass } from './theme.css'

const App = () => (
  <div className={themeClass}>
    <Box foo='success'>success</Box>
    <Box foo='error'>error</Box>
    <Box foo='info'>info</Box>
    <Box2>Box2</Box2>
  </div>
)


const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
