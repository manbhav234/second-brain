import SideTree from "../TreeExplorer/SideTree"
import TopBar from "../TopBar"

export default function Dashboard() {
    return (
        <div className="h-screen w-screen bg-black/80">
            <TopBar/>
            <div className="w-1/6 h-[92%] border-1 border-white/20">
                <SideTree/>
            </div>
            
        </div>
    )
}