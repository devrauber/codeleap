import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import Register from "./pages/Register";

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/timeline' element={<Timeline/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;