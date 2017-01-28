<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

if ( ! class_exists( 'Add_Formatted_Date_Endpoint' ) ) :
	class Add_Formatted_Date_Endpoint {
		function init() {
			add_filter( 'rest_prepare_post', [ $this, 'add_formatted_date' ], 10, 2 );

		}

		function add_formatted_date( $data, $post ) {
			$_data = $data->data;
			$_data['formatted_date'] = date( 'F j, Y', strtotime( $post->post_date ) );
			$data->data              = $_data;

			return $data;
		}

	}
endif;