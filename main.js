// Dichiaro una variabile con all'interno il metodo setInterval per far partire
// automaticamente lo scorrimento delle immagini ogni 3 secondi

var clock = setInterval(nextImage, 3000);

// Imposto l'azione con il clik su pulsante next
$('.next').click(function() {
    // richiamo la funzione nextImage
    nextImage();
})

// Imposto l'azione con il clik su pulsante prev
$('.prev').click(function() {
    // richiamo la funzione prevImage
    prevImage();
})

// intercetto il click sul pallino
$('.fa-circle').click(function() {
    // Imposto una variabile che rappresenta l'indice delle immagini che parte da 0
    var current_img = 0;
    // rimuovo dal pallino attivo con indice 0 la classe active
    $('.fa-circle.active').removeClass('active');
    //aggiungo al pallino cliccato la classe active
    $(this).addClass("active");
    // rimuovo dall'immagine con indice 0 la classe attiva
    $('img.active').removeClass('active');
    // imposto il valore nuovo dell'indice delle immagini prendendo i dati dal data-num dell'html
    current_img=$(this).data('num');
    //aggiungo la classe active all'immagine nuova corrente
	$('img').eq(current_img).addClass('active');
});

// intercetto il clik sul pulsante pausa
$('.pause').click(function(){
    // interrompo la funzione setInterval
    clearInterval(clock);
    // mostro il pulsante play
    $('.controller .play').show();
    // nascondo il pulsante pausa
    $('.controller .pause').hide();
});

// intercetto il clik sul pulsante play
$('.play').click(function(){
    // nascondo il pulsante play
    $('.controller .play').hide();
    // visualizzo il pulsante pause
    $('.controller .pause').show();
    // imposto la funzione setInterval al click del pulsante play
    clock = setInterval(nextImage, 3000);
});

// Funzione nexImage
function nextImage(){
    // Recupero l'immagine attiva
    var currentImage = $('img.active');
    // Recupero il pallino corrente
    var currentCircle = $('.fa-circle.active');

    // rimuovo la classe active dall'immagine corrente
    currentImage.removeClass('active');

    // rimuovo la classe active dal pallino corrente
    currentCircle.removeClass('active');
    // Recupero l'immagine successiva
    var nextImage = currentImage.next('img');

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
};
};

// Funzione prevImage
function prevImage(){
    // Recupero l'immagine che ha la clase active ora
    var currentImage = $('img.active');

    // Recupero il pallino che ha la classe active ora
    var currentCircle = $('.fa-circle.active');
    // rimuovo la classe active dall'immagine corrente
    currentImage.removeClass('active');

    // rimuovo la classe active dal pallino corrente
    currentCircle.removeClass('active');
    // Recupero l'immagine precedente
    var prevImage = currentImage.prev('img');

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
        $('.fa-circle:last-child').addClass('active')
    }
}
