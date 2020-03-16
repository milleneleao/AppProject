import React, { Component } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';


class CountrySelector extends Component {
  constructor(props) {
    super(props)
 
    this.options = countryList().getData()
 
    this.state = {
      options: this.options,
      value: null,
    }

  }

  changeHandler = value => {
    this.setState({ value });
    console.log(value);
  }
  
  render() {
    return (
      <Select
        options={countryList().getData()}
        value={this.state.value}
        onChange={this.changeHandler}
      />
    )
  }
}

export default CountrySelector;