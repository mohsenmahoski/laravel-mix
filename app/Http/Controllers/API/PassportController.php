<?php

namespace App\Http\Controllers\API;

use App\Seller;
use App\User;
use Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Validator;

class PassportController extends Controller
{
    public $successStatus =200;
    public function login(Request $request){
         if (Auth::attempt(['email' => $request->email , 'password' => $request->password])) {
                     $seller = Auth::user();
                     $success['token'] = $seller->createToken('Laravel APP')->accessToken;
                     return response()->json(['success' => $success],200);       
         }
         else{
         	return response()->json(['error'=>'Unauthorised'],402);
         }
    }
    public function register(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required',
            'c_password' => 'required|same:password'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(),401);
        }

        $inputs = $request->all();
        $inputs['password'] = bcrypt($inputs['password']);
        $user = User::create($inputs);
        $success['token'] = $user->createToken('Laravel APP')->accessToken;
        $success['name'] = $user->name;
       
        
        return response()->json(['success'=>$success],$this->successStatus);
    }
    public function get_details(){
        $user = Auth::user();
        return $user;   
    }
}
