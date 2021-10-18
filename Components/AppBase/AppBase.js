
import Header from "../Header/Header"

const AppBase = (props) =>{
    return(
        <main className='min-h-screen flex flex-col' style={{backgroundColor:'#e5e5e5'}}>
            <Header/>
            {props.children}
        </main>
    )
}

export default AppBase