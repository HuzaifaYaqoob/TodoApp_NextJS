

import Header from "../../../Components/Header/Header";
import { connect } from "react-redux";


// Actions 
import { LogoutUser } from "../actions/userActions";



const mapStateToProps = state =>{
    return state
}

const mapDispatchToProps = dispatch =>({
    logoutUser : () => dispatch(LogoutUser())
})


export default connect(mapStateToProps, mapDispatchToProps )(Header)