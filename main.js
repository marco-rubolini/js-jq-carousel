// Intercetto il click sulla classe next

$('.next').click(function() {
    // Recupero l'immagine che ha la clase active ora
    var currentImage = $('img.active');
    console.log(currentImage);
    // rimuovo la classe active dall'immagine corrente
    currentImage.removeClass('active');
    console.log(currentImage);
    // Recupero l'immagine successiva
    var nextImage = currentImage.next('img');
    console.log(nextImage);
    // Verifico se esiste un'immagine successiva
    if (nextImage.length != 0) {
        // è presente un'immagine successiva
        // aggiungo la classe active all'immagine successiva
        nextImage.addClass('active');
    } else {
        // non c'è un'immagine successiva
        // Riparto dalla prima immagine
        nextImage = $('img:first-child');
        nextImage.addClass('active');
    }

})


$('.prev').click(function() {
    // Recupero l'immagine che ha la clase active ora
    var currentImage = $('img.active');
    console.log(currentImage);
    // rimuovo la classe active dall'immagine corrente
    currentImage.removeClass('active');
    console.log(currentImage);
    // Recupero l'immagine precedente
    var prevImage = currentImage.prev('img');
    console.log(prevImage);
    // Verifico se esiste un'immagine precedente
    if (prevImage.length != 0) {
        // è presente un'immagine precedente
        // aggiungo la classe active all'immagine precedente
        prevImage.addClass('active');
    } else {
        // non c'è un'immagine precedente
        // Riparto dall'ultima immagine'
        prevImage = $('img:last-child');
        prevImage.addClass('active');
    }

})
