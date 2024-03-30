import axios from "axios";

const url = "http://localhost:8000/api"
const api = axios.create({
    baseURL:url
})

export const getData = async (link,setData,setError) =>{
    const res = await api.get(`/getContent/${link}`)
    console.log(res)
    if(res.status !== 200){
        setError({status:res.status,error:res.data.error})
        return;
    }
    setData(res.data)
}
