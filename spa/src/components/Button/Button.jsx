import './styles.scss'

export const Button= (props) => {
    return (
        <div className="button-wrapper">
            <button type="button" className="button">{props.text}</button>
        </div>
    );
};