<?php get_header(); ?>
<main id="postsContainer" class="<?php Theme_Helpers::get_class( 'card-columns', '' ); ?>">
    <div id="rendered-php">
		<?php if ( have_posts() ) : ?>
			<?php while ( have_posts() ) : the_post(); ?>
                <article <?php post_class( Theme_Helpers::get_class( 'card archive', 'card single w-75', false ) ); ?>>
					<?php if ( has_post_thumbnail() ): ?>
						<?php the_post_thumbnail( 'medium', array( 'class' => 'card-img-top img-fluid' ) ); ?>
					<?php endif; ?>
                    <div class="card-block">
                        <header class="card-title"><a href="<?php the_permalink(); ?>">
                                <h1><?php the_title(); ?></h1></a></header>
                        <div class="meta">
                            <div class="cats"><?php echo $categories_list = get_the_category_list( __( ', ', 'react-theme' ) ); ?></div>
                        </div>
                        <div class="card-text"><p><?php the_content(); ?></p>
                        </div>
                    </div>
                    <footer></footer>
                </article>
			<?php endwhile; ?>
		<?php else : ?>
            There doesn't seem to be anything here...
		<?php endif; ?>
        <div class="navigation"><p><?php posts_nav_link(); ?></p></div>
    </div>
</main>
<?php get_footer(); ?>
