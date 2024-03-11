import "./App.css";
import AdminProjects from "./adminProjects";
import ShowProjects from "./ShowProjects";
import {BrowserRouter,Switch,Route} from "react-router-dom"

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AdminProjects} />
          <Route path="/showProjects" component={ShowProjects} />
        </Switch>
        {/* <AdminProjects /> */}
      </BrowserRouter>
    </div>
  )
}

export default App;
