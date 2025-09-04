import React, { useState } from 'react'

export const Chucnang = () => {
    const [a, setA] = useState("")
    const [b, setB] = useState("")
    const [result, setResult] = useState(0)
    const handle_calc = (x) =>{
        setResult (eval(a+x+b))
    }

    return (
        <div>
            <h1>Caculator</h1>
            <input type="number" value={a} onChange={(e) => setA(e.target.value)} placeholder='Nhap a' />
            <input type="number" value={b} onChange={(e) => setB(e.target.value)} placeholder='Nhap b' />
            <p>Kết quả: {result}</p>
            <button onClick={()=>handle_calc('+')}>+</button>
            <button onClick={()=>handle_calc('-')}>-</button>
            <button onClick={()=>handle_calc('*')}>*</button>
            <button onClick={()=>handle_calc('/')}>/</button>
        </div>
    )
}
