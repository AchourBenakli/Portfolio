import React from 'react';
import Calendar from "react-calendar";
import { NavLink } from 'react-router-dom';
import NavigationNew from '../components/NavigationNew';

class Avaibalities extends React.Component {
  state = {
    date: new Date(),
    showDate: false
  }
  onChange = date => {
    this.setState({ date })
  }

  validation = () => {
    this.setState({
      showDate: true
    })
  }
  // reset = () => {
  //   this.setState({
  //     showDate: false
  //   })
  // }
  render() {
    return (
      <div>
        <div className="home">
          <NavigationNew />
          <div className="homeContent">
            <div>
              <br /><br />
              <h2>My Avaibalities</h2>
              <br />
              {/* <div onClick={this.reset}> */}
              <Calendar className={'CalendarMain'}
                onChange={this.onChange}
                value={this.state.date}
                selectRange={true}
              />
              <br />
              <button className={'button'} onClick={this.validation}>Validate</button>
              {this.state.showDate ? (
                <div>
                  <p>From : {this.state.date[0].toLocaleDateString()} to: {this.state.date[1].toLocaleDateString()}</p>
                  <br />
                </div>
              ) : null}
              {/* </div> */}
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
