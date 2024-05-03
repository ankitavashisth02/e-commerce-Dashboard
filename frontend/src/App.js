import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path='/' element={<h1>Product Listing Component</h1>} />
        <Route path='/add' element={<h1>add Listing Component</h1>} />
        <Route path='/update' element={<h1>update Listing Component</h1>} />
        <Route path='/logout' element={<h1>logout Listing Component</h1>} />
        <Route path='/profile' element={<h1>profile Listing Component</h1>} />
        </Route>
        
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
