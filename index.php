<?php get_header(); ?>

	<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <article class="<?php post_class(); ?>">
            <?php if (has_post_thumbnail()): ?>
                <?php the_post_thumbnail(); ?>
            <?php endif; ?>
            <div class="card-block">
                    <?php the_title(); ?>
            </div>
        </article>
	<?php endwhile; else : ?>
        There doesn't seem to be anything here...
	<?php endif; ?>

<?php get_footer(); ?>
