/* eslint-disable react/prop-types */
const TitleContent = ({ title }) => {
    return(
        <div className="relative">
            <h1 className="text-2xl font-semibold z-10">{ title }</h1>
            <span className="text-4xl font-bold absolute top-5 -left-12 whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-t from-slate-500/50 z-0">{ title }</span>
        </div>
    )
}

export default TitleContent