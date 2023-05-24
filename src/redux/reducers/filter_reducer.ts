import { stat } from "fs";
import IVacation from "../../objects/vacation";
import IAction from "../actions/actions";
import { IVac_action } from "../actions/vac_actions";
import { IFilter_action } from "../actions/filter_actions";
import IFilter from "../../objects/filter";
import IFilterType from "../../objects/IFilter";
import { IActionFilter } from "../actionsFilter";

const filter_reducer = (state: IFilterType = {}, action:IActionFilter)=>{

    switch(action.type){
        case 'setFilter': 
        alert("action" +" "+ action.filter +"" + action.filterType)
        return action;    
        case 'clearFilter': return {};
        
        default:return state;
    }
}

export default filter_reducer