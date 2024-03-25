
type ButtonProps = {
    children: string,
    id?: string
    onclick?: () => void;
}


export function Button({children, ...props}: ButtonProps) {
    return (
        <button {...props}>{children}</button>
    )
}