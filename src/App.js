import { Route, Routes } from 'react-router-dom';
import './App.css';
import Test from './Components/Pages'
import NavBar from './Components/NavBar';
import DashBoard from './Components/DashBoard';
import ContentNav from './Components/Content-Nav';
import Lecture from './Components/Pages/lecture';

function App() {
  return (
    <div>
     <NavBar/>
     <DashBoard/>
     <div className="content">
       <ContentNav/>
        <Routes>
          <Route path='/' element= {<Test/>}/>
          <Route path='/lecture' element= {<Lecture/>}/>
        </Routes>
     </div>
    </div>
  );
}

export default App;
