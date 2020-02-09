import React from 'react';
import Component from 'react';
import CountryDropdown from 'react';
import RegionDropdown from 'react';



function CountrySelector() {
  return (
    class Example extends Component {
        constructor (props) {
          super(props);
          this.state = { country: '', region: '' };
        }
      
        selectCountry (val) {
          this.setState({ country: val });
        }
      
        selectRegion (val) {
          this.setState({ region: val });
        }
      
        render () {
          const { country, region } = this.state;
          return (
            <div>
              <CountryDropdown
                value={country}
                onChange={(val) => this.selectCountry(val)} />
              <RegionDropdown
                country={country}
                value={region}
                onChange={(val) => this.selectRegion(val)} />
            </div>

            

          );
        }
      }
  );
}

export default CountrySelector;