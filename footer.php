            <footer>
                <?php wp_nav_menu( [
                    'theme_location' => 'footer_menu',
                    'container'      => 'ul',
                    'menu_class'     => 'nav justify-content-center'
                ] ); ?>
                <div class="clearfix copy">&copy; <?php echo date( 'Y' ); ?>
                    <?php bloginfo( 'name' ); ?>
                    &nbsp;|&nbsp;Proudly Powered by&nbsp;
                    <a href="https://wordpress.org/">WordPress</a>&nbsp;&amp;&nbsp;<a href="https://github.com/jackreichert/a-wp-react-redux-theme">A React+Redux WordPress theme</a>
                </div>
                <?php wp_footer(); ?>
            </footer>

        </section>
    </div>
</body>
</html>
