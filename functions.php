<?php

spl_autoload_register( function ( $class ) {
	$classname_pieces = explode( '_', strtolower( $class ) );
	$class_file       = get_template_directory() . "/lib/" . implode( '-', $classname_pieces ) . ".php";
	if ( file_exists( $class_file ) ) {
		include_once  $class_file;
	} else {
		$class_file = get_template_directory() . "/lib/" . array_pop( $classname_pieces ) . "s/" . implode( '-', $classname_pieces ) . ".php";
		if ( file_exists( $class_file ) ) {
			include_once $class_file;
		}
	}
} );

$Theme_Support = new Theme_Support();
$Theme_Support->init();

$Theme_Enqueue = new Theme_Enqueue();
$Theme_Enqueue->init();

$Theme_Endpoints = new Theme_Endpoints();
$Theme_Endpoints->init();