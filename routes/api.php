<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/login','API\PassportController@login')->name('api.login');
Route::post('/register','API\PassportController@register')->name('api.register');
Route::post('/email_check','API\PassportController@email_check')->name('api.email_check');

Route::post('/confirm/','API\PassportController@confirm_user')->name('api.confirm_user');
Route::post('/confirmed/','API\PassportController@confirmed_user')->name('api.confirmed_user');

Route::get('/blog',['uses' => 'BlogController@Index', 'as' => 'blog.index']);
Route::post('/blog/{id}',['uses' => 'BlogController@getsingleblog', 'as' => 'blog.single']);

Route::group(['middleware'=>'auth:api'],function(){
	Route::post('/get_details','API\PassportController@get_details')->name('api.userdetails');
	Route::post('/get_userprofile','API\PassportController@get_userprofile')->name('api.userdetails');
});


Route::post('/search/','SearchController@index')->name('search');

Route::post('/contact',['uses' => 'PagesController@send_message', 'as' => 'contact']);

Route::post('/forgotpassword','API\PassportController@forgotpassword')->name('forgotpassword');
Route::post('/find_user_key','API\PassportController@find_user_key')->name('find_user_key');
Route::post('/reset_password','API\PassportController@reset_password')->name('reset_password');