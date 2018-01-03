<?php

namespace App\Http\Controllers\Seller;
use Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;


class SellerLoginController extends Controller
{
	use AuthenticatesUsers;
    public function __construct(){
    	$this->middleware('guest:seller');
    }

    public function showloginform(){
    	return view('auth.seller.seller-login');
    }

    public function login(Request $request){
           $this->validate($request , [
                 'email' => 'required|email',
                 'password' => 'required|min:5',
           	]);

           if (Auth::guard('seller')->attempt(['email' => $request->email , 'password' => $request->password] , $request->remember)) {
           	     return redirect()->intended(route('seller.dashboard'));
           }
           return $this->sendFailedLoginResponse($request);
    }
}
