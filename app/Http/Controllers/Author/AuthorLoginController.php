<?php

namespace App\Http\Controllers\Author;
use Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;


class AuthorLoginController extends Controller
{
    use AuthenticatesUsers;
    public function __construct(){
    	$this->middleware('guest:author');
    }

    public function showloginform(){
    	return view('auth.author.author-login');
    }

    public function login(Request $request){
           $this->validate($request , [
                 'email' => 'required|email',
                 'password' => 'required|min:5',
           	]);

           if (Auth::guard('author')->attempt(['email' => $request->email , 'password' => $request->password] , $request->remember)) {
           	     return redirect()->intended(route('author.dashboard'));
           }
          
           return $this->sendFailedLoginResponse($request);

    }
}
