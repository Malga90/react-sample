import React, { Component } from 'react';
import Nav from './Nav';
import RecipeList from './RecipeList';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Nav 
          appName = 'Recipe App'
          navigation = {['New Recipe', 'Home', 'About', 'Contact Us']}
        />
        <RecipeList />
      </div>
    );
  }
}

export default RecipeApp;
