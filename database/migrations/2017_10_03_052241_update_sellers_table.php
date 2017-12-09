<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateSellersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sellers', function (Blueprint $table) {
            $table->boolean('active')->default(false);
            $table->text('shop_description')->nullable();
            $table->integer('commission')->default(0);
            $table->string('shop_name',50);
            $table->string('shop_slug',50);
            $table->string('sample_work',15);
          });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        $table->dropColumn('active');
        $table->dropColumn('shop_description');
        $table->dropColumn('sample_work');
    }
}
