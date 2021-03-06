function enviar(resultado){
    $('#enviar').click(function(e) {

        
        if (validarMail($('#email_rem').val())==false || validarMail($('#email_dest').val())==false ) {
            alert("No se puede enviar el mail");
            return 0;
        }
        var mailto = 'mailto:' + $('#email_dest').val();
        mailto += '?subject=Mira este pokemon ';
        var msg = '';
        if ($('#nombre').val() != "") {
            msg += $('#nombre').val();
        }
        msg += '&body=' + $('#email_rem').val() + ' te ha recomendado que veas esta informacion:';
        mailto += msg + "     nombre:    " + resultado.name + "      Altura:     " + resultado.height + "     peso:      " + resultado.weight + "    imagen:     " + resultado.sprites.front_default;

        window.location.assign(mailto);


    });
}

function validarMail(correo) {
    var reg =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
    if (reg.test(correo)) {
        console.log("Correo validado");
    } else {
        alert("La dirección de correo " + correo + "es incorrecta"); 
        return false;  
    }


}

function buscar(uri){
    $.ajax({
        url: uri,
        success: function(data) {
            var resultado = data;
            $('.resp').append("Nombre de pokemon: " + resultado.name + "<br>");
            $('.resp').append("Altura: " + resultado.height + "<br>");
            $('.resp').append("Peso: " + resultado.weight + "<br>");
            image = new Image();
            image.src = resultado.sprites.front_default;
            image.onload = function() {
                $('.resp').append(image);
            };
            enviar(resultado);
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