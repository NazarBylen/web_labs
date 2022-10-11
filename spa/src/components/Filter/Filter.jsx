import {Select} from "../Select";
import {Button} from "../Button";

export const Filter = (props) => {
    return (
        <div className="row">
            <div className="col">
                <Select options={
                    [
                        { id:1, name:'усі', },
                        { id:2, name:'м`ясо', },
                        { id:3, name:'овочі', },
                    ]
                } handleChange={(e) => props.handleSelectFilter(e, "type")}/>
                <label>тип</label>
            </div>
            <div className="col">
                <Select options={
                    [
                        { id:1, name:'усі', },
                        { id:2, name:'450', },
                        { id:3, name:'460', },
                        { id:4, name:'500', },
                    ]
                } handleChange={(e) => props.handleSelectFilter(e, "weight")}/>
                <label>вага</label>
            </div>
            <div className="col">
                <Button text="apply" type="apply-button" handleClick={props.handleFilter} />
            </div>
        </div>
    )
}