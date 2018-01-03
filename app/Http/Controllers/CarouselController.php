<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Carousel;
use Image;
use Session;
use Storage;

class CarouselController extends Controller
{
  public function __construct(){
    $this->middleware('auth:admin');
  }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $carousels = Carousel::all();
      return view('carousel.edit')->withCarousels($carousels);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
       $carousel = new  Carousel;
       $carousel->image = 'default.png';
       $carousel->save();
       Session::flash('success' , 'New Slide Added');
       return redirect()->back();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
   public function store(Request $request,$id)
    {
        $this->validate($request,[
            'slider' => 'image',
            'caption_bottom' => 'max:100',
            'caption_right_top' => 'max:100',
            'caption_left_top' => 'max:100'
            ]);
        //find correct slide
       $carousel = Carousel::find($id);
       if(($carousel->image !='')&&($carousel->image != 'default.png')&&($request->File('slider') != null) )
       {
         Storage::delete('slider/'.$carousel->image);
         $image = $request->File('slider');
         $filename = time().'.'.$image->getClientOriginalExtension();
         $location = public_path('images/slider/'.$filename);
         $location = str_replace('/public/','/', $location);
         Image::make($image)->resize(1450,750)->save($location);
       
         $carousel->image = $filename;
       }
       elseif ( ($carousel->image == 'default.png') && ($request->File('slider') != null ) ) {
         $image = $request->File('slider');
         $filename = time().'.'.$image->getClientOriginalExtension();
         $location = public_path('images/slider/'.$filename);
          $location = str_replace('/public/','/', $location);
         Image::make($image)->resize(1450,750)->save($location);
         $carousel->image = $filename;
       }
       //save image in directory
       
       //save image in directory
       
      
       
       
       $carousel->caption_bottom = $request->caption_bottom;
       $carousel->caption_right_top = $request->caption_right_top;
       $carousel->caption_left_top = $request->caption_left_top;

       $carousel->save();
       Session('success' , 'Slider Add Successfully');
       return redirect()->back();
    }
    /*)
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
        $carousel = Carousel::find($id);
        $image = $carousel->image;

        if ($image != 'default.png' ) {
          Storage::delete('slider/'.$image);
        }
        $carousel->delete();
        return redirect()->back();
    }
}
