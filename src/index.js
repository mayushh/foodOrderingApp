import { createRoot } from "react-dom/client";
import  App  from "./App";
import {  RouterProvider } from "react-router-dom";
import { appRouter } from "./App";

const fun = ()=>{
    return (
        <App></App>
    )
}
const container = document.getElementById("root");
const root = createRoot(container)
root.render(<RouterProvider router={appRouter}/>);