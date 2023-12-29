import {Home} from "./pages/Home/Home"
import {About} from "./pages/About us/About"
import {Contact} from "./pages/Contact us/Contact"
import {Navbar} from "./Navbar"
import {Route, Routes} from "react-router-dom"
import './style.css'

function App(){
    return (
    <>
        <Navbar />
        <Routes>
            <Route index element={<Home />} />              {/*default page*/}
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
        </Routes>
    </>
    )
}
export default App