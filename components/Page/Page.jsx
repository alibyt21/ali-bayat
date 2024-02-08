export default function Page({ children, className, pageNumber, isInnerPage = true }) {

    return (
        <div className="relative flex justify-center items-center lg:p-5 lg:w-[990px] lg:max-w-[990px] lg:max-h-[1404px] lg:h-[1404px] lg:border border-solid border-gray-300 shadow-sm rounded m-auto">
            <div className="lg:h-[1360px] w-full">
                {children}
            </div>
        </div>
    )
}