
import MainLayout from "./layout/MainLayout"
import PostForm from './pages/PostForm'
//jangan lupa ketika SPA gunakan ini
import { BrowserRouter, Routes, Route  } from "react-router-dom"
import UpdateForm from "./pages/UpdateFrom"
export default function App() {
  return (
    <BrowserRouter>
       {/**buat loccalohost rootnya */}
       {/* anak dari subpage adalah post */}
      <Routes>
        <Route path='/' element={<MainLayout/>}/>

        {/* halaman postform tampil terpisah, fullscreen */}
        <Route path='/post' element={<PostForm/>} />
        
        <Route path='/update/:id' element={<UpdateForm/>}/>


      </Routes>
    
    </BrowserRouter>
  )
}
