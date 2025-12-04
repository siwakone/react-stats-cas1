

import logo from './logo.svg';
// Créez un projet avec `npx create-react-app mon-projet`
// Dans le fichier `src/App.js`

import React from 'react';

// Assurez-vous d'avoir un fichier `src/App.css` pour les styles de base
import './App.css';

// Informations de la personne
const person = {
  fullName: 'John Doe',
  bio: 'Développeur JavaScript expérimenté',
  imgSrc: 'via.placeholder.com', // Remplacez par une URL d'image
  profession: 'Développeur Logiciel'
};

class App extends React.Component {
  constructor(props) {
    super(props);
    // 1. Initialiser l'état avec la personne et l'état d'affichage
    this.state = {
      show: false,
      elapsedTime: 0
    };
    this.intervalId = null; // Pour stocker l'ID de l'intervalle
  }

  // 2. Utiliser les méthodes du cycle de vie pour l'intervalle
  componentDidMount() {
    // Démarrer l'intervalle lorsque le composant est monté
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        elapsedTime: prevState.elapsedTime + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Nettoyer l'intervalle lorsque le composant est démonté
    clearInterval(this.intervalId);
  }

  // 3. Créer une fonction pour basculer l'état
  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>Composant de classe avec État et Cycle de Vie</h1>
        {/* 4. Ajouter le bouton pour basculer l'affichage */}
        <button onClick={this.toggleShow}>
          {this.state.show ? 'Cacher le Profil' : 'Afficher le Profil'}
        </button>

        {/* 5. Afficher le profil uniquement si show est vrai */}
        {this.state.show && (
          <div>
            <h2>{person.fullName}</h2>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>{person.profession}</p>
            <p>{person.bio}</p>
          </div>
        )}

        {/* 6. Afficher le temps écoulé */}
        <div>
          Temps écoulé : {this.state.elapsedTime} secondes
        </div>
      </div>
    );
  }
}

export default App;