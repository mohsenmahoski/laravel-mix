<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class HomeController extends Controller
{
    
    public function index()
    {
       $posts = Post::orderBy('title')->limit(18)->where('approved' , true )->get();
       $posts = $posts->toArray();
       return response()->json(array_chunk($posts, 6));
    }
}
