<?php

use Faker\Generator as Faker;

$factory->define(App\Category::class, function (Faker $faker) {
    return [
    	'id' => $faker->unique()->numberBetween($min = 100, $max = 0),
       'name' => $faker->word,
    ];
});
