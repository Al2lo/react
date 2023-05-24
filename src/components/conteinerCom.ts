import { connect } from "react-redux"
import InfoPage from "./infoPage"
import IVacation from "../objects/vacation"

const mapStateToProps = (state : any) => (
{
    vacation: test(state)
}
)

const mapDispatchToProps = (dispatch : any) => ( {
    dispatch: dispatch
})


export default connect(mapStateToProps, mapDispatchToProps)(InfoPage)

function test(state : any)
{
return (state.vacation_reducer as IVacation[]).filter(el => el.isEnter).at(0) || state.vacation_reducer.at(0)
}