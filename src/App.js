import './App.css';
// import './style.css';
// import './utils.css';

import logo from './Image/Workolia.png';

import { Route, Routes } from 'react-router-dom'

import Header from './Compoents/header';
import { Footer } from './Compoents/footer';
import Content from './Compoents/content';
import Pricing from './Compoents/pricing';
import Login from './Compoents/login';
import Register from './Compoents/register';
import Features from './Compoents/features';
import Contact from './Compoents/contact';
// import Logout from './Compoents/logout';
// import Dashboard from './Compoents/dashboard';
// import { Link } from 'react-router-dom';

import Meta from './Compoents/meta';

function App() {
  return (
    <>
        {/* <Router> */}
          <Meta/>
          <Header title="Workolia" />

          <Routes>
            <Route path='/' element={<Content/>} />
            <Route path='/feature' element={<Features/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/pricing' element={<Pricing/>} />
            {/* <Route path='/logout' element={<Logout/>} /> */}
            {/* <Route path='/dashboard' element={<Dashboard/>}></Route> */}
            <Route path='*' element={<><h1 className='text-center m-5'>404: Page not found </h1><p className='text-center '><a href="/"> &lt; back to home</a></p></>}></Route>
          </Routes>

          <Footer log={logo}/>
        {/* </Router> */}
        
    </>
  )
}

export default App;
