import axios from "axios"
import { useEffect } from "react"

export default function Home () {
  useEffect(()=>{
    axios.get('http://localhost:3000/api/tours').then((res)=>{
      console.log(res);
    }).catch(()=>{
      console.log("lỗi")
    })
  })
  return (
    <div>
      Home page 3333
    </div>
  )
}
