# React + Redux

## Getting started

### Front-end Development

#### Front-end development

    Front-end development refers to what the end user (also commonly referred to as the "client") can see. In the most basic forms, front-end development consists of HTML, CSS, and JavaScript.
    - React was created by Facebook and released to the public in May of 2013 and has been consistently maintained since then.

#### Why React

    React is one of the most popular JavaScript libraries for front-end web applications.

    Here are some of the advantages of React:

    Speed
    Interactive websites need to update the DOM (Document Object Model) each time a change happens. This process is generally resourceful and slow.
    Compared to other libraries that manipulate the DOM, React uses a Virtual DOM, allowing to update only the parts of the website that have changed. This increases the speed of updates dramatically, as modern web applications may contain thousands of elements.

### Adding React to a Website

#### Adding React

    React can be added to a website without any special tools and installations.

    First, we need to add the React library as two script tags to the head of our HTML document:

    Next, we need to add another script, to enable the use of JSX (syntax extension to JavaScript).

    We add a container, that will be used to display something using React.

### Create React App

    npx create-react-app my-app
    cd my-app
    npm start

#### Project Structure

    - public/index.html: template
    - src: js, css, image that will be compiled into a bundle file and injected into index.html.
    - React compiled into a bundle file: It uses what is called a 'file loader'. In the case fo Create React App, Webpack is used.
    - Bundle all added together into a single file.
    - index.js: the entry point
    - App.js: the file is the main component that will be rendered to the DOM.

#### StackBlitz

    index.html: The HTML page template.
    index.js: The entry point of our app.
    style.css: the stylesheet for our project.
    package.json: holds various metadata relevant to the project, like dependencies.

### Course Project

    - List contract management.

## Intro to React

### JSX

#### What is JSX?

    - It is a syntax extension to Javascript. It allows us to build UI elements right in the JavaScript code

#### Intro to JSX

    - When you call the render method, any existing content of the container gets replaced. That is why, usually, the containers are empty in the HTML.

#### Expressions in JSX

    - Using curly braces.
    - JSX can be used just like Javascript expressions. You can assign a SX expression to a variable, return it from a funciton, etc.

#### Attributes in JSX

    - Can specify attributes using protes, just like HTML. `<div id = "name"></div>`
    - When using a JS expression as the attributes value, the quotes should not be used. `<div id="{user.id}"></div>`
    - React DOM uses camelCase property naming conventino instead of HTML attribute names.
    - For example, class becomes className in JSX.

### Virtual DOM

#### How Does JSX work?

    - When the JSX expressions are compiled, they are converted into JS object, representing React elements.
    - React then uses these elements to build the corresponding HTML DOM and display it in the browser.
    - Reat updates only the elements that need an update. This example, only the text in the paragraph gets updated every second.
    - React uses a Virtual DOM, which is a lightweight representation of the DOM. When an element gets changed, it is first updated in the Virtual DOM. That process is fast, as the virtual DOM is represented by simple objects.
    - After that, React compares the Virtual DOM to its previous state and only applies the DOM updated necessary to bring the DOM to the desired state.

## Intro to Redux
