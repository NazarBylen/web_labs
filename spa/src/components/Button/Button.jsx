import './styles.scss'

export const Button= (props) => {
    return (
        <button type="button" className="btn btn-primary red">{props.text}</button>
    );
};