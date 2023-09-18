/* eslint-disable react/prop-types */
const Indicator = ({ children, value }) => {
    return(
        <div className="indicator">
            {children}
            <span className="badge badge-sm indicator-item indicator-bottom bg-amber-600 text-white">{ value }</span>
        </div>
    )
}

export default Indicator