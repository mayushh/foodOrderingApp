import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err =  useRouteError()
    console.log(err.error)
    return(
       
        <h2>buddy here is an error</h2>
       
    )
}
export default Error;