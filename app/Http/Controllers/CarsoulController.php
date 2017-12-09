<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Carsoul;
use Image;
use Session;
use Storage;

class CarsoulController extends Controller
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
      $carsouls = Carsoul::all();
      return view('carsoul.edit')->withCarsouls($carsouls);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
       $carsoul = new  Carsoul;
       $carsoul->image = 'default.png';
       $carsoul->save();
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
       $carsoul = Carsoul::find($id);
       if(($carsoul->image !='')&&($carsoul->image != 'default.png')&&($request->File('slider') != null) )
       {
         Storage::delete('slider/'.$carsoul->image);
         $image = $request->File('slider');
         $filename = time().'.'.$image->getClientOriginalExtension();
         $location = public_path('images/slider/'.$filename);
         $location = str_replace('/public/','/', $location);
         Image::make($image)->resize(1450,750)->save($location);
       
         $carsoul->image = $filename;
       }
       elseif ( ($carsoul->image == 'default.png') && ($request->File('slider') != null ) ) {
         $image = $request->File('slider');
         $filename = time().'.'.$image->getClientOriginalExtension();
         $location = public_path('images/slider/'.$filename);
          $location = str_replace('/public/','/', $location);
         Image::make($image)->resize(1450,750)->save($location);
         $carsoul->image = $filename;
       }
       //save image in directory
       
       //save image in directory
       
      
       
       
       $carsoul->caption_bottom = $request->caption_bottom;
       $carsoul->caption_right_top = $request->caption_right_top;
       $carsoul->caption_left_top = $request->caption_left_top;

       $carsoul->save();
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
        $carsoul = Carsoul::find($id);
        $image = $carsoul->image;

        if ($image != 'default.png' ) {
          Storage::delete('slider/'.$image);
        }
        $carsoul->delete();
        return redirect()->back();
    }
}
