# README

* Install ruby 2.1.5 & bundler

		env CC=/usr/bin/gcc rbenv install 2.1.5
		gem install bundler

* Database creation

		rake db:reset db:create db:migrate

* Database initialization

		rake db:seed

* Run it

		rails server
