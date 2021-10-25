
import HomePage from "../../../Components/Home/HomePage";
import { connect } from "react-redux";

// Actions 
import {UpdateTodos} from '../actions/todosActions'
import { LoginUser } from '../actions/userActions'


const mapStateToProps = state =>({
    data : state
})

const mapDispatchToProps = dispatch =>({
    updateTodosHandler : data => dispatch(UpdateTodos(data)),
    LoginUserHandler : () => dispatch(LoginUser())
})


export default connect(mapStateToProps , mapDispatchToProps)(HomePage)