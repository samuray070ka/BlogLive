import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Home from './router/home/Home';
import Footer from './components/footer/Footer';
import Yangiliklar from './router/yangiliklar/Yangiliklar';
import Mahsulotlar from './router/mahsulotlar/Mahsulotlar';
import KompaniyaHaqida from './router/kompaniya/Kompaniya'
import Maqsad from './router/maqsad/Maqsad'
import Qarashlarimiz from './router/qarashlarimiz/Qarashlarimiz'
import Kuzatuv from './router/kuzatuv/Kuzatuv'
import Rahbaryat from './router/rahbaryat/Rahbaryat'
import Tashkiliy from './router/tashkiliy/Tashkiliy'
import Rivojlanish from './router/rivojlanish/Rivojlanish'
import Atrof from './router/atrof/Atrof'
import Energiya from './router/energiya/Energiya'
import Korparativ from './router/korparativ-router/Korparativ'
import Nizom from './router/korparativ-router/Nizom'
import Aksiyadorlar from './router/korparativ-router/Aksiyadorlarning'
import Affillangan from './router/korparativ-router/Affillangan'
import Muhim from './router/korparativ-router/Muhim'
import Mehnat from './router/korparativ-router/Mehnat'
import Dividendlar from './router/korparativ-router/Dividendlar'
import Hisobotlat from './router/korparativ-router/Hisobot'
import Harid from './router/korparativ-router/Harid'
import Tanlov from './router/korparativ-router/Tanlov'
import Jamiyat from './router/korparativ-router/Jamiyat'
import Biznes from './router/korparativ-router/Biznes'
import Qimmatli from './router/korparativ-router/Qimmatli'
import Auditor from './router/korparativ-router/Auditor'
import HomMoliyaviy from './router/korparativ-router/Moliyaviy'
import JamiyatYoki from './router/korparativ-router/JamiyatYoki'
import Aksiyadorlarning from './router/korparativ-router/Aksiyadorlarning'
import Malaka from './router/korparativ-router/Malaka'
import Bosh from './router/ishga-router/Bosh'
import TanlovBosqich from './router/ishga-router/Tanlov'
import Xodimlar from './router/ishga-router/Xodimlar'
import Bizning from './router/ishga-router/Bizning'
import Muvaqqiyatli from './router/ishga-router/Muvaqqiyatli'
import Kompaniya from './router/ishga-router/Kompaniya'
import { useSelector } from 'react-redux';
function App() {
  const { color, fontSize } = useSelector((state) => state.theme);
  return (
    <div className={`app ${color}`} style={{ fontSize: `${fontSize}px` }}>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/kompaniya-haqida' element={<KompaniyaHaqida/>}/>
      <Route path='/maqsad' element={<Maqsad/>}/>
      <Route path='/qarashlarimiz' element={<Qarashlarimiz/>}/>
      <Route path='/kuzatuv' element={<Kuzatuv/>}/>
      <Route path='/rahbaryat' element={<Rahbaryat/>}/>
      <Route path='/tashkiliy' element={<Tashkiliy/>}/>
      <Route path='/rivojlanish' element={<Rivojlanish/>}/>
      <Route path='/atrof' element={<Atrof/>}/>
      <Route path='/energiya' element={<Energiya/>}/>
      <Route path='/korparativ' element={<Korparativ/>}/>
      <Route path='/nizom' element={<Nizom/>}/>
      <Route path='/aksiyadorlar' element={<Aksiyadorlar/>}/>
      <Route path='/affillangan' element={<Affillangan/>}/>
      <Route path='/muhim' element={<Muhim/>}/>
      <Route path='/mehnat' element={<Mehnat/>}/>
      <Route path='/dividendlar' element={<Dividendlar/>}/>
      <Route path='/hisobotlar' element={<Hisobotlat/>}/>
      <Route path='/harid' element={<Harid/>}/>
      <Route path='/tanlov' element={<Tanlov/>}/>
      <Route path='/jamiyat' element={<Jamiyat/>}/>
      <Route path='/biznes' element={<Biznes/>}/>
      <Route path='/qimmatli' element={<Qimmatli/>}/>
      <Route path='/auditor' element={<Auditor/>}/>
      <Route path='/moliyaviy' element={<HomMoliyaviy/>}/>
      <Route path='/jamiyat-yoki' element={<JamiyatYoki/>}/>
      <Route path='/aksiyadorlarning' element={<Aksiyadorlarning/>}/>
      <Route path='/malaka' element={<Malaka/>}/>
      <Route path='/bosh' element={<Bosh/>}/>
      <Route path='/tanlov-bosqich' element={<TanlovBosqich/>}/>
      <Route path='/xodimlar' element={<Xodimlar/>}/>
      <Route path='/bizning' element={<Bizning/>}/>
      <Route path='/muvaqqiyat' element={<Muvaqqiyatli/>}/>
      <Route path='/kompaniya' element={<Kompaniya/>}/>
      <Route path='/' element={<Home/>}/>
        <Route path='/yangiliklar' element={<Yangiliklar/>}/>
        <Route path='/mahsulotlar' element={<Mahsulotlar/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
