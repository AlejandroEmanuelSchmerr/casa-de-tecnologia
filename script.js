
$(document).ready(function() {
    $('a').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    $('#contact-form').submit(function(event) {
        event.preventDefault();
        const formData = $(this).serialize();

        console.log('Formulario enviado:', formData);
    });
});
