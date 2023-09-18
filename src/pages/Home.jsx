import LayoutNav from "../layouts/LayoutNav"
import imgCatatan from "../assets/catatan.png"
import Search from "../components/Search"
import TitleContent from "../components/TitleContent"
import CatatanList from "../components/CatatanList"
import { useSelector } from "react-redux"
import { filterSearch } from "../utils"
import ModalAddCatatan from "../components/ModalAddCatatan"

export default function Home(){
    const catatan = useSelector((state) => state.catatan.datas)
    const search = useSelector((state) => state.search)
    const resultCatatan = filterSearch(catatan, search, false)
 
    return(
        <LayoutNav>
            <div className="flex flex-col sm:flex-row-reverse items-center bg-gradient-to-b from-cyan-300 to-transparent gap-16 py-10 px-14 z-10">
                <img src={imgCatatan} className="w-2/4"/>
                <div className="sm:w-2/3 flex flex-col gap-10">
                    <h1 className="text-2xl font-bold">Catatan Digital Pribadi</h1>
                    <p className="text-sm text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit placeat libero quidem dolores, pariatur repellat, voluptates sit est iusto odit quia ex sed consequatur dolore porro facilis fugiat. Sapiente, repudiandae!</p>
                    <button className="btn bg-cyan-600 text-base-100 hover:bg-cyan-800" onClick={()=>document.getElementById("my_add_catatan").showModal()}>Tambah Catatan</button>
                    
                    <ModalAddCatatan />
                </div>
            </div>
            <div className="flex flex-col items-center gap-16 py-10 px-10 sm:px-14 z-10">
                <TitleContent title={"Daftar Catatan"} />

                <Search />

                <div className="card shadow-md w-full max-h-[560px] bg-base-100 p-10 overflow-scroll">
                    <CatatanList datas={resultCatatan} />
                </div>
            </div>
        </LayoutNav>
    )
}