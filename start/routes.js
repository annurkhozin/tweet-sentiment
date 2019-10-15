'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('template')

Route.group(() => {
    Route.get('crawling', 'TweetController.index')
}).prefix('api')

Route.get('home', 'TweetController.index')
Route.get('sentiment-process', 'TweetController.crawling')
Route.get('test', 'TweetController.test')
