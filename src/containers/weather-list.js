import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {
  renderWeatherList() {
    if (this.props.weather.length < 1)
      return (
        <tr>
          <td colSpan="4" style={{ textAlign: 'center' }}>
            Please Search For A City
          </td>
        </tr>
      );
    return this.props.weather.map(weatherObj => {
      let temperatures = [];
      let pressures = [];
      let humidities = [];
      weatherObj.list.forEach(element => {
        const mainObj = element.main;
        temperatures.push(mainObj.temp);
        pressures.push(mainObj.pressure);
        humidities.push(mainObj.humidity);
      });
      // console.log(temperatures, pressures, humidities);
      const { lon, lat } = weatherObj.city.coord;
      return (
        <tr key={weatherObj.city.id}>
          <td>
            <GoogleMap lon={lon} lat={lat} />
            <span>{weatherObj.city.name}</span>
          </td>
          <td>
            <Chart color={'red'} units="K" data={temperatures} />
          </td>
          <td>
            <Chart color={'blue'} units="hPa" data={pressures} />
          </td>
          <td>
            <Chart color={'green'} units="%" data={humidities} />
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="col-sm-12">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temprature (K)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>{this.renderWeatherList()}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
