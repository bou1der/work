import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
const LoadingSkills = ({loading}) =>{
    const arr = [0,1,2,3,4,5,6,7,8,9]
    return(
        <>
            {   arr.map(()=>{
                    return <Skeleton
                        width={"150px"}
                        height={"250px"}
                        containerClassName={"test"}
                    />
                })

            }
        </>
    )
}
export default LoadingSkills