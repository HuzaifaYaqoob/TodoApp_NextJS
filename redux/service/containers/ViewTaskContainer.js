

import ViewTask from "../../../Components/Task/ViewTask";
import { connect } from "react-redux";

import { removeTodoItem } from "../actions/todosActions";

const mapStateToProps = state =>{
    return state
}

const mapDispatchToProps = dispatch =>({
    removeTodoItemHanlder : id => dispatch(removeTodoItem(id))
})


export default connect(mapStateToProps , mapDispatchToProps )(ViewTask)