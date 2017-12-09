<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CrateProcatProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('procat_product', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('procat_id')->unsigned();
            $table->foreign('procat_id')->references('id')->on('procats');

            $table->integer('product_id')->unsigned();
            $table->foreign('product_id')->references('id')->on('products');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('procat_product');
    }
}
