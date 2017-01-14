<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

if ( ! class_exists( 'Pretty_Permalinks_Endpoint' ) ) :

	class Pretty_Permalinks_Endpoint {
		function __construct() {
		}

		function init() {
			add_action( 'rest_api_init', function () {
				$namespace = 'react-theme/v1';
				register_rest_route( $namespace, '/prettyPermalink/(?P<url>.*?)', array(
					'methods'  => 'GET',
					'callback' => [ $this, 'get_post_for_url' ],
				) );
			} );
		}

		/**
		 * @param $data
		 *
		 * @return WP_Error|WP_REST_Response
		 */
		function get_post_for_url( $data ) {
			$post_id    = url_to_postid( $data['url'] );
			$post_type  = get_post_type( $post_id );
			$controller = new WP_REST_Posts_Controller( $post_type );
			$request    = new WP_REST_Request( 'GET', "/wp/v2/{$post_type}s/$post_id" );
			$request->set_url_params( array( 'id' => $post_id ) );

			return $controller->get_item( $request );
		}

	}

endif;