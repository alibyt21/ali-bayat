import Page from "@/components/Page";
import Mainbar from "@/components/Mainbar/Mainbar";
import Sidebar from "@/components/Sidebar";




export default function page() {

    return (
        <main className="p-6 lg:p-24" id="app">
            <Page>
                <div className="flex flex-col-reverse lg:flex-row gap-5">
                    <Mainbar />
                    <Sidebar />
                </div>
            </Page>
            {/* <div className="flex w-full justify-center items-center mt-6">
                <a
                    href="/alibayat-en.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Download PDF
                </a>
            </div> */}
        </main>

    );
}
