import React from 'react';
import NavigationNew from '../components/NavigationNew';


// ✅ Creation d'une Class pour cree des objets et manipuler L'Heritage

class NameForm extends React.Component {
  constructor(props) { // 🔴 On ne peut pas utiliser `this` à ce stade car le constructeur est appele avant que celui ci soit execute, il nous faut une methode react appele super
    super(props); // ✅ Mais maintenant c’est bon !
    this.handleSubmit = this.handleSubmit.bind(this); // ✅ La methode Bind permet a son event (handleSubmit ou onChange) detre appele partout dans le code.
    this.onChange = this.onChange.bind(this);
  }

  // ✅ Ajout d'un etat locale 

  state = { // ✅ Attribution d'une valeur de base au state, vide car on veut des infos de la personne
    nameFilled: '',
    numberFilled: '',
    mailFilled: '',
    messageFilled: '',
  };

  // ✅ Creation d'une methode react pour recuperer une valeur

  handleSubmit(event) { // ✅ Alert Des que les champs input sont remplis et submit
    event.preventDefault();
    alert(
      'Hello ' +
      this.state.nameFilled +
      ' we have registred the following number : ' +
      this.state.numberFilled +
      ' and your email ' +
      this.state.mailFilled +
      ' and here is your message :\n\n\n' +
      this.state.messageFilled
    );
  }

  // ✅ Creation d'une methode react pour detecter une valeur

  onChange(event) { // ✅ Detecte la valeur du input ecrit
    const re = /^[0-9\b]+$/; // ✅ On cree un Regex afin de dire a notre input d'accepter uniquement les chiffres 0-9, le backspace.
    if (event.target.value === '' || re.test(event.target.value)) {
      this.setState({ numberFilled: event.target.value }); // ✅ Mettre a jour la locale du sate => Dans le cas present, il enregistre la valeur ecrit, a savoir un chiffre entre 0 a 9 avec la methode regex et la condition dessus.
    } else {
      alert('Please enter a valid form');
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
            <form locale="en-GB">
              <label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={this.state.nameFilled}
                  onChange={(event) =>
                    this.setState({ nameFilled: event.target.value })
                  }
                />
              </label>
              <label>
                <input
                  type="text"
                  placeholder="Your number"
                  value={this.state.numberFilled}
                  onChange={this.onChange}
                />
              </label>

              <label>
                <input
                  type="text"
                  placeholder="Your email"
                  value={this.state.mailFilled}
                  onChange={(event) =>
                    this.setState({ mailFilled: event.target.value })
                  }
                />
              </label>
              <label >
                <textarea className={'textArea'}
                  value={this.state.messageFilled}
                  placeholder="Type your message"
                  onChange={(event) =>
                    this.setState({ messageFilled: event.target.value })
                  }
                />
              </label>
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
