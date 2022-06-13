type PropsType = {
    children: string | React.ReactNode;
    onClick?: () => void;
    className: any;
}

export const Button = ({children, onClick, className}: PropsType) => {
    return (
        <button onClick={onClick} className={className}>{children}</button>
    )
}
