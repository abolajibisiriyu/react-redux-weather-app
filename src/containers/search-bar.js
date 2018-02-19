import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchWeather } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
  }

  onSearchTermChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.searchTerm);
    this.setState({ searchTerm: '' });
  }

  render() {
    return (
      <div className="col-sm-12">
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <div className="form-group">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="exampleInputAmount"
                placeholder="Search For City to Get A Five-Day Forecast"
                value={this.state.searchTerm}
                onChange={this.onSearchTermChange.bind(this)}
              />
              <span className="input-group-btn">
                <button type="submit" className="btn btn-primary">
                  Go!
                </button>
              </span>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
