import React from "react";
// import Count from "./components/Count";
// import FunctionalComp from "./components/FunctionalComp";
// import Card from "./components/cardComp/Card";   
import AxiosExample from "./components/AxiosExample";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <div>
            {/* <Count/> */}
            {/* <FunctionalComp/> */}
            {/* <Card /> */}
            <ToastContainer/>
            <AxiosExample/>
            
        </div>
    )
}
export default App;