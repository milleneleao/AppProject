import React, { Component } from 'react';
import HeaderLogIn from './components/headerLogIn';
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import './css/about.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

const localizer = momentLocalizer(moment);
let allViews = ["week"];
var selected = undefined;

const CustomToolbar = (toolbar) => {

  const goToBack = () => {
    const now = moment().subtract(1, "Days");;
    var new_date = moment(toolbar.date, "DD-MM-YYYY").subtract(7, "Days");
    var new_date1 = moment(new_date).add(6, "Days");
    if (moment(new_date).isBetween(now, new_date1)) {
      toolbar.date.setDate(new_date.get('date'));
      toolbar.date.setMonth(new_date.get('month'));
      toolbar.date.setYear(new_date.get('year'));
      toolbar.onNavigate('prev');
    }
  };

  const goToNext = () => {
    var new_date = moment(toolbar.date, "DD-MM-YYYY").add(7, "Days");
    var new_date1 = moment(new_date).add(6, "Days");
    const now = moment().add(14, "Days");
    if (moment(new_date1).isSameOrBefore(now)) {
      toolbar.date.setDate(new_date.get('date'));
      toolbar.date.setMonth(new_date.get('month'));
      toolbar.date.setYear(new_date.get('year'));
      toolbar.onNavigate('next');
    }
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


class CalendarPage extends Component {
  constructor(...args) {
    super(...args)
    this.state = {
      events: [],
      countSelect: 0,
      countTotalS: 0,
      countTotal: 0,
      msgVisible: "invisible"
    }
    this.loadData = this.loadData.bind(this);
    this.eventStyleGetter = this.eventStyleGetter.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.backClick = this.backClick.bind(this);
    this.nextClick = this.nextClick.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    var tcourse = 0;
    selected = [];
    if (this.props.location.state.course === 'Trial') {
      tcourse = 1
    } else {
      tcourse = 5;
    }

    this.setState({
      countTotal: tcourse,
      countTotalS: tcourse
    });

    var eventsArray = [];
    var now = moment().add(1, "day");;
    var item = {};
    item.id = 0;
    item.title = '';
    item.isMine = false;
    item.isSelected = false;
    item.start = new Date(now.get('year'), now.get('month'), now.get('date'), 8, 0, 0);
    item.end = new Date(now.get('year'), now.get('month'), now.get('date'), 8, 30, 0);
    eventsArray.push(item);

    item = {};
    item.id = 1;
    item.title = '';
    item.isMine = false;
    item.isSelected = false;
    item.start = new Date(now.get('year'), now.get('month'), now.get('date'), 9, 0, 0);
    item.end = new Date(now.get('year'), now.get('month'), now.get('date'), 9, 30, 0);
    eventsArray.push(item);

    item = {};
    item.id = 2;
    item.title = '';
    item.isMine = false;
    item.isSelected = false;
    item.start = new Date(now.get('year'), now.get('month'), now.get('date'), 10, 0, 0);
    item.end = new Date(now.get('year'), now.get('month'), now.get('date'), 10, 30, 0);
    eventsArray.push(item);

    now = moment().add(2, "day");
    item = {};
    item.id = 3;
    item.title = '';
    item.isMine = false;
    item.isSelected = false;
    item.start = new Date(now.get('year'), now.get('month'), now.get('date'), 18, 0, 0);
    item.end = new Date(now.get('year'), now.get('month'), now.get('date'), 18, 30, 0);
    eventsArray.push(item);

    item = {};
    item.id = 4;
    item.title = '';
    item.isMine = false;
    item.isSelected = false;
    item.start = new Date(now.get('year'), now.get('month'), now.get('date'), 2, 0, 0);
    item.end = new Date(now.get('year'), now.get('month'), now.get('date'), 2, 30, 0);
    eventsArray.push(item);

    item = {};
    now = moment().add(4, "day");
    item.id = 5;
    item.title = '';
    item.isMine = false;
    item.isSelected = false;
    item.start = new Date(now.get('year'), now.get('month'), now.get('date'), 13, 0, 0);
    item.end = new Date(now.get('year'), now.get('month'), now.get('date'), 13, 30, 0);
    eventsArray.push(item);

    now = moment().add(7, "day");
    item = {};
    item.id = 6;
    item.title = '';
    item.isMine = false;
    item.isSelected = false;
    item.start = new Date(now.get('year'), now.get('month'), now.get('date'), 8, 0, 0);
    item.end = new Date(now.get('year'), now.get('month'), now.get('date'), 8, 30, 0);
    eventsArray.push(item);


    item = {};
    item.id = 7;
    item.title = '';
    item.isMine = false;
    item.isSelected = false;
    item.start = new Date(now.get('year'), now.get('month'), now.get('date'), 19, 0, 0);
    item.end = new Date(now.get('year'), now.get('month'), now.get('date'), 19, 30, 0);
    eventsArray.push(item);

    now = moment().add(8, "day");
    item = {};
    item.id = 8;
    item.title = '';
    item.isMine = false;
    item.isSelected = false;
    item.start = new Date(now.get('year'), now.get('month'), now.get('date'), 17, 0, 0);
    item.end = new Date(now.get('year'), now.get('month'), now.get('date'), 17, 30, 0);
    eventsArray.push(item);


    item = {};
    item.id = 9;
    item.title = '';
    item.isMine = false;
    item.isSelected = false;
    item.start = new Date(now.get('year'), now.get('month'), now.get('date'), 20, 0, 0);
    item.end = new Date(now.get('year'), now.get('month'), now.get('date'), 20, 30, 0);
    eventsArray.push(item);

    console.log(eventsArray);
    this.setState({
      events: eventsArray
    })

  }

  eventStyleGetter = (event) => {
    var backgroundColor = `#D94141`;
    var style = {
      backgroundColor: backgroundColor,
      borderRadius: '0px',
      opacity: 0.9,
      color: 'black',
      border: 'none'
    };


    if (event.isMine) {
      if (event.isSelected) {
        style.backgroundColor = "lightgreen"
      } else {
        style.backgroundColor = "#D94141";

      }

    }

    return {
      style: style
    };
  }

  handleSelect = (event) => {
    let count = this.state.countSelect;
    let countTotal = this.state.countTotal;
    let id = event.id;
    if (selected.indexOf(id) >= 0) {
      event.isMine = true;
      event.isSelected = false;
      selected.splice(selected.indexOf(event.id), 1);
      count--;
      this.setState({
        countSelect: count,
        countTotalS: countTotal - count
      });
    } else {
      if (count < this.state.countTotal) {
        count++;
        event.isMine = true;
        event.isSelected = true;
        selected.push(event.id);
        this.setState({
          countSelect: count,
          countTotalS: countTotal - count
        });
      }
    }
  }


  backClick(e) {
    this.props.history.push({
      pathname: '/AboutCourse',
      state: {
        uid: this.props.location.state.uid
      }
    });
  }

  nextClick(e) {
    if (this.state.countSelect === this.state.countTotal) {
      var calendarSelect = [];

      for (var i = 0; i < this.state.events.length; i++) {
        if (this.state.events[i].isSelected) {
          let item = {};
          item.id = `${i}`;
          item.start = this.state.events[i].start;
          item.end = this.state.events[i].end;
          calendarSelect.push(item);
        }
      }
      console.log(calendarSelect);
      this.props.history.push({
        pathname: '/PayPage',
        state: {
          uid: this.props.location.state.uid,
          courseType: this.props.location.state.course,
          courses: calendarSelect
        }
      });
    } else {
      this.setState({
        msgVisible: "visible"
      });
    }
  }

  render() {
    return (
      <div className="container-fluid" >
        <HeaderLogIn uid={this.props.location.state.uid} />
        <div className="container border  mt-3">
          <div className="row text-center p-3">
            <div className="col col-lg-3 float-right text-center ">
            </div>
            <div className="col col-lg-6 float-right  text-center ">
              <div>
                <button className="btn  btn-secondary btn-lg " data-dismiss="modal" onClick={() => this.backClick()}>Back</button>
                <button className="btn  btn-secondary btn-lg ml-3" data-dismiss="modal" onClick={() => this.nextClick()}>Next</button>
                <div className={`text-danger  ${this.state.msgVisible} mt-4`}>Select {this.state.countTotal} lessons</div>
              </div>
            </div>
            <div className="col col-lg-3 float-right text-center ">
              <p className="text-center">{this.state.countSelect} lessons scheduled</p>
              <p className="text-center">{this.state.countTotalS} lessons unscheduled</p>
            </div>
          </div>
          <div className="row">
            <div className="col col-lg-12 mt-5">
              <Calendar
                views={allViews}
                localizer={localizer}
                events={this.state.events}
                defaultView={Views.WEEK}
                step={30}
                eventPropGetter={this.eventStyleGetter}
                onSelectEvent={this.handleSelect}
                min={new Date(0, 0, 0, 8, 0, 0)}
                max={new Date(0, 0, 0, 20, 0, 0)}
                components={{
                  toolbar: CustomToolbar
                }}
              />
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default CalendarPage;
