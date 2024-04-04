import Skeleton from "react-loading-skeleton";
import {v4 as uuidv4} from "uuid"
import "react-loading-skeleton/dist/skeleton.css"
const LoadingContacts = ({many}) =>{
    const arr = []
    for (let i = 0;i < many;i++){
        arr.push(i)
    }
    return(
        <>
            {
                arr.map(()=>{
                    return (
                        <div key={uuidv4()} className={'contact'} style={{height: "50px", display: "flex", gap: "10px",justifyContent:"center", alignItems:"center"}}>
                            <Skeleton
                                circle={true}
                                height={50}
                                width={50}
                            />
                            <div style={{height: "25px"}}>
                                <Skeleton className={"test"} style={{display: "flex", alignItems: "center"}}
                                          width={150}
                                          height={25}
                                />
                            </div>
                        </div>
                    )
                })

            }

        </>
    )
}
export default LoadingContacts