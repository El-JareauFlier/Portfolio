import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navigation from "./components/Navigation"
import Home from './pages/Home'
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import NoPage from './pages/NoPage'
import '@fontsource/castoro-titling';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigation/>}>
            <Route index element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/Projects' element={<Projects/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='*' element={<NoPage/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
