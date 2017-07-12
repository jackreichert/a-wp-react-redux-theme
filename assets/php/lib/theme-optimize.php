<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

if ( ! class_exists( 'Theme_Optimize' ) ) :
	class Theme_Optimize {
		function __construct() {
		}

		function init() {
			add_filter( 'posts_pre_query', [ $this, 'only_parse_wp_api_queries' ], 1 );
		}

		function only_parse_wp_api_queries() {
			global $wp;

			if ( 'wp-json' != substr( $wp->request, 0, 7 ) ) {
				return array();
			}

		}

	}
endif;