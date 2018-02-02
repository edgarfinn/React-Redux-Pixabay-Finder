import React, { Component } from 'react';
import './App.css';

// components
import SearchForm from '../../containers/SearchForm/search_form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React-Redux Pixabay Search Engine</h1>
        </header>
        <section className="section-search-form">
          <SearchForm />
        </section>
      </div>
    );
  }
}

export default App;
