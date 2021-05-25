<?php

	function xi_script_enqueue(){
		wp_enqueue_style('customstyle', get_template_directory_uri() . '/css/style.css', array(), '1.0.0', 'all');
		wp_enqueue_script('customjs',  get_template_directory_uri() . '/js/index.js', array(), '1.0.0', true );
    wp_enqueue_script('slickjs',  get_template_directory_uri() . '/slick/slick.min.js', array(), '1.8.0', true);
    wp_enqueue_style('slickcss', get_template_directory_uri() . '/slick/slick.css', array(), '1.8.0', 'all');
    wp_enqueue_style('slicktheme', get_template_directory_uri() . '/slick/slick-theme.css', array(), '1.8.0', 'all');
	}


add_action('wp_enqueue_scripts', 'xi_script_enqueue');



use Carbon_Fields\Container;
use Carbon_Fields\Field;

add_action( 'carbon_fields_register_fields', 'crb_attach_theme_options' );
function crb_attach_theme_options() {
    Container::make( 'theme_options', __( 'Theme Options', 'crb' ) )
        ->add_fields( array(
            Field::make( 'rich_text', 'address', 'Endereço' ),
            Field::make( 'text', 'email', 'E-mail' ),
            Field::make( 'text', 'facebook', 'Facebook' ),
            Field::make( 'text', 'instagram', 'Instagram' ),
        ) );
}

add_action( 'after_setup_theme', 'crb_load' );
function crb_load() {
	//define o caminho para o carbon-fields
	define(
		'Carbon_Fields\URL',
		get_template_directory_uri() . '/vendor/htmlburger/carbon-fields'
	);
  require_once('vendor/autoload.php');
  \Carbon_Fields\Carbon_Fields::boot();
}
add_action('after_setup_theme', 'register_carbon_fields');
function register_carbon_fields() {
	require_once('blocks/load.php');
}

///////////
///MENU////
///////////


/**
 * Main menu navigation
 */
register_nav_menus(array(
  'main-menu' => 'Menu principal',
));

add_action( 'wp_head', 'add_viewport_meta_tag' , '1' );

function add_viewport_meta_tag() {
    echo '<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">';
}

//post
function support_thumbnails() {
    add_theme_support('post-thumbnails'); // thumbnails
}

add_action('after_setup_theme', 'support_thumbnails'); // carrega parametros de suporte do tema







