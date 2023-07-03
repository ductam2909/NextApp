import axios from "axios"
import { useEffect } from "react"
const host = process.env.NEXT_PUBLIC_APIAUTH

export default function Home () {
  useEffect(()=>{
    axios.get(`${host}/api/tours`).then((res)=>{
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
