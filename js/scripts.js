
function busqueda(valor,texto){
    var uri= "https://pokeapi.co/api/v2";
    switch(valor){
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
            $('.resp').append("<br><strong> Nombre de pokemon: " + resultado.name + "</strong><br>");
            $('.resp').append("<strong>Altura: " + resultado.height + "</strong><br>");
            $('.resp').append("<strong>Peso: " + resultado.weight + "</strong><br>");
            $('.resp').append("<strong>Experiencia base: " + resultado.base_experience + "</strong><br>");
            for (i = 0; i < resultado.abilities.length; i++) {
                $('.resp').append("<strong>Habilidad: " + resultado.abilities[i].ability.name + "</strong><br>");
                }
            image = $("<img>", {
                src: resultado.sprites.front_default,
                click: function(){
                    window.location.href = 'compartir.html?id=' + resultado.id;
                    
                }
            });
            var div= "<div id=pokemon />";
            $('.resp').append(div);
            $('#pokemon').append(image);
            var span2 = "<div id=nompoke/>";
            $("#pokemon").append(span2) ;
            $('#nompoke').append("<span><strong>"+resultado.name+"</strong></span>");
            $('#nompoke').click(function(e){
                window.location.href = 'detalle.html?id=' + resultado.id;
            });
            
            $('.resp').append("<h3>Para compartir haga click sobre la imagen del pokemon </h3>");
            $('.resp').append("<h3>Para detalles haga click sobre el nombre del pokemon </h3>");
            

        }

    }, 'json');
    historial();
    
}


function busqueda_ajax_tipo(pagina){
    
    $.ajax({
        url: pagina,
        success: function(data) {
            var resultado = data;
            var divcentral = "<div id=central></div>";
            $('.resp').append(divcentral);
            var izq = "<div id=izq></div>";
            $('#central').append(izq);
            $('#izq').append("<span><h2>Recibe doble daño de pokemons de tipo:</h2></span>");
                var cen = "<div id=cen></div>";
                $('#central').append(cen);
                $('#cen').append("<span><h2>Causa doble daño de pokemons de tipo:</h2></span>");
                var der = "<div id=der></div>";
                $('#central').append(der);
                $('#der').append("<span><h2>Movimientos:</h2></span>");
            var listaizq = "<div id=listaizq></div>";
            $('#izq').append(listaizq);
            var listacen = "<div id=listacen></div>";
            $('#cen').append(listacen);
            var listader = "<div id=listader></div>";
            $('#der').append(listader);
            
            $('#buscar_mas').click(function(){

                resetear();
                var divcentral = "<div id=central></div>";
                 $('.resp').append(divcentral);
                  var izq = "<div id=izq></div>";
               $('#central').append(izq);
                $('#izq').append("<span><h2>Recibe doble daño de pokemons de tipo:</h2></span>");
                var cen = "<div id=cen></div>";
                $('#central').append(cen);
                $('#cen').append("<span><h2>Causa doble daño de pokemons de tipo:</h2></span>");
                var der = "<div id=der></div>";
                $('#central').append(der);
                $('#der').append("<span><h2>Movimientos:</h2></span>");
                var listaizq = "<div id=listaizq></div>";
                $('#izq').append(listaizq);
                var listacen = "<div id=listacen></div>";
                $('#cen').append(listacen);
                var listader = "<div id=listader></div>";
                $('#der').append(listader);
                for (i = 0; i < resultado.damage_relations.double_damage_from.length; i++) {
                

                    $('#listaizq').append( "<li><strong>" + resultado.damage_relations.double_damage_from[i].name + "</strong></li>");
                }
                
                for (i = 0; i < resultado.damage_relations.double_damage_from.length; i++) {
                    
                    $('#listacen').append( "<li><strong>" + resultado.damage_relations.double_damage_to[i].name + "</strong></li>");
                    
                }
                
                for (i = 0; i < 15; i++) {
                    
                    $('#listader').append( "<li><strong>" + resultado.moves[i].name + "</strong></li>");
                    
                }
                
                for (j = 0; j < 30; j++) {
                    var div= "<div id=pokemons />";
                    $('.resp').append(div); 
                    
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
                            var art = "<article id="+ imagen_pokemon.id +"/>";
                            $('#pokemons').append(art);
                           
                            var spn = "<div id=nompoke" + imagen_pokemon.id + "/>";
                            $("#"+ imagen_pokemon.id +"").append(spn) ;
                           
                            $("#"+ imagen_pokemon.id +"").append(image);
    
                             $("#nompoke"+ imagen_pokemon.id +"").append("<strong>" +imagen_pokemon.name + "</strong>") ;
                             $("#nompoke"+ imagen_pokemon.id +"").click(function(e){
                                window.location.href = 'detalle.html?id=' + imagen_pokemon.id;
                            });
                        }
                    });
    
                }
                $('.resp').append("<h3>Para compartir haga click sobre la imagen del pokemon </h3>");    
                $('.resp').append("<h3>Para detalles haga click sobre el nombre del pokemon </h3>");
            });
            for (i = 0; i < resultado.damage_relations.double_damage_from.length; i++) {
                

                $('#listaizq').append( "<li><strong>" + resultado.damage_relations.double_damage_from[i].name + "</strong></li>");
            }
            
            for (i = 0; i < resultado.damage_relations.double_damage_from.length; i++) {
                
                $('#listacen').append( "<li><strong>" + resultado.damage_relations.double_damage_to[i].name + "</strong></li>");
                
            }
            
            for (i = 0; i < 10; i++) {
                
                $('#listader').append( "<li><strong>" + resultado.moves[i].name + "</strong></li>");
                
            }
            
            for (j = 0; j < 10; j++) {
                var div= "<div id=pokemons />";
                $('.resp').append(div); 
                
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
                        var art = "<article id="+ imagen_pokemon.id +"/>";
                        $('#pokemons').append(art);
                       
                        var spn = "<div id=nompoke" + imagen_pokemon.id + "/>";
                        $("#"+ imagen_pokemon.id +"").append(spn) ;
                       
                        $("#"+ imagen_pokemon.id +"").append(image);

                         $("#nompoke"+ imagen_pokemon.id +"").append("<strong>" +imagen_pokemon.name + "</strong>") ;
                         $("#nompoke"+ imagen_pokemon.id +"").click(function(e){
                            window.location.href = 'detalle.html?id=' + imagen_pokemon.id;
                        });
                       
                    }
                });

            }
            $('.resp').append("<h3>Para compartir haga click sobre la imagen del pokemon </h3>");
            $('.resp').append("<h3>Para detalles haga click sobre el nombre del pokemon </h3>");
                    
        }

    }, 'json');
    
     historial();
     buscarMas();
    
    
    
   
}

