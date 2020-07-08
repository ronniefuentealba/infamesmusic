# INFAMES MUSIC
This is a ReactJS project.

## Project Setup

First, we need to initialize our node project. So let's run on our favorite terminal:

        npm init -y

Then, let's create our scaffold folder, where our app is gonna be host

        mkdir -p src

        mkdir -p dist
        touch dist/index.html

## Webpack Setup

> npm install --save-dev webpack webpack-dev-server webpack-cli

Folder structure:

        - dist
        -- index.html
        - node_modules
        - package.json


package.json

        ...
        "scripts": {
          "start": "webpack-dev-server --config ./webpack.config.js --mode development",
          ...
        },
        ...

From root folder:

        touch webpack.config.js

Now you should be able to start your webpack-dev-server.

From root folder:

        npm start

## Html-webpack-plugin & Html-loader
Add the dependencies with:

        npm i html-webpack-plugin html-loader --save-dev

Then update the webpack configuration:

const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  module: {
    rules: [
      ...
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
      ...
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};

## Babel Setup
Babel enables you writing your code in with JavaScript which isn’t supported yet in most browser.

From root folder:

        npm install --save-dev @babel/core @babel/preset-env

Moreover, in order to hook it up to Webpack, you have to install a so called loader:

        npm install --save-dev babel-loader

As last step, since you want to use React, you need one more configuration to transform the React’s JSX syntax to vanilla JavaScript.

From root folder:

        npm install --save-dev @babel/preset-react

Now, with all node packages in place, you need to adjust your webpack.config.js to respect the Babel changes. These changes include all packages you have installed.


From root folder:

touch .babelrc

Now you can add the configuration for Babel in the .babelrc file.

.babelrc

{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}

webpack.config.js

        module.exports = {
          entry: './src/index.js',
          module: {
            rules: [
              {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
              }
            ]
          },
          resolve: {
            extensions: ['*', '.js', '.jsx']
          },
          output: {
            path: __dirname + '/dist',
            publicPath: '/',
            filename: 'bundle.js'
          },
          devServer: {
            contentBase: './dist'
          }
        };

You can start your application again. Nothing should have changed except for that you can use upcoming ECMAScript functionalities for JavaScript now.

## React Setup in a Webpack + Babel Project

In order to use React, you need two more node packages.

From root folder:

        npm install --save react react-dom

In your src/index.js you can implement your first hook into the React world.

src/index.js

        import React from 'react';
        import ReactDOM from 'react-dom';

        const title = 'This is a SPA';

        ReactDOM.render(
          <div>{title}</div>,
          document.getElementById('app')
        );

### Hot Module Replacement in React

A huge development boost will give you react-hot-loader (Hot Module Replacement). It will shorten your feedback loop during development. Basically whenever you change something in your source code, the change will apply in your app running in the browser without reloading the entire page.

From root folder:

        npm install --save-dev react-hot-loader

You have to add some more configuration to your Webpack configuration file.

webpack.config.js

        **const webpack = require('webpack');**

        module.exports = {
          entry: './src/index.js',
          module: {
            rules: [
              {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
              }
            ]
          },
          resolve: {
            extensions: ['*', '.js', '.jsx']
          },
          output: {
            path: __dirname + '/dist',
            publicPath: '/',
            filename: 'bundle.js'
          },
          **plugins: [
            new webpack.HotModuleReplacementPlugin()
          ],**
          devServer: {
            contentBase: './dist',
            **hot: true**
          }
        };

## TroubleShooting

### Node

Make sure you have a recent version of [Node.js](https://nodejs.org/) installed.

# JavaScript Fundamentals
JavaScript es un lenguaje dinámico orientado a objetos.

## Pure Functions
The pure functions are the functions whose returned value depends solely on the values of their arguments.

## Impure Functions
Impure functions may call the database or the network, they may have side effects, they may operate on the DOM, and they may override the values that you pass to them.

## Estructuras de Control
- If/else se pueden encadenar. (Cuidado con el Callback hell!)
- Bucles while y do/while
- Operadores lógicos && y || usán lógica de corto-circuito
- Switch/case
  Enums se recomienda para mapear diferentes states. (more readable)

## Objetos
Son pares de nombre - valor.

    const obj = {}

##DOM
El contenido de la página es almacenada en el DOM y el acceso y manipulación se hace via JavaScript.

    API(web o página XML) = DOM + JS

DOM tiene estructura tree-like.

window.load espera a que el DOM y media hayan sido cargados.

## Var, let y const
Determinan como la variable debe ser tratada.
Let define una variable pero limita su uso al scope donde fue definida al igual que const, pero difiere que no podrá ser re-asignada con un nuevo valor una vez definida.

- No usar var.
- Const no pueden ser re-asignadas o re-declaradas.
- Let cuando se re-asigna la variable.

## Null
Null es una referencia que "apunta a la nada", por tanto se usa para indicar la ausencia de valor, ya sea en una variable que en este momento no apunta a ningún objeto, o en un retorno de un método que en una ejecución concreta no devolvió nada.

## Scope
Es lo que está dentro del block { }. Puede ser global o local. No confundir con object literal syntax.

## Hoisting
Variables definidas con var dentro de un block-scope serán hoisted de vuelta en el global scope. Las funciones definidas usando keyword function también serán añadidas al global scope. Las funciones seran hoisted primero que las variables.

Variables con let y const no serán hoisted.

## Classes
Las arrow functions usan auto-bin. El constructor puede omitirse cuando no se usan las props.

## Funciones Constructoras
Las Funciones Constructoras están diseñadas para ser llamadas por la keyword 'New'. Es la definición de un tipo de objecto específico.

Para utlizar los exports de ES6 se debe incluir type="module" en el script que se importa.

En ES10 los imports pueden ser asignados a variables.

## Strict Mode
- No se puede usar undefined variables en Strict Mode, si Strict Mode no estuviera habilitado al usar una undefined variable está será creada.
- Previene que ciertos statements no sean generados a pesar de ser no válidos.
- Te darás cuenta de más errores fácilmente.

## Expresiones
Es todo aquello que produce un valor.

## Symbols (ES6 Primitive Type)
No existe función constructora.
Se pueden utilizar para definir propiedades privadas del objeto. Están serán omitidas al usar:
  objects.entries, objects.keys y tambien cuando se usen el loop for ...in, ó al convertir a string usando JSON.stringify.

## Operators
- Arithmetic
  (+, -, *, /, %, ++, --)

- Assignment
  (=, +=, -=, *=, /=, %=)
  Equal operator es evaluado right(x) to left(y).

- String
  (=, +=, +)

- Comparison
  (==, ===, !=, !==, >, <, >=, <=)
  Siempre que se compare un string numérico con un número retornará true.
  Siempre que se compare un string no numérico con un número retornará false.

- Lógical
  (&&, ||, !)
  Comúnmente usando en condiciones que retornan un false.

- Bitwise
  (&, |, ^, ~, <<, >>)

- Typeof
  Se usa para evaluar el tipo de un valor. Puede ser primitive type, object o function. Typeof returna un string.

- Ternary
  Statement?value:value;
  Es como un ifelse inline statement.

- Delete

- In
  Revisa si una propiedad existe en un objecto.

## ...rest y ...spread
...rest ayuda a referenciar unn número de items al extraerlos del parámetro de una funcionan. Los valores se guardan en un array[].

...spread por el contrario que rest, este toma los valores de un array[] y/o object{}. Se puede usar en cualquier lugar de la lista. Se pueden mergear objectos/arrays con la sintaxis ...spread.

## Destructuring Assignment
Se utiliza para extraer multiples items de un array[] y objects{} asignándolos a variables.
Second-level objects son serán escaneados, pero se pueden extraer directo de las inner properties del object{}.

## Arity
Asi se le conoce al número de argumentos que una function acepta.
    function.length

## Currying
Es un patrón que inmediatamente evalua y retorna otra expresión funcional. Está incluido dentro de la functional programming.

## Loops
    for(initialize, condition, increment)
Los array[] son iterables. Por eso cada item posee un index.
Los objects{} son contables (enumerable).

Ejemplos de loops:
  for, for ...in, for ...of, while y array.forEach.

Algunos array.* methods también son iterators:
  .values, .keys, .map, .every, .some, .filter, .reduce y otros. (Todos son HOCs(Higher Order Functions)).

### For ...of
Solo acepta iterables.

### For ...in
Si quiero iterar non-iterables (objects{}). Todas las propiedades non-enumerable serán omitidas.

### While (condition)
Itera indefinidamente hasta que la condición sea false.

# JavaScript Methods

## string.split()
Toma el string y retonar un array con dada uno de los carácteres del string.

## array.split()
Toma un array y lo convierte a un string concatenado con el separador elegido.

# Redux - Dan Abramov
## Principles
### I
The *state* application is a single javascript Object {}. Everything that changes in your application, including the data and the UI state, is contained in a single object, we call the state or the state tree.

### II
The state tree is read only. The only way to change the state tree is by dispatching an action. An action is a plain JavaScript object, describing in the minimal way what changed in the application. Whether it is initiated by a network request or by user interaction, any data that gets into the Redux application gets there by actions.

### III
To describe state mutations, you have to write a function that takes the previous state of the app, the action being dispatched, and returns the next state of the app. This function has to be pure. This function is called the *"Reducer."*

  function counter(state, action) {
    return state;
  }

## Store Methods
The store binds together the three principles of Redux. It holds the current application's state object. It lets you dispatch actions. When you created, you need to specified the reducer that tells how state is updated with actions.

  const { createStore } = Redux;

  const store = createStore(reducer);

The following are the three methods of the store:

### Method getState()
The first method of this store is called get state. It retrieves the current state of the Redux store.

  store.getState();

### Method dispatch()
The second and the most commonly used store method is called dispatch. It lets you dispatch actions to change the state of your application.

### Method subscribe()
It lets you register a callback that the Redux store will call any time an action has been dispatched, so that you can update the UI of your application. It will reflect the current application state.

  store.subscribe(() => {
    document.body.innerText = store.getState();
  });

### Redux Store
We know that the store holds the current state. We keep it in a variable, and the get straight function is going to return the current value of that variable. This function, combined with the Dispatch function and a Subscribe function on a single object is what we call the Redux store.

  const createStore = (reducer) => {
    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
      state = reducer(state, action);
      listeners.forEach(listener => listener());
    };

    const subscribe = (listener) => {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter (l => l !== listener);
      };
    };

    dispatch({});

    return { getState, dispatch, subscribe };

  };

