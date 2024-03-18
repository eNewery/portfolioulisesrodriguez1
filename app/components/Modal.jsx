const Modal = ({setIsModal, projectDetail}) => {
function closeModal() {
    const modalContainer = document.querySelector(".modalContainer")
    const body = document.querySelector("body")
    modalContainer.style.animation = "modalDisappear 0.3s both" 
    body.style.overflowY = "scroll"
    setTimeout(() => {
        setIsModal(false)
    }, 400);
}
function handleContainerClick(e) {
    const isClickInsideModalContent = e.target.closest(".modalContent");
    if (!isClickInsideModalContent) {
        closeModal();
    }
}
    return(
        <div onClick={handleContainerClick} className="modalContainer">
        <div className="modalContent">
            <img onClick={() => closeModal()} style={{width:32, height:32, position:"absolute", top:16, right:16, cursor:"pointer"}} src="./close.png" alt="" />
<h2>{projectDetail.projectTitle}</h2> <img src={projectDetail.projectImage} alt="" /><div className="projectDescriptionContainer"><p className="projectDescription">{projectDetail.projectDescription}</p><div className="projectTech">{projectDetail.icons.map(item => (<img src={item} width={32} height={32} alt="" />))}</div></div>        </div>
        </div>
    )
}

export default Modal;