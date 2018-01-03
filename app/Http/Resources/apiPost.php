<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;
use Html;
class apiPost extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        
        return [
            "id"    => $this->id,
            "title" => $this->title,
            "body"  => html_entity_decode($this->body),
            "slug"  => $this->slug,
            "image" => $this->image,
            "category_id" => $this->category_id,
            "category_name" => $this->category->name,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
            "comments" => $this->comments
         ];
    }
    public function with($request){
        return [
           'Mohsen' => 'Mahoski'
        ];
    }
}
