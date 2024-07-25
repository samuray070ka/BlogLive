import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Home from './router/home/Home';
import UniquePage from './router/unique-page/UniquePage';
import UniqueFile from './router/unique-file/UniqueFile';
import Footer from './components/footer/Footer';
import Yangiliklar from './router/yangiliklar/Yangiliklar';
import Mahsulotlar from './router/mahsulotlar/Mahsulotlar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/page/:slug' element={<UniquePage/>}/>
        <Route path='/file/:slug' element={<UniqueFile/>}/>
        <Route path='/:proID' element={<UniquePage/>}/>
        <Route path='/yangiliklar' element={<Yangiliklar/>}/>
        <Route path='/mahsulotlar' element={<Mahsulotlar/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
