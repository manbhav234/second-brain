import GoogleIcon from "@/assets/google-logo.png"

export default function LoginButton(){


    const handleLogin = async () => {
        window.location.href = "http://localhost:3000/api/v1/auth/google"
    }

    return (
        <div>
         <button 
            onClick={handleLogin}
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 border border-white/20 group font-bold rounded-xl text-white text-2xl p-4 px-8 flex justify-center items-center gap-2 cursor-pointer"
        >
            <img src={GoogleIcon} alt="Google Icon" width={30} className="group-hover:scale-110 transition-transform duration-300"/>
            Sign in with Google
        </button>
        </div>

    )
}