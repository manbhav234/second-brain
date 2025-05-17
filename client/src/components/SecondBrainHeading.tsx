interface SecondBrainHeadingProps {
    position: string
}

const SecondBrainHeading: React.FC<SecondBrainHeadingProps> = ({ position }) => {

    const fontSize: Record<string, string> = {
        landing: 'text-7xl',
        home: 'text-3xl mr-auto',
    };

    return (
        <h1 className={`bg-gradient-to-r from-purple-400 to-blue-500 inline-block text-transparent bg-clip-text ${fontSize[position]} font-extrabold`}>Second Brain</h1>
    )
}

export default SecondBrainHeading;