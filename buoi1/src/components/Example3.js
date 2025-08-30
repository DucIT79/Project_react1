
import React, {useState}from 'react'

export const Example3 = () => {
    const [name,setName]=useState("")
  return (
    <div>
        <p>Thông tin họ và tên :{name}</p>
        <input value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>
  )
}
