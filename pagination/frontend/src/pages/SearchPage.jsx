import { useEffect, useState } from "react"
import {useSearchParams} from 'react-router-dom'
export default function SearchPage(){
    //buat state page
    const [page,setPage] = useState(1)

    //simpan total hasil pencarian
    const [total,setTotal] = useState(null)

    //buat hasil perncarian
    const [data,setData] = useState([])

    //mendengar ketikan dari user
    const [searchVal,setSearch] = useState("");

    //untuk fetch data ke backend pisahkan dengan ketkan user
    const [datafind,setFind]  = useState("")

    //buat dinamic url
    const [queryParams,setParams] = useSearchParams()

    //setiap kali di klik, akan balik lagi ke setpage 1
    function showParams(){
        
        setPage(1)
        //buat url untuk frontend dengan existing variabel queryParams
        const newUrl = new URLSearchParams(queryParams);
        newUrl.set('q',searchVal)
        newUrl.delete('page')
        
        //update url dengan yang baru
        setParams(newUrl)
        //kita pisahkan apa yang diketik user dengan value untuk fetch datanya
        setFind(searchVal)
      
    }
    //habis update fetch datanya kan
    useEffect(() => {
        if( datafind && datafind !== ""){
            async function getData() {
                try{
                    const res = await fetch(`http://localhost:3000/api/countries/search?q=${datafind}&page=${page}`)
                    if(!res.ok){
                        throw new Error("tidak ditemukan");
                        
                    }
                    const result = await res.json();
                    setData(result.data)
                    setTotal(result.totalPage)
                }catch(error){
                    console.log(error)
                }
            }
            getData();
            
        }

        
       
    },[datafind,page])

    // function buat change page
    function changePage(newPage){
        //antisipasi next previous tidak bisa digunakan karena hasilnya cuma 1
        if(total == 1){
            return
        }
        // menggunakan queryParams terbaru
         const newUR = new URLSearchParams(queryParams);
         // jika page - 1 kurang dari 1 atau sama dengan 1
        if(newPage <= 1){
            setPage(1);
            //delete query page
            //hilangkan query page dalam url jadi hasilnya adalah ?q=string
            newUR.delete('page')
            //update setParams
            setParams(newUR);

        }else if (newPage > 1 && newPage <= total){
            //update page sesuai dengan 
            setPage(newPage)
            newUR.set('page',newPage)
        }else{
            setPage(total);
            newUR.set('page',total )

        }
        //update url dinamic
        setParams(newUR)
    }
    return(
        <>
            <div className="mx-auto mt-20 h-[68vh] border border-black flex flex-col items-center max-w-[50%]">
                <h1>Pencarian</h1>
                <div className="h-[20%] w-full px-2 flex flex-row items-center gap-5">
                    <h2>Cari</h2>
                    <input className=" border border-black w-3/4 h-[50%] rounded-xl" value={searchVal} onChange={(e) => setSearch(e.target.value)}/>
                    <button className="w-[10%] h-[20%] rounded-xl hover:bg-black hover:text-white flex items-center justify-center border border-black " onClick={showParams} >Click</button>
                </div>
                <div className={`h-[70%] w-full border border-black ${data.length == 0 ? "flex items-center justify-center":"flex flex-col overflow-y-auto"}`}>
                    {data.length == 0 
                        ? <h1> Tidak ada data</h1>
                        : (
                             <div>{JSON.stringify(data)}</div>
                        
                        )
                           
                    }
                    {data.length !== 0
                        && <div className="flex w-full mt-10 gap-5 px-2">
                            <button onClick={() => changePage(page - 1)}>Prev</button>
                            <button onClick={() => changePage(page + 1)}>Next</button>
                        </div>
                    }
                </div>


            </div>
        </>
    )
}