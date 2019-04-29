
function busqueda(valor,texto){
    var uri= "https://pokeapi.co/api/v2";
    switch(valor){
        case "id":
                 uri += "/pokemon/" + texto + "/";
                 busqueda_ajax(uri);
                 break;
        case  "nombre":
                 uri += "/pokemon/" + texto + "/";
                 busqueda_ajax(uri);
                 break;
        case  "tipo":
                 uri += "/type/" + texto + "/";
                 busqueda_ajax_tipo(uri);
                 break;
    }
}

function busqueda_ajax(URL){
    $.ajax({
        url: URL,
        success: function(data) {

            var resultado = data;
            $('.resp').append("Nombre de pokemon: " + resultado.name + "<br>");
            $('.resp').append("Altura: " + resultado.height + "<br>");
            $('.resp').append("Peso: " + resultado.weight + "<br>");
            image = $('<img>', {
                src: resultado.sprites.front_default,
                click: function() {
                    window.location.href = 'compartir.html?id=' + resultado.id;

                }
            });

            $('.resp').append(image);
            $('.resp').append("<h3>Para compartir haga click sobre la imagen del pokemon </h3>");

        }

    }, 'json');
}


function busqueda_ajax_tipo(pagina){
    $.ajax({
        url: pagina,
        success: function(data) {
            var resultado = data;

            $('.resp').append("Recibe doble daño de pokemons de tipo:<br>");
            for (i = 0; i < resultado.damage_relations.double_damage_from.length; i++) {
                $('.resp').append((i + 1) + "-" + resultado.damage_relations.double_damage_from[i].name + "<br>");
            }
            $('.resp').append("Causa doble daño de pokemons de tipo:<br>");
            for (i = 0; i < resultado.damage_relations.double_damage_from.length; i++) {
                $('.resp').append((i + 1) + "-" + resultado.damage_relations.double_damage_to[i].name + "<br>");
            }
            $('.resp').append("Movimientos:<br>");
            for (i = 0; i < 10; i++) {
                $('.resp').append((i + 1) + "-" + resultado.moves[i].name + "<br>");
            }
            $('.resp').append("Son pokemons de este tipo:<br>");
            for (j = 0; j < 10; j++) {
                $('.resp').append((j + 1) + "-" + resultado.pokemon[j].pokemon.name + "<br>");
                $.ajax({
                    url: resultado.pokemon[j].pokemon.url,
                    success: function(info) {
                        var imagen_pokemon = info;
                        image = $('<img>', {
                            src: imagen_pokemon.sprites.front_default,
                            click: function() {
                                window.location.href = 'compartir.html?id=' + imagen_pokemon.id;

                            }
                        });


                        $('.resp').append(image);

                    }
                });

            }
            $('.resp').append("<h3>Para compartir haga click sobre la imagen del pokemon </h3>");

        }

    }, 'json');
}




function ComprobarTipo(){
    $('#tipo').click(function(e){

        $('#texto').hide();
        var tipo = '<select class="nro_tipo" id="nro"><option value="1">Normal </option><option value="2">Fighting </option><option value="3">Flying </option><option value="4">Poison </option><option value="5">Ground </option><option value="6">Rock </option><option value="7">Bug </option><option value="8">Ghost </option><option value="9">Steel </option><option value="10">Fire </option><option value="11">Water </option><option value="12">Grass </option><option value="13">Electric </option><option value="14">Psychic </option><option value="15">Ice </option><option value="16">Dragon </option><option value="17">Dark </option><option value="18">Fairy </option>';
        $(tipo).appendTo('.inputs');
        $('.nro_tipo').show();
        

    });
}



$(document).ready(function(e) {
    ComprobarTipo();
    $('#buscar').click(function(e){
        if($('#busqueda').val()=="id" || $('#busqueda').val()=="nombre"){
            busqueda($('#busqueda').val(),$('#texto').val());
        } else {
            busqueda($('#busqueda').val(),$('#nro').val());
        }

        
        
    });


});