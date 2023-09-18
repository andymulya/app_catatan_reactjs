/* eslint-disable react/prop-types */
import Modal from "./Modal"

const ModalDelete = ({ handleOnClick }) => {
    return(
        <Modal idModal="my_delete">
            <Modal.Box>
                <div className="flex flex-col gap-16">
                    <h1 className="font-bold text-lg">Apakah anda ingin menghapus ini?</h1>
                    <div className="flex flex-row gap-3 justify-end">
                        <button className="btn w-full bg-red-500 text-white hover:bg-red-700" onClick={handleOnClick} >Yes</button>
                    </div>
                </div>
            </Modal.Box>
        </Modal>
    )
}

export default ModalDelete