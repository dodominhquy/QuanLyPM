import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './component/loginPage';
import HomePage from './component/homePage';
import AddRoom from './component/roomPage/addRoom';
import EditRoom from './component/roomPage/editRoom';
import DeleteRoom from './component/roomPage/deleteRoom';
import AddAssignment from './component/assignmentPage/addAssignment';
import EditAssignment from './component/assignmentPage/editAssignment';
import DeleteAssignment from './component/assignmentPage/deleteAssignment';
import AddDevice from './component/devicePage/addDevice';
import EditDevice from './component/devicePage/editDevice';
import DeleteDevie from './component/devicePage/deleteDevice';
import AddDeviceComponent from './component/deviceComponentPage/addComponentDevice';
import EditDeviceComponent from './component/deviceComponentPage/editComponentDevice';
import DeleteDevieComponent from './component/deviceComponentPage/deleteComponentDevice';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage></LoginPage>} />
        <Route path='/homepage' element={<HomePage></HomePage>} />
        <Route path='/addroom' element={<AddRoom></AddRoom>} />
        <Route path='/editroom' element={<EditRoom></EditRoom>} />
        <Route path='/deleteroom' element={<DeleteRoom></DeleteRoom>} />
        <Route path='/addassignment' element={<AddAssignment></AddAssignment>} />
        <Route path='/editassignment' element={<EditAssignment></EditAssignment>} />
        <Route path='/deleteassignment' element={<DeleteAssignment></DeleteAssignment>} />
        <Route path='/adddevice' element={<AddDevice></AddDevice>} />
        <Route path='/editdevice' element={<EditDevice></EditDevice>} />
        <Route path='/deletedevice' element={<DeleteDevie></DeleteDevie>} />
        <Route path='/adddevicecomponent' element={<AddDeviceComponent></AddDeviceComponent>} />
        <Route path='/editdevicecomponent' element={<EditDeviceComponent></EditDeviceComponent>} />
        <Route path='/deletedevicecomponent' element={<DeleteDevieComponent></DeleteDevieComponent>} />
      </Routes>
    </>
  );
}

export default App;
