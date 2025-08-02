import { useDispatch } from "react-redux"
import { deleteData } from "../models/FormSlice"
import { useNavigate } from "react-router-dom"
export default function cardItem({item,indexItem, key}){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <>
            <div className="w-[20%] h-[40vh] border border black flex flex-col items-center" >
                <div className="h-[35%] w-full flex flex-col items-center justify-center">
                    <h1>Title</h1>
                    {item.title}
                </div>
                <div className="h-[35%] w-full flex flex-col items-center justify-center">
                    <h1>Content</h1>
                    {item.content}
                </div>
                <div className="h-[35%] w-full flex flex-row items-center justify-center">
                    <button className="flex flex-1 items-center justify-center border border-black" onClick={() => dispatch(deleteData(indexItem))} >delete</button>
                    <button className="flex flex-1 items-center justify-center border border-black" onClick={() => navigate(`update/${indexItem}`)}>update</button>
                </div>
            </div> 
        
        </>
    )
}