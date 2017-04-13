# angular-base-project — Esempio d'applicaizone angular chiara e strutturata
Il progetto è in continua fase di sviluppo e vuole essere una guida a tutti i dev che decidono di iniziar con il mondo di Angular da 0 e per quelli che conoscono già angular e vogliono imparare a strutturare meglio la propria applicazione

### Clonare il progetto

Clona il repositori angular-base-project usando [git][git]:

```
git clone https://github.com/thecreazy/angular-base-project.git
cd angular-base-project
```

Se vuoi iniziare un progetto senza tutta la storia .git puoi utilizzre:

```bash
git clone --depth=1 https://github.com/thecreazy/angular-base-project.git <your-project-name>
```

### Istallare le Dipendenze 

Abbiamo due tipi di dipendenze per questo progetto, quelle nodejs e quelle angular

* Istalliamo le dipendenze node utilizzando `npm`, the [node package manager][npm].
* Istalliamo le dipendenze client via `bower`, a [client-side code package manager][bower].

Abbiamo configurato `npm` per far partire in automatico  `bower` e quindi ci basta digitare:

```
npm install
```

E dietro le scene fata partire il comando `bower install`, tutto questo ci porterà ad avere due nuove cartelle nel nostro progetto:

* `node_modules` - che contiene le dipendenze node di cui abbiamo bisogno
* `app/bower_components` - che contiene le dipendeze angular di cui abbiamo bisogno

*Note che la cartella `bower_components` di solito viene istallata nella root ma noi abbiamo cambiato il file `.bowerrc` in modo da posizionarlo dentro app.

### Start dell'applicazione

Abbiamo configurato npm in modo che besti digitare

```
npm start
```

E potremmo accedere alla nostra app via browser all'indirizzo `http://localhost:8000/app/index.html`.



## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  external/             --> the folder for external files
    users.json          -->JSON of the users
  modules/
      users/                --> the users view template and logic
        users.html            --> the partial template
        module.js              --> the module logic
        users.controllers.js   --> the controller logic
      purchase/                --> the purchase view template and logic
        purchase.html            --> the partial template
        module.js              --> the module logic
        purchase.controllers.js   --> the controller logic
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
karma.conf.js         --> config file for running unit tests with Karma
gulpfile.js          --> config file for gulp
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```

## Lezioni
 1 - [Prima lezione: Startup della “spaghetti code” App](https://canellariccardo.it/angularjs-creare-un-applicazione-passo-dopo-passo-1deg-step/)
 
 2 - [Seconda lezione: Services, Filtri e librerie esterne](https://canellariccardo.it/angularjs-creare-un-applicazione-passo-dopo-passo-2deg-step/)

 3 - [Terza lezione: Single Responsibility, IIFE e Gulp](https://canellariccardo.it/angularjs-creare-un-applicazione-passo-dopo-passo-3deg-step/)
 
 4 - [Quarta lezione: Typescript, Yarn, TSLint](https://canellariccardo.it/angularjs-creare-un-applicazione-passo-dopo-passo-4deg-step/)
