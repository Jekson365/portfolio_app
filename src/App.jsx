import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./home/Home.jsx";
import {Navigation} from "./components/Navigation.jsx";
import './styles/index.scss'

function App() {
    return (
        <>
            <div className={'cover'}>
                <BrowserRouter>
                    <Navigation/>
                    <Routes>
                        <Route path={'/'} element={<Home/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App
