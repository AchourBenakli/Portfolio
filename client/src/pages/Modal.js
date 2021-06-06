import axios from 'axios';
import moment from 'moment';
import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    mailFilled: '',
    sent: false,
  };

  handleClick = () => {
    this.props.toggle();
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const format2 = "MM-DD-YYYY"
    const dateFirst = moment(this.props.dateModal[0]).format(format2);
    const dateSecond = moment(this.props.dateModal[1]).format(format2);
    let data = {
      mailFilled: this.state.mailFilled,
      dateIn: dateFirst,
      dateOut: dateSecond
    };
    axios
      .post('/api/senddates', data)
      .then((res) => {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.mailFilled)) {
          this.setState(
            {
              sent: true,
            },
            alert('Thank you for your request')
          );
        } else {
          alert('Pleaser enter a valid mail')
        }

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
          <div className={'modalDate'} >
            {this.props.dateModal && <p className={'modalp'}>From :
              {this.props.dateModal[0].toLocaleDateString()} to : {this.props.dateModal[1].toLocaleDateString()}
            </p>
            }
          </div>
          <div className='mailFilled'>
            <label className={'modalLabel'}>
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
    );
  }
}


export default Modal;