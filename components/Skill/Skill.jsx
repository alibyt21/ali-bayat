export default function Skill({ title, score }) {
    return (
        <div className="flex gap-5 justify-center items-center">
            <div className="w-[120px] font-semibold">{title}</div>
            <div className="bg-gray-300 w-full h-[10px] rounded-md">
                <div
                    className="bg-blue-400 h-[10px] rounded-md"
                    style={{width:`${score}%`}}
                ></div>
            </div>
        </div>
    )
}