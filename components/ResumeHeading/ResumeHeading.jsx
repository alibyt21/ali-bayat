export default function ResumeHeading({ title, children }) {
    return (
        <div className="flex justify-start items-center relative w-full h-[40px] bg-blue-400 rounded-md mb-2">
            <span className="flex text-white font-semibold p-4 text-lg">{title}</span>
            <div className="absolute top-[10px] right-[10px] bg-white shadow-lg rounded-md p-1 text-blue-500 ">
                {children}
            </div>
        </div>
    )
}