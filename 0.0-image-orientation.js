// image orientation
// get the orientation (landscape / portrait) of an image or div with background image and add a class accordingly
// it will automatically assign a class to every image
// set .js-image-orientation on an object to do this manually
// &#169; XXIX / Jacob Heftmann

function imageOrientation() {

  // automatically get the image orientation
  $('img').load(function() {

    imgHeight = $(this).height();
    imgWidth = $(this).width();

    if (imgHeight > imgWidth) {
      $(this).addClass('img-portrait');
    } else if (imgHeight == imgWidth) {
      $(this).addClass('img-square');
    } else {
      $(this).addClass('img-landscape');
    }

  });

  // or get them manually. For example, when using background images.
  $('.js-image-orientation').each(function() {

    imgHeight = $(this).height();
    imgWidth = $(this).width();

    if (imgHeight > imgWidth) {
      $(this).addClass('img-portrait');
    } else if (imgHeight == imgWidth) {
      $(this).addClass('img-square');
    } else {
      $(this).addClass('img-landscape');
    }

  });

}
