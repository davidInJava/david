import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/HomePage/HomePage";
import NotFound from "./Components/NotFound/NotFound";
import Carousel from "./Components/Carousel/Image";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>} />
                <Route path='/carousel' element = {<Carousel/>}></Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;