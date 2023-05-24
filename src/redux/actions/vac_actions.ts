import IVacation from "../../objects/vacation";
import IAction from "./actions";

export interface IVac_action extends IAction {
    vacation:IVacation;
}

export function addVacation (vacation:IVacation) : IVac_action {
return {type:'addVacation', vacation:vacation} 
}

export function deleteVacation(vacation:IVacation):IVac_action{
    return{type:'deleteVacation', vacation:vacation}
}

export function setCurrent(vacation : IVacation) : IVac_action {
    return {
        type: "setCurrent",
        vacation: vacation
    }
}

