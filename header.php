<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
    <script>(function(H){H.className=H.className.replace(/\bno-js\b/,'js')})(document.documentElement)</script>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

	<?php wp_head(); ?>
</head>
<body>
<div id="react-main">
    <section class="container-fluid <?php Theme_Helpers::get_class( 'template-blog', 'template-single' ); ?>">
        <header class="navbar navbar-expand-lg navbar-light bg-light"><h1 class="navbar-brand"><a
                        href="/"><?php bloginfo( 'name' ); ?></a></h1>
            <nav class="collapse navbar-collapse">
				<?php wp_nav_menu( [
					'theme_location' => 'main_menu',
					'container'      => 'ul',
					'menu_class'     => 'navbar-nav mr-auto'
				] ); ?>
				<?php get_search_form(); ?>
            </nav>
        </header>