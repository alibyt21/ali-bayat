export default function ResumeRow({
    title,
    time,
    location,
    detail = ["test1", "test2"],
    isBullet = true,
    url = null,
    isWork = true
}) {
    let detailJSX = detail.map(function (single) {
        return (<li>{single}</li>)
    })
    return (
        <div>
            <div className="flex gap-4 justify-between items-center font-bold text-blue-900">
                <div className="relative">
                    <span className="whitespace-nowrap">{title}</span>
                    {
                        isBullet
                            ?
                            <div className="bg-white border-2 border-solid border-blue-500 w-[25px] h-[25px] rounded-full absolute -left-[31px] top-[0px] flex justify-center items-center p-[3px]">
                                {
                                    isWork
                                        ?
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                        </svg>

                                }
                            </div>
                            :
                            null
                    }
                </div>
                <div className="w-full h-[1px] border border-dashed border-blue-200"></div>
                <span className="whitespace-nowrap">{time}</span>
            </div>
            {
                location
                    ?
                    <div className="px-2 flex items-center gap-4 text-orange-600 font-semibold ">
                        <span className="whitespace-nowrap">
                            {location}
                        </span>
                        <div className="w-full h-[1px] border border-dashed border-orange-200"></div>
                        <a href={`https://${url}`} className="whitespace-nowrap">{url}</a>
                    </div>
                    :
                    null
            }
            <div className="px-4">
                <ul>
                    {detailJSX}
                </ul>
            </div>
        </div>
    )
}