import React, { useState } from 'react'

function Dateafter() {
    let[a,setA]=useState()
    let[b,setB]=useState()
    let[c,setC]=useState()
    let[fin,setFin]=useState()
    function Samefn(){
        let ob=new Date(a)
        
        let ob1=ob.getTime()
        // let one=86400000*b
        setC(ob1+(86400000*b))
        let ob2=new Date(c)
        setFin(ob2)
    }
    function Samefn2(){
        let ob=new Date(a)
        
        let ob1=ob.getTime()
        let one=86400000*b
        setC(ob1-one)
        let ob2=new Date(c)
        setFin(ob2)
    }
  return (
    <div>
      <input type='date' onChange={(e)=>{setA(e.target.value)}}/>
      <input type='text' onChange={(e)=>{setB(e.target.value)}}/>
      <button onClick={Samefn}>make plus</button>
      <button onClick={Samefn2}>make a minus</button>
      <h3>{fin && fin.toDateString()}</h3>
    </div>
  )
}

export default Dateafter