function ComprobarTipo(){
   

        $('#texto').hide();
        
        if (document.getElementById("nro")==null){
            
            var tipo = '<select class="nro_tipo" id="nro"><option value="1">Normal </option><option value="2">Fighting </option><option value="3">Flying </option><option value="4">Poison </option><option value="5">Ground </option><option value="6">Rock </option><option value="7">Bug </option><option value="8">Ghost </option><option value="9">Steel </option><option value="10">Fire </option><option value="11">Water </option><option value="12">Grass </option><option value="13">Electric </option><option value="14">Psychic </option><option value="15">Ice </option><option value="16">Dragon </option><option value="17">Dark </option><option value="18">Fairy </option>';
            $(tipo).appendTo('.inputs');
         
            
        } else {
            $('#nro').show();
        }
        


   
}



function historial(){
    var boton = '<button id="boton_busqueda" >Ver historial</button>';
    if (document.getElementById("boton_busqueda")==null){
        $(boton).appendTo('.historical');
    }
     
                $('.historial').hide();
                localStorage.setItem("Texto", $('#texto').val());
                localStorage.setItem("Numero", $('#nro').val());
                var texto = localStorage.getItem("Texto");
                var numero = localStorage.getItem("Numero");
                //var list = "<ol>";
                //$('.historial').append(list);
                $('.historial').append("<li> " + texto + "</li>");
                $('.historial').append("<li> " + numero + "</li>");
                //var fin = "</ol>";
                //$('.historial').append(fin);
                $('#boton_busqueda').click(function(e) {
                    $('.historial').show();
                });
}

function resetear(){
    $('.resp').empty();
}

function habilitar(){
    
    $('#texto').show();
    $('#texto').val('');
    $('#nro').hide();
    $('#buscar_mas').hide();
}



function validarNombre(nom) {
    var reg =/^[a-zA-Z]/;
    if (reg.test(nom)) {
        console.log("Nombre validado");
    } else {
        alert("Este nombre es incorrecto"); 
        return false;  
    }
}

function buscarMas (){
    var boton3 = '<button id="buscar_mas" type="submit">Buscar Mas</button>';
    
    if (document.getElementById("buscar_mas")==null){
        $(boton3).appendTo('.historical');
    }
    
    
    
}

$(document).ready(function(e) {
    $('#tipo').click(function(e) {
        ComprobarTipo();
    });
    $('#nombre').click(function(e) {
        habilitar();
        resetear();
    });

    $('#buscar').click(function(e){
        
        if($('#busqueda').val()=="nombre"){
            resetear();
            if (validarNombre($('#texto').val()) == false) {
                return 0;
            }
            busqueda($('#busqueda').val(),$('#texto').val());
         
        } else {
            resetear();
            $('#buscar_mas').show();
            busqueda($('#busqueda').val(),$('#nro').val());
         
        }
    });
    $('#contacto').click(function(e) {
        window.location.href = 'contacto.html';
        
    });
   

    

});