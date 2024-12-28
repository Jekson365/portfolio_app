import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./home/Home.jsx";
import {Navigation} from "./components/Navigation.jsx";
import './styles/index.scss'
import {Socials} from "./home/socials/Socials.jsx";
import {useEffect} from "react";
// import {I18nextProvider} from 'react-i18next';
// import '../i18.js'
import AOS from "aos";
import 'aos/dist/aos.css';  // Import AOS styles


function App() {
    useEffect(() => {
        AOS.init()
    }, []);
    return (
        <>
            <div className={'cover'}>
                    <Socials/>
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
