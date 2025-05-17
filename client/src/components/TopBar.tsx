import LoginButton from "./LoginButton";
import SecondBrainHeading from "./SecondBrainHeading";

export default function TopBar() {
    return (
        <div className="h-[8%] w-full border-b-1 border-white/20 rounded-xl flex items-center p-4">
            <SecondBrainHeading position="home"/>
            <LoginButton variant="home"/>
        </div>
    )
}