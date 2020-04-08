# Intro
This project is meant to be an example of how to structure a server project to deploy to heroku. The public folder has an already built create-react-app web app. These are just static files that the server will serve.

# .env
Sometimes your code needs to be provided sensitive information. In our server, we need the url to our mongodb database which includes the username and password. Our authentication code needs a SECRET value to be the key for the encryption and decryption. This information should not be public but if we include it in our code which is part of a git repo, what will happen when you push it to github? This sensitive information will be viewable by the world. We need to organize our code such that all private information is in one specific file. The rest of the code can then retrieve the information from this file. This file should then not be included in the git repo. How do you tell git to ignore certain files? What happens when someone clones your repo and needs that file?

# Setup
* fork, clone, npm i 
* create an env file locally and put values for mongodburi and SECRET
* run the server and open localhost
* connect the repo to your heroku app and deploy the master branch
* Enter the config vars

# Database
* Make sure you have a mongodb database setup with the connection string
* put your database url in the env file and config var

# Deployment
* Make sure to have an account with Heroku
* Create an application with a unique name
* Connect your github account to Heroku and link to your fork of this repo
* Deploy your code to Heroku from github
* Setup the config vars for mongodburi and SECRET

