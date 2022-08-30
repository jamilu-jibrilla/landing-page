import rightArrow from "../icons/rightArrow.png"

const Article = ({ imgSrc }) => {
    return (
        <div class="w-[70%] md:w-[250px] h-[380px] bg-white mx-6 mb-10 rounded-lg overflow-hidden shadow-lg">
            <img class="w-full" src={imgSrc} alt="Sunset in the mountains" />
            <div class="px-6 py-4 text-start">
                <div class="font-bold text-[1.05rem] leading-6 mb-2">Disease detection, check up in the laboratory</div>
                <p class="text-[#7D7987] text-sm">
                    In this case, the role of the health laboratory is very important to do
                    a disease detection...
                </p>
                <span className="mx-auto m-3 text-sm text-[#4089ED] flex items-center">Read more <img className="ml-3 w-4" src={rightArrow} alt="arrow pointing down" /></span>
            </div>

        </div>
    )
}
export default Article