<?php

use Faker\Generator as Faker;

$factory->define(App\Post::class, function (Faker $faker) use ($factory) {
    return [
       'id'=> $faker->unique()->numberBetween($min = 0, $max = 100),
       'title' => $faker->word,
       'body' => $faker->sentence($nbWords = 6, $variableNbWords = true),
       'slug' => $faker->slug,
       'image' => $faker->imageUrl($width = 'image', $height = 'posts'),
       'category_id' => $factory->create(App\Category::class)->id,
       'created_at' => $faker->date($format = 'Y-m-d', $max = 'now'),
       'updated_at' => $faker->date($format = 'Y-m-d', $min = 'now'),
    ];
});
