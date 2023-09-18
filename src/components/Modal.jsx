/* eslint-disable react/prop-types */
const Modal = ({ children, idModal }) => {
    return (
        <div>
            <dialog id={idModal} className="modal modal-bottom sm:modal-middle">
                { children }
            </dialog>
        </div>
    )
}

const Box = ({ children }) => {
    return(
        <div className="modal-box">
            <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            { children }
        </div>
    )
}

Modal.Box = Box
export default Modal