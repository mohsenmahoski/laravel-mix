<?php

namespace App\Http\Controllers\API;

use Auth;
use Cookie;
use Post;
use Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;

class AuthorPassport extends Controller
{
        public function login(Request $request){
         if (Auth::guard('author')->attempt(['email' => $request->email , 'password' => $request->password])) {
                     $user = Auth::guard('author')->user();
                     $success['token'] = $user->createToken('Laravel APP')->accessToken;
                     
                     return response()->json(['success' => $success , 'confirm'=>$user['active']],200);       
         }
         else{
         	return response()->json(['error'=>'Unauthorised'],402);
         }
    }
    public function generateRandomString($length = 16) {
            $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            $charactersLength = strlen($characters);
            $randomString = '';
            for ($i = 0; $i < $length; $i++) {
                $randomString .= $characters[rand(0, $charactersLength - 1)];
            }
            return $randomString;
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
        $inputs['user_key'] = $this->generateRandomString();
        $user = User::create($inputs);
        $success['token'] = $user->createToken('Laravel APP')->accessToken;
        $success['name'] = $user->name;
       
        
        return $user;
        
    }
    public function get_details(){
        $user = Auth::user();
        return $user;   
    }
      public function get_authorprofile(){
        $author = Auth::guard('author-api')->user();
        $posts = $author->posts;
        $comments = null;
        $result = [];
        foreach ($posts as $post) {
             $comments = $post->comments;
             foreach ($comments as $comment) {
                 $comment['user'] = $comment->user;
             }
             array_push($result,[$post , $comments]);
        }
        return response()->json(['author'=>$author , 'posts' => $result]);
    }
    public function email_check(Request $request){

         $user = User::where('email' , $request->email )->first();
         if ($user != null) {
              return response()->json(false,201);
         }else{
              return response()->json(true,203);
         }
         
      
    }
    public function confirm_user(Request $request){
        $user_key = $request->user_key;
        $user  = User::where('user_key' , $user_key)->first();
        return response()->json(['user'=>$user]);

    }
    public function confirmed_user(Request $request){
        $user_key = $request->user_key;
        $user  = User::where('user_key' , $user_key)->first();
        $token = $user->createToken('Laravel APP')->accessToken;
        $user->confirm = true;
        $user->save();
        return response()->json(['token'=>$token],200);

    }
    public function forgotpassword(Request $request){
             $email = $request->email;
             try{
               $user = User::where('email' , $email )->first();
               if ($user != '') {
                 Mail::to($user)->send(new ForgotPassword($user));
                 return response()->json(['message'=>'Email Sended'],200);
               }else{
                  return response()->json(['message'=>'Not Found Email'],201);
               }
             } catch (Exception $e) {
                return $e;
             }
   }
   public function find_user_key(Request $request){

          $user = User::where('user_key' , $request->user_key)->first();
          if ($user != null ) {
              return response()->json(['user'=>$user ] , 200);
          }
          return response()->json(['message'=>'Not Found User'] , 201);
   }
   public function reset_password(Request $request){
            $key =$request->user_key;
            $password = $request->password;
            $password = Hash::make($password);
            $user = User::where('user_key' , $key )->first();
            $user->password = $password;
            $user->user_key = $this->generateRandomString();
            $user->save();
            return response()->json(['message'=>'User Updated Successfully'] , 200);
   }
   public function create_post(Request $request){
            $file = $request->file('file');
            $imageName = time().'.'.$file->getClientOriginalExtension();
            $location = public_path('images/'.$imageName);
            Image::make($file)->resize(736,256)->save($location);
            
            return $request;
   }
}
