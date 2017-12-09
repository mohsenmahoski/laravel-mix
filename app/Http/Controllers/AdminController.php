<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Geo;
use App\Message;
use Session;

class AdminController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:admin');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {   $geo = Geo::all();
        return view('auth.admin-dashboard')->withGeo($geo);
    }
    public function users_messages(){
        $messages = Message::all();
        return view('admin.users_messages')->withMessages($messages);
    }
    public function users_messages_delete($id){
        $messages = Message::find($id);
        $messages->delete();
        Session::flash('success' , 'پیام با موفقیت حذف شد');
        return redirect()->back();
    }
}
