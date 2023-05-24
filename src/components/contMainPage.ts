import { connect } from "react-redux"
import MainPage from "./mainPage"
import IVacation from "../objects/vacation";

const mapStateToProps = (state : any) => ( {
    vacs:(state.vacation_reducer as IVacation[])
}
)

const mapDispatchToProps = (dispatch : any) => ({
    dispatch: dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);