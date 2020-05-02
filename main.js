// Intercetto il click sulla classe next

$('.next').click(function() {
    // Recupero l'immagine che ha la clase active ora
    var currentImage = $('img.active');
    // Recupero il pallino corrente
    var currentCircle = $('.fa-circle.active');
    console.log(currentImage);
    // rimuovo la classe active dall'immagine corrente
    currentImage.removeClass('active');
    console.log(currentImage);
    // rimuovo la classe active dal pallino corrente
    currentCircle.removeClass('active');
    // Recupero l'immagine successiva
    var nextImage = currentImage.next('img');
    console.log(nextImage);
    // Recupero il pallino successivo
    var nextCircle = currentCircle.next('.fa-circle');
    // Verifico se esiste un'immagine successiva
    if (nextImage.length != 0) {
        // è presente un'immagine successiva
        // aggiungo la classe active all'immagine successiva
        nextImage.addClass('active');
        // aggiungo la classe active al pallino successivo
        nextCircle.addClass('active');
    } else {
        // non c'è un'immagine successiva
        // Riparto dalla prima immagine
        nextImage = $('img:first-child');
        nextImage.addClass('active');

        // non c'è un pallino successivo
        // riparto dal primo
        $('.fa-circle:first-child').addClass('active')
    }

})


$('.prev').click(function() {
    // Recupero l'immagine che ha la clase active ora
    var currentImage = $('img.active');
    console.log(currentImage);
    // Recupero il pallino che ha la classe active ora
    var currentCircle = $('.fa-circle.active');
    // rimuovo la classe active dall'immagine corrente
    currentImage.removeClass('active');
    console.log(currentImage);
    // rimuovo la classe active dal pallino corrente
    currentCircle.removeClass('active');
    // Recupero l'immagine precedente
    var prevImage = currentImage.prev('img');
    console.log(prevImage);
    // Recupero il pallino precedente
    var prevCircle = currentCircle.prev('.fa-circle');
    // Verifico se esiste un'immagine precedente
    if (prevImage.length != 0) {
        // è presente un'immagine precedente
        // aggiungo la classe active all'immagine precedente
        prevImage.addClass('active');
        // aggiungo la classe active al pallino precedente
        prevCircle.addClass('active');
    } else {
        // non c'è un'immagine precedente
        // Riparto dall'ultima immagine'
        prevImage = $('img:last-of-type');
        prevImage.addClass('active');
        // non c'è un pallino precedente
        // riparto dall'ultimo
        $('.fa-circle:last-of-type').addClass('active')
    }

})
