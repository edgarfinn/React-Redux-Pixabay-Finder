import React, { Component } from 'react';
import './App.css';

// components
import SearchForm from '../../containers/SearchForm/search_form';
import ImageDetail from '../../containers/ImageDetail/image_detail';
import ImageList from '../../containers/ImageList/image_list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React-Redux Pixabay Search Engine</h1>
        </header>
        <div className="page-content">
          <section className="section-image-detail">
            <ImageDetail />
          </section>
          <section className="section-search-form">
            <SearchForm />
          </section>
          <section className="section-image-list">
            <ImageList />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
