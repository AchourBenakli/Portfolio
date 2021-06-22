import React from 'react';
import Calendar from 'react-calendar';
import { NavLink } from 'react-router-dom';
import NavigationNew from '../components/NavigationNew';
import Modal from '../pages/Modal';



class Avaibalities extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      showDate: null,
      showModal: false
    };
  }

  onChange = date => {
    this.setState({
      date,
      showDate: true
    })
  };


  validation = () => {
    if (this.state.showDate) {
      this.setState({
        showDate: true,
        showModal: true
      });
    } else {
      alert('Please enter a valid date')
    }
  };

  reset = () => {
    this.setState({
      showDate: null
    })
  };

  togglePop = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };



  render() {
    return (
      <div>
        <div className="home">
          <NavigationNew />
          <div className="calendarContent">
            <br />
            <br />
            {/* Title */}
            <div>
              <h2>My Avaibalities</h2>

              <h4>Please choose 2 dates and validate</h4>

              {this.state.showModal && <Modal dateModal={this.state.date} toggle={this.togglePop} />}
              {/* Calendar */}


              <Calendar
                className={'CalendarMain'}
                onChange={this.onChange}
                selectRange={true}
                locale="en-GB"
              />
              <br />
              <br />
              {/* Button */}
              <div className={'buttonAvaibalities'}>
                <button className={'button'} onClick={this.validation}>Validate</button>
                <button className={'button'} onClick={this.reset}>Reset</button>
              </div>
              <br />
              {/* Show date */}
              {this.state.showDate
                &&
                <p>
                  From : {' '} {this.state.date[0].toLocaleDateString()} to :{' '}
                  {this.state.date[1].toLocaleDateString()}
                </p>
              }

              <br />
              <br />
              {/* BackHome */}
              <div className={'backHome'}>
                <li>
                  <NavLink exact to="/" activeClassName="navActive">
                    <i className="fas fa-home"></i>
                    <span>Back Home</span>
                  </NavLink>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};


export default Avaibalities;