export const Select = (props) => {
    return (
        <select className="form-select">
            {props.options.map((item) => {
                return (<option value={item.id}>{item.name}</option>)
            })}
        </select>
    )
}