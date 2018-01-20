<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Category;
use App\Tag;
use App\Http\Resources\TagCollection;
use App\Post;
use Image;
use Validator;

class Author_Post_Controller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cats = Category::all();
        $tags = Tag::all();
        return response()->json(['cats'=>$cats , 'tags' => new TagCollection($tags)]);     
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   

            $author_id = $request->author_id;
            $cat_id = $request->cat_id;
            $content = $request->content;
            $slug = $request->slug;
            $tag_value = $request->tag_value;
            $title = $request->title;

            $validator = Validator::make(['author_id'=>$author_id,'cat_id'=>$cat_id,'content'=>$content , 'slug'=>$slug , 'tag_value'=>$tag_value , 'title'=>$title],[
                'author_id' => 'required|numeric',
                'cat_id' => 'required|numeric',
                'content' => 'required|min:10',
                'slug' => 'required|min:5',
                'tag_value' => 'required|string',
                'title' => 'required|min:5'
             ]);
             if ($validator->fails()){
                return response()->json($validator->errors());
             }else{
                 $file = $request->file('file');
                 $imageName = time().'.'.$file->getClientOriginalExtension();
                 $location = public_path('images/'.$imageName);
                 Image::make($file)->resize(736,256)->save($location);


                 $post = new Post;
                 $post->title = $title;
                 $post->body = $content;
                 $post->slug = $slug;
                 $post->category_id = $cat_id;
                 $post->author_id = $author_id;
                 $post->image = $imageName;

                 $post->save();
                 $tag_ids = json_decode($tag_value);
                 $tags = [];
                 foreach ($tag_ids as $key) {
                       array_push($tags,$key->value);
                 }
                 $post->tags()->sync($tags,false);

                 
                
               
                return 'Ok';
             }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
