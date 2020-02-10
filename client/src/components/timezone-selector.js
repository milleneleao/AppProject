import React from 'react';
import TimezonePicker from 'react-timezone';
 
export default () => (
  <TimezonePicker
    value="Asia/Yerevan"
    onChange={timezone => this.timezone}
    inputProps={{
      placeholder: 'Select Timezone...',
      name: 'timezone',
    }}
  />
);