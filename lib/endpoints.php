<?php

add_action( 'rest_api_init', function () {
  $namespace = 'react-theme/v1';
	register_rest_route( $namespace, '/prettyPermalink/(?P<url>.*?)', array(
		'methods' => 'GET',
		'callback' => 'get_post_for_url',
	));
});

/**
 * Grab latest post title by an author!
 *
 * @param array $data Options for the function.
 * @return string|null Post title for the latest,  * or null if none.
 */
function get_post_for_url( $data ) {
  $post_id = url_to_postid( $data['url'] );
  $post_type = get_post_type($post_id);
  $controller = new WP_REST_Posts_Controller($post_type);
  $request = new WP_REST_Request('GET', "/wp/v2/$post_types/$post_id");
  $request->set_url_params(array('id' => $post_id));

	return $controller->get_item($request);
}
