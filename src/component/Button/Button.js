function Button(props) {
    return (
        <button onClick={props.onButtonClick}>Click me : {props.count}</button>
    )
}

export default Button;