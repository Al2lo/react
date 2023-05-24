import IFilterType from "../../objects/IFilter";
import IFilter from "../../objects/filter";
import IVacation from "../../objects/vacation";
import IAction from "./actions";

export interface IFilter_action extends IAction {
    filter:IFilterType;
}

export function addFilter (filter:IFilterType) : IFilter_action {
return {type:'addFilter', filter:filter} 
}

export function removeFilter (filter:IFilterType) : IFilter_action {
    return {type:'removeFilters', filter:filter} 
    }