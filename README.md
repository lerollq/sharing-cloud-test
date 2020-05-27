[![Build Status](https://travis-ci.com/lerollq/sharing-cloud-test.svg?branch=master)](https://travis-ci.com/lerollq/sharing-cloud-test)

# SharingCloud Test

## Requirements

    * [Node.js](https://nodejs.org/) 8+
    * [npm](https://www.npmjs.com/get-npm)

## Prerequisites

    - git clone https://github.com/lerollq/sharing-cloud-test.git
    - cd sharing-cloud-test
    - npm install
    - Create .env file
    - Open .env file and add the REACT_APP_API_DOMAIN environment variable pointing to the API
        Example: REACT_APP_API_DOMAIN=http://localhost:3000

## Commands

Start the application

    $ npm start

Run linter

    $ npm run lint

Launch unit tests

    $ npm run test

Launch unit tests with coverage

\$ npm run test:coverage

## Info

The application has been deployed online using [Netlify](https://www.netlify.com/)
You can access it through this url: [Micro-Booking](https://sleepy-hawking-f5e92e.netlify.app)
However, the site assumes that you are running the backend API on localhost with the port 3001
If the backend is not running on localhost:3001 you will not be able to access the restricted area

# Feedback (FR)

Pour ce test, je n'ai pas réellement eu de difficulté "technique". Le seul bémol est que je n'avais encore jamais utilisé de librairie de type CSS-IN-JS. Dans le cas actuel, je suis parti sur la librairie 'styled-component'.
J'ai dû revoir globalement ma façon d'architecturer le projet (en comparaison avec les différents projets que j'ai pu réaliser jusqu'à aujourd'hui), et je me suis donc rapproché de l'architecture [Atomic Design Pattern](https://bradfrost.com/blog/post/atomic-web-design/).
Je dis bien 'rapprocher' car il n'a pas été forcément évident de respecter la convention (atomes/molécules/...) au fur et à mesure du développement et de l'ajout de nouveaux composant.
Point important, je n'avais pas si bien lu la documentation de la librairie styled-component, et je me suis retrouvé à créer et à interfacé chaque petit élément nécessitant le moindre CSS custom sous la forme d'un React Component, ce qui m'a fait perdre énormément de temps. J'ai donc fait un refacto pour supprimer ces composants qui étaient en fin de compte inutiles. (Il doit en rester certains. 🙈 )

À part ça, j'ai utiliser comme librairies [Redux](https://redux.js.org/) et [Redux-Thunk](https://github.com/reduxjs/redux-thunk) pour la gestion des states, [Reselect](https://github.com/reduxjs/reselect) pour optimiser la récupération des propriétés du store redux et ainsi éviter des rendus inutiles. Et bien évidemment Typescript.
Le seul package tiers utilisé dans l'affichage est [React-Toastify](https://github.com/fkhadra/react-toastify) pour afficher des notifications en cas d'erreur retourné par l'API.

Un système de CI à été mis en place à l'aide de [Travis](https://travis-ci.com/github/lerollq/sharing-cloud-test) qui va run dans un premier temp eslint pour checker l'ensemble du code, et ensuite éxécuter les tests unitaires et ceci à chaque push sur la branche master. Il y a vraiment très peu de test unitaires, mais ils sont présent pour montrer le fonctionement du CI.

En conclusion, très bon projet technique. J'ai détesté le CSS-IN-JS au début, puis quand j'ai réalisé que je l'utilisais mal, j'ai trouvé ça vraiment génial et je pense clairement l'utiliser au sein de mes projets futurs.

PS: Lorsque j'ai voulu implémenter la méthode POST /bookings, l'api retournait sans cesse "Cannot parse body..", après un check de l'api, un petit middleware était présent avant la déclaration des routes. J'imagine que c'était voulu ? 😈
