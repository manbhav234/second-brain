import LoginButton from "../main/LoginButton"

export default function LandingPage(){
    return (
        <div className="h-screen  bg-black flex flex-col justify-center items-center gap-8">
            <h1 className="relative z-10 inset-0 bg-gradient-to-r from-purple-400 to-blue-500 inline-block text-transparent bg-clip-text text-7xl font-extrabold">Second Brain</h1>
            <LoginButton/>
        </div>
    )   
}