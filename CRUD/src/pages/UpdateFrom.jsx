import { useState } from "react"
// impoert reducer nya
import {updateDat} from '../models/FormSlice'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom";
export default function UpdateForm(){
    //panggil dengan dispatch
    const dispatch = useDispatch();
    //navigasi 
    const navigate = useNavigate()

    //karena update:id maka akse url dengan useParams
    const {id} = useParams()
    //jangan lupa di parseInt

    // ambil data
    const alldata = useSelector((state) => state.formdata)
    
    //filter menghasilkan array dan akses valuenya menggunakan index
    const datFilter = alldata.filter((_,index) => index == parseInt(id))[0]

    const [data,setData] = useState({
        title:datFilter.title ,
        content:datFilter.content,
        id:parseInt(id)
    })
    console.log(datFilter)
    // ketika button diclick jalankan ini
    function UpdateData(e,id){
        e.preventDefault()
        //jika kosong
        if(data.title == "" || data.content == ""){
            alert('isi lengkap fromnya')
            //tanpa return kode diular if akan dijalankan makanya kita hentikan dengan wrap if saja dengan return
            return;
        }
        // jika tidak
        //ke redux
        dispatch(updateDat(data))
        //reset
        setData({
            title:"",
            content:"",
            id:""
        })
        //navigasi ke "/"
        navigate("/")


        
    }
    return(
        <>
            <div className="mx-auto mt-[10vh] border border-black rounded-lg flex flex-col items-center h-[60vh] w-[30%] shadow-lg">
                <h1 className="text-2xl">Update data</h1>
                <form  onSubmit={UpdateData}className="flex flex-col items-center w-full h-full">
                    <div className="w-full h-[20%]  px-2 flex flex-row items-center gap-11 box-border">
                        <label>Title</label>
                        <input className="h-1/2 w-full border border-black" value={data.title} onChange={(e) => setData({...data,title:e.target.value})}/>

                    </div>
                     <div className="w-full h-[50%]  px-2 flex flex-row items-start gap-4">
                        <label>Content</label>
                        <textarea className="h-3/4 w-full border border-black" value={data.content} onChange={(e) => setData({...data,content:e.target.value})}/>

                    </div>
                     <div className="w-full h-[20%]  borderpx-2 flex flex-row items-center justify-center  box-border">
                        <button type='submit' className="h-1/2 w-[30%] border border-black rounded hover:scale-[1.2] transition-all duration-300">Update Data</button>
                    </div>

                    
                </form>
            </div>
        
        
        </>
    )
}