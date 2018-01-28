<?php
use App\User;
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
Route::middleware('auth:api')->post('/comment/' ,['uses' => 'CommentController@store' ,'as' => 'comment.store']);
Route::middleware('auth:api')->post('/comment/likes/','CommentController@likes')->name('comment.likes');
Route::middleware('auth:api')->post('/comment/dislikes/','CommentController@dislikes')->name('comment.dislikes');


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
//Shop Routes
Route::group(['prefix' => 'shop' ] , function(){
    Route::get('/' , 'ShopController@index' )->name('shop');
    Route::get('/product/{slug}' , 'ShopController@show_product' )->name('product.show');
   
});
Route::get('/', 'PagesController@getIndex')->name('home');

Route::post('/send_message' , 'PagesController@send_message')->name('send_message');

Route::get('/emailRegister',function(){
     $user = User::first();
     return new App\Mail\NewUserRegister($user);
});


Route::get('/{path?}', function($path = null){
        return View::make('welcome');
})->where('path', '.*'); 
