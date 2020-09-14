# ASSESSMENT 2: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Why would you use the method `super()`?

  Your answer: 
    super() is used if you're creating a new class that you want to inherit an existing class's constructors.

  Researched answer: 
    The method super() is used when extending a parent class into a new child class you want to create. Using super() in the child class will inherit the parent class' constructors. super() can also be used to call on methods in parent classes within child classes.



2. What is the DOM? What is the virtual DOM?

  Your answer: 
    DOM is Document Object Model. Not sure what virtual DOM specifically refers to.

  Researched answer:
    The DOM is an object-oriented representation of your page, that can be modified with a scripting language like JavaScript. A virtual DOM refers to an "ideal" version of your page. This is synced with the actual DOM for your page with something like ReactDOM. This might be wrong, still a little shakey on DOM.



3. What is a higher-order function?

  Your answer: 
    The only two higher-order functions that come to mind are .map() and .filter which return new arrays after manipulating the data. 
  
  Researched answer: 
    A higher-order function is any function that operates on other functions, either by taking them as an argument or returning them. .map(), .filter(), and .reduce() are all higher order because they can take other functions as their argument.



4. What is JSX?

  Your answer: 
    JSX is basically html written within a React app and rendered onto an HTML page through a single container. Used so that JavaScript can better interact with HTML elements and elements of the page can rerender without the entire page reloading.

  Researched answer:
    JSX is an syntax extension for JavaScript that allows you to render html tags on a page as React elements. It is not necessary to use React but is widely used as a visual aid for UI when working on JavaScript.



5. What is React?

  Your answer: 
    React is a JavaScript library that lets you create web applications.

  Researched answer:
    React is a JavaScript library for building user interfaces. It was created to be fast, scalable, and simple. It allows developers to create large web applications that can alter data without reloading the page.


6. What is yarn? What file(s) are updated when you run `$ yarn`?

  Your answer: 
    yarn allows you to cut down on the amount of dependencies you need in your program. yarn creates a yarn.lock with the locations tons of dependencies for you. 

  Researched answer:
    Yarn is a package manager for code. It allows devs to use and share code quickly and securely. The code is contained in a package (or module) and comes with a package.json file that lists the contents. 



7. What is localhost:3000? How do we use localhost:3000 in the development process?

  Your answer: 
    localhost:3000 is your current home server. We use it to preview React apps and be able to edit them with live updates.

  Researched answer:
    localhost refers to your computer's IP address, and 3000 refers to port 3000, which is where React is previewing your app.



8. What is an iterable in JavaScript? What data types are iterables? How can this information useful to you as a developer?

  Your answer: 
    An iterable is any variable that can be overwritten and given a new value. A let or var variable as opposed to a const that cannot change. Variables, Arrays, and Objects are all iterables. This is useful to us because you always need to know how your data is being manipulated, and if you have data that you need to stay consistent, you don't want an iterable.

  Researched answer:
    WAY off. Okay an interable is a data structure that can be "iterated" or suquentially moved through. Arrays, Strings, Maps, and Sets are all examples. It is useful to know how different data types can be looped through.


9. STRETCH: What is hoisting in JavaScript?

  Your answer: 
    Hoisting is when you place a variable that a function needs below the function. It causes the function to have to stop and go looking for the variable before it can continue. Bad Practice! (Thanks Andee haha)

  Researched answer: 
    Hoisting is when JavaScript has to move all of your variable and function declarations to the top of whatever scope it's currently in. 



10. STRETCH: What are closures in JavaScript?

  Your answer: Anything closing out a statement? Like ()'s, {}'s, or []?

  Researched answer:
    A closure includes a function and any surrounding variables in scope when the function is created.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- React state: allows you to have data within a class be set to a base value that can then be rerendered through React.

- React props: a prop stands for property. props are to components what arguments are to functions.

- React lifecycle methods: A method used to get rid of components in a React app when they are no longer needed in the DOM.

- API: Application Programming Interface: A set of definitions and protocols for building and integrating softwares. Lets your   software communicate with other software.

- e.preventDefault(): a method that allows you to prevent a defualt action from taking place on an event.

- DOM events: The notifier that lets code know when a certain event takes place?
