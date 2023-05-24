import { connect } from "react-redux";
import IVacation from "../objects/vacation";
import VacationCatalog from "./VacationCatalog";
import { IActionFilter } from "../redux/actionsFilter";

const mapStateToProps = (state : any) => (
    {
        vacations: doFilter(state)
    }
)

const mapDispatchToProps =(dispatch:any)=>({
    dispatch:dispatch
})


export default connect(mapStateToProps,mapDispatchToProps)(VacationCatalog)

function doFilter(state:any):IVacation[]{
const vacations:IVacation[] = (state.vacation_reducer as IVacation[]).filter(item=>('cityFilter' === (state.filter_reducer as IActionFilter)?.filterType && item.city === (state.filter_reducer as IActionFilter).filter)
                                                                       ||('workDayFilter' === (state.filter_reducer as IActionFilter)?.filterType && item.grafic === (state.filter_reducer as IActionFilter).filter) 
                                                                       ||('payFilter' === (state.filter_reducer as IActionFilter)?.filterType && item.loud === (state.filter_reducer as IActionFilter).filter)
                                                                       ||('expFilter' === (state.filter_reducer as IActionFilter)?.filterType && item.exp === (state.filter_reducer as IActionFilter).filter)
                                                                       ||('priceFilter' === (state.filter_reducer as IActionFilter)?.filterType && item.workZP === (state.filter_reducer as IActionFilter).filter)
                                                                        ) as IVacation[];
return vacations;
}