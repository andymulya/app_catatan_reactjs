import { useSelector } from "react-redux"

import { filterSearch } from "../utils"
import Indicator from "./Indicator"
import CatatanList from "./CatatanList"


const Navbar = () => {
    const catatan = useSelector((state) => state.catatan)
    const search = useSelector((state) => state.search)

    const resultArsip = filterSearch(catatan, search, true)
    

    return (
        <>
            <div className="navbar bg-cyan-300 px-5">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Catatan</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <Indicator value={resultArsip.length}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 64 64"><path d="M41.148,14H22.852C22.382,14,22,14.382,22,14.852v32.36c0,0.297,0.357,0.448,0.57,0.241l8.557-8.303	c0.487-0.472,1.26-0.472,1.747,0l8.557,8.303C41.643,47.66,42,47.509,42,47.213v-32.36C42,14.382,41.618,14,41.148,14z M41.148,10	C43.827,10,46,12.173,46,14.852v37.46c0,1.925-2.314,2.903-3.695,1.563L32,43.877l-10.305,9.999C20.314,55.216,18,54.237,18,52.313	v-37.46C18,12.173,20.173,10,22.852,10H41.148z"></path></svg>
                            </Indicator>
                        </label>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-70 sm:w-96 max-h-72 bg-base-100 overflow-scroll shadow">
                            <div className="card-body">
                                <h1 className="font-semibold">Arsip</h1>
                                <CatatanList datas={resultArsip} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar