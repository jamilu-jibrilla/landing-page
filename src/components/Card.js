const Card = ({imgSrc, paragraph, heading}) => {
    return (
        <div className="card w-[85%] md:w-[250px] text-center rounded-lg px-6 py-9 mx-7 bg-white  mb-12 h-[270px] shadow-md ">
            <img className="mb-6 mx-auto" src={imgSrc} width={'60px'} alt="search icon"/>
            <div>
                <h3 className="font-bold mb-2">{heading}</h3>
                <p className="text-[#7D7987] text-sm">
                    {paragraph}
                </p>
            </div>
        </div>
    )
}

export default Card