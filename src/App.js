import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users: [
      {username: 'Bevan', favFood: 'chocolate'},
      {username: 'Samantha', favFood: 'ice-cream'},
      {username: 'Alfie', favFood: 'spinach'}
    ]
  }

  changeFavFoodHandler = (event) =>{
    this.setState( {
      users: [
        {username: 'Bevan', favFood: event.target.value},
        {username: 'Samantha', favFood: event.target.value},
        {username: 'Alfie', favFood: event.target.value}
      ]}
    )

  }

  render() {
    return (
      <div className="App">
        <UserInput
        changed={this.changeFavFoodHandler}
        currentFood={this.state.users[0].favFood} />
        <UserOutput 
        userName={this.state.users[0].username} 
        favFood={this.state.users[0].favFood} />
        <UserOutput 
        userName={this.state.users[1].username} 
        favFood={this.state.users[1].favFood} />
        <UserOutput 
        userName={this.state.users[2].username} 
        favFood={this.state.users[2].favFood} />

      </div>
    );
  }
}

export default App;
