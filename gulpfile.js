const elixir = require('laravel-elixir');
elixir.config.sourcemaps = false;

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
    mix.sass('main.sass','public/assets/css/main.css');
    mix.sass('bootstrap.scss','public/assets/css/bootstrap.css');
    mix.sass('font-awesome.scss','public/assets/css/font-awesome.css');
});


