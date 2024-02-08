export default function Page({ children, className, pageNumber, isInnerPage = true }) {

    return (
        <div className="relative flex justify-center items-center p-5 w-[990px] max-w-[990px] max-h-[1404px] h-[1404px] border border-solid border-gray-300 shadow-sm rounded m-auto">
            <div className="h-[1360px] w-full">
                {children}
            </div>
        </div>
    )
}