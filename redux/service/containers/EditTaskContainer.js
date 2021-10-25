
import EditTask from "../../../Components/Task/EditTask";
import { connect } from "react-redux";

import { startLoading } from '../actions/LoadingActions';

const mapStateToProps = state =>{
    return state
}

const mapDispatchToProps = dispatch =>({
    startLoading :() => dispatch(startLoading())
})

export default connect(mapStateToProps , mapDispatchToProps)(EditTask)