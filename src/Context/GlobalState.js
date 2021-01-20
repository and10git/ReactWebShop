import React, { Component } from "react";
import NetContext from "./NetContext"

class GlobalState extends Component {
    state = {
        login: localStorage.getItem("login"),
    };

    logInUser = (data) => {
        this.setState({           
            login: true,
        })
        localStorage.setItem("login", true)
    }

    logOutUser = () => {
        this.setState({
            login: false
        })
        localStorage.removeItem("login")
    }

    render() {
        return (
            <NetContext.Provider value={{
                login: this.state.login,
                logInUser: this.logInUser,
                logOutUser: this.logOutUser,
            }}>
                {this.props.children}
            </NetContext.Provider>
        )
    }
}

export default GlobalState