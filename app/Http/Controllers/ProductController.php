<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\Seller;
use Purifier;
use Image;
use Storage;
use File;
use Session;
use App\Procat;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();
       
        return view('admin.shop.products')->withProducts($products);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $sellers = Seller::all();
        $categories = Procat::all();
        return view('admin.shop.new_product')->withCategories($categories)->withSellers($sellers);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   

        
        $this->validate($request , [
          'name'          => 'required',
          'price'         => 'required|numeric',
          'special_sale'  => 'numeric',
          'seller'        => 'required',
          'description'   => 'min:10',
          'alarm'         => 'min:10',
          'orginal_img'   => 'sometimes|image',
          'image2'        => 'sometimes|image',
          'image3'        => 'sometimes|image',
          'image4'        => 'sometimes|image',
          'invisible'     => 'required'
        ]);
        $product = new Product;
        $product->name          = $request->name;
        $product->price         = $request->price;
        $product->special_sale  = $request->special_sale;
        $product->seller_id     = $request->seller;
        $product->slug          = str_replace(' ', '-' , trim($request->name));
        $product->description   = $request->description;
        $product->alarm         = $request->alarm;
        $product->status        = $request->status;
        $cats = $request->invisible;
        $cats = explode('|', $cats);
        
        if ($request->hasFile('orginal_img')) {
           $image = $request->File('orginal_img');
           $filename = time().'.'.$image->getClientOriginalExtension();
           $location = public_path('images/products/'.$filename);

           Image::make($image)->resize(920,1380)->save($location);

           $oldname = $product->orginal_img;
           if (($oldname != '') && (File::exists(public_path('images/products/'.$oldname))) ) {
              Storage::delete('products/'.$oldname);
             
           }
          
          
           $product->orginal_img = $filename;
          
        }
        $images='';
        if ($request->hasFile('image2')) {
           $image = $request->File('image2');
           $filename = (time()+1).'.'.$image->getClientOriginalExtension();
           $location = public_path('images/products/'.$filename);

           Image::make($image)->resize(920,1380)->save($location);

           $oldname = $product->image2;
           if (($oldname != '') && (File::exists(public_path('images/products/'.$oldname))) ) {
              Storage::delete('products/'.$oldname);
             
           }
          
          
           $images = $images.$filename;
          
        }
        if ($request->hasFile('image3')) {
           $image = $request->File('image3');
           $filename = (time()+2).'.'.$image->getClientOriginalExtension();
           $location = public_path('images/products/'.$filename);

           Image::make($image)->resize(920,1380)->save($location);

           $oldname = $product->image3;
           if (($oldname != '') && (File::exists(public_path('images/products/'.$oldname))) ) {
              Storage::delete('products/'.$oldname);
             
           }
          
          
          $images = $images.'|'.$filename;
          
        }
        if ($request->hasFile('image4')) {

           $image = $request->File('image4');
           $filename = (time()+3).'.'.$image->getClientOriginalExtension();
           $location = public_path('images/products/'.$filename);

           Image::make($image)->resize(920,1380)->save($location);

           $oldname = $product->image4;
           if (($oldname != '') && (File::exists(public_path('images/products/'.$oldname))) ) {
              Storage::delete('products/'.$oldname);
             
           }
          
          
          $images = $images.'|'.$filename;
      
        }
        $product->images = $images;

        $product->save();
        $product->procat()->sync($cats , false);
        Session::flash('success' , 'محصول با موفقیت ثبت شد' );
        return redirect()->route('products.index');

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
        $product = Product::find($id);
        
        $sellers = array();
        $all_sellers = Seller::all();
        foreach ($all_sellers as $sel ) {
           $sellers[$sel->id] = $sel->name;
        }

        $images = explode('|', $product->images);
        $categories = Procat::all();
        $catselected = $product->procat;
        
        return view('admin.shop.product_edit')->withCategories($categories)->withProduct($product)->withSellers($sellers)->withImages($images)->withCatselected($catselected);
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
             
           $this->validate($request , [
              'name'          => 'required',
              'price'         => 'required|numeric',
              'special_sale'  => 'nullable|numeric',
              'seller'        => 'required',
              'slug'          => 'required|min:3|max:200',
              'description'   => 'min:10',
              'orginal_img' => 'sometimes|image',
              'image1'        => 'sometimes|image',
              'image2'        => 'sometimes|image',
              'image3'        => 'sometimes|image',
              'invisible'     => 'required'
            ]);
           
           $product = Product::find($id);
           $product->name = $request->name;
           $product->price = $request->price;
           $product->special_sale = $request->special_sale;
           $product->seller_id = $request->seller;
           $product->slug = str_replace(' ','-',trim($request->slug));
           $product->description = $request->description;
           $cats = $request->invisible;
           $cats = explode('|', $cats);


           if ($request->hasFile('orginal_img')) {
               $image = $request->File('orginal_img');
               $filename = time().'.'.$image->getClientOriginalExtension();
               $location = public_path('images/products/'.$filename);

               Image::make($image)->resize(920,1380)->save($location);

               $oldname = $product->orginal_img;
               if (($oldname != '') && (File::exists(public_path('images/products/'.$oldname))) ) {
                  Storage::delete('products/'.$oldname);
                 
               }
              
              
               $product->orginal_img = $filename;
              
            }
            $images='';
            if ($request->hasFile('image2')) {
               $image = $request->File('image2');
               $filename = time().'.'.$image->getClientOriginalExtension();
               $location = public_path('images/products/'.$filename);

               Image::make($image)->resize(920,1380)->save($location);

               $oldname = $product->image2;
               if (($oldname != '') && (File::exists(public_path('images/products/'.$oldname))) ) {
                  Storage::delete('products/'.$oldname);
                 
               }
              
              
               $images = $images.'|'.$filename;
              
            }
            if ($request->hasFile('image2')) {
               $image = $request->File('image2');
               $filename = time().'.'.$image->getClientOriginalExtension();
               $location = public_path('images/products/'.$filename);

               Image::make($image)->resize(920,1380)->save($location);

               $oldname = $product->image2;
               if (($oldname != '') && (File::exists(public_path('images/products/'.$oldname))) ) {
                  Storage::delete('products/'.$oldname);
                 
               }
              
              
              $images = $images.'|'.$filename;
              
            }
            if ($request->hasFile('image3')) {
               $image = $request->File('image3');
               $filename = time().'.'.$image->getClientOriginalExtension();
               $location = public_path('images/products/'.$filename);

               Image::make($image)->resize(920,1380)->save($location);

               $oldname = $product->image3;
               if (($oldname != '') && (File::exists(public_path('images/products/'.$oldname))) ) {
                  Storage::delete('products/'.$oldname);
                 
               }
              
              
              $images = $images.'|'.$filename;
              
            }
            $product->images = $images;

        
             $product->save();
             $product->procat()->sync($cats , true);
             Session::flash('success','محصول با موفقیت ویرایش شد');

             return redirect()->route('products.index');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
       $product = Product::find($id);
        
        if (Storage::exists('products/'.$product->orginal_img)) {
         
           Storage::delete('products/'.$product->orginal_img);
        }
        
        $images  = explode( '|' , $product->images  );

        foreach ($images as $img=>$value) {
          if (Storage::exists('products/'.$value)) {
 
             Storage::delete('products/'.$value);
          }

        }
        $product->procat()->detach();
        $product->delete();
        return redirect()->back();

    }
}
