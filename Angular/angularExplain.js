// What is Angular?
//Angular is a framework & platform which contains a component driven architecture which helps to create single page application using html, css & typescript in a efficent way.

// What are the key features of Angular?
// two-way databinding
// dependacy injection
// directives
// component-driven-architecture
// Routing for navigation through diff pages
// services
// angular CLI
// RXJS - Obserbable

// What is the difference between AngularJS and Angular?.###
// AngularJS is written in javascript while angular is rewritten in typescript & it helps for better performance & more roboust than angularJs

// What is a module in Angular?.###
// angular.module - it is like the core of angular where all the component & imports name are there in a structure way
// @ngModule
// declaration -> all the component which were used in the application
// import - contains all the library which were imported throughout the application

// What are Angular components?.###
// compoent-driven architecture is the core fundamental of angular using this we were able to create a compoent where we have 3 files as html, css & ts file means typescript file
// where by linking them with each other we can create a single web page, it is defined by @Compoennt decorator

// What are Angular directives?.###
// angular derictive are pre-define methods which helps to make our process much easier
//- directive is a fundamental building block that allows you to extend HTML's capabilities by adding behavior and functionality to elements

// there are types of directive are there
// component directive ->
// @Component type decorator which works by taking the help of the template HTML
//selector, templateUrl, styleURL, ngonInit
// property directive -> ngIf, ngFor
// Attribute Directive ->
// ngClass & NGStyle
// NGClass - you can declare the css within the html file only using the condition declared in the ts file
// NGStyle - you can declare the css class methods as per the bussiness logic written in the ts file , then you can add the condtion wheather to display the css class or not
//custom directive -> you have generate a directive page then you write bussiness logic in that page

// How does Angular handle data binding?.###
// There are 4 types of data binding are there
// data interpolation {{}} // the variable value is declared inside the t.s file
// two-way data binding -> where we can share the data from t.s file to html file & vice versa using [(ngModule)]
// property binding -> [disabled] = 'condition' //where we can bind certain property condition as per the logic written in the t.s file
// event binding -> onClick, onChange($event)

// What is Angular CLI?.###
//Angular CLI is a command line interface of angular means it helps to run angular own commans like..
// ng serve -> run project
//  ng new <project-name>, create new project, ng generate -> to create new component, ng build -> to initiate the build of the entire application in local

// What is dependency injection in Angular?.###
// so in services you write some business logic & methods which are helpful to pass data  among different components using subscribe method
// you inject that service file into the component
// then you declare that service file name inside the component constructor
// this whole process is called as dependacy injection -> means we inject a external file to use some data -> so basically we are dependant over that data that's why we use dependacy

// How does Angular handle routing?.###
// Angular Routing is a pre-define library present in Angular it helps to navigate from one page to another or we can say from once component to another component as well
// there are some key feature in routing which are ->
// AuthGuard(which helps to check wheather you are authorised to visit some page or not)
// canActivate : it works along with the auth-guard which helps to authorised the routing URL path
// routlink -> which is a anchor key used in html file, which can directly rout to that page
// Routes Configuration: -> each Rout is defined inside an array which defines a path where the page will be rout
// Also we can map inside that Array for Parent & child component as well

// What are Angular services?.###
// Services are classes which helps to pass the data among the components using subscribe method
// some key uses of services
// fetching data from API
// passing data from one component to another using obserbable
// writing some bussiness logic if required
// then we inject that file in the component & call the file name inside the constructor -> the whole process is called as dependacy injection

// What is Angular's change detection mechanism?.###
// so whenever we update a value we were able to see the value in UI without reloading the page that happens because of change detection mechanism
// Angular have some built in feature which helps to detect the change whearever it happens manually by changing any value or after a button click it automatically checks well

// What are Angular pipes?.###
// angular pipe is a built-in feature which take an input value, process it, format some data as per the bussiness logic which will return a formatted value
// {{amount | 'currency :'usd'}}

// pre define methos are - Date, Currency-Pipe

//PURE PIPE VS IMPURE PIPE :
// also we can write custome pipe :-
// there are two type of pipe :-
// pure pipe
// so pure pipe means which are directly getting called after it receives a input value, also it includes all the pre-define pipes, & all the pipe & custome pipes are bydefault pure = true
// & impure custom pipe
// impure pipe means it will be called after every change detection, it doesn't depends upon the input value, which can result a decrement in performance
// & It can be done by setting the pure key as : false in the @Pipe decorator

// How do you handle forms in Angular?.###
// There are two types of form are there :-
// template-driven
// all the property are declared inside the html file
// it is good for small pages like login or forget password
// reactive-form
// very efficient for larger forms like register page or product detail page
// formGroup & formController like library are available for the reactive-form which helps to validate & give certein condition for the form in the script file

// What are HTTP interceptors ?.###
// We manipulate some API request before sending it to the server , like adding bearer token or any header errorHandlingConfig, that's why we use HTTP interceptors by creating a interface in an service file
// Purpose of HTTP Interceptors =>
// Request Transformation: Modify or enrich HTTP requests before they are sent to the server.
// Response Transformation: Modify or handle HTTP responses before they reach your application code.
// Error Handling: Catch and handle errors from HTTP responses centrally.
// Logging: Log requests and responses for debugging or monitoring.

// How to send data from parent-to-child & child-to-parent? .###
// from parent to child we use @Input property
// from child to parent we use @output & event emitter property
// also there is a another way to sending data from one component to another is by using services, which is a angular pre-defined feature

// 22. What is Eager and Lazy loading? .###
// Loading: The eager loading technique is the default module-loading strategy.
// Eager loading feature modules are loaded before the program begins. This is
// primarily utilized for small-scale applications.

// Lazy Loading: Lazy loading loads the feature modules dynamically as needed.
// This speeds up the application. It is utilized for larger projects where all of the
// modules are not required at the start.

// What is transpiling in Angular ?.###
// while initating the build it helps to convert the typescript code into javascript code

// What are Decorators and their types in Angular?.###
// Decorator are the annotation @used to describe the class name or the method name or the property name which are predefined by created by angular
// It helps to add meta data to the decorator
//decorator can be used for a class method or can be a property type decorator

// What are RxJs in Angular ?.###
// Rxjs is a acrynom used for reactive extension for javascript ,
// which can be used by using a Observable in our angular project inside the services
// Subjects: Multicast values to multiple subscribers.
// Operators: Transform, filter, combine, and handle observables.

// Create a Angular application
// npm install -g @angular/cli
// ng new my-angular-app

//how to download a table in excel format
// we can use a library by installing via npm which is xlsx

//angular runs in which server
//Angular runs in ANgular CLI server which is it's own server

//How to improve angular application performance
//use lazy loading
// ng for technique
//avoid using ngIf
//optimize your images

//How angular bootstrap or starts:-
// 1. Start from main.ts: The application begins execution in the main.ts file.
// 2. Bootstrap the Root Module: The platformBrowserDynamic().bootstrapModule(AppModule) function is called to initialize the root module.
// 3. Process AppModule: Angular processes the metadata of the AppModule, setting up the application structure.
// 4. Locate the Selector: The AppComponent uses a selector (e.g., <app-root>) to identify where in the DOM it should be rendered.
// 5. Render in index.html: The index.html file contains the selector for the root component, where Angular inserts the AppComponent.
// 6. Run Change Detection: Angular performs change detection to ensure the view is in sync with the component's data.
// 7. Display Application: The application is fully rendered in the browser, making it visible to the user.

// what is the difference between observable & promise
// Observable: Handles multiple values over time, is lazy and cancellable, and offers advanced operators for manipulating streams of data.
// Promise: Handles a single value or error, is eager and not cancellable, and is simpler but less flexible for complex asynchronous operations.

// Subject:
// Does not hold the current value.
// New subscribers do not receive past values, only future ones.
// Use it when you don’t need to store or emit previous values to new subscribers.

// BehaviorSubject:
// Holds and provides the current value to new subscribers.
// Requires an initial value.
// Use it when you need a stream that provides the latest value to new subscribers, including an initial value.

// Lifecycle of components?

// Lifecycle Flow
// Here’s a simplified flow of the component lifecycle:
// Creation Phase:
// ngOnChanges()
// ngOnInit()
// ngDoCheck()

// Content Projection Phase:
// ngAfterContentInit()
// ngAfterContentChecked()

// View Initialization Phase:
// ngAfterViewInit()
// ngAfterViewChecked()

// Destruction Phase:
// ngOnDestroy()

// What is ng-content? / What is content Projection?
// ng-content is used for content projection, allowing dynamic content insertion from parent to child components.
// It enables the creation of flexible and reusable components.
// You can project single or multiple pieces of content based on your needs.

// What are the angular provided modules we use in our app?
// Core Angular Modules

// BrowserModule:
// Necessary for any Angular application that runs in a web browser.
// It includes common directives like ngIf and ngFor.

// CommonModule:
// Provides common directives and services for use in Angular modules, but is mainly used in feature modules.

// FormsModule:
// Supports template-driven forms, allowing you to create forms using Angular directives in the template.

// ReactiveFormsModule:
// Supports reactive forms, providing a more programmatic approach to form handling and validation.

// HttpClientModule:
// Enables the use of the HttpClient service for making HTTP requests to communicate with backend services.

// RouterModule:
// Provides services and directives for implementing routing in your application, enabling navigation between different views or components.

// BrowserAnimationsModule:
// Enables animations in Angular applications, allowing for smoother transitions and effects.
// Additional Angular Modules

// NgModule:
// A fundamental building block for creating Angular applications, allowing you to group components, directives, pipes, and services.

// what is singleton classes ?
// only one class instance is available throughout the whole application, example services in angular

// Diff between constructor & ngoninit ?
// constructor is used to initialize any global variable, or to inject any services into the component
// but ngoninit is used while any input operation like any function need to be start when the component starts then we can call the function inside the ngonInit, also ngoninti Perform initialization logic of the component that depends on input properties,

// how to call multiple api at the same time & how to configure ?
// using forkJoin we can call multiple api at a same time

// explain input & output decorator
// It is a way to pass data from one component to another component with the help of event emitter function

// setup Angular & setup Node.js

// tell me about rxjs & ngrx ?
// RXJS :
// What It Is: RxJS (Reactive Extensions for JavaScript) is a library for reactive programming using Observables. It provides a powerful way to work with asynchronous data streams.
// NGRX :
// What It Is: NgRx is a state management library for Angular applications that is inspired by Redux. It leverages RxJS to manage application state in a reactive way.
// Selectors -> Component -> Action -> Reducer ->  -> Selectors ...
//  Store -> Selectors -> Component -> Action -> Reducer -> Store

//What is state management
// State management in Angular refers to the techniques and patterns used to manage the state of an application consistently and predictably. State encompasses any data that can change over time, including user inputs, data retrieved from APIs, UI state, and more.

//Angular 8 new features
// Lazy Loading with Dynamic Imports:

//Angular 17 new feature
// SingleTon component, removing of extra boilerplate code

//what is async pipe
// Automatic Subscription: The async pipe automatically subscribes to an observable or a promise. When the data is available, it updates the template with the emitted values, and when the component is destroyed, it automatically unsubscribes to prevent memory leaks.

// 10 rxjs operators
// map, mergeMap, filter

// formgroup vs form builder
// formgroup - it helps to manage validation in a reactive form in a dynamic way using formcontrol
// formBuilder - it simplify the process of creating formcontrol & formgroup

// Generic types in angular
// it helps to generate diff function & class which can works with diff data types while maintaining type sefty in typescript

// How to add dynamic validation in form
// Setup: Import ReactiveFormsModule and create a FormGroup with initial validators.
// Dynamic Validation: Use setValidators() and clearValidators() to manage validators based on conditions.

// What is nested reactive form?
// Nested reactive forms in Angular allow you to create complex forms by organizing form controls into groups and sub-groups.

// Use of interface in angular
// In Angular, interfaces are used to define the structure of data objects, which helps in ensuring type safety and better code maintainability.
