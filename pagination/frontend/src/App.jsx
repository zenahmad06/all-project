
import SearchPage from './pages/SearchPage'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/search' element={<SearchPage/>}/>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
