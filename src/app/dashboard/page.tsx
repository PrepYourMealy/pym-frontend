import {DashboardNav} from "~/components/feature-common/dashboard-nav";
import {DashboardContent} from "~/components/feature-common/dashboard-content";

export default async function DashboardHome() {
    return <>
        <DashboardNav title="Home">
        </DashboardNav>
        <DashboardContent>
            <>
               <div>Hallo Welt</div>
            </>
        </DashboardContent>

    </>;
}
