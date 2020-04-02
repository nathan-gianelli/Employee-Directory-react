import React, {Component} from "react";
import API from "../utils/API";
import TableData from "./tabledata"


class Table extends Component {
    state = {
        employees: []
    }
  
    componentDidMount() {
        this.getRandoms(25)
    }

    getRandoms = (query) => {
        API.search(query)
        .then(({data}) => this.setState({employees: data.results}))
    }

    render() {
        return (
           <div className = "table"> 
             <TableData people = {this.state.employees}/>
           </div> 
        )
    }
}

export default Table