/* eslint-disable react/prop-types */
const TextArea = ({ id, name }) => {
    return (
        <div className="flex flex-col sm:items-center sm:flex-row gap-2">
            <label htmlFor={ id } className="font-semibold text-sm uppercase">{ name }: </label>
            <textarea id={ id } placeholder={ id } className="textarea textarea-info rounded-full ml-3 w-full"/>
        </div>
    )
}

export default TextArea