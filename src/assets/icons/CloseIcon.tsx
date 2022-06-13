type PropsType = {
    color: string
}

export const CloseIcon = ({color}: PropsType) => {
    return (
        <svg
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 48 48"
        >
            <path
                d="M39.486 6.979a1.5 1.5 0 00-1.047.46L24 21.88 9.56 7.439a1.5 1.5 0 00-1.076-.455A1.5 1.5 0 007.44 9.561L21.88 24 7.439 38.44a1.5 1.5 0 102.122 2.12L24 26.122l14.44 14.44a1.5 1.5 0 102.12-2.122L26.122 24l14.44-14.44a1.5 1.5 0 00-1.075-2.581z"></path>
        </svg>
    );
}
