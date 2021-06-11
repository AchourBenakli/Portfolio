import axios from 'axios';
import React from 'react';
import NavigationNew from '../components/NavigationNew';


const nameRequired = `
<p>PLease fill your name<p/>
`
const numberRequired = `
<p>PLease fill a number<p/>
`
const mailRequired = `
<p>PLease fill your e-mail<p/>
`
const messageRequired = `
<p>PLease add a message<p/>
`

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
    messageFilled: '',
    sent: false,
    errorName: false,
    errorNumber: false,
    errorMail: false,
    errorMessage: false
  };

  onChange(event) {
    const re = /^[0-9\b]+$/;
    if (event.target.value === '' || re.test(event.target.value)) {
      this.setState({ numberFilled: event.target.value });
    } else {
      alert('Please enter a number');
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    let data = {
      nameFilled: this.state.nameFilled,
      numberFilled: this.state.numberFilled,
      mailFilled: this.state.mailFilled,
      messageFilled: this.state.messageFilled,
    };
    if ((this.state.nameFilled === '')) {
      this.setState({
        sent: false,
        errorName: true
      })
    } else {
      axios
        .post('/api/forma', data)
        .then((res) => {
          this.setState(
            {
              sent: true,
            },
            this.resetForm()
          );
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  }

  resetForm = () => {
    this.setState({
      nameFilled: '',
      numberFilled: '',
      mailFilled: '',
      messageFilled: '',
    });

    setTimeout(() => {
      this.setState({
        sent: false,
      });
    }, 5000);
  };

  render() {
    return (
      <div className="contact">
        <NavigationNew />
        <div className="contactContent">
          <div className="header">
            <h2>Contact Me</h2>
          </div>
          <div className="contactBox">
            <form locale="en-GB">
              <label>
                <input
                  type="text"
                  placeholder="Your name"
                  onChange={(event) =>
                    this.setState({ nameFilled: event.target.value })
                  }

                />
                {this.state.errorName && (<div className={'requiredInput'} dangerouslySetInnerHTML={{ __html: nameRequired }} />)}
              </label>
              <label>
                <input
                  type="text"
                  placeholder="Your number"
                  onChange={this.onChange}

                />
              </label>
              {this.state.errorNumber && (<div className={'requiredInput'} dangerouslySetInnerHTML={{ __html: numberRequired }} />)}
              <label>
                <input
                  type="text"
                  placeholder="Your email"
                  onChange={(event) =>
                    this.setState({ mailFilled: event.target.value })
                  }

                />
                {this.state.errorMail && (<div className={'requiredInput'} dangerouslySetInnerHTML={{ __html: mailRequired }} />)}
              </label>
              <label>
                <textarea
                  className={'textArea'}
                  placeholder="Type your message"
                  onChange={(event) =>
                    this.setState({ messageFilled: event.target.value })
                  }
                />
                {this.state.errorMessage && (<div className={'requiredInput'} dangerouslySetInnerHTML={{ __html: messageRequired }} />)}

              </label>

              {this.state.sent && (
                <p className="messageContact">
                  Thank you for your message! I will contact you as soon as
                  possible
                </p>
              )}
              <label>
                <input
                  type="submit"
                  className="inputSubmit"
                  onClick={this.handleSubmit}
                  value="submit"
                />
              </label>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NameForm;