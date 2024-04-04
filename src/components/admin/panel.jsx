const Panel = () =>{
    return(
        <>
            <h1>Админка</h1>
            <button onClick={()=>{
                localStorage.removeItem("Authorization")
                location.reload()
            }}>Выйти</button>
        </>
    )
}
export default Panel