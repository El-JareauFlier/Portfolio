import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navigation from "./pages/Navigation"
import Home from './pages/Home'
import Projects from "./pages/Projects"
import NoPage from './pages/NoPage'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigation/>}>
            <Route index element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/Projects' element={<Projects/>}/>
            <Route path='*' element={<NoPage/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
