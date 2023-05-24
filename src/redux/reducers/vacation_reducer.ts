import { stat } from "fs";
import IVacation from "../../objects/vacation";
import IAction from "../actions/actions";
import { IVac_action } from "../actions/vac_actions";

const vacation_reducer = (state:IVacation[] = [], action:IVac_action)=>{
    let obj;
    switch(action.type){
        case 'addVacation': return  [...state, action.vacation];    
        case 'deleteVacation': return state.filter(e => e.name !== action.vacation.name);
        case 'setCurrent':{
            return state.map(item => {
                obj = item;
                return{...obj, isEnter: item.id == action.vacation.id}
            })
        }
        default:return state;
    }
}

export default vacation_reducer