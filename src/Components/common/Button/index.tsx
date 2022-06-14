import {ReactNode} from "react";

type PropsType = {
    children: string | ReactNode;
    onClick?: () => void;
    className: any;
    isDisabled?:boolean;
}

export const Button = ({children, onClick, className, isDisabled}: PropsType) => {
    return (
        <button onClick={onClick} className={className} disabled={isDisabled}>{children}</button>
    )
}
