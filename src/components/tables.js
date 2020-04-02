import React, { Component } from "react";
import API from "../utils/API";
import TableData from "./tabledata"


class Table extends Component {
    state = {
        employees: [],
        search: ""
    }

    componentDidMount() {
        this.getRandoms(25)
    }

    getRandoms = (query) => {
        API.search(query)
            .then(({ data }) => this.setState({ employees: data.results }))
    }

    handleSort = (sort) => {
        switch (sort) {
            case "name":
                return this.setState({ employees: this.state.employees.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1) })
            case "phone":
                return this.setState({ employees: this.state.employees.sort((a, b) => (a.phone > b.phone) ? 1 : -1) })
            case "email":
                return this.setState({ employees: this.state.employees.sort((a, b) => (a.email > b.email) ? 1 : -1) })
            default:
                return this.setState({ employees: this.state.employees })
        }
    }
    handleInputChange = (event) => {
        this.setState({search: event.target.value, employee: this.state.employees.filter(employee => employee.name.first === this.state.search)})
    }

    handleSearch = (event) => {
        event.preventDefault();
        this.setState({ employees: this.state.employees.filter(employee => employee.name.first === this.state.search) });
        this.setState({ search: "" });
    }

    render() {
        return (
            <div className="table">
                <div>
                    <form className="formBox">
                        <label> 
                            Name:
                            <input type="text" name="name" onChange={this.handleInputChange} />
                        </label>
                        <input type="submit" value="Submit" onClick={this.handleSearch} />
                    </form>
                </div>
                <table>
                    <TableData people={this.state.employees} />
                </table>

            </div>

        )
    }
}

export default Table