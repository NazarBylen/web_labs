export const Select = (props) => {
    console.log(props);
    return (
        <select className="form-select" onChange={props.handleChange}>
            {props.options.map((item) => {
                return (<option selected={item.name===props.selected} key={item.id} value={item.name}>{item.name}</option>)
            })}
        </select>
    )
}