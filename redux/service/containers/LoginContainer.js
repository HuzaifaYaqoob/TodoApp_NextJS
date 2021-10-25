

import LoginPage from "../../../Components/Auth/loginPage";
import { connect } from "react-redux";

// Actions 
import { UpdateUserData, UpdateAuthToken , LoginUser } from "../actions/userActions";



const mapStateToProps = state =>{
    return state
}

const mapDispatchToProps = dispatch =>({
    updateUserData : data => dispatch(UpdateUserData(data)),
    updateUserToken : data => dispatch(UpdateAuthToken(data)),
    loginUser : () => dispatch(LoginUser())
})

export default connect(mapStateToProps , mapDispatchToProps)(LoginPage)