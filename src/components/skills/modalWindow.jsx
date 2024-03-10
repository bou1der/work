import React from "react";

const ModalWindow = ({setModal,modalInfo}) =>{
    return(
        <>
                <div className={"main-modal-window-skill"} onClick={() => {
                    setModal(false)
                }}>
                    <h1>{modalInfo.id}</h1>
                    <h1>{modalInfo.name}</h1>
                    <h1>{modalInfo.text}</h1>
                    <img src={modalInfo.logo} alt=""/>

                </div>
        </>
    )
}
export default ModalWindow