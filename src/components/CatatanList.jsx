/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import { getDetail, removeItemById } from "../redux/slices/catatanSlice"
import { isArchived } from "../redux/slices/catatanSlice"
import CardItem from "./CardItem"
import ModalDetailCatatan from "./ModalDetailCatatan"
import ButtonDiv from "./ButtonDiv"

const CatatanList = ({ datas }) => {
    const dispatch = useDispatch()

    const handleArsip = (id) => dispatch(isArchived(id))
    const handleDelete = (id) => dispatch(removeItemById(id))

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
                                <ButtonDiv style={"btn btn-xs bg-red-600 text-white"} name={"Hapus"} handleOnClick={() => handleDelete(data.id) } />
                                <ButtonDiv style={"btn btn-xs btn-outline text-cyan-600"} name={"Arsip"} handleOnClick={() => handleArsip(data.id)} />
                            </CardItem.Actions>
                        </CardItem>
                        
                        <ModalDetailCatatan data={data} />
                    </div>
                )
            })
        }
        
    </div>
    : <h1 className="whitespace-nowrap text-slate-500 text-center">Catatan kosong</h1>
}
export default CatatanList