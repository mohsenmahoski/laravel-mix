<?php

namespace App\Http\Controllers;

use App\Product_category;
use Illuminate\Http\Request;
use App\Procat;

class ProductCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cats = Procat::all();
        return view('admin.shop.create_product_category')->withCats($cats);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
                dd('yessssssssssssss');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
                dd('yessssssssssssss');

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product_category  $product_category
     * @return \Illuminate\Http\Response
     */
    public function show(Product_category $product_category)
    {
               dd('yessssssssssssss');

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product_category  $product_category
     * @return \Illuminate\Http\Response
     */
    public function edit(Product_category $product_category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product_category  $product_category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        return 'yessss';
    }
    public function destroy(Product_category $product_category)
        {   
        }
    /**
    ajax functions
     */
    public function updatecategory(Request $request){
            
              try {
               $category = Procat::where('name',$request->oldname)->first();
                $category->name = $request->name;
                if ($request->parent==null) {
                   
                   $category->parent = 0;
                }else{
                    $category->parent = $request->parent;
                }
                $category->level = $request->level;
                
                $category->save();


                $categories = Procat::all();
                            
                           $i = count($categories);

                            
                             $myobjects = array();
                            if ($i != 0) {
                                 foreach ($categories as $cat) {
                                      $myobj['id'] = $cat->id ;  
                                      $myobj['name'] = $cat->name ;
                                      $myobj['level'] = $cat->level ;
                                      $myobj['parent'] = $cat->parent ;
                                      array_push($myobjects, $myobj);
                                 }
                                 
                            }
                            
                            $headers = ['Content-type'=> 'application/json; charset=utf-8'];
                            $response = response()->json($myobjects, 200, $headers, JSON_UNESCAPED_UNICODE);
                                
                           
                            return $response;
              } catch (Exception $e) {
                  return 'Err';
              } 
    }
    
    public function deletecategory(Request $request){
         $category = Procat::where('name' , $request->name)->first();
         
         if ($category->level == 1) {
             $subcats = Procat::where('parent' , $category->id )->get();
             if ( count($subcats) > 0 ) {

                 foreach ($subcats as $sub) {
                    if ($sub->level ==2) {
                        $childs = Procat::where('parent' , $sub->id )->get();
                        if (count($childs) > 0) {
                          foreach ($childs as $child) {
                              foreach ($child->product as $product) {
                           
                                        if (Storage::exists('products/'.$product->orginal_img)) {
                                         
                                           Storage::delete('products/'.$product->orginal_img);
                                        }
                                        
                                        $images  = explode( '|' , $product->images  );
                                        foreach ($images as $img=>$value) {
                                          if (Storage::exists('products/'.$value)) {
                                          
                                             Storage::delete('products/'.$value);
                                          }

                                        }
                                        $product->delete();    
                                     }
                                     $child->delete();
                          }
                        }
                    }
                     foreach ($sub->product as $product) {
           
                        if (Storage::exists('products/'.$product->orginal_img)) {
                         
                           Storage::delete('products/'.$product->orginal_img);
                        }
                        
                        $images  = explode( '|' , $product->images  );
                        foreach ($images as $img=>$value) {
                          if (Storage::exists('products/'.$value)) {
                          
                             Storage::delete('products/'.$value);
                          }

                        }
                        $product->delete();    
                     }
                     $sub->delete();
                 }
             }
                foreach ($category->product as $product) {
                   
                        if (Storage::exists('products/'.$product->orginal_img)) {
                         
                           Storage::delete('products/'.$product->orginal_img);
                        }
                        
                        $images  = explode( '|' , $product->images  );
                        foreach ($images as $img=>$value) {
                          if (Storage::exists('products/'.$value)) {
                          
                             Storage::delete('products/'.$value);
                          }

                        }
                        $product->delete();    
                 }
                 $category->delete();
         }
         if ($category->level == 2) {
                 $subcats = Procat::where('parent' , $category->id )->get();
                 if ( count($subcats) > 0 ) {

                     foreach ($subcats as $sub) {
                       
                         foreach ($sub->product as $product) {
               
                            if (Storage::exists('products/'.$product->orginal_img)) {
                             
                               Storage::delete('products/'.$product->orginal_img);
                            }
                            
                            $images  = explode( '|' , $product->images  );
                            foreach ($images as $img=>$value) {
                              if (Storage::exists('products/'.$value)) {
                              
                                 Storage::delete('products/'.$value);
                              }

                            }
                            $product->delete();    
                         }
                         $sub->delete();
                     }
                 }
                    foreach ($category->product as $product) {
                       
                            if (Storage::exists('products/'.$product->orginal_img)) {
                             
                               Storage::delete('products/'.$product->orginal_img);
                            }
                            
                            $images  = explode( '|' , $product->images  );
                            foreach ($images as $img=>$value) {
                              if (Storage::exists('products/'.$value)) {
                              
                                 Storage::delete('products/'.$value);
                              }

                            }
                            $product->delete();    
                     }
                     $category->delete();        
         }
         if ($category->level == 3) {
                 
                    foreach ($category->product as $product) {
                       
                            if (Storage::exists('products/'.$product->orginal_img)) {
                             
                               Storage::delete('products/'.$product->orginal_img);
                            }
                            
                            $images  = explode( '|' , $product->images  );
                            foreach ($images as $img=>$value) {
                              if (Storage::exists('products/'.$value)) {
                              
                                 Storage::delete('products/'.$value);
                              }

                            }
                            $product->delete();    
                     }
                     $category->delete();           
         }
     
         $categories = Procat::all();
                            
         $i = count($categories);

                            
         $myobjects = array();
         if ($i != 0) {
             foreach ($categories as $cat) {
                     $myobj['id'] = $cat->id ;  
                     $myobj['name'] = $cat->name ;
                     $myobj['level'] = $cat->level ;
                     $myobj['parent'] = $cat->parent ;
                     array_push($myobjects, $myobj);
                 }
                                 
         }
                            
         $headers = ['Content-type'=> 'application/json; charset=utf-8'];
         $response = response()->json($myobjects, 200, $headers, JSON_UNESCAPED_UNICODE);              
         return $response;
         
    }
    public function newcat(){
        $categories = Procat::all()->where('level','=','1');
        
       $i = count($categories);

        
         $myobjects = array();
        if ($i != 0) {
             foreach ($categories as $cat) {
                  $myobj['id'] = $cat->id ;  
                  $myobj['name'] = $cat->name ;
                  array_push($myobjects, $myobj);
             }
             
        }
        
        $headers = ['Content-type'=> 'application/json; charset=utf-8'];
        $response = response()->json($myobjects, 200, $headers, JSON_UNESCAPED_UNICODE);
            
       
        return $response;
    }
    public function parent($level){
        $categories = Procat::all()->where('level','=',$level-1);
        return $categories;
    }
    public function createcategory(Request $request){
        if($request->name != '') {
          if($request->level != null) {
           
            $slug = str_replace(' ' , '-' , trim($request->name));
            $duplicated = Procat::where('slug' , $slug)->get();
               
            $level_need = true;   
            if (count($duplicated) == 0) {
                if ($request->level > 1 && $request->parent==null) {
                   $level_need = false;
               }
               if ($level_need == true) {
              
                        $category = new Procat;
                        $category->name = $request->name;
                        $category->level = $request->level;
                        $category->slug = $slug;

                         if( $request->parent == null ) {
                            $category->parent = 0 ;       
                         }else{
                            $category->parent = $request->parent;
                         }
                      
                               $category->save();
                               $categories = Procat::all();
                                
                               $i = count($categories);

                                
                                 $myobjects = array();
                                if ($i != 0) {
                                     foreach ($categories as $cat) {
                                          $myobj['id'] = $cat->id ;  
                                          $myobj['name'] = $cat->name ;
                                          $myobj['level'] = $cat->level ;
                                          $myobj['parent'] = $cat->parent ;
                                          array_push($myobjects, $myobj);
                                     }
                                     
                                }
                                
                                $headers = ['Content-type'=> 'application/json; charset=utf-8'];
                                $response = response()->json($myobjects, 200, $headers, JSON_UNESCAPED_UNICODE);
                                    
                               
                                return $response;
               }
               else{
                        return ($request->level-1);
               }
            }
             else{
                return 'duplicated';
             }
          }
          else{
            return 'level is null';
          }
            
        }
        else{
            return 'name is null';
        } 
    }
}
