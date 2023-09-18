/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import Modal from "./Modal"

const ModalDetailCatatan = () => {
    const detailCatatan = useSelector((state) => state.catatan.detailItem)
    const { title, body, createdAt } = detailCatatan

    return (detailCatatan) &&
        <Modal idModal="my_detail_catatan">
            <Modal.Box>
                <div className="flex flex-col gap-5 my-10">
                    <h1 className="font-bold text-2xl">{title}</h1>
                    <p className="text-slate-500"> {createdAt} </p>
                    <p> {body} </p>
                </div>
            </Modal.Box>
        </Modal>
}

export default ModalDetailCatatan