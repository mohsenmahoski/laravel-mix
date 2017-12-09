<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/test',function(){
	return view('test');
});

Route::get('/blog',['uses' => 'BlogController@Index', 'as' => 'blog.index']);
Route::post('/blog/{id}',['uses' => 'BlogController@getsingleblog', 'as' => 'blog.single']);
Route::post('/contact',['uses' => 'PagesController@send_message', 'as' => 'contact']);