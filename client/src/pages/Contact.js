import axios from 'axios';
import React from 'react';
import NavigationNew from '../components/NavigationNew';


const required = `
<p>PLease fill this element<p/>
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
    errorFill: false
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
    if (this.state.nameFilled === '') {
      this.setState({
        sent: false,
        errorFill: true
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
                  // value={this.state.nameFilled}
                  onChange={(event) =>
                    this.setState({ nameFilled: event.target.value })
                  }

                />
                {this.state.errorFill && (<div dangerouslySetInnerHTML={{ __html: required }} />)}
              </label>
              <label>
                <input
                  type="text"
                  placeholder="Your number"
                  // value={this.state.numberFilled}
                  onChange={this.onChange}

                />
              </label>
              {this.state.errorFill && (<div dangerouslySetInnerHTML={{ __html: required }} />)}
              <label>
                <input
                  type="text"
                  placeholder="Your email"
                  // value={this.state.mailFilled}
                  onChange={(event) =>
                    this.setState({ mailFilled: event.target.value })
                  }

                />
                {this.state.errorFill && (<div dangerouslySetInnerHTML={{ __html: required }} />)}
              </label>
              <label>
                <textarea
                  className={'textArea'}
                  // value={this.state.messageFilled}
                  placeholder="Type your message"
                  onChange={(event) =>
                    this.setState({ messageFilled: event.target.value })
                  }
                />
                {this.state.errorFill && (<div dangerouslySetInnerHTML={{ __html: required }} />)}

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