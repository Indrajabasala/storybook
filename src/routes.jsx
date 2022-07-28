import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Learn from "./learn"

const LearnRoutes=()=>{
    return(
        <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Learn} />
         
          </Switch>
        </Router>
      </div>
    )
}
export default LearnRoutes