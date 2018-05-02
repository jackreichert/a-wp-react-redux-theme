<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

if ( ! class_exists( 'Theme_Enqueue' ) ) :

	class Theme_Enqueue {
		private $version = '20171210';

		function __construct() {
			// use this for developments
//			$this->version = date('U');
		}

		function init() {
			add_action( 'wp_enqueue_scripts', [ $this, 'theme' ], 20 );
		}

		function theme() {
			wp_enqueue_style( 'bootstrap4-css', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css', [], '4b' );
			wp_enqueue_script( 'ReactTheme-js', get_template_directory_uri() . '/bundle.js', [ 'jquery' ], $this->version, true );
			wp_localize_script( 'ReactTheme-js', 'RT_API', array(
				'root'            => esc_url_raw( rest_url() ),
				'nonce'           => wp_create_nonce( 'wp_rest' ),
				'siteName'        => get_bloginfo( 'name' ),
				'baseUrl'         => get_bloginfo( 'url' ),
				'siteDescription' => get_bloginfo( 'description' ),
				'categories'      => $this->get_categories_with_links(),
				'current_user'    => wp_get_current_user()
			) );
			wp_enqueue_style( 'theme_stylesheet', get_template_directory_uri() . '/bundle.css', [ 'bootstrap4-css' ], $this->version );
		}

		function get_categories_with_links() {
			$categories = get_categories( [ 'hide_empty' => 0 ] );
			foreach ( $categories as $i => $category ) {
				$categories[ $i ]->link = get_category_link( $category->term_id );
			}

			return $categories;
		}
	}

endif;