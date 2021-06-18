<?php

get_header(); ?>
<a
  id="logo-anchor"
  class="header-logo"
  href="<?php echo get_home_url(); ?>">
  <img class=""
      src="<?php echo get_template_directory_uri() ?>/resources/img/logo-menor-terreyro.png"
  />
</a>
<?php while (have_posts()) : the_post(); ?>


<main id="template"class="template-tc">
	<div class="template-tc__header">
    <a href = "javascript:history.back()">
      <img src="<?php echo get_template_directory_uri() ?>/resources/icons/tc-arrow.png"/>
    </a>
	</div>
	<?php the_content(); ?>

</main>
<div class="caroussel-popup">
  <div class="caroussel-popup__image"></div>
</div>
<div class="caroussel-popup__close">
  <span></span>
  <span></span>
</div>
<?php endwhile; ?>

<?php
get_footer();
