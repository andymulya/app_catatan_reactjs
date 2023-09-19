/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import Modal from "./Modal"
import { removeItemById } from "../redux/slices/catatanSlice"

const ModalDelete = ({ id }) => {
    const dispatch = useDispatch()

    return(
        <Modal idModal="my_delete">
            <Modal.Box>
                <div className="flex flex-col gap-16">
                    <h1 className="font-bold text-lg">Apakah anda ingin menghapus ini?</h1>
                    <div className="flex flex-row gap-3 justify-end">
                        <button className="btn w-full bg-red-500 text-white hover:bg-red-700" onClick={() => dispatch(removeItemById(id))} >Yes</button>
                    </div>
                </div>
            </Modal.Box>
        </Modal>
    )
}

export default ModalDelete