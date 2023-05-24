import { connect } from "react-redux"
import IVacation from "../objects/vacation"
import VacationCatalog from "./VacationCatalog"

const mapStateToProps = (state : any) => (
{
    vacations: LikedsFilter(state)
}
)

const mapDispatchToProps = (dispatch : any) => ( {
    dispatch: dispatch
})


export default connect(mapStateToProps, mapDispatchToProps)(VacationCatalog)

function LikedsFilter(state : any)
{
return (state.vacation_reducer as IVacation[]).filter(el => el.isLiked)
}