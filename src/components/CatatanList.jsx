/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import { removeItemById } from "../redux/slices/catatanSlice"
import { isArchived } from "../redux/slices/catatanSlice"
import CardItem from "./CardItem"
import ModalDelete from "./ModalDelete"

const CatatanList = ({ datas }) => {
    
    const dispatch = useDispatch()


    const handleDelete = (id) => dispatch(removeItemById(id))
    const handleArsip = (id) => dispatch(isArchived(id))

    return (datas.length > 0) ? 
    <div>
        {
            datas.map((data) => {
                return (
                    <div key={data.id}>
                        <CardItem>
                            <CardItem.Body title={data.title} createdAt={data.createdAt}/>
                            <CardItem.Actions>
                                <div className="btn btn-xs bg-red-600 text-white" onClick={() => document.getElementById("my_delete").showModal()}>Hapus</div>
                                <div className="btn btn-xs btn-outline text-cyan-600" onClick={() => handleArsip(data.id)}>Arsip</div>
                            </CardItem.Actions>
                        </CardItem>
                        <ModalDelete handleOnClick={() => handleDelete(data.id)} />
                    </div>
                )
            })
        }
    </div>
    : <h1 className="whitespace-nowrap text-slate-500 text-center">Catatan kosong</h1>
}
export default CatatanList