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
      </div>
    )
  }
};


export default Avaibalities;


class Modal extends React.Component {
  handleClick = () => {
    this.props.toggle();
  };
  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>&times;</span>
          <p>Thanks for your booking</p>
        </div>
      </div>
    );
  }
}


export default Modal;