//RECETA PARA CONSUMIR APIS CON JS PURO

//1. PA DONDE VAS MIJO
//URI DEL SERVICIO

const URI="https://api.spotify.com/v1/artists/7hJcb9fa4alzcOq3EaNPoG/top-tracks?market=US"

//2. TENES DATOS ESPECIALES OME
//HAY DATOS DE CONTROL EN LA PETICION?

const TOKEN="Authorization: Bearer BQCevzxGGpoK-DthZX4i8kY_6d3GYOS1NfQk8RvqE5LnAC6MoroH95vnhHPeOw8caqWPCZUE-kGfEALSWkgFzXuxJLFS62K5lugIZTWevLHmvBuVcZsIDySOOOFz0z7PlV56XcTbWAdLXba5QW5oZe5Xgn-1SK90TLnCzDwUTB_5hOZ2rAHKT1rzBpAFM872_Uk"

//3. QUE VAS A MANDAR PAY
//CONFIGURA LA PETICION (LA PETICION ES UN OBJETO)

const PETICION={
    method:"GET",
    headers:{Authorization:TOKEN}
}

//4.ARRANCA PUES OME
//UTILIZA UNA PROMESA LLAMADA FETCH
fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
})
.catch(function(respuesta){
    console.log(respuesta)
})