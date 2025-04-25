import SideTitle from "@/components/SideTitle";
import Skill from "@/components/Skill";

export default function Sidebar() {
    return (
        <div className="lg:w-[400px] w-full flex flex-col gap-2 bg-gray-100 rounded-2xl h-full p-4">
            <div>
                <img src="/pic.jpg" className="flex justify-center m-auto rounded-lg w-[200px]" alt="" />
            </div>
            <SideTitle title="Ali Bayat" />
            <div className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                </svg>
                <span>
                    09-01-1995
                </span>
            </div>
            <div className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span>
                    Tehran, Iran
                </span>
            </div>
            <div className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <span>
                    +989356126747
                </span>
            </div>
            <div className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                </svg>
                <span>
                    alibyt21@gmail.com
                </span>
            </div>
            <div className="flex gap-2">
                <img src="github-mark.png" className="w-[24px]" />
                <a href="https://github.com/alibyt21">
                    github.com/alibyt21
                </a>
            </div>
            <div className="flex gap-2">
                <img src="linkedin.png" className="w-[24px]" />
                <a href="https://www.linkedin.com/in/alibyt21/">
                    linkedin.com/in/alibyt21/
                </a>
            </div>
            <div className="w-full h-[2px] bg-orange-500"></div>
            {/* CAPABILITY */}
            <SideTitle title="Programming Capability" />
            <div className="flex flex-col gap-1">
                <Skill title="HTML" score={100} />
                <Skill title="CSS" score={95} />
                <Skill title="Tailwind" score={95} />
                <Skill title="Bootstrap" score={100} />
                <Skill title="Javascript" score={95} />
                <Skill title="Typescript" score={74} />
                <Skill title="Nestjs" score={60} />
                <Skill title="Docker" score={70} />
                <Skill title="React" score={92} />
                <Skill title="Nodejs" score={75} />
                <Skill title="Express" score={89} />
                <Skill title="Nextjs" score={85} />
                <Skill title="PHP" score={90} />
                <Skill title="Wordpress" score={95} />
                <Skill title="SQL" score={68} />
                <Skill title="Git" score={84} />
                <Skill title="Linux" score={40} />
                <Skill title="Python" score={45} />
                <Skill title="R" score={40} />
                {/* <Skill title="C++" score={40} /> */}
            </div>
            <div className="w-full h-[2px] bg-orange-500"></div>

            <SideTitle title="Other Capability" />
            <div>
                <span className="font-semibold">Software Architecture:</span> OOP, SOLID, MVC, Microservice, REST API, ERD
            </div>
            <div>
                <span className="font-semibold">Software:</span> Ms office, Photoshop, Illustrator, Figma, WHM, WHMCS
            </div>
            <div>
                <span className="font-semibold">Marketing:</span> SEO Algorithms, Google Ads, Google Search Console, Goolge Analytics
            </div>
            <div className="w-full h-[2px] bg-orange-500"></div>
            <SideTitle title="Personality" />
            <div className="flex gap-1 flex-wrap font-semibold">
                <span className="text-white bg-blue-500 px-2 rounded-md">Teamwork</span>
                <span className="text-white bg-blue-500 px-2 rounded-md">Reliable</span>
                <span className="text-white bg-blue-500 px-2 rounded-md">Creative</span>
                <span className="text-white bg-blue-500 px-2 rounded-md">Ambitious</span>
                <span className="text-white bg-blue-500 px-2 rounded-md">Patience</span>
                <span className="text-white bg-blue-500 px-2 rounded-md">Flexible</span>
                <span className="text-white bg-blue-500 px-2 rounded-md">Passionate</span>
                <span className="text-white bg-blue-500 px-2 rounded-md">Adventurer</span>
            </div>
        </div>
    )
}