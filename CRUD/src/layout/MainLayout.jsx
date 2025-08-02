// import react router dom
import {Link} from 'react-router-dom'
import CardItem from '../components/cardItem'
import { useSelector } from 'react-redux'
//jangan lupa menggunakan export default

export default function MainLayout(){
    //panggil data
    const data = useSelector((state) => state.formdata)

    return (
        <>
            <div className="w-screen h-screnn flex flex-row"></div>
                {/* sidebar */}
                <div className="fixed w-[20%] h-screen shadow-lg bg-blue-200">

                </div>

                {/* content */}
                <div className="ml-[20%] w-[80%] flex flex-col px-4 py-2">
                    <div className="w-full h-[15%] flex flex-row px-4 justify-between items-center">
                        <h1 className="text-blue-200 text-5xl font-bold">Welcome to My Page</h1>
                        <Link to="/post" className="h-full w-[20%] flex flex items-center justify-center bg-red-200 rounded-xl transition-all animation-300 hover:bg-blue-200"><button>Buat Post</button></Link>
                    </div>
                    <div className={`w-full mt-7 min-h-screen boder border-black ${data.length == 0 ? "flex flex-wrap flex-col items-center justify-center" : "flex flex-wrap flex-row"}`}>
                         {data.length == 0
                            ? <h1 className='text-4xl'>Tidak ada data</h1>
                            : data.map((value,index) => (

                                <CardItem item={value} indexItem ={index} key={index} />


                            ))
                        }
                    </div>
                   
                </div>
        
        
        </>
    )
}