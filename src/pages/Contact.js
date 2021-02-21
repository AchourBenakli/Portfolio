import React from 'react';
import NavigationNew from '../components/NavigationNew';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  state = {
    nameFilled: '',
    numberFilled: '',
    mailFilled: '',
    messageFilled: ''
  }


  handleSubmit(event) {
    event.preventDefault();
    alert('Hello ' + this.state.nameFilled + ' we have registred the following number : ' + this.state.numberFilled + ' and your email ' + this.state.mailFilled + ' and here is your message :\n\n\n' + this.state.messageFilled);
  }

  onChange(event) {
    const re = /^[0-9\b]+$/;
    // if value is not blank, then test the regex
    if (event.target.value === '' || re.test(event.target.value)) {
      this.setState({ numberFilled: event.target.value })
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
                  value={this.state.nameFilled}
                  onChange={(event) => this.setState({ nameFilled: event.target.value })} />
              </label>

              <label>
                Number :
          <input type="text"
                  value={this.state.numberFilled}
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
                <textarea value={this.state.messageFilled}
                  onChange={(event) => this.setState({ messageFilled: event.target.value })} />
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
