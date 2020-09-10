# AngFormsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.7.

## Development server

Run npm install at first then, run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Techniques
All the functionality implemented in the frontend, the database generated by the json file and the request to it sent using the asynch loading methods from the rxjs library. Localstorage is used to save user actions, and display a list of your favorite movies.

## Working principles
On the main page there are two types of forms: Template driven form and Reactive driven form.
In Template driven form is ready values, you can click to this two buttons and see the results of it (you can create new user, and submit/edit this form) and of course, exist some limit of this inputs, results of it you can see some warning.
In Reactive driven form (more complicated and dynamically) are inputs for username and password, which are required and have some limit of characters. Also,  there is an email, which is not required and you can add new email and delete this one. And in the bottom there are two buttons, first one replies for updating data to another(default data). And submit button, after click on it, form submits and resets.
 

On the main page there is a list of movies, where there is a button 'add', when you click on it, this movie is added to the cart(favorite list of Movies) , where you can then delete it and by clicking on the cart you can see what is there.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
