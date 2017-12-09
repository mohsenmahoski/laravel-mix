<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use Session;
use App\Category;
use App\Tag;
use Purifier;
use Image;
use Storage;
use File;


class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        $this->middleware('auth:admin');
    }
    public function index()
    {
     $posts = post::orderBy('id','desc')->paginate(5);
     return View('posts.index')->withPosts($posts);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
      $categories = Category::all();
      $tags = Tag::all();
       return View('posts.create')->withCategories($categories)->withTags($tags);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
          
        //validate values
       $this->validate($request,array(
          'title'       => 'required | max:256',
          'slug'        => 'required | alpha_dash | min:5 | max:255 |unique:posts,slug',
          'category_id' => 'required | integer',
          'body'   => 'required',
          'image' => 'sometimes|image'
        ));
       //store in database
       $post = new Post;
       $post->title = $request->title;
       $post->category_id = $request->category_id;
       $post->slug = $request->slug;
       $post->body = Purifier::clean($request->body);
       if ($request->hasFile('image')) {
         $image = $request->File('image');
         $filename = time().'.'.$image->getClientOriginalExtension();
         $location = public_path('images/posts/'.$filename);

         Image::make($image)->resize(736,256)->save($location); 

         $post->image = $filename;
       }
       $post->save();

       $post->tags()->sync($request->tags,false);
       Session::flash('success','The Post Successfuly Saved!');
       return redirect()->route('posts.show',$post->id);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $post = Post::find($id);
        return View('posts.show')->withPost($post);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $post = Post::find($id);
        $categories = Category::all();
        $cats=array();
        foreach ($categories as $category) {
          $cats[$category->id] = $category->name;
        }
        $tags_all = Tag::all();
        $tags = array();
        foreach ($tags_all as $tag) {
           $tags[$tag->id] = $tag->name;
        }
        return View('posts.edit')->withPost($post)->withCategories($cats)->withTags($tags);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
      $post = Post::find($id);
     
        $this->validate($request,array(
          'title'       => 'required | max:256',
          'slug'        => "required|max:255|min:5|alpha_dash|unique:posts,slug,$id",
          'category_id' => 'required | integer',
          'body'        => 'required',
          'image'       => 'sometimes|image'
        ));
        

        $post->title       = $request->input('title');
        $post->slug        = $request->input('slug');
        $post->category_id = $request->category_id;
        $post->body        =Purifier::clean($request->input('body'));
        
        if ($request->hasFile('image')) {
           $image = $request->File('image');
           $filename = time().'.'.$image->getClientOriginalExtension();
           $location = public_path('images/posts/'.$filename);

           Image::make($image)->resize(736,256)->save($location);

           $oldname = $post->image;
           if (($oldname != '') && (File::exists(public_path('images/posts/'.$oldname))) ) {
              Storage::delete('posts/'.$oldname);
             
           }
          
           $post->image = $filename;

          
        }
        $post->save();
        
        $post->tags()->sync($request->tags);
        Session::flash('success','This Post Was successfuly Updated!!');

        return redirect()->route('posts.show',$post->id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
          $post = Post::find($id);
          $post->tags()->detach();
          Storage::delete('posts/'.$post->image);
          $post->delete();
          Session::flash('success','The Posts Was Successfuly Delete');
          return redirect()->route('posts.index');
    }
    
}
