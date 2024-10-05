import {  BrowserRouter as Router,Route,Routes , } from 'react-router-dom'
import HomePage from './components/HomePage'

import DoctorLogin from './loginsignup/DoctorLogin'
import DoctorSignup from './loginsignup/DoctorSignup'

import AdminPanel from './Panel/AdminPanel'
import DoctorPanel from './Panel/DoctorPanel'



const App = () => {
  return (
   <Router>
    <div>
      
      <Routes>
        <Route exact path="/" element={<HomePage/>}></Route>
        
        <Route exact path="/doctorlogin" element={<DoctorLogin/>}/>
        <Route exact path="/signup" element={<DoctorSignup/>}/>
        <Route exact path="/adminpanel" element={<AdminPanel/>}/>
        <Route exact path="/doctorpanel" element={<DoctorPanel/>}/>
        {/* <Route exact path="/doctordata" element={<DoctorPanel/>}/>  dynamic*/}
        {/* <Route exact path="/admindata" element={<DoctorPanel/>}/>  dynamic */}

      </Routes>
    </div>

   </Router>
  )
}

export default App