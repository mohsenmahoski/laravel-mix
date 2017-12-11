<?php

namespace App\Http\Controllers\Auth;
use Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class AdminLoginController extends Controller
{
  use AuthenticatesUsers;

  
	public function __construct(){
		$this->middleware('guest:admin');
	}
   
   public function showloginform(){
        return view('auth.admin-login');
   }
   public function index(Request $request){
         $this->validate($request , [
                 'email' => 'required|email',
                 'password' => 'required|min:5',
         	]);
         
         if (Auth::guard('admin')->attempt(['email' => $request->email , 'password' => $request->password] , $request->remember)) {
         	return redirect()->intended(route('admin.dashboard'));
         }
         return $this->sendFailedLoginResponse($request);
   }
}
