/**
 * Created by DAW on 15/11/2018.
 */
function cambiarIdioma(idBandera) {
    console.log("hola")
    var url = window.location.href;
    var nombreArchivoYExtension = url.substring(url.lastIndexOf('/')+1);/*floreros-es.html*/

    if(idBandera === 'es'){
        var nombreArchivo = nombreArchivoYExtension.substring(0, nombreArchivoYExtension.indexOf('-'));
        var extensionArchivo = nombreArchivoYExtension.substring(nombreArchivoYExtension.lastIndexOf('.'));
        window.location.assign(nombreArchivo + "-es" + extensionArchivo);
    }
    else if(idBandera === 'uk'){
        var nombreArchivo = nombreArchivoYExtension.substring(0, nombreArchivoYExtension.indexOf('-'));
        var extensionArchivo = nombreArchivoYExtension.substring(nombreArchivoYExtension.lastIndexOf('.'));
        window.location.assign(nombreArchivo + "-uk" + extensionArchivo);
    }
}