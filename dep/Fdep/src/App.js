import'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Daraz from './components/Daraz';
import Login from './components/Login';
import Signup from './components/Signup';
import Language from './components/Language';
import BecomeASeller from './components/BecomeASeller';
import DarazAffiliateProgram from './components/DarazAffiliateProgram';
import HelpAndSupport from './components/HelpAndSupport';
import {Routes, Route} from 'react-router-dom';
import ProductDescription from './components/ProductDescription';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chat from './components/Chat';
import CheckOut from './components/CheckOut';
import ProtectedRoute from './components/ProtectedRoute';




function App() {

  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Daraz/>}> </Route>
    <Route path="/Login" element={<Login/>}></Route>
    <Route path="/Signup" element={<Signup/>} ></Route>
    <Route path="/language" element={<Language/>} ></Route>
    <Route path="/BecomeASeller" element={<BecomeASeller/>} ></Route>
    <Route path="/DarazAffiliateProgram" element={<DarazAffiliateProgram/>} ></Route>
    <Route path="/HelpAndSupport" element={<HelpAndSupport/>} ></Route>
    <Route path="SaleCards/:id/" element={<ProductDescription/>} ></Route>
    <Route path="Chat" element={<Chat/>}></Route>
    <Route path="CheckOut" element={<ProtectedRoute rote={<CheckOut/>}/>}></Route>

    
    </Routes>
    <Contact/>
    <Footer/>
    <ToastContainer/>
    </>
  );
}
 

export default App;
