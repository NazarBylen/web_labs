import './styles.scss'

export const Button= (props) => {
    return (
        <button onClick={props.handleClick} type="button" className="btn btn-primary red">{props.text}</button>
    );
};