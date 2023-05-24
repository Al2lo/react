import IFilterType from "../objects/IFilter";
import IAction from "./actions/actions";

export interface IActionFilter extends IAction{
    filter?:string;
    filterType?:string;
}

export function setFilter(filter:string,type:string):IActionFilter{
    alert("setFilter");
    return{
        type:"setFilter",
        filter:filter,
        filterType:type
    }
}

export function clearFilter():IAction
{
    return{
        type:"clearFilter"
    }
}