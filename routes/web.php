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

Auth::routes();



//admin routs
Route::group(['prefix' => 'admin'],function(){
	Route::get('/login' , 'Auth\AdminLoginController@showloginform')->name('admin.login');
    Route::post('/login' , 'Auth\AdminLoginController@index')->name('admin.login.submit'); 
    Route::get('/' , 'AdminController@index')->name('admin.dashboard');

//reset password 
     Route::post('/password/email','Auth\AdminForgotPasswordController@sendResetLinkEmail')->name('admin.password.email');
    Route::get('/password/reset','Auth\AdminForgotPasswordController@showLinkRequestForm')->name('admin.password.request');
    Route::post('/password/reset','Auth\AdminResetPasswordController@reset');
    Route::get('/password/reset/{token}','Auth\AdminResetPasswordController@showResetForm')->name('admin.password.reset');
    Route::get('/messages', 'AdminController@users_messages')->name('users_messages');
    Route::post('/messages/{id}', 'AdminController@users_messages_delete')->name('users_messages_delete');
    //slider routes
    Route::resource('/carousel' , 'CarouselController' , ['except' => ['store']]);
    //posts routes
    Route::post('/carousel/{id}' ,['uses' => 'CarouselController@store' , 'as' => 'carousel.store']);
    //tags routes 
    Route::resource('/tags' , 'TagController');
    //posts routes 
    Route::resource('/posts','PostController');
    //category routees
    Route::resource('categories' , 'CategoryController',['except' => 'create']);
    //comment routes
    Route::post('/comment/' ,['uses' => 'CommentController@store' ,'as' => 'comment.store']);
    Route::post('/comment/likes/','CommentController@likes')->name('comment.likes');
    Route::post('/comment/dislikes/','CommentController@dislikes')->name('comment.dislikes');
    Route::get('/comment/{id}/edit' , ['uses' => 'CommentController@edit' ,'as' => 'comment.edit']);
    Route::put('/comment/{id}' , ['uses' => 'CommentController@update' ,'as' => 'comment.update']);
    Route::delete('/comment/{id}' , ['uses' => 'CommentController@destroy' ,'as' => 'comment.destroy']);
    //footer routes
     Route::resource('footer' , 'FooterController');
     //Shop Routs
    Route::resource('/products' , 'ProductController');
    Route::resource('/product/category' , 'ProductCategoryController');
    Route::resource('/sellers' , 'AdminSellerController');
    //subscribe
    Route::post('subscribe' , 'PagesController@subscribe' )->name('subscribe');
});




//Seller Routes
    Route::group(['prefix' => 'seller'],function(){
       Route::get('/login' , 'seller\SellerLoginController@showloginform')->name('seller.login');
       Route::post('/login' , 'seller\SellerLoginController@login')->name('seller.login.submit');
       Route::get( '/register' , 'RegisterSellerController@show_register_form' )->name('seller.register');
       Route::post( '/register' , 'RegisterSellerController@new_seller' )->name('seller.submit');
       Route::get('/' , 'seller\SellerController@index')->name('seller.dashboard');
       Route::post('/password/email','Auth\SellerForgotPasswordController@sendResetLinkEmail')->name('seller.password.email');
       Route::get('/password/reset','Auth\SellerForgotPasswordController@showLinkRequestForm')->name('seller.password.request');
       Route::post('/password/reset','Auth\SellerResetPasswordController@reset');
       Route::get('password/reset/{token}','Auth\SellerResetPasswordController@showResetForm')->name('seller.password.reset');
});
//Author Routes
    Route::group(['prefix' => 'author'],function(){
       Route::get('/login' , 'author\AuthorLoginController@showloginform')->name('author.login');
       Route::post('/login' , 'author\AuthorLoginController@login')->name('author.login.submit');
       Route::get( '/register' , 'RegisterAuthorController@show_register_form' )->name('author.register');
       Route::post( '/register' , 'RegisterAuthorController@new_author' )->name('author.submit');
       Route::get('/' , 'author\AuthorController@index')->name('author.dashboard');
       Route::post('/password/email','Auth\AuthorForgotPasswordController@sendResetLinkEmail')->name('author.password.email');
       Route::get('/password/reset','Auth\AuthorForgotPasswordController@showLinkRequestForm')->name('author.password.request');
       Route::post('/password/reset','Auth\AuthorResetPasswordController@reset');
       Route::get('password/reset/{token}','Auth\AuthorResetPasswordController@showResetForm')->name('author.password.reset');
});

Route::group(['middleware' => 'auth'] , function(){
    Route::get('user/{id}' ,['uses' => 'Auth\ResetPasswordController@getReset' , 'as' => 'password.change'] );
    Route::post('user/{id}' ,['uses' => 'Auth\ResetPasswordController@postReset' , 'as' => 'password.update'] );
});




Route::get('/about_us','PagesController@getAbout')->name('about_us');


//Shop Routes
Route::group(['prefix' => 'shop' ] , function(){
    Route::get('/' , 'ShopController@index' )->name('shop');
    Route::get('/product/{slug}' , 'ShopController@show_product' )->name('product.show');
   
});
Route::get('/', 'PagesController@getIndex')->name('home');
Route::post('/search/','SearchController@index')->name('search');
Route::post('send_message' , 'PagesController@send_message')->name('send_message');



Route::get('/home', 'HomeController@index')->name('home');
Route::post('/contact',['uses' => 'PagesController@send_message', 'as' => 'contact']);



Route::get('/mail' , 'HomeController@send_mail')->name('UserSendMail');

