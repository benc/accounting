# Accounting sample app

Sample app using Angular 1.3 and EcmaScript 6.

## Server

Simple app using [rails-api][1] and [grape](2).

[1]: https://github.com/rails-api/rails-api
[2]: https://github.com/intridea/grape

### Get it up and running

* Get into the server directory

		cd server

* Install ruby 2.1.5 & bundler

		env CC=/usr/bin/gcc rbenv install 2.1.5
		gem install bundler

* Database creation

		rake db:reset db:create db:migrate

* Database initialization

		rake db:seed

* Run it

		rails server

## Client

### Get it up and running

* Get into the client directory

		cd client

* Install gulp

		npm install -g gulp

* Run it

		gulp serve

