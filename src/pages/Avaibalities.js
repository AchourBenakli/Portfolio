import React from 'react';
import Calendar from "react-calendar";
import { NavLink } from 'react-router-dom';
import NavigationNew from '../components/NavigationNew';

class Avaibalities extends React.Component {
  state = {
    date: new Date(),
    showDate: false,
  }
  onChange = (date) => {
    this.setState({ date })
  }
  validation = () => {
    this.setState({
      showDate: true
    })
  }
  reset = () => {
    this.setState({
      showDate: false
    })
  }

  render() {
    return (
      <div>
        <div className="home">
          <NavigationNew />
          <div className="calendarContent">
            <div>
              <br /><br />
              <h2>My Avaibalities</h2>
              <h3>Please choose your dates </h3>
              <br />
              <Calendar className={'CalendarMain'}
                onChange={this.onChange}
                value={this.state.date}
                selectRange={true}
                locale="en-GB"
              />
              <br />
              <button className={'button'} onClick={this.validation}>Validate</button>
              <button className={'buttonReset'} onClick={this.reset}>Reset</button>
              {this.state.showDate ? (
                <div>
                  <p>From : {this.state.date[0].toLocaleDateString()} to : {this.state.date[1].toLocaleDateString()}</p>
                  <br />
                </div>
              ) : null}
              <div className={'backHome'}>
                <br />
                <li>
                  <NavLink exact to="/" activeClassName="navActive">
                    <i className="fas fa-home"></i>
                    <span >Back Home</span>
                  </NavLink>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}




export default Avaibalities;
