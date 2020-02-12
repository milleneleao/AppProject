import React from 'react';
import Select from 'react-select';
 
const options = [
  { value: 'gmt', label: 'GMT - Greenwich Mean Time GMT+0:00' },
  { value: 'ect', label: 'ECT - European Central Time GMT+1:00' },
  { value: 'eet', label: 'EET - Eastern European Time GMT+2:00' },
  { value: 'art', label: 'ART - (Arabic) Egypt Standard Time GMT+2:00' },
  { value: 'eat', label: 'EAT - Eastern African Time GMT+3:00' },
  { value: 'met', label: 'MET - Middle East Time GMT+3:30' },
  { value: 'net', label: 'NET - Near East Time GMT+4:00' },
  { value: 'plt', label: 'PLT - Pakistan Lahore Time GMT+5:00' },
  { value: 'ist', label: 'IST - India Standard Time GMT+5:30' },
  { value: 'bst', label: 'BST - Bangladesh Standard Time GMT+6:00' },
  { value: 'vst', label: 'VST - Vietnam Standard Time GMT+7:00' },
  { value: 'ctt', label: 'CTT - China Taiwan Time GMT+8:00' },
  { value: 'jst', label: 'JST - Japan Standard Time GMT+9:00' },
  { value: 'act', label: 'ACT - Australia Central Time GMT+9:30' },
  { value: 'aet', label: 'AET - Australia Eastern Time GMT+10:00' },
  { value: 'sst', label: 'SST - Solomon Standard Time GMT+11:00' },
  { value: 'nst', label: 'NST - New Zealand Standard Time GMT+12:00' },
  { value: 'mit', label: 'MIT - Midway Islands Time GMT-11:00' },
  { value: 'hst', label: 'HST - Hawaii Standard Time GMT-10:00' },
  { value: 'ast', label: 'AST - Alaska Standard Time GMT-9:00' },
  { value: 'pst', label: 'PST - Pacific Standard Time GMT-8:00' },
  { value: 'pnt', label: 'PNT - Phoenix Standard Time GMT-7:00' },
  { value: 'mst', label: 'MST - Mountain Standard Time GMT-7:00' },
  { value: 'cst', label: 'CST - Central Standard Time GMT-6:00' },
  { value: 'est', label: 'EST - Eastern Standard Time GMT-5:00' },
  { value: 'iet', label: 'IET - Indiana Eastern Standard Time GMT-5:00' },
  { value: 'prt', label: 'PRT - Puerto Rico and US Virgin Islands Time GMT-4:00' },
  { value: 'cnt', label: 'CNT - Canada Newfoundland Time GMT-3:30' },
  { value: 'agt', label: 'AGT - Argentina Standard Time GMT-3:00' },
  { value: 'bet', label: 'BET - Brazil Eastern Time GMT-3:00' },
  { value: 'cat', label: 'CAT - Central African Time GMT-1:00' },
];
 
class TimezoneSelector extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;
 
    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}

export default TimezoneSelector;