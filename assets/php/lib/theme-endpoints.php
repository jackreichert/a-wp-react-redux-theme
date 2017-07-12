<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

if ( ! class_exists( 'Theme_Endpoints' ) ) :

	class Theme_Endpoints {
		function __construct() {
		}

		function init() {
			$Pretty_Permalinks_Endpoint = new Pretty_Permalinks_Endpoint();
			$Pretty_Permalinks_Endpoint->init();

			$Add_Formatted_Date_Endpoint = new Add_Formatted_Date_Endpoint();
			$Add_Formatted_Date_Endpoint->init();

			$Menus_Endpoint = new Menus_Endpoint();
			$Menus_Endpoint->init();

			$Add_Featured_Image_Endpoint = new Add_Featured_Image_Endpoint();
			$Add_Featured_Image_Endpoint->init();

		}
	}

endif;