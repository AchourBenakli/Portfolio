import axios from 'axios';
import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    mailFilled: '',
    sent: false
  };
  handleClick = () => {
    this.props.toggle();
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      mailFilled: this.state.mailFilled
    };
    axios
      .post('/api/forma', data)
      .then((res) => {
        this.setState(
          {
            sent: true,
          },
          alert('Thank you for your request')
        );
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>&times;</span>
          <br />
          <br />
          <div className={'mailFilled'}>
            <label>
              <input
                type="text"
                placeholder="Please write your email"
                value={this.state.mailFilled}
                onChange={(event) =>
                  this.setState({ mailFilled: event.target.value })
                }
              />
            </label>
          </div>
          <div className={'mailSubmit'}>
            <label>
              <input
                type="submit"
                className={"inputSubmit"}
                onClick={this.handleSubmit}
                value="submit"
              />
            </label>
          </div>
        </div>
      </div>
    );
  }
}


export default Modal;