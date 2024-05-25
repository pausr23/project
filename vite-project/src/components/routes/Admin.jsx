import { Sidebar } from "../ui/Sidebar.jsx";
import { AdminContainer} from "../ui/AdminContainer.jsx";

export function Admin() {

    return (
     
        <div className="xl:grid-cols-[10%,85%] mx-auto flex lg:grid md:gap-10">
                <Sidebar />
                <AdminContainer />
        </div>

    )
}