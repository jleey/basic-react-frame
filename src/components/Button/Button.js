
const Button =(props)=>{
    return (
        <a href={props.uri} className={'btn '+ props.classes}>
        {props.title}
        </a>
    )
}

export default Button;