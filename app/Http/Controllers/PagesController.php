<?php

namespace App\Http\Controllers;
use Mail;
use Illuminate\Http\Request;
use App\Post;
use Session;
use App\Carsoul;
use App\Footer;
use App\Geo;
use App\Message;
use App\Subscribe;
use Response;



class PagesController extends Controller
{
    public function region_id($region){
        $id = 404;
        switch ($region) {
            case 'Shomali Khorasan ':
            case 'Ostan-e Khorasan-e Shomali':
            case 'North Khorasan': 
                $id = 1;
                break;
             case 'Razavi Khorasan':
             case 'Khorasan-e Razavi':
             case 'Khorasan Razavi':
                $id = 2;
                break;
             case 'Khorasan-e Janubi':
             case 'Khorasan Janubi':
             case 'Janubi Khorasan':
             case 'Soth Khorasan':
                $id = 3;
                break;
            case 'Ostan-e Sistan and Baluchestan':
            case 'Sistan and Baluchestan':
                $id = 4;
                break;
            case 'Kerman':
            case 'Ostan-e Kerman':
                $id = 5;
                break;
            case 'Ostan-e Hormozgan':
            case 'Hormozgan':
                $id = 6;
                break;
            case 'Yazd':
            case 'Ostan-e Yazd':
                $id = 7;
                break;
            case 'Fars':
            case 'Ostan-e Fars':
                $id = 8;
                break;
            case 'Bushehr':
            case 'Ostan-e Bushehr':
                $id = 9;
                break;
            case 'Khuzestan':
            case 'Ostan-e Khuzestan':
                $id = 10;
                break;
            case 'Kohkiluyeh va Buyer Ahmadi':
            case 'Ostan-e Kohkiluyeh va Buyer Ahmadi':
                $id = 11;
                break;
            case 'Chaharmahal and Bakhtiari':
            case 'Ostan-e Chaharmahal and Bakhtiari':
                $id = 12;
                break;
            case 'Isfahan':
            case 'Ostan-e Isfahan':
                $id = 13;
                break;
            case 'Semnān':
            case 'Ostan-e Semnān':
                $id = 14;
                break;
            case 'Golestan':
            case 'Ostan-e Golestan':
                $id = 15;
                break;
            case 'Mazandaran':
            case 'Ostan-e Mazandaran':
                $id = 16;
                break;
            case 'Ostan-e Tehran':
            case 'Tehran':
                $id = 17;
                break;
            case 'Alborz':
            case 'Ostan-e Alborz':
                $id = 18;
                break;
            case 'Qom':
            case 'Ostan-e Qom':
                $id = 19;
                break;
            case 'Markazi':
            case 'Ostan-e Markazi':
                $id = 20;
                break;
            case 'Lorestan':
            case 'Ostan-e Lorestan':
                $id = 21;
                break;
            case 'Ostan-e Ilam':
            case 'Ilam':
                $id = 22;
                break;
            case 'Ostan-e Kermanshah':
            case 'Kermanshah':
                $id = 23;
                break;
            case 'Ostan-e Hamadan':
            case 'Hamadan':
                $id = 24;
                break;
            case 'Ostan-e Qazvin':
            case 'Qazvin':
                $id = 25;
                break;
            case 'Zanjan':
            case 'Ostan-e Zanjan':
                $id = 26;
                break;
            case 'Ostan-e Gilan':
            case 'Gilan':
                $id = 27;
                break;
            case 'Ostan-e Kordestan':
            case 'Kordestan':
                $id = 28;
                break;
            case 'west Azarbaijan':
            case 'west Azarbayjan':
            case 'Ostan-e Azarbayjan-e Gharbi':
            case 'Ostan-e Azarbaijan-e Gharbi':
            case 'Azarbayjan gharbi':
            case 'Azarbaijan gharbi':
            case 'Azarbayjan-e Gharbi':
            case 'Azarbaijan-e Gharbi':
            case 'Ostan-e Azarbayjan-e gharbi':
            case 'Ostan-e Azarbaijan-e gharbi':
                $id = 29;
                break;
            case 'East Azarbaijan':
            case 'East Azarbayjan':
            case 'Ostan-e East Azarbaijan':
            case 'Ostan-e East Azarbayjan':
            case 'Azarbayjan-e sharghi':
            case 'Azarbaijan-e sharghi':
            case 'Azarbayjan sharghi':
            case 'Azarbaijan sharghi':
            case 'Ostan-e Azarbayjan-e sharghi':
            case 'Ostan-e Azarbaijan-e sharghi':
                $id = 30;
                break;
            case 'Ardabil':
            case 'Ostan-e Ardabil':
                $id = 31;
                break;
            default:
               
                break;
        }
        return $id;
    }
    public function getIndex(Request $request){
        
        $slider = Carsoul::all();
        $posts = Post::where('category_id' , 7)->orderBy('created_at','desc')->limit(3)->get();
       
        $routes = Controller::get_url( $request->url() );
        
        return view('home')->withPosts($posts)->withSlider($slider)->withRoutes($routes);    }
    public function getContact(Request $request){
        $routes = Controller::get_url( $request->url() );
            return view('pages.contact')->withRoutes($routes);
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
        $routes = Controller::get_url( $request->url() );
    	
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
        $this->validate($request , [
           'email'=>'required|email|unique:subscribes,email'
            ]);
        $subscribe = new Subscribe;
        $subscribe->email = $request->email;
        $subscribe->save();

        Session::flash('success' , 'از ثبت نام شما در اشتراک خبر نامه وبی تک تشکر میکنیم به زودی خبرهای جدید برای شما ایمیل خواهد شد.'); 
        return redirect()->back();
    }
    public function gethint($message = 'Not Found!'){
        $posts = Post::where('title', 'like' , '%'.$message.'%')->get();
        $i = count($posts);
        if ($i !== 0) {
            
             $blog = '';
             foreach ($posts as $post) {
                if ($i == 1) {
                   $slug =  str_replace('/blog', '' , $post->slug );
                 $blog .= '"blog'.$i.'":{"title":"'.$post->title.'" , "slug":"'.$post->slug.'" , "image" : "'.$post->image.'" }'; 
                }else{
                 $blog .= '"blog'.$i.'":{"title":"'.$post->title.'" , "slug":"'.$post->slug.'" , "image" : "'.$post->image.'" },';
                 --$i;
                } 
             }
             
            $blogs = '{'.$blog.'}';
             $headers = ['Content-type'=> 'application/json; charset=utf-8'];
             $response = response()->json($blogs, 200, $headers, JSON_UNESCAPED_UNICODE);
             return $response;
        }
         return response()->json();
    }

 

}