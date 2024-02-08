import Page from "@/components/Page";
import Mainbar from "@/components/Mainbar/Mainbar";
import Sidebar from "@/components/Sidebar";


export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Page>
                <div className="flex gap-5">
                    <Mainbar />
                    <Sidebar />
                </div>
            </Page>
        </main>
    );
}
