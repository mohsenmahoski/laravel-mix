<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class UserAcountController extends Controller
{
	public function __construct(){
		$this->middleware('auth');
	}
    
    public function index(Request $request){
        $routes = Controller::get_url($request);
    	$id = Auth::user()->id;

           return view('pages.user_acount')->withId($id)->withRoutes($routes);
    }
}
