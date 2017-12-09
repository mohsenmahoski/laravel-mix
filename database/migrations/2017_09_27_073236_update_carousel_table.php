<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateCarouselTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::table('carsouls' , function (Blueprint $table){
         $table->string('caption_bottom' , 100)->nullable()->after('image');
         $table->string('caption_right_top', 100)->nullable()->after('caption_bottom');
         $table->string('caption_left_top' , 100)->nullable()->after('caption_right_top');
       });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('carsouls');
    }
}
