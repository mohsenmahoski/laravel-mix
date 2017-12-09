<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name' , 50);
            $table->text('description')->nullable();
            $table->integer('price')->unsigned();
            $table->integer('special_sale')->unsigned()->nullable(); 
            $table->integer('seller_id')->index()->unsigned();
            $table->foreign('seller_id')->references('id')->on('sellers');
            $table->string('orginal_img' , 14)->default('default.jpg');
            $table->text('alarm')->nullable();
            $table->boolean('status')->default(false);
            $table->text('images');
            $table->string('slug');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
