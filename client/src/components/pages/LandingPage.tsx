import { useNavigate } from "react-router"
import LoginButton from "../LoginButton"
import SecondBrainHeading from "../SecondBrainHeading";

export default function LandingPage(){
    const navigate = useNavigate();
    return (
        <div className="h-screen  bg-black flex flex-col justify-center items-center gap-8">
            <SecondBrainHeading position="landing"/>
            <div className="flex justify-center items-center gap-4">
                <LoginButton variant="landing"/>
                <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 border border-white/20 group font-bold rounded-xl text-white text-2xl p-4 px-8 flex justify-center items-center gap-2 cursor-pointer" onClick={()=>{navigate('/home')}}>Start Taking Notes</button>
            </div>

        </div>
    )   
}