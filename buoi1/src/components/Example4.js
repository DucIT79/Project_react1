import React, { useState } from 'react'

export const Example4 = () => {
    const [student,setStudent]=useState({name:"",old:0})
  return (
    <div>
        <h1>Student Information</h1>
        <p>Name :{student.name} and old:{student.old}</p>
        <from>
            <input placeholder='Enter your name' value={student.name} onChange={(e)=>setStudent({...student,name:e.target.value})}/><br/>
            <input placeholder='Enter your old' onChange={(e)=>setStudent({...student,old:e.target.value})}/>
        </from>
    </div>
  )
}
