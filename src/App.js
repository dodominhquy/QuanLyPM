
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './component/loginPage';
import HomePage from './component/homePage';
import RoomPage from './component/homePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage></LoginPage>}/>
        <Route path='/homepage' element={<HomePage></HomePage>}/>
      </Routes>
    </>
  );
}

export default App;
