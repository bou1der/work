import Skeleton from "react-loading-skeleton";
import {v4 as uuidv4} from "uuid"
import "react-loading-skeleton/dist/skeleton.css"
const LoadingPortfolio = ({many}) =>{
    const arr = []
    for (let i = 0;i < many;i++){
        arr.push(i)
    }
    return(
        <>
            <Skeleton style={{width:"100vw",height:"100vh",maxHeight:"400px",maxWidth:"1000px"}}
            duration={0.8}
            borderRadius={20}
            />
        </>
    )
}
export default LoadingPortfolio