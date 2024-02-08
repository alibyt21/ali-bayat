import Page from "@/components/Page";
import Mainbar from "@/components/Mainbar/Mainbar";
import Sidebar from "@/components/Sidebar";


export default function Home() {
    return (
        <main className="p-6 lg:p-24">
            <Page>
                <div className="flex flex-col-reverse lg:flex-row gap-5">
                    <Mainbar />
                    <Sidebar />
                </div>
            </Page>
        </main>
    );
}
