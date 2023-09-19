/* eslint-disable react/prop-types */
const ButtonDiv = ({ name, style, handleOnClick }) => {
    return <div className={style} onClick={handleOnClick}>{ name }</div>
}

export default ButtonDiv