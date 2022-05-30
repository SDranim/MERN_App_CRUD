import axios from 'axios'
import { GET_CONTACTS } from '../Actions/ActionsTypes'

export const getContacts=()=>async(dispatch)=>{
    try {
        const res=await axios.get("/api/users")
        dispatch({type:GET_CONTACTS,payload:res.data})
    } catch (error) {
        console.log(error)
    }
    
}


export const addContact = (newUser)=> async(dispatch)=>{
    try {
        const res=await axios.post("/api/adduser",newUser)
        dispatch(getContacts())
        } catch (error) {
            console.log(error)
    }
}

export const deleteContact = (id)=> async(dispatch)=>{
    try {
        const res=await axios.delete(`/api/delete/${id}`)        
        dispatch(getContacts())
        } catch (error) {
        
    }
}

