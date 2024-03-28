import './Button.css'

type ButtonProps = {
    children: string,
    id?: string
    onClick?: ()=> void;
}


export function Button({children, ...props}: ButtonProps) {
    return (
        <button {...props} type="button">{children}</button>
    )
}
