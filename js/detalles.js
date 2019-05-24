function buscar(uri){
    $.ajax({
        url: uri,
        success: function(data) {
            var resultado = data;
            $('.resp').append("<br>Nombre de pokemon: " + resultado.name + "<br>");
            $('.resp').append("Altura: " + resultado.height + " pies<br>");
            $('.resp').append("Peso: " + resultado.weight + " libras<br>");
            $('.resp').append("Experiencia base: " + resultado.base_experience + "<br>");

            for (i = 0; i < resultado.abilities.length; i++) {
            $('.resp').append("Habilidades: " + resultado.abilities[i].ability.name + "<br>");
            }
            for (i = 0; i < 15; i++) {
            $('.resp').append("Movimientos: " + resultado.moves[i].move.name + "<br>");
            }
            image = new Image();
            image.src = resultado.sprites.front_default;
            image.onload = function() {
                $('.resp').append(image);
            };
           
        }
    }, 'json');
}

function getParameterByName(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
}

$(document).ready(function(e) {
    if (getParameterByName("id")) {
        var uri = "https://pokeapi.co/api/v2/pokemon/";
        uri += getParameterByName("id") + "/";
        buscar(uri);
    }    
    
    $('#contacto').click(function(e) {
        window.location.href = 'contacto.html';
    });
    $('#volver').click(function(e) {
        window.location.href = 'buscar.html';
    });
});