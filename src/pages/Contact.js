import React from 'react';
import NavigationNew from '../components/NavigationNew';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    NameFilled: '',
    NumberFilled: '',
    mailFilled: '',
    MessageFilled: ''
  }


  handleSubmit(event) {
    event.preventDefault();
    alert('Hello ' + this.state.NameFilled + ' we have registred the following number : ' + this.state.NumberFilled + ' and your email ' + this.state.mailFilled + ' and here is your message :\n\n\n' + this.state.MessageFilled);
  }


  render() {
    return (
      <div className="contact">
        <NavigationNew />
        <div className="contactContent">
          <div className="header">
            <h2>Contact Me</h2>
          </div>
          <div className="contactBox">
            <form onSubmit={this.handleSubmit}>
              <label>
                Name :
          <input type="text"
                  value={this.state.NameFilled}
                  onChange={(event) => this.setState({ NameFilled: event.target.value })} />
              </label>

              <label>
                Number :
          <input type="number"
                  value={this.state.NumberFilled}
                  onChange={(event) => this.setState({ NumberFilled: event.target.value })} />
              </label>

              <label>
                Email :
          <input type="text"
                  value={this.state.mailFilled}
                  onChange={(event) => this.setState({ mailFilled: event.target.value })} />
              </label>

              <label>
                Message :
                <textarea value={this.state.MessageFilled}
                  onChange={(event) => this.setState({ MessageFilled: event.target.value })} />
                <input type="submit" className='inputSubmit' onClick={this.handleSubmit} />
              </label>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NameForm;
