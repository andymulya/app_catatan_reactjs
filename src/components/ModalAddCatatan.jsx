import Modal from "./Modal"
import FormAddCatatan from "./FormAddCatatan"

const ModalAddCatatan = () => {
    return (
        <Modal idModal="my_add_catatan">
            <Modal.Box>
                <h1 className="font-bold text-lg">Tambahkan Catatan</h1>
                <FormAddCatatan />
            </Modal.Box>
        </Modal>
    )
}

export default ModalAddCatatan