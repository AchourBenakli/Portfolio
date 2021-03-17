import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    mailFilled: ''
  };
  handleClick = () => {
    this.props.toggle();
  };

  handleSubmit = () => {
    alert('Your request was sent')
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