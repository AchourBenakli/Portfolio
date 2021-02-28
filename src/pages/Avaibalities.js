import React from 'react';
import Calendar from 'react-calendar';
import { NavLink } from 'react-router-dom';
import NavigationNew from '../components/NavigationNew';
import Modal from '../pages/Modal';

class Avaibalities extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      date: new Date(),
      showDate: false,
      showModal: false,
      color: true
    };
  }
  onChange = (date) => {
    this.setState({ date });
  };
  validation = () => {
    this.setState({
      showDate: true,
      showModal: true
    });
  };

  // componentDidMount() {
  //   showModal = setTimeout(() => console.log('Hello, World!'), 3000)
  // }



  togglePop = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };

  reset = () => {
    this.setState({
      showDate: null
    })
  };

  handleSubmit() {
    this.setState({
      showModal: true
    })
  }

  dayPicker = () => {
    this.setState({
      color: !this.state.color
    })
  }


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
              <h3>Please choose your dates </h3>

              {this.state.showModal && <Modal toggle={this.togglePop} />}
              {'CalendarMain'} = this.state.color ? "blackButton" : "whiteButton";
              {/* Calendar */}
              <Calendar
                className={'CalendarMain'}
                onChange={this.onChange}
                value={this.state.date}
                selectRange={true}
                locale="en-GB"
                onclick={this.dayPicker.bind(this)}
              />

              <br />
              <br />



              {/* Button */}
              <div>
                <div>

                  <button className={'button'} onClick={this.validation}>Validate</button>
                  <button className={'button'} onClick={this.reset}>Reset</button>
                </div>
                {/* Show date */}
              </div>
              {this.state.showDate
                &&
                <p>
                  From : {this.state.date[0].toLocaleDateString()} to :{' '}
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