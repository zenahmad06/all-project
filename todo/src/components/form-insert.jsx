import { useState } from "react"
import styled from '../styles/form.module.css'
export default function InsertForm({onSend}){
    //definiskan state buat simpan form
    const [form,setForm] = useState({
        time: Date.now(),
        task:"",
        completed:false
    });
    // tombol
    function handleSub(e){
        e.preventDefault()
        onSend(form) // kirim ke parent
        //reset
        setForm({
            time: Date.now(),
            task:"",
            completed:false
        });

    }
    return(

        <>
            <form onSubmit={handleSub} className={styled.formCont}>
                <label>Isikan Task :</label>
                <input required type="text" value={form.task} onChange={(e) => setForm({...form,task:e.target.value})}/>
                <button type="submit">add task</button>
            </form>
        </>
    )
    
}