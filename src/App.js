import './App.css';
import {Routes,Route} from 'react-router-dom';
import { Home } from './components/pages/Home/Home';
import { HeaderHome } from './components/layouts/HeaderHome/HeaderHome';
import { Tweet } from './components/pages/Tweet/Tweet';
import { UseState } from './components/pages/UseState/UseState';
import { ChangeColor } from './components/ui/ChangeColor/ChangeColor';

function App() {
  return (
    <div className="App">
      <HeaderHome />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/UseState' element={<UseState />}/>
        <Route path='/ChangeColor' element={<ChangeColor />}/>
        <Route path='/Tweet' element={<Tweet />}/>
      </Routes>
    </div>
  );
}

export default App;
