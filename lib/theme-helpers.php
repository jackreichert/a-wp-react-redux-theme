<?php

class Theme_Helpers {
	public static function post_count() {
		global $wp_query;
		if ( isset( $wp_query->posts ) ) {
			return count( $wp_query->posts );
		}

		return false;
	}

	public static function get_class( $many, $single, $echo = true ) {
		$class = ( 1 < self::post_count() ) ? $many : $single;

		if ( $echo ) {
			echo $class;
		} else {
			return $class;
		}
	}
}