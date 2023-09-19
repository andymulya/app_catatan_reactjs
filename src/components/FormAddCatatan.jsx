import { useDispatch } from "react-redux"
import { useState } from "react"
import TextInput from "./TextInput"
import { showFormattedDate } from "../utils"
import { addData } from "../redux/slices/catatanSlice"
import TextArea from "./TextArea"

const FormAddCatatan = () => {
    const [isError, setIsError] = useState(false)
    const dispatch = useDispatch()

    const data = (title, body) => {
        return {
            id: +new Date(),
            title,
            body,
            createdAt: showFormattedDate(+new Date()),
            archived: false
        }
    }

    const handleAddCatatan = (e) => {
        const [ title, body ] = e.target
        e.preventDefault()
        try{
            if(title.value.length > 0 && title.value.length <= 35 ){
                dispatch(addData(data(title.value, body.value)))
                title.value = ""
                body.value = ""
            }
        }catch(e){
            console.error(e.message)
        }

    }

    return(
        <form onSubmit={handleAddCatatan} onChange={(e) => (e.currentTarget.title.value.length > 0 && e.currentTarget.title.value.length <= 35) ? setIsError(false) : setIsError(true)} className="flex flex-col gap-5 my-10">
            <TextInput id={"title"} name={"Judul"} />
            {
                (isError) && <p className="text-sm text-center text-red-500">Harap masukkan judul dan harus lebih 20 karakter</p>
            }
            {/* <TextInput id={"body"} name={"Kalimat"} /> */}
            <TextArea id={"body"} name={"Kalimat"} />
            <button className="btn btn-info w-full text-white">Tambah Catatan</button>
        </form>
    )
}

export default FormAddCatatan