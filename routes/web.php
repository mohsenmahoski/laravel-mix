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
Auth::routes();
Route::group(['prefix' => 'admin'],function(){
	Route::get('/login' , 'Auth\AdminLoginController@showloginform')->name('admin.login');
    Route::post('/login' , 'Auth\AdminLoginController@index')->name('admin.login.submit'); 
    Route::get('/' , 'AdminController@index')->name('admin.dashboard');

    //reset password 
     Route::post('/password/email','Auth\AdminForgotPasswordController@sendResetLinkEmail')->name('admin.password.email');
     Route::get('/password/reset','Auth\AdminForgotPasswordController@showLinkRequestForm')->name('admin.password.request');
     Route::post('/password/reset','Auth\AdminResetPasswordController@reset');
     Route::get('/password/reset/{token}','Auth\AdminResetPasswordController@showResetForm')->name('admin.password.reset');});
Route::get('/home', 'HomeController@index')->name('home');
