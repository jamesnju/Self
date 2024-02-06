import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import  {Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';




function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/' element={<Skills/>} />
        <Route  path='/' element={<Projects/>} />
        <Route  path='/' element={<Contact/>} />
        <Route  path='/' element={<Footer/>} />
      </Routes>
      <Footer/>


    </div>
  );
}

export default App;
