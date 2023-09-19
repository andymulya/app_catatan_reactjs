/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import { useState } from "react"
import { getDetail } from "../redux/slices/catatanSlice"
import { isArchived } from "../redux/slices/catatanSlice"
import CardItem from "./CardItem"
import ModalDelete from "./ModalDelete"
import ModalDetailCatatan from "./ModalDetailCatatan"

const CatatanList = ({ datas }) => {
    const [idItem, setIdItem] = useState(null)
    const dispatch = useDispatch()

    const handleArsip = (id) => dispatch(isArchived(id))

    const handleDetailCatatan = (id) => {
        dispatch(getDetail(id))
        document.getElementById("my_detail_catatan").showModal()
    }

    return (datas.length > 0) ? 
    <div>
        {
            datas.map((data) => {
                return (
                    <div key={data.id}>
                        <CardItem>
                            <CardItem.Body title={data.title} createdAt={data.createdAt} handleOnClick={() => handleDetailCatatan(data.id)} />
                            <CardItem.Actions>
                                <div className="btn btn-xs bg-red-600 text-white" onClick={() => {
                                    setIdItem(data.id)
                                    document.getElementById("my_delete").showModal()
                                }}>Hapus</div>
                                <div className="btn btn-xs btn-outline text-cyan-600" onClick={() => handleArsip(data.id)}>Arsip</div>
                            </CardItem.Actions>
                        </CardItem>
                        {
                            <ModalDetailCatatan data={data} />
                        }
                        <ModalDelete id={idItem} />
                    </div>
                )
            })
        }
        
    </div>
    : <h1 className="whitespace-nowrap text-slate-500 text-center">Catatan kosong</h1>
}
export default CatatanList