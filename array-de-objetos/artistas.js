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

/***************** EJERCICIO 1 *****************/

// 1-  `artistasSolistas`, que tome por parámetro un array de artistas y devuelva un array con les artistas que sean solistas

const artistasSolistasConVariables = (arrayArtistas) => {
    const solistas = arrayArtistas.filter(artista => artista.solista === true)
    return solistas
}
const artistasSolistasConReturn = (arrayArtistas) => {
    return arrayArtistas.filter(artista => artista.solista)
 }
 
const artistasSolistasConReturnImplicito = (arrayArtistas) => arrayArtistas.filter(artista => artista.solista)

// console.table(artistasSolistasConVariables(artistas));
// console.table(artistasSolistasConReturn(artistas));
// console.table(artistasSolistasConReturn(artistas));


/***************** EJERCICIO 2 *****************/

// 2. `artistasPorEdad`, que tome un parámetro "edad" y un array de artistas y devuelva un array con les artistas que tengan dicha edad

const artistasPorEdad = (edad, arrayArtistas) => {
    return arrayArtistas.filter(artista => artista.edad === edad)
}

// console.table(artistasPorEdad(25, artistas))


/***************** EJERCICIO 3 *****************/

// 3. `cantidadDeArtistasPorInstrumento`, que tome por parámetro un array de artistas y devuelva un objeto donde cada "instrumento" es una propiedad y su valor la cantidad de artistas que tocan dicho instrumento

const cantidadDeArtistasPorInstrumento = (arrayArtistas) => {
    return arrayArtistas.reduce((acc, artista) => {

        if(acc[artista.instrumento]){
            acc[artista.instrumento]++;
        }else{
            acc[artista.instrumento]=1;
        }

        return acc;
    }, {})
}

// console.table(cantidadDeArtistasPorInstrumento(artistas))


/***************** EJERCICIO 4 *****************/

// 4 - cantidadDeArtistasPorGenero, que tome por parámetro un array de artistas y devuelva un objeto donde cada "género" es una propiedad y su valor la cantidad de artistas de dicho género

// visto en clase 63

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


/***************** EJERCICIO 5 *****************/

// 5. `artistasConMasDiscosQue`, que tome por parámetro "cantidadDeDiscos" y un array de artistas y devuelva un array con les artistas que tiene más de esa cantidad de discos, ordenados de mayor a menor según cantidad de discos

const artistasConMasDiscosQue = (cantidadDeDiscos, arrayArtistas) => {
    const conMasDiscos = arrayArtistas.filter((artista) => artista.discos.length > cantidadDeDiscos)

    return conMasDiscos.sort((a, b) => b.discos.length - a.discos.length)
}

// console.table(artistasConMasDiscosQue(8, artistas))


/***************** EJERCICIO 6 *****************/

// 6. `artistaConMasEntradasVendidas`, que tome por parámetro un array de artistas y devuelva el objeto artista que vendió más entradas en su último recital

const artistaConMasEntradasVendidas = (arrayArtistas) => {
    return arrayArtistas.reduce((acc, artista) => {
        if (acc.ultimoRecital.entradasVendidas > artista.ultimoRecital.entradasVendidas) {
            return acc
        } else {
            return artista
        }
    })
}

// console.log(artistaConMasEntradasVendidas(artistas));


/***************** EJERCICIO 7 *****************/

// 7. `artistaConMayorRecaudacion`, que tome por parámetro un array de artistas y devuelva el objeto artista que más recaudó en su último recital (entradasVendidas * costoEntradas)

const artistaConMayorRecaudacion = (arrayArtistas) => {
    // hago una función auxiliar para calcular la recaudación que luego la voy a usar en el reduce
    const calcularRecaudacion = (objetoArtista) => {
        return objetoArtista.ultimoRecital.entradasVendidas * objetoArtista.ultimoRecital.costoEntradas
    }

    return arrayArtistas.reduce((acc, artista) => {
        if (calcularRecaudacion(acc) > calcularRecaudacion(artista)) {
            return acc
        } else {
            return artista
        }
    })
}

// console.log(artistaConMayorRecaudacion(artistas));


/***************** EJERCICIO 8 *****************/

// 8. `artistasConDiscoEnAnio`, que tome por parámetro un parámetro "anio" y un array de artistas, y devuelva un array con los artistas que tengan publicado al menos un disco en dicho año

const artistasConDiscoEnAnio = (anio, arrayArtistas) => {
    return arrayArtistas.filter((artista) => {
        return artista.discos.filter((disco) => disco.anioLanzamiento === anio).length != 0
    })
}
// console.table(artistasConDiscoEnAnio(2003, artistas))


/***************** EJERCICIO 9 *****************/


// 9. `artistaConMasCopias`, que devuelva el objeto artista que más copias de discos en total vendió

const artistaConMasCopias = (arrayArtistas) => {
    // hago una función auxiliar para el total de copias vendidas que luego la voy a usar en el reduce
    const totalDiscosVendidos = (objetoArtista) => {
        return objetoArtista.discos.reduce((acc, disco) => {
            acc += disco.copiasVendidas
            return acc
        }, 0)
    }

    return arrayArtistas.reduce((acc, artista) => {
        if (totalDiscosVendidos(acc) > totalDiscosVendidos(artista)) {
            return acc
        } else {
            return artista
        }
    })
}

// console.log(artistaConMasCopias(artistas));