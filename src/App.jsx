import './App.css'
import  HeaderComponent from './Component/HeaderComponent'
import ListEmployeeComponent from './Component/ListEmployeeComponent'
import FooterComponent from './Component/FooterComponent'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import EmployeeComponent from './Component/EmployeeComponent'
 
function App() {
  

  return (
    <>
    <BrowserRouter>
    {/*calling component using the file name - ListEmployeeComponent.jsx*/}

      <HeaderComponent/>

      <Routes>
        {/* // http://localhost:5173 */}
        <Route path='/' element ={<ListEmployeeComponent/>}></Route>

        {/* // http://localhost:5173/employees - map employees to the route  */}
        <Route path='/employees' element ={<ListEmployeeComponent/>}></Route>
      
        {/* // http://localhost:5173/add-employee */}
        <Route path='/add-employee' element={<EmployeeComponent/>}></Route>

        {/* // http://localhost:5173/update-employee/1 */}
        <Route path='/update-employee/:id' element={<EmployeeComponent/>}></Route>
      </Routes>

        <FooterComponent/>

    </BrowserRouter>
    </>    
    
  )
}

export default App
