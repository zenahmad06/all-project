import { useState } from 'react'
import './App.css'
import InsertForm from './components/form-insert'
import styled from './App.module.css'
function App() {
  const [data, setData] = useState([])
  function updateData(val){
    //mau push val ke existing data
    //karena kita butuh data sebelumnya maka butuh fungsi di setData
    setData((previous) => {
      //copy
      const datCp = [...previous];
      // add val menggunakan pust
      datCp.push(val);
      return datCp //UPDATE data dengan updatean

    })
  }
  //fungsi untuk merubha status
  function changeItem(x){
    setData((previous) => {
      const arr = [...previous];
      // cari dengan find
      const search = arr.find((item,index) => index == x)
      if(search){
        search.completed = true; //ubah ke tru
      }
      console.log(arr)
      return arr;
    })
  }
  //karena butuh current sebelumnya maka
  function deleteItem(val){
    setData((previous) => {
      //copy arr
      const arr_copy = [...previous];
      //menggunakan filter untuk eliminasi
      const filteredArr = arr_copy.filter((_,index) => index != val)
      return filteredArr
    })
  }
  return (
    <>
      <InsertForm onSend={updateData}/>
      <div className={styled.mainCont}>
        {data.length != 0 
          ? data.map((item,index) => (
            <div key={index} className={styled.itemCont}>
               
              <div className={styled.status}>
              <span style={{visibility:item.completed ? "visible" : "hidden"}}>
                ✔</span>
              </div>
              <div className={styled.task}>{item.task}</div>
              <button onClick={() => deleteItem(index)} className={styled.delete}>hapus</button>
              <button onClick={() => changeItem(index)} className={styled.completed}>completed</button>

            </div>
          ))
          : <h1>belum ada</h1>
        }

      </div>
    </>
  )
}

export default App
