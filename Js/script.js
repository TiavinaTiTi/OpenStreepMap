let ville = distance = ""
window.onload = function(){
    var carte = L.map('maCarte').setView([-18.8791902, 47.5079055], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; Carte de Madagascar',
        minZoom: 1,
	    maxZoom: 20,
        }).addTo(carte);
    
    // var marquer = L.marker([-18.8791902, 47.5079055]).addTo(carte);
    // marquer.bindPopup("<p> JM contact </p>");

    //On active la gestion d'itineraires
    L.Routing.control({
        geocoder: L.Control.Geocoder.nominatim()
    }).addTo(carte)

    //Gestion des champs
    let champVille = document.getElementById('champ-ville')
    let champDistance = document.getElementById('champ-distance')
    let valeurDistance = document.getElementById('valeur-distance')

    champDistance.addEventListener("change", function(){
        distance = this.value
        valeurDistance.innerText = distance + " Km"
    })
}

/**
 * Cette fonction effectue un appel Ajax vers yne url et retourne une promesse
 * @param {string} url 
 */
function ajaxGet(url){
    return new Promise(function(resolve, reject){
        //Nous allons gérer la promesse
        let xmlhttp = new XMLHttpRequest()

        xmlhttp.onreadystatechange = function(){
            if(xmlhttp.readyState = 4){
                if(xmlhttp.status = 200){
                    // On resoud la promesse
                    resolve(xmlhttp.response)
                }else{
                    reject(xmlhttp)
                }
            }
        }

        xmlhttp.onerror = function(error){
            reject(error)
        }
        xmlhttp.open('get', url, true)
        xmlhttp.send()

    })
}