import { useDispatch } from "react-redux"
import TextInput from "./TextInput"
import { showFormattedDate } from "../utils"
import { addData } from "../redux/slices/catatanSlice"

const FormAddCatatan = () => {
    const dispatch = useDispatch()

    const data = (title, body) => {
        return {
            id: new Date().getTime(),
            title,
            body,
            createdAt: showFormattedDate(new Date()),
            archived: false
        }
    }

    const handleAddCatatan = (e) => {
        const [ title, body ] = e.target
        e.preventDefault()
        if(title.value.length > 0 && title.value.length <= 20 ){
            dispatch(addData(data(title.value, body.value)))
        }
    }

    return(
        <form onSubmit={handleAddCatatan} className="flex flex-col gap-5 my-10">
            <TextInput id={"title"} name={"Judul"} />
            <TextInput id={"body"} name={"Kalimat"} />
            <button className="btn btn-info w-full text-white">Tambah Catatan</button>
        </form>
    )
}

export default FormAddCatatan