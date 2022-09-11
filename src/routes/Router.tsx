import { BrowserRouter, Routes, Route } from 'react-router-dom'  
import App from '../containers/App'
import Navbar from '../components/Navbar'
import NewMotorcycle from '../containers/NewMotorcycle'





const Router = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
         <Route path='/' element={<App />}/>
         <Route  path="/new" element={<NewMotorcycle/>} />
      </Routes>
   </BrowserRouter>

  )
}

export default Router;