## Mutations
Mutations are not allowed on Redux.

### Avoiding Array mutations
Instead of push method we can use the *concact() method*, which does not modify the original array. To avoid all the concat call we can use the spread operator added on ES7 (included on Babel).

### Avoiding Objects mutations
Object assign method lets you assign properties of several objects onto the target object.Note how the object assign argument order corresponds to that of the JavaScript assignment operator. The left argument is the one whose properties are going to be assigned, so it's going to be mutated. This is why we're passing an empty object as the first argument, so we don't mutate any existing data. Every further argument to object assign will be considered one of the source objects whose properties will be copied to the target object.

This can be achieve as well using the new object spread operator.

# Programación Funcional
## Introduction
El paradigma funcional se remota a la decada de 1930 (Alonzo Church). A tomado un auge en los últimos 5-10 años.

array[position]
## Funciones Puras
Es importante que, en la medida de lo posible, el código sea puro, dado que al no haber cambios de estado, es más fácil razonar sobre como va a comportarse; no tengo que pensar que pasaría si el estado de la variable cambiara a lo largo del tiempo.

## Aplicando funciones
Aplicar una función significa pasarle todos los parámetros que necesita, con el fin de obtener su retorno. Dicho de otra forma, aplicar una función es ejecutar su código.

Cuando una functiontiene efecto, esto signfica que produce cambios de estado, pero son visibles más allá de la ejecución de esa function, porque modifican al contexto en el que se ejecuta.

## Estructuras Inmutables
Son los valores compuestos cuyas partes no podemos (al menos, no tiene sentido) reemplazar por otras, y por tanto, para simular su actualización, es necesario crear nuevos valores que copien las partes que no cambian.

## Recursividad
Toda función recursiva debe tener al menos un caso base y al menos un caso recursivo.
*Caso base*, es aquel en que no se llama directa ni indirectamente a la función principal. Por el contrario, el *caso recursivo* es aquel donde aparece esta llamada.

##Funciones anónimas
Normalmente utlizaremos funciones anónimas cuando no necesitemos referenciar dos veces a esa función, es decir, cuando no tengamos que reutilizarla.

## Higher Order Functions
Una función es de orden superior cuando toma otras funciones como parámetro, y/o devuelve otra función.
Las funciones de order superior son más genéricas, porque su comportamiento no viene dado solamente por el cuerpo de la función, que toma por parámetro.
Las funciones son valores, por tanto, pueden aparecer en cualquier lugar en que una variable podría ser utilizada.

### Filter
La función filter sirve para quedarse con los elementos de una lista que cumplan una cierta condición.

# Programación Orientada a Objectos
En el paradigma de objetos tenemos los objetos y los mensajes.

  Objecto.mensaje()

Los *objetos* por lo gerenal los identificamos con sustantivos y los *mensajes* con verbos.

## Métodos
Son aquellas functions de JS que se le asignan al objecto. La function no afectará a pepita.

## This
Es el objecto receptor del mensaje que estoy evaluando.

  var pepita = {};
  pepita.volar = function() {
    this.energia -= 10;
  }

## Comparar por identidad
Que la comparación entre dos referencias es verdadera sí y solo sí ambas apuntan al mismo objeto.

Los objetos se comparan siempre por identidad. Dado que la sintaxis literal {} crea un nuevo objeto, entonces nunca pueden ser ambos el mismo objeto.

Los arrays son objetos, y por tanto se comparan por identidad. Dado que la sintaxis literal [] crea un array nuevo, entonces nunca pueden ser el mismo objeto.

## Comparar por equivalencias
Que la comparación entre dos referencias es verdadera si ambas apuntan a objetos cuyas variables internas tienen igual valor.
