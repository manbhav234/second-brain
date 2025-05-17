import GoogleIcon from "@/assets/google-logo.png"

interface LoginButtonProps {
    variant: string
}

const LoginButton: React.FC<LoginButtonProps> = ({ variant }) => {


    const handleLogin = async () => {
        window.location.href = "http://localhost:3000/api/v1/auth/google"
    }

    const variants: Record<string, string> = {
        landing: "bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 border border-white/20 group font-bold rounded-xl text-white text-2xl p-4 px-8 flex justify-center items-center gap-2 cursor-pointer",
        home: "hover:bg-white/20 transition-all duration-300 border border-white/20 group font-bold rounded-xl text-white text-xl py-2 px-8 flex justify-center items-center gap-2 cursor-pointer ml-auto"
    }

    return (
        <div>
         <button 
            onClick={handleLogin}
            className={variants[variant]}
        >
            <img src={GoogleIcon} alt="Google Icon" width={30} className="group-hover:scale-110 transition-transform duration-300"/>
            Sign in with Google
        </button>
        </div>

    )
}

export default LoginButton;