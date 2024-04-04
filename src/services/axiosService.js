import axios from "axios";

const url = "http://localhost:8000/api"
const api = axios.create({
    withCredentials:true,
    baseURL:url
})
api.interceptors.request.use((config) =>{
    if (config.method !== "post"){
        return config
    }
    config.headers.Authorization = `${localStorage.getItem('Authorization')}`
    return config
})
api.interceptors.response.use((config)=>{
    if (config.request.responseURL ===  url + '/getContent/adminLogin'){
        config.status === 200 ? localStorage.setItem('Authorization',config.data.password) : console.log("error") ;
    }
    return config;
},()=>{
    console.log("reject")
})

const getData = async (link,setData,setError,setLoading) =>{
    const res = await api.get(`/getContent/${link}`)
    console.log(res)
    if(res.status !== 200){
        setError({status:res.status,error:res.data.error})
        return;
    }
    if (setLoading){
        setData(res.data)
        return setLoading(true)
    }
    setData(res.data)
}
export {api,getData}
