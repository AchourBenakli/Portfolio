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

  onChange(e) {
    const re = /^[0-9\b]+$/;
    // if value is not blank, then test the regex
    if (e.target.value === '' || re.test(e.target.value)) {
      this.setState({ value: e.target.value })
    } else {
      alert('Please enter a valid form')
    }
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
            <form onSubmit={this.handleSubmit} locale="en-GB">
              <label>
                Name :
          <input type="text"
                  value={this.state.NameFilled}
                  onChange={(event) => this.setState({ NameFilled: event.target.value })} />
              </label>

              <label>
                Number :
          <input type="text"
                  value={this.state.NumberFilled}
                  onChange={this.onChange}
                />
              </label>

              <label>
                Email :
          <input type="text"
                  value={this.state.mailFilled}
                  onChange={(event) => this.setState({ mailFilled: event.target.value })} />

              </label>

              <label className={'textArea'}  >
                Message :
                <textarea value={this.state.MessageFilled}
                  onChange={(event) => this.setState({ MessageFilled: event.target.value })} />
                <input type="submit" className='inputSubmit' onClick={this.handleSubmit} value='Submit' />
              </label>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NameForm;
