<?php

add_action( 'rest_api_init', function () {
  $namespace = 'react-theme/v1';
	register_rest_route( $namespace, '/url/(?P<url>.*?)', array(
		'methods' => 'GET',
		'callback' => 'get_id_for_url',
	));
});

/**
 * Grab latest post title by an author!
 *
 * @param array $data Options for the function.
 * @return string|null Post title for the latest,  * or null if none.
 */
function get_id_for_url( $data ) {
  $response = $data['url'];

	return $response;
}
