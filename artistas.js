// Hacer ejercicios de artistas acá
/*
{
    nombre: 'Ochoa Chang',
    solista: true,
    edad: 33,
    instrumento: 'batería',
    paisNacimiento: 'Mayotte',
    ultimoRecital: {
      pais: 'Vatican City State (Holy See)',
      anio: 2016,
      entradasVendidas: 68197,
      costoEntradas: 2987
    },
    discos: [
        {
            titulo: 'pariatur excepteur dolore',
            canciones: 13,
            anioLanzamiento: 1993,
            copiasVendidas: 20393
        },
        {
            titulo: 'aliquip est esse',
            canciones: 9,
            anioLanzamiento: 2017,
            copiasVendidas: 69303
        },
        {
            titulo: 'reprehenderit est aliquip',
            canciones: 12,
            anioLanzamiento: 2011,
            copiasVendidas: 1861
        },
        {
            titulo: 'do magna irure',
            canciones: 9,
            anioLanzamiento: 2018,
            copiasVendidas: 29126
        },
        {
            titulo: 'proident id amet',
            canciones: 13,
            anioLanzamiento: 2017,
            copiasVendidas: 22989
        },
        {
            titulo: 'cillum velit est',
            canciones: 15,
            anioLanzamiento: 2010,
            copiasVendidas: 17449
        },
        {
            titulo: 'nulla incididunt laborum',
            canciones: 11,
            anioLanzamiento: 2019,
            copiasVendidas: 90743
        },
        {
            titulo: 'commodo sint fugiat',
            canciones: 13,
            anioLanzamiento: 2014,
            copiasVendidas: 70766
        },
        {
            titulo: 'elit adipisicing eu',
            canciones: 8,
            anioLanzamiento: 2006,
            copiasVendidas: 89143
        }
    ],
        genero: 'punk'
}
*/

// 1-  `artistasSolistas`, que tome por parámetro un array de artistas y devuelva un array con les artistas que sean solistas

const artistasSolistasConVariables = (artistas) => {
    const solistas = artistas.filter(artista => artista.solista === true)
    return solistas
}
const artistasSolistasConReturn = (artistas) => {
    return artistas.filter(artista => artista.solista)
 }
 
const artistasSolistasConReturnImplicito = (artistas) => artistas.filter(artista => artista.solista)

// 4 - cantidadDeArtistasPorGenero, que tome por parámetro un array de artistas y devuelva un objeto donde cada "género" es una propiedad y su valor la cantidad de artistas de dicho género

/*
1- preguntar si existe ese genero
A- Si existe le sumo uno
B- Si no exite lo creo con valor en 1
 const genero = [punk, rock, rock, punk, pop];
 genero[1]
*/

const cantidadDeArtistasPorGenero = (artistas) =>{
    /*
        vuelta 1 => {} , punk
        vuelta 2 => {punk: 1} , rock
        vuelta 3 => {punk: 1,rock: 1} ,rock
        vuelta 4 => {punk: 1,rock: 2} ,punk
        vuelta 5 => {punk: 2,rock: 2} ,pop
        vuelta 6 => {punk: 2,rock: 2,pop: 1}
    */

    return artistas.reduce((acc,artista)=>{
        console.log("antes",{...acc},artista.genero);

        if(acc[artista.genero]){
            acc[artista.genero]++;
        }else{
            acc[artista.genero]=1;
        }

        console.log("despues",{...acc},artista.genero);
        return acc;
    }, {})

}

/*
    El método reduce() puede recibir uno o dos parámetros: una función, o una función y un valor inicial (acc)
    const numeros = [15,28,3,4]

    // un parámetro
    numeros.reduce((acc, numero) => {}) 

    // dos parámetros
    numeros.reduce((acc, numero) => {}, 0) 

    // Sin acumulador / valor inicial
    // vuelta 1 => 15 28 = 43
    // vuelta 2 => 43 3  = 46
    // vuelta 3 => 46 4  = 50

    numeros.reduce((acc,artista)=>{
        return acc+artista
    })


    // Con acumulador / valor inicial
    // vuelta 1 => 30 15 = 30
    // vuelta 2 => 30 28 = 46

    numeros.reduce((acc,artista)=>{
        return acc+artista
    }, 30)
*/