import React, { Component } from 'react';

import SerachBar from '../containers/search-bar';
import WeatherList from '../containers/weather-list';

export default class App extends Component {
  render() {
    return (
      <div className="container app-container">
        <div className="row">
          <SerachBar />
          <WeatherList />
        </div>
      </div>
    );
  }
}
