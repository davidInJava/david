import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/HomePage/HomePage";
import NotFound from "./Components/NotFound/NotFound";
import Carousel from "./Components/Carousel/Image";
import Email from "./Components/Email/SendEmail";
import Main from './Components/Main/Home'
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Main/>} />
                {/*<Route path='/carousel' element = {<Carousel/>}></Route>*/}
                <Route path="*" element={<NotFound />} />
                {/*<Route path="" element={<Main />} />*/}
                <Route path="/email" element={<Email />} />
            </Routes>
        </BrowserRouter>
    );
    //Проверка2
}

export default App;