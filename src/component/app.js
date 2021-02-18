import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  async onSearchSubmit(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID ffKPq3gxgioM79RPZ_WoxyB4h7X2QNlGwd53sQ1idkc'
      }
    });

    console.log(response.data.results)
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
};

export default App;