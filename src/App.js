import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/HomePage/HomePage";
import NotFound from "./Components/NotFound/NotFound";
import Carousel from "./Components/Carousel/Image";
import Email from "./Components/Email/SendEmail";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>} />
                {/*<Route path='/carousel' element = {<Carousel/>}></Route>*/}
                <Route path="*" element={<NotFound />} />
                <Route path="/email" element={<Email />} />
            </Routes>
        </BrowserRouter>
    );
    //Проверка2
}

export default App;