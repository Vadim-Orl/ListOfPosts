
type ButtonProps = {
    children: string,
    id: string
}


export function Button({children, ...props}: ButtonProps) {
    return (
        <button {...props}>{children}</button>
    )
}