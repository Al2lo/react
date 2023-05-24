import { useState } from "react";
import IFilter from "../objects/filter";
import { setFilter as addFilter } from "../redux/actionsFilter";
import { connect } from "react-redux";
import '../styles/styleForHreader.css';


const Filter = (filterItem:IFilter)=>{
    const [selectedFilter,setFilter] = useState(filterItem.items.at(0));
    const [showItemFilter,setShowItems] = useState(false);

    const key = Math.random() % 2_000_000_000;
    let i = 0;

    const onVariable = (filter : string, type:string) => {
        alert(filter)   
        setFilter(filter);
        filterItem.dispatch(addFilter(filter,type));
    }
    return(
        <section className="filter" onClick={ ()=> setShowItems(!showItemFilter)}>
            <img src={filterItem.img} />
            <span className="textFilterItem">
                {selectedFilter}
            </span>

            {showItemFilter &&
            <div className="filter">
                {
                filterItem.items.map(el=>
                <div className="items">
                <input 
                type="radio"
                id={key.toString()}
                name = {`item${key}`}
                onClick ={()=>onVariable(el,filterItem.type)}/>
                <label
                htmlFor={ `variable${key + i++}` }>
                    { el }
                </label>
                </div>)
            }
            </div>
            }
        </section>
    );


}


export default connect()(Filter)

