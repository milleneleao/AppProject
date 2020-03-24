import React, { Component } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
let allViews = ["week"];
let events = [  {

}];



const CustomToolbar = (toolbar) => {

  const goToBack = () => {
    const now = moment().subtract(1, "Days");;
    var new_date = moment(toolbar.date, "DD-MM-YYYY").subtract(7, "Days");
    console.log(new_date.get("date"));
    var new_date1 = moment(new_date).add(6, "Days");
    console.log(new_date1);
    console.log(new_date1.get("date"));
    console.log(now.get("date"));
    console.log(moment(new_date).isBetween(now, new_date1));
    if (moment(new_date).isBetween(now, new_date1)) {
      toolbar.date.setDate(new_date.get('date'));
      toolbar.date.setMonth(new_date.get('month'));
      toolbar.date.setYear(new_date.get('year'));
      toolbar.onNavigate('prev');
    }

  };

  const goToNext = () => {
    var new_date = moment(toolbar.date, "DD-MM-YYYY").add("Days", 7);
    toolbar.date.setDate(new_date.get('date'));
    toolbar.date.setMonth(new_date.get('month'));
    toolbar.date.setYear(new_date.get('year'));
    toolbar.onNavigate('next');
  };

  const goToCurrent = () => {
    const now = new Date();
    toolbar.date.setDate(now.getDate());
    toolbar.date.setMonth(now.getMonth());
    toolbar.date.setYear(now.getFullYear());
    toolbar.onNavigate('current');
  };

  const label = () => {
    const date = moment(toolbar.date);
    const dateLast = moment(date, "DD-MM-YYYY").add(6, 'days');
    return (
      <span>{date.format('DD')} {date.format('MMMM')} {date.format('YYYY')} - {dateLast.format('DD')} {dateLast.format('MMMM')} {dateLast.format('YYYY')}
      </span>

    );
  };

  return (
    <div className='container'>
      <div className='row pb-3'>
        <div className="col-3 text-left ">
          <button className='btn btn-project-color-6 btn-rounded mr-1' onClick={goToBack}>Back</button>
          <button className='btn btn-project-color-6 btn-rounded mr-1' onClick={goToCurrent}>Today</button>
          <button className='btn btn-project-color-6 btn-rounded btn-primary mr-1' onClick={goToNext}>Next</button>
        </div>
        <div className="col-6 text-center  pt-2">
          <label className='label'>{label()}</label>
        </div>
        <div className="col-3 text-left "></div>
      </div>
    </div >
  );
};

class BigCalendar extends Component {

  constructor(...args) {
    super(...args)
    this.state = {events}
  }

  eventStyleGetter = ({ event, start, end, isSelected }) => { 
  var backgroundColor = `#D94141`;
  var style = {
    backgroundColor: backgroundColor,
    borderRadius: '5px',
    opacity: 0.9,
    color: 'black',
    border: '1px',
    display: 'block'
  };
  return {
    style: style
  };
}

handleSelect = ({ start, end }) => {
  const title = '';
  var data = this.state.events;
  console.log(data);
  data.forEach(function (linha) {
      var starts = linha.start;
      var ends = linha.end;
      console.log(linha);
      console.log(starts);
      console.log(ends);
  });
  this.setState({
    events: [
      ...this.state.events,
      {
        start,
        end,
        title,
      },
    ],
  })
}

handleNavigate(date, view, action) {

  console.log(date);
  console.log(view);
  console.log(action);
}
render() {
  return (

      <div className="container">
        <div className="row">
          <div className="col-12">
            <Calendar
              selectable
              views={allViews}
              localizer={localizer}
              events={this.state.events}
              defaultView={Views.WEEK}
              step={30}
              eventPropGetter={this.eventStyleGetter}
              onSelectSlot={this.handleSelect}
              min={new Date(0, 0, 0, 8, 0, 0)}
              max={new Date(0, 0, 0, 20, 0, 0)}
              // onNavigate =  {this.handleNavigate}
              components={{
                toolbar: CustomToolbar
              }}
            />
          </div>
        </div>
      </div>

  );
}
}

export default BigCalendar;
