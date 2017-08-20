<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

if ( ! class_exists( 'Add_Featured_Image_Endpoint' ) ) :
	class Add_Featured_Image_Endpoint {
		function init() {
			add_filter( 'rest_prepare_post', [ $this, 'add_featured_image' ], 10, 2 );

		}

		function add_featured_image( $data, $post ) {
			$sizes        = [ 'thumbnail' => '', 'medium' => '', 'large' => '', 'full' => '' ];
			$_data        = $data->data;
			$thumbnail_id = get_post_thumbnail_id( $post->ID );

			foreach ( $sizes as $size => $src ) {
				$sizes[ $size ] = wp_get_attachment_image_src( $thumbnail_id, $size )[0];
			}

			$_data['featured_image_url'] = $sizes;
			$data->data                  = $_data;

			return $data;
		}

	}
endif;