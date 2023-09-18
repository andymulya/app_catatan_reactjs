/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar";

export default function LayoutNav({ children }){
    return(
        <>
            <Navbar />
            { children }
        </>
    )
}