import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';

// Components
import Landing from './Components/Landing'
import Header from './Components/Header'
import AuthPage from './Components/AuthPage'
import EditStorage from './Components/EditStorage'
import AddProduct from './Components/AddProduct'
import RemoveProduct from './Components/RemoveProduct'
import StorageInfo from './Components/StorageInfo'
import User from './Components/User'
import EditCathegories from './Components/EditCathegories'

class App extends Component {
  constructor (props) {
    super(props)

    // eslint-disable-next-line
    this.handler = this.handler.bind(this)

    this.state = {
      isLoggedIn: false
    }
  }

  handler () {
    this.setState({isLoggedIn: true})
  }

  render () {
    return (
      <>
      <div className="bg"></div>
      <Route exact path="/auth">
        {!this.state.isLoggedIn && <AuthPage action={this.handler} />}
      </Route>
      {!this.state.isLoggedIn ? <Redirect exact from="/" to="/auth"/> : <Redirect exact from="/auth" to="/"/>}
      {this.state.isLoggedIn && <Route path="/">
        <div className="App">
          <Header />
          <Route exact path="/" component={Landing} />
          <Route path="/info" component={StorageInfo} />
          <Route path="/add" component={AddProduct} />
          <Route path="/remove" component={RemoveProduct} />
          <Route path="/edit" component={EditStorage} />
          <Route path="/user" component={User} />
          <Route path="/cath" component={EditCathegories} />
        </div>
      </Route>}
      </>
    )
  }
}

export default App;
