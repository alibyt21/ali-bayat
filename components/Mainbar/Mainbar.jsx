import ResumeHeading from "../ResumeHeading";
import ResumeRow from "../ResumeRow";

export default function Mainbar() {
    return (
        <div className="flex flex-col gap-6 w-full">
            {/* Experience */}
            <div className="flex flex-col gap-4">
                <ResumeHeading title="Experience">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                    </svg>
                </ResumeHeading>
                <div className="flex gap-4">
                    <div className="h-auto w-[5px] bg-blue-400"></div>
                    <div className="w-full flex flex-col gap-4">
                        <ResumeRow title="Back-end Developer" time="2024 - now" location="Behtino Co, Tehran, Iran (self employed)" url="localhost:3000" detail={["Leading a 2-member team", "Designing a platform for rating businesses based on customer reviews (Backend: Node.js, Express, Redis, PostgreSQL, RabbitMQ – Frontend: Next.js, Tailwind CSS, OpenLayers Map)"]} />
                        <ResumeRow title="Front-end Developer" time="2022 - 2024" location="Iranian Information Technology Co, Tehran, Iran" url="iritco.ir/en" detail={["Led a 4-member frontend team", "Redesigned the UI/UX and migrated a legacy Python (Django) application (Master Data Management) to a modern React SPA", "Designed multiple SSO login pages for national clients such as saorg.ir(سازمان ملی امور دانشجویان), tums.ac.ir(دانشگاه علوم پزشکی تهران), qmb.ir(بانک قرض الحسنه مهر ایران),...", "Served as frontend team lead for the implementation of codesehat.ir (سامانه ملی استعلام کد صحت مدارک تحصیلی)"]} />
                        <ResumeRow title="Full-stack Developer" time="2019 - 2022" location="University of Tehran, Tehran, Iran" url="ut.ac.ir/en" detail={["Self-learning JavaScript, React, Next.js, Node.js, Express, and Tailwind CSS", "Designed and developed a platform for creating simple websites based on Instagram pages (Backend: PHP, MySQL – Frontend: React, Next.js | Unlaunched)", "Designed and developed a full-featured job assessment tool with PDF generation (Backend: Node.js, MySQL – Frontend: React | panel.jobonet.ir)", "Built multiple websites using WordPress", "Maintained and updated legacy websites"]} />
                        <ResumeRow title="Founder - CEO" time="2017 - 2019" location="Degardc Co, Tehran, Iran" url="degardc.com" detail={["Self-learning PHP, Git, and Bootstrap", "Created multiple SEO training courses (degardc.com/academy/seo-fundamental)", "Designed and developed a social media marketing application (Backend: PHP, MySQL – Frontend: jQuery, HTML, CSS | Example: migratbot.degardc.com)", "Wrote ad copy for various digital campaigns", "Developed WordPress websites for clients (degardc.com/webdesign-portfolio)", "Created multiple custom WordPress plugins (video player, quiz builder, SERP crawler, etc.)", "Led a 4-member team"]} />
                        <ResumeRow title="Founder - CEO" time="2015 - 2017" location="Charkhdande Co, Tehran, Iran" url="charkhdande.com" detail={["Managed communication with clients and consumers", "Learned website design using WordPress", "Gained foundational knowledge of HTML and CSS", "Studied SEO algorithms and Google tools (e.g. Search Console, Analytics)", "Learned the fundamentals of email marketing"]} />
                    </div>
                </div>
            </div>
            {/* Education */}
            <div className="flex flex-col gap-4">
                <ResumeHeading title="Education">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                </ResumeHeading>
                <div className="flex gap-4">
                    <div className="h-auto w-[5px] bg-blue-400"></div>
                    <div className="w-full flex flex-col gap-4">
                        <ResumeRow title="Master - Information Technology" time="2018 - 2020" location="Tarbiat Modares University, Tehran, Iran" isWork={false} url="modares.ac.ir/en" detail={[]} />
                        <ResumeRow title="Bachelor - Mining Engineering" time="2012 - 2017" location="University of Tehran, Tehran, Iran" isWork={false} url="ut.ac.ir/en" detail={[]} />
                        {/* <ResumeRow title="High school diploma - Mathematics" time="2008 - 2012" location="Mollasadra School, Alborz, Iran" isWork={false} detail={[]} /> */}
                    </div>
                </div>
            </div>
            <div className="flex w-full gap-6">
                {/* Languages */}
                <div className="w-full flex flex-col gap-4">
                    <ResumeHeading title="Languages">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                        </svg>
                    </ResumeHeading>
                    <div className="flex gap-3">
                        <div className="h-auto w-[5px] bg-blue-400"></div>
                        <div className="w-full flex flex-col gap-2">
                            <ResumeRow title="Persian" time="" location="Native" detail={[]} isBullet={false} />
                            <ResumeRow title="English" time="" location="C1" detail={[]} isBullet={false} />
                            {/* <ResumeRow title="French" time="" location="A2" detail={[]} isBullet={false} /> */}
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-4">
                    <ResumeHeading title="Hobbies">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                        </svg>
                    </ResumeHeading>
                    <div className="flex gap-3">
                        <div className="h-auto w-[5px] bg-blue-400"></div>
                        <div className="w-full flex flex-col gap-2">
                            <ResumeRow title="Learning" time="" location="" detail={[]} isBullet={false} />
                            <ResumeRow title="Exploring nature" time="" location="" detail={[]} isBullet={false} />
                            {/* <ResumeRow title="Reading books" time="" location="" detail={[]} isBullet={false} /> */}
                            {/* <ResumeRow title="Playing guitar" time="" location="" detail={[]} isBullet={false} /> */}
                            <ResumeRow title="Exercise" time="" location="" detail={[]} isBullet={false} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}