$('.next').click(function() {
    var currentImage = $('img.active');
    console.log(currentImage);

    currentImage.removeClass('active');
    console.log(currentImage);

    var nextImage = currentImage.next('img');
    console.log(nextImage);

    if (nextImage.length != 0) {
        nextImage.addClass('active');

    } else {
        nextImage = $('img:first-child');
        nextImage.addClass('active');
    }

})
