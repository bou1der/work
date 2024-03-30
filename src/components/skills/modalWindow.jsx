import React from "react";

import emptyImg from "./resource/img.png"
import closeModal from "./resource/close_modal.svg"

const ModalWindow = ({setModal,modalInfo}) =>{
    return(
        <>
            <div className={"modal-window-area"}>

                <div className={"main-modal-window-skill"} style={{top:document.documentElement.clientWidth < 1200 ? `${window.scrollY}px` : "unset"}}>

                    <button onClick={() =>{setModal(false)}}><img src={closeModal} alt="" /></button>
                    <div className="modal-window-preview">
                        <span className="modal-window-logo">
                            <div className="modal-logo-line" style={{backgroundColor:`rgb(${modalInfo.color[0]},${modalInfo.color[1]},${modalInfo.color[2]})`}}></div>
                            <img src={modalInfo.logo} alt="" />
                            <h1 style={{color:`rgb(${modalInfo.color[0]},${modalInfo.color[1]},${modalInfo.color[2]})`}}>{`${modalInfo.name}`}</h1>
                        </span>
                        <div className="modal-preview-works">
                            <img src={emptyImg} alt="" />
                            <img src={emptyImg} alt="" />
                        </div>
                    </div>
                    <div className="modal-window-text">
                        <h1>Опыт работы:</h1>
                        {
                            modalInfo.text.map((element)=>{
                                return <p>{element}</p>
                            })
                        }
                       </div>
                </div>
            </div>
        </>
    )
}
export default ModalWindow