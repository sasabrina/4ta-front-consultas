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