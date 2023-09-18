/* eslint-disable react/prop-types */
const TextInput = ({ id, name }) => {
    return (
        <div className="flex flex-col sm:items-center sm:flex-row gap-2">
            <label htmlFor={ id } className="font-semibold text-sm uppercase">{ name }: </label>
            <input id={ id } placeholder={ id } className="input input-info rounded-full ml-3 w-full" />
        </div>
    )
}

export default TextInput