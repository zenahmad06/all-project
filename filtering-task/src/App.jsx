import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { people } from './data/data'

function App() {
  const [datachecked,setChecked] = useState({
    name:false,
    city:false,
    company:false

  })
  // buat state untuk menyimpan text pencarian
  const [search,setSearch] = useState("")
    // state awal semua data
  const [dat,setData] = useState(people)

  //menggunakan useEffect
  useEffect(()=>{
    handleChange()
  },[search,datachecked])
  
  function handleChange(){
    //check value == true
    const checkedTrue = Object.entries(datachecked)
      .filter((element) => element[1]== true)
      .map((element) => element[0])
    //logic pencarian
    //jika ada checked
    const filtered = checkedTrue.length !=0 
      ? people.filter((item) => {
        return (
            checkedTrue.some((nameKey) => {
            const valItem = item[nameKey];
            return valItem.toLowerCase().includes(search.toLowerCase())
          })
        )
      })
      // [] -> {} => stiring
      : people.filter((item) => Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase()))
    //update
    setData(filtered)
  }
    
  return (
    <>
      <div className='Cont'>
        <h1>Latihan Filtering</h1>
        <div className='searchCont'>
          <label><h2>Cari:</h2></label>
          <input type='text' value={search} onChange={(e) => setSearch(e.target.value)}/>
        </div>
        <div className='searchCont' style={{flex:"0",display:"flex",flexDirection:"row-reverse"}}>
          <div className='checkBox'>
            <div>
              <label>by nama</label>
              <input type='checkbox' 
                checked={datachecked.name} 
                onChange={(e) => setChecked({...datachecked,name:e.target.checked})}/>
            </div>
            <div>
              <label>by kota  :</label>
              <input type='checkbox' 
                checked={datachecked.city}
                onChange={(e) => setChecked({...datachecked,city:e.target.checked})}
              />
            </div>
            <div>
              <label>by perusahaan :</label>
              <input type='checkbox' 
                checked={datachecked.company}
                onChange={(e) => setChecked({...datachecked,company:e.target.checked})}
              />
            </div>
          </div>
        </div>
        <div style={{flex:"2", backgroundColor:'white',width:"95%",padding:"10px 20px"}}>
          <table>
            <thead>
            <tr>
              <th>Nama</th>
              <th>Kota</th>
              <th>Perusahaan</th>
            </tr>
          </thead>
          <tbody>
            {dat.map((item,index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.city}</td>
                <td>{item.company}</td>


              </tr>
            ))}
          </tbody>
        </table>


        </div>
      </div>
    </>
  )

}

export default App
