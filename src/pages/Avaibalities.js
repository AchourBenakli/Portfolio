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
      // date: new Date(),
      // showDate: false,
      showModal: false,
    };
  }
  // onChange = (date) => {
  //   this.setState({ date });
  // };
  // validation = () => {
  //   this.setState({
  //     showDate: true,
  //   });
  // };
  togglePop = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };

  // reset = () => {
  //   this.setState({
  //     showDate: false,
  //   });
  // };

  handleSubmit() {
    this.setState({
      showModal: true
    })
  }


  render() {
    return (
      <div>
        <div className="home">
          <NavigationNew />
          <div className="calendarContent">

            {/* Title */}
            <div>
              <br />
              <br />
              <h2>My Avaibalities</h2>
              <h3>Please choose your dates </h3>
              <br />


              {/* Calendar */}
              <Calendar
                className={'CalendarMain'}
                onChange={this.onChange}
                value={this.state.date}
                selectRange={true}
                locale="en-GB"
              />
              {/* Button */}
              <br />
              {/* <button className={'button'} onClick={this.validation}>Validate</button> */}

              <div>
                <div>
                  <button className={'button'} onClick={this.togglePop}>Validate</button>
                </div>
              </div>
              {this.state.showModal && <Modal toggle={this.togglePop} />}
            </div>
          </div>

          {/* Show date */}

          {/* </div>
              {this.state.showDate ? (
                <div>
                  <p>
                    From : {this.state.date[0].toLocaleDateString()} to :{' '}
                    {this.state.date[1].toLocaleDateString()}
                  </p>
                  <br />
                </div>
              ) : null}
            </div> */}


          {/* BackHome */}

          <div className={'backHome'}>
            <br />
            <li>
              <NavLink exact to="/" activeClassName="navActive">
                <i className="fas fa-home"></i>
                <span>Back Home</span>
              </NavLink>
            </li>
          </div>
        </div>
      </div>
    )
  }
};


export default Avaibalities;