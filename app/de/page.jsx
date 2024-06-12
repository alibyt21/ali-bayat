import Mainbar from "@/components/Mainbar/Mainbar";
import Page from "@/components/Page";
import ResumeHeading from "@/components/ResumeHeading";
import ResumeRow from "@/components/ResumeRow";
import SideTitle from "@/components/SideTitle";
import Sidebar from "@/components/Sidebar";
import Skill from "@/components/Skill";

export default function page() {
  return (
    <main className="p-6 lg:p-24">
      <Page>
        <div className="flex flex-col-reverse lg:flex-row gap-5">
          <div className="flex flex-col gap-6 w-full">
            {/* Experience */}
            <div className="flex flex-col gap-4">
              <ResumeHeading title="Berufserfahrung">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
              </ResumeHeading>
              <div className="flex gap-4">
                <div className="h-auto w-[5px] bg-blue-400"></div>
                <div className="w-full flex flex-col gap-4">
                  <ResumeRow title="Full-Stack-Entwickler" time="2023 - laufend" location="Behtarinfa Co, Tehran, Iran" url="behtarinfa.ir" detail={["Entwurf und Programmierung einer Plattform zum Vergleichen von Produkten und Dienstleistungen auf Basis von Bewertungen (Backend: NodeJS-MySQL, Frontend: React-Next.js | im gange)"]} />
                  <ResumeRow title="Frontend-Entwickler" time="2023 - laufend" location="Iranian Information Technology Co, Tehran, Iran" url="iritco.ir/en" detail={["Mitgliedschaft in einem 13-köpfigen Programmiererteam", "Frontend-Entwickler auf mittlerem Level", "Neugestaltung der UI/UX und Migration einer alten Python (Django)-Anwendung auf React-RESTful API"]} />
                  <ResumeRow title="Full-Stack-Entwickler" time="2021 - 2023" location="University of Tehran, Tehran, Iran" url="ut.ac.ir/en" detail={["Lernen von JavaScript, React, Next.js, Node.js, Express und Tailwind", "Entwurf und Programmierung einer Plattform zur Erstellung einfacher Websites basierend auf Instagram-Seiten (Backend: PHP-MySQL, Frontend: React-Next.js | nicht gestartet)", "Erstellung mehrerer Wordpress-Websites", "Wartung von alten Websites"]} />
                  <ResumeRow title="Gründer - CEO" time="2019 - 2021" location="Degardc Co, Tehran, Iran" url="degardc.com" detail={["Lernen von PHP, Git und Bootstrap", "Entwurf und Programmierung einer Social-Media-Marketing-Anwendung (Backend: PHP-MySQL, Frontend: jQuery-HTML-CSS - Beispiel: migratbot.degardc.com)", "Anzeigen-Texter", "Entwicklung von Wordpress-Websites für unsere Kunden (degardc.com/webdesign-portfolio)", "Erstellung mehrerer Wordpress-Plugins (Videoplayer, Quiz-Builder, SERP-Crawler, ...)", "Führung eines vierköpfigen Teams"]} />
                  <ResumeRow title="Gründer - CEO" time="2017 - 2019" location="Charkhdande Co, Tehran, Iran" url="charkhdande.com" detail={["Verwaltung und Kommunikation mit Kunden", "Lernen des Website-Designs mit WordPress", "Lernen von HTML und CSS", "Lernen von SEO-Algorithmen und Google-Tools", "Lernen von E-Mail-Marketing"]} />
                </div>
              </div>
            </div>
            {/* Education */}
            <div className="flex flex-col gap-4">
              <ResumeHeading title="Schul und Ausbildungen">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </ResumeHeading>
              <div className="flex gap-4">
                <div className="h-auto w-[5px] bg-blue-400"></div>
                <div className="w-full flex flex-col gap-4">
                  <ResumeRow title="Master-Abschluss - Informationstechnologie" time="2018 - 2020" location="Tarbiat Modares University, Tehran, Iran" isWork={false} url="modares.ac.ir/en" detail={[]} />
                  {/* <ResumeRow title="Bachelor - Bergbauingenieurwesen" time="2012 - 2017" location="University of Tehran, Tehran, Iran" isWork={false} url="ut.ac.ir/en" detail={[]} />
                  <ResumeRow title="Abitur - Mathematik" time="2008 - 2012" location="Mollasadra Schul, Alborz, Iran" isWork={false} detail={[]} /> */}
                </div>
              </div>
            </div>
            <div className="flex w-full gap-6">
              {/* Languages */}
              <div className="w-full flex flex-col gap-4">
                <ResumeHeading title="Sprachen">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                  </svg>
                </ResumeHeading>
                <div className="flex gap-3">
                  <div className="h-auto w-[5px] bg-blue-400"></div>
                  <div className="w-full flex flex-col gap-2">
                    <ResumeRow title="Persisch" time="" location="Native" detail={[]} isBullet={false} />
                    <ResumeRow title="Englisch" time="" location="C1" detail={[]} isBullet={false} />
                    <ResumeRow title="Französisch" time="" location="A2" detail={[]} isBullet={false} />
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-4">
                <ResumeHeading title="Hobbys">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                  </svg>
                </ResumeHeading>
                <div className="flex gap-3">
                  <div className="h-auto w-[5px] bg-blue-400"></div>
                  <div className="w-full flex flex-col gap-2">
                    <ResumeRow title="Wandern" time="" location="" detail={[]} isBullet={false} />
                    <ResumeRow title="Lesen" time="" location="" detail={[]} isBullet={false} />
                    <ResumeRow title="Gitarre spielen" time="" location="" detail={[]} isBullet={false} />
                    <ResumeRow title="Filme schauen" time="" location="" detail={[]} isBullet={false} />
                    <ResumeRow title="Zelten" time="" location="" detail={[]} isBullet={false} />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                Nr. 98, Kamali Straße, Teheran, Iran
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
            <SideTitle title="Programmierungsfähigkeiten" />
            <div className="flex flex-col gap-1">
              <Skill title="HTML" score={100} />
              <Skill title="CSS" score={95} />
              <Skill title="Tailwind" score={95} />
              <Skill title="Bootstrap" score={100} />
              <Skill title="Javascript" score={95} />
              <Skill title="React" score={85} />
              <Skill title="Nodejs" score={75} />
              <Skill title="Express" score={80} />
              <Skill title="Nextjs" score={70} />
              <Skill title="PHP" score={90} />
              <Skill title="Wordpress" score={95} />
              <Skill title="SQL" score={60} />
              <Skill title="Git" score={70} />
              <Skill title="Linux" score={50} />
              <Skill title="Python" score={45} />
              <Skill title="R" score={40} />
              {/* <Skill title="C++" score={40} /> */}
            </div>
            <div className="w-full h-[2px] bg-orange-500"></div>

            <SideTitle title="Fähigkeiten" />
            <div>
              <span className="font-semibold">Softwarearchitektur:</span> OOP, SOLID, MVC, Microservice, REST API, ERD
            </div>
            <div>
              <span className="font-semibold">Software:</span> Ms office, Photoshop, Illustrator, Figma, WHM, WHMCS
            </div>
            <div>
              <span className="font-semibold">Marketing:</span> SEO Algorithmen, Google Ads, Google Search Console, Goolge Analytics
            </div>
            <div className="w-full h-[2px] bg-orange-500"></div>
            <SideTitle title="Persönlichkeit" />
            <div className="flex gap-1 flex-wrap font-semibold">
              <span className="text-white bg-blue-500 px-2 rounded-md text-sm">Teamarbeit</span>
              <span className="text-white bg-blue-500 px-2 rounded-md text-sm">Zuverlässig</span>
              <span className="text-white bg-blue-500 px-2 rounded-md text-sm">Kreativ</span>
              <span className="text-white bg-blue-500 px-2 rounded-md text-sm">Ehrgeizig</span>
              <span className="text-white bg-blue-500 px-2 rounded-md text-sm">Geduld</span>
              <span className="text-white bg-blue-500 px-2 rounded-md text-sm">Flexibel</span>
              <span className="text-white bg-blue-500 px-2 rounded-md text-sm">Abenteurer</span>
            </div>
          </div>
        </div>
      </Page>
      <div className="flex w-full justify-center items-center mt-6">
        <a
          href="/alibayat-de.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          PDF Herunterladen
        </a>
      </div>
    </main>
  )
}