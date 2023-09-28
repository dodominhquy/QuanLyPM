import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './component/loginPage';
import HomePage from './component/homePage';
import AddRoom from './component/roomPage/addRoom';
import EditRoom from './component/roomPage/editRoom';
import DeleteRoom from './component/roomPage/deleteRoom';
import AddDevice from './component/devicePage/addDevice';
import EditDevice from './component/devicePage/editDevice';
import DeleteDevice from './component/devicePage/deleteDevice';
import AddAssignment from './component/assignmentPage/addAssignment';
import EditAssignment from './component/assignmentPage/editAssignment';
import DeleteAssignment from './component/assignmentPage/deleteAssignment';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage></LoginPage>}/>
        <Route path='/homepage' element={<HomePage></HomePage>}/>
        <Route path='/addroom' element={<AddRoom></AddRoom>}/>
        <Route path='/editroom' element={<EditRoom></EditRoom>}/>
        <Route path='/deleteroom' element={<DeleteRoom></DeleteRoom>}/>
        <Route path='/addevice' element={<AddDevice></AddDevice>}/>
        <Route path='/editdevice' element={<EditDevice></EditDevice>}/>
        <Route path='/deletedevice' element={<DeleteDevice></DeleteDevice>}/>
        <Route path='/addassignment' element={<AddAssignment></AddAssignment>}/>
        <Route path='/editassignment' element={<EditAssignment></EditAssignment>}/>
        <Route path='/deleteassignment' element={<DeleteAssignment></DeleteAssignment>}/>

      </Routes>
    </>
  );
}

export default App;
