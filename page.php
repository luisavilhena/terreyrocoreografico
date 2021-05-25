<?php

get_header(); ?>
<?php while (have_posts()) : the_post(); ?>

<main class="template-tc">
	<div class="template-tc__header">
		<img class=""
    src="<?php echo get_template_directory_uri() ?>/resources/icons/tc-arrow.png"/>
    <div class="template-tc__title">
    	<h1><?php the_title(); ?></h1>
    </div>
	</div>
	<?php the_content(); ?>

</main>
<?php endwhile; ?>

<?php
get_footer();
