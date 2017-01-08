<?php

function react_scripts() {
	wp_enqueue_style('bootstrap4.0-css', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css', [], '4.0-alpha');
	wp_enqueue_script( 'tether', 'https://cdnjs.cloudflare.com/ajax/libs/tether/1.3.2/js/tether.min.js', [], '4.0-alpha', true );
	wp_enqueue_script( 'bootstrap4.0-js', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/js/bootstrap.min.js', ['jquery', 'tether'], '1.3.2', true );
	wp_enqueue_script( 'ReactTheme-js', get_template_directory_uri() . '/bundle.js', ['jquery'], date('YmdHis'), true );
	wp_localize_script( 'ReactTheme-js', 'RT_API', array(
			'root'   => esc_url_raw( rest_url() ),
			'nonce' => wp_create_nonce( 'wp_rest' )
	));
}
add_action( 'wp_enqueue_scripts', 'react_scripts' );
