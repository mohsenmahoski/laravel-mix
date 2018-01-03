<?php

namespace App\Http\Controllers;
use Mail;
use Illuminate\Http\Request;
use App\Post;
use Session;
use App\Carousel;
use App\Footer;
use App\Message;
use App\Subscribe;
use Response;



class PagesController extends Controller
{
   
    public function getIndex(Request $request){
        
        $slider = Carousel::all();
        $posts = Post::where('category_id' , 7)->orderBy('created_at','desc')->limit(3)->get();
        
        return view('/welcome')->withPosts($posts)->withSlider($slider);  
     }
    public function getContact(Request $request){
       
            return view('pages.contact');
    }
    public function postContact(Request $request){
         $this->validate($request,[
            'email'   => 'required|email',
            'message' => 'required|min:10',
            'subject' => 'required|min:3'
            ]); 
            $data = [
             'email' => $request->email,
             'bodymessage' => $request->message,
             'subject' => $request->subject
            ];         
       Mail::send('emails.contact' , $data ,function($message) use ($data){
             $message->from($data['email']);
             $message->to('mohsenmahoski@gmail.com');
             $message->subject($data['subject']);
       });
       Session::flash('success' , 'Your Message Was Send Successfully!!');
    return redirect('/');
    }

    public function getAbout(Request $request){
      
    	
          return view('pages.about')->withRoutes($routes);
    }
    public function send_message(Request $request){
           $this->validate($request , [
               'name' => 'required|min:3',
               'family' => 'required|min:3',
               'email' => 'required|email',
               'no_robot' =>'required',
               'message' => 'required|min:10' 
            ]);
           
           $message = new Message;
           
           $message->name = $request->name;
           $message->family = $request->family;
           $message->email = $request->email;
           $message->message = $request->message;
           
           try {
               $message->save();
               return 'Ok';
           } catch (Exception $e) {
               return $e;
           }
           
           
    }
    public function subscribe(Request $request){
      
         try {  
              $validator = $this->validate($request , [
               'email'=>'required|email|unique:subscribes,email'
                ]);
                $subscribe = new Subscribe;
                $subscribe->email = $request->email;
                $subscribe->save();
                return 'subscribed';
            }
            catch (\Exception $e) {
                return $e->getMessage();
            }
           
            
           
        
          
      
        
    }
    

 

}