/* eslint-disable react/prop-types */
const CardItem = ({children}) => {
    return (
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 card border-2 p-5 mb-3">
            {children}
        </div>
    )
}

const Body = ({ title, createdAt, handleOnClick }) => {
    return(
        <div>
            <h1 className="font-semibold hover:text-cyan-600 cursor-pointer" onClick={handleOnClick} >{title}</h1>
            <p className="text-xs text-slate-500">{createdAt}</p>
        </div>
    )
}

const Actions = ({ children }) => {

    return(
        <div className="flex gap-2 justify-center">
            { children }
        </div>
    )
}

CardItem.Body = Body
CardItem.Actions = Actions

export default CardItem