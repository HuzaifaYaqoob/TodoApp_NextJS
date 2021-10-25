

import { connect } from "react-redux";
import AppBase from "../../../Components/AppBase/AppBase";


// actions 
import { UpdateAuthToken } from "../actions/userActions";
import { StopLoading } from "../actions/LoadingActions";
import { UpdateUserData } from "../actions/userActions";
import { LoginUser } from "../actions/userActions";

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = dispatch =>({
    updateUserToken : data => dispatch(UpdateAuthToken(data)),
    stopLoading : () => dispatch(StopLoading()),
    updateUserData : data => dispatch(UpdateUserData(data)),
    loginUser : () => dispatch(LoginUser())
})


export default connect(mapStateToProps , mapDispatchToProps)(AppBase)