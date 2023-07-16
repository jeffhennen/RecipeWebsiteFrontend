# This is my Recipe Website Frontend

This is front end portion of the Recipe Website project which will be at HennenRecipes.com

With this frontend I am trying to make this as usable and readable as possible with the following Tech stack
* Java
* HTML
* CSS
* React.js
* React Router

This is going to be the front end that is going to be purely doing all the SPA related tasks.

Currently there are a total of 5 base pages.
* Home page
* Recipes page
* Add Recipe Page
* Ingredients page
* About page

# Home Page
This is currently a work in progress trying to define what the home page contents are going to be.

# Recipes Page
At this point this is going to be a page where you will be able to see all the current recipes in the database and have them displayed as clickable cards to navigate you to their corresponding page.
This will eventually have a search bar which will then do a fetch for a list of ingredients that fit the criteria.
The links will end up navigating you to a dynamic react route which will query that specific recipe id and then populate all the corresponding components which are as follows
* Recipe_name
* Description
* Table of ingredients
* recipe steps
* recipe notes

With these fields, you will be able to then update each of the corresponding fields and then do a update api call to update the recipe on the database or delete from the database.

# Add Recipe Page
This has not yet been implemented yet but will be a page where you can create a new recipe by adding in the corresponding fields of the recipe

# Ingredients Page
This is not yet implemented but thinking this will just be a large table of ingredients where you can then add to the table and then save it to the database. You will also be able to delete the ingredient if it is not being used in a recipe.

# About page
this will have information about myself Jeffrey Hennen.

# Backend Link
This backend is built using Node.js, Express.js, Mysql and Prisma. This would be HennenAPI.com
https://github.com/jeffhennen/RecipeWebsiteBackend
