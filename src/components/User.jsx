import React from "react"
import { useParams } from 'react-router-dom'
export default function User(){
    const {id} = useParams();
    return (
        // <div>User : {userid}</div>
        <div className="bg-gray-600 h-[100px] flex items-center justify-center text-[2rem]">User : {id} </div>
    )
}