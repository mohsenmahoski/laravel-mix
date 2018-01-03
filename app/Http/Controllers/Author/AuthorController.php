<?php

namespace App\Http\Controllers\Author;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AuthorController extends Controller
{
    public function __construct(){
        $this->middleware('auth:author');
    }

    public function index(){
        
        
        // if (Gate::denies('authorActive', Auth::user())) {
     //       return 'Denies';
     //    }
        return view('auth.author.author_dashboard');
    }
}
