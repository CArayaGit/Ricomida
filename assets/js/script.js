$(function(){
    $("a").click(function(event){
        if (this.has !== "") {
            event.preventDefault();

            var gato = this.hash;

            $("html, body").animate({
                scrolltop: $(gato).offset().top
            }, 500, function(){
                window.location.hash = gato;
            });
        }
    });

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })

})