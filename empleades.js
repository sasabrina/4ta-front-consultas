// Hacer ejercicios de empleades acá

// console.log(empleades); // la variable empleades viene del script data-empleades.js, vamos a poder acceder a ella siempre y cuando en nuestro HTML lo linkeemos antes del script en el que necesitemos usarla.


/***************** EJERCICIO 1 *****************/

// empleadesQueHacenGuardia, que devuelva un array con todes les empleades que hacen guardia 
//(visto en la clase 61)

// Ejemplo con filter
function empleadesQueHacenGuardiaFilter(array) {
  // declaro una variable cuyo valor será el array que nos devuelva filter
  const hacenGuardia = array.filter((empleade) => empleade.haceGuardia); // filtramos el array original, quedandonos solamente con los objetos que cumplan la condición de tener la propiedad "haceGuardia" en true

  return hacenGuardia; // y retornamos/devolvemos el array filtrado
}
// empleadesQueHacenGuardiaFilter(empleades)



// Ejemplo con forEach
function empleadesQueHacenGuardiaForeach() {
  const hacenGuardia = [];

  empleades.forEach((empleade) => {
    if (empleade.haceGuardia) {
      hacenGuardia.push(empleade);
    }
  });

  return hacenGuardia;
}


/***************** EJERCICIO 2 *****************/

// empleadesPorPais, que tome por parámetro el nombre de un país y devuelva un array con todes les empleades que son de dicho país

const empleadesPorPais = (pais) => {
  const empleadesPorPais = empleades.filter((empleade) => empleade.pais === pais);

  return empleadesPorPais;
};

// console.log(empleadesPorPais("Uruguay"));
// console.log(empleadesPorPais("Venezuela"));
// console.log(empleadesPorPais("Colombia"));


/***************** EJERCICIO 3 *****************/

// empleadesPorArea, que tome por parámetro el nombre de un área y devuelva un array con todes les empleades que son de dicho área

const empleadesPorArea = (area) => {
  const porArea = empleades.filter((empleade) => empleade.area === area)

  return porArea
}
// console.log(empleadesPorPais('QA'));


/***************** EJERCICIO 4 *****************/

// empleadesConSueldoMayorA, que tome por parámetro un número como sueldo y devuelva un array con todes les empleades que tengan un sueldo mayor a dicho número, ordenados de menor a mayor según sueldo

// ejemplo A
const empleadesConSueldoMayorA_A = (numero) => {
  const conMayorSueldo = empleades.filter((empleade) => empleade.sueldo > numero)
  conMayorSueldo.sort((a, b) => a.sueldo - b.sueldo)

  return conMayorSueldo
}

// ejemplo B
const empleadesConSueldoMayorA_B = (numero) => {
  const conMayorSueldo = empleades.filter((empleade) => empleade.sueldo > numero).sort((a, b) => a.sueldo - b.sueldo)

  return conMayorSueldo
}

// ejemplo C
const empleadesConSueldoMayorA_C = (numero) => {
  const conMayorSueldo = empleades.filter((empleade) => empleade.sueldo > numero)

  return conMayorSueldo.sort((a, b) => a.sueldo - b.sueldo)
}

// ejemplo D
const empleadesConSueldoMayorA_D = (numero) => {
  return empleades.filter((empleade) => empleade.sueldo > numero).sort((a, b) => a.sueldo - b.sueldo)
}

// ejemplo E
const empleadesConSueldoMayorA_E = (numero) => empleades.filter((empleade) => empleade.sueldo > numero).sort((a, b) => a.sueldo - b.sueldo)


// ejemplo F
const empleadesConSueldoMayorA_F = (numero) => {
  const mayorSueldo = (empleade) =>{
    return empleade.sueldo > numero
  }
  const conMayorSueldo = empleades.filter(mayorSueldo).sort()

  return conMayorSueldo
}

// console.log(empleadesConSueldoMayorA_A(53372));
// console.log(empleadesConSueldoMayorA_B(53372));
// console.log(empleadesConSueldoMayorA_C(53372));
// console.log(empleadesConSueldoMayorA_D(53372));
// console.log(empleadesConSueldoMayorA_E(53372));


/***************** EJERCICIO 5 *****************/

// empleadesConMasLenguajes, que tome por parámetro un número y devuelva un array con aquelles empleades que sepan más lenguajes que dicho número

const empleadesConMasLenguajes = (numero) => {
  const conMasLenguajes = empleades.filter((empleade) => empleade.lenguajes.length > numero)

  return conMasLenguajes
}
// console.table(empleadesConMasLenguajes(5));

/***************** EJERCICIO 6 *****************/

// sueldoPromedioEmpleades, que devuelva el sueldo promedio de todos los empleades
// Creamos un array más corto para ir probando nuestra función, y una vez resuelto probamos con el array original (empleades)
// (visto en la clase 62)
const test = [
  {
    nombre: "Wade Morgan",
    pais: "México",
    edad: 20,
    area: "QA",
    puesto: "Backend Developer",
    seniority: "Semisenior",
    sueldo: 80000,
    haceGuardia: false,
    lenguajes: ["Java"],
  },
  {
    nombre: "Pepito Morgan",
    pais: "México",
    edad: 20,
    area: "QA",
    puesto: "Backend Developer",
    seniority: "Semisenior",
    sueldo: 80000,
    haceGuardia: false,
    lenguajes: ["Java"],
  },
  {
    nombre: "Pepita Morgan",
    pais: "México",
    edad: 20,
    area: "QA",
    puesto: "Backend Developer",
    seniority: "Semisenior",
    sueldo: 20000,
    haceGuardia: false,
    lenguajes: ["Java"],
  },
];

// pasos    acc   -   empleade          index
// inicial  0     -   'Wade Morgan'     0
// 1        80000 -   'Pepito Morgan'   1
// 2        160000 -  'Pepita Morgan'   2
// 3        180000

const sueldoPromedioEmpleades = (empleades) => { // se agrega parámetro para poder reutilizar en el siquiente ejercicio
  const sueldoPromedio = empleades.reduce((acc, empleade, index) => {
    console.log({ acc, empleade, index }); // esto nos va a mostrar el valor de los parametros en cada vuelta.

    return acc + empleade.sueldo;
  }, 0);

  return sueldoPromedio / empleades.length;
};
// console.log(sueldoPromedioEmpleades()); // antes del ejercicio 7
// console.log(sueldoPromedioEmpleades(empleades)); // después del ejercicio 7


/***************** EJERCICIO 7 *****************/

// sueldoPromedioPorSeniority, que tome por parámetro un seniority, y devuelva el sueldo promedio de todes les empleades que tengan ese seniority

const sueldoPromedioPorSeniority = (seniority) => {
  const porSeniority = empleades.filter((empleade) => empleade.seniority === seniority)

  // La función del ejercicio 6 nos devuelve el sueldo promedio de un array de empleades, así que podríamos hacerla más dinámica agregandole un parámetro y, de esa manera, poder reutilizarla dentro de este

  const sueldoPromedio = sueldoPromedioEmpleades(porSeniority)
  return sueldoPromedio
}

// console.log(sueldoPromedioPorSeniority("Semisenior"));



/***************** EJERCICIO 8 *****************/

// buscarEmpleades, que tome por parámetros area, puesto y seniority, y devuelva un array con les empleades que pertenezcan a dicha area, puesto y seniority

const buscarEmpleades = (area, puesto, seniority) => {
  const resultadoBusqueda = empleades.filter((empleade) => empleade.area === area && empleade.puesto === puesto && empleade.seniority === seniority)

  return resultadoBusqueda
}
// console.table(buscarEmpleades("Seguridad", "Backend Developer", "Senior"));



/***************** EJERCICIO 9 *****************/

// errorEnProduccion, que ponga en true la propiedad haceGuardia de todos los empleados

const errorEnProduccion = () => {
  const todosHacenGuardia = empleades.map((empleade) => {
    empleade.haceGuardia = true
    return empleade
  })

  return todosHacenGuardia
}

// console.table(errorEnProduccion());


/***************** EJERCICIO 10 *****************/

// 10 - `subirDeCategoria`, que tome como parámetro un objeto empleade. Si diche empleade no tiene un seniority "Senior", cambiar el valor de su propiedad seniority con el siguiente que le corresponde en orden ("Trainee" -> "Junior" -> "Semisenior" -> "Senior"), y le incremente en 10000 el sueldo
// (visto en la clase 63)

// empleade es un objeto
const subirDeCategoriaSwitch = (empleade) => {

  if(empleade.seniority != "Senior"){
    switch(empleade.seniority){
      case "Trainee":
        empleade.seniority = "Junior";
      break;
      case "Junior":
        empleade.seniority = "Semisenior";
      break;
      case "Semisenior":
        empleade.seniority = "Senior";
      break;
      default:
        empleade.seniority;
        console.log("Mensaje de error")
    }

    empleade.sueldo = empleade.sueldo + 10000;
  }

  return empleade
}


// Version de Pau
const subirDeCategoria = (empleade) => {
  const seniorities = ['Trainee','Junior', 'Semisenior', 'Senior'];
  
  if(empleade.seniority === 'Senior') 
  return;

  let seniorPosition = seniorities.indexOf(empleade.seniority);

  empleade.sueldo = empleade.sueldo + 10000;
  empleade.seniority = seniorities[seniorPosition +1];

  return empleade.seniority
}

// console.log("subir de categoria: ", subirDeCategoria(empleades[1]));  
// console.log(empleades[1]);


// const primerEmpleade = empleades[1]

// console.log("antes " + primerEmpleade.seniority);

// subirDeCategoria(primerEmpleade)

// console.log("despues " + primerEmpleade.seniority);


/***************** EJERCICIO 11 *****************/

// gregarTecnologias, que agregue a todos los objetos empleades la propiedad tecnologías,que es un array conteniendo los valores "GIT" y "Node.js"

const agregarTecnologias = () => {
  const tecnologias = ["GIT", "Node.js"]

  const conNuevasTecnologias = empleades.map((empleade) => {
    empleade.tecnologias = tecnologias
    return empleade
  })

  return conNuevasTecnologias
}

// console.table(agregarTecnologias())


/***************** EJERCICIO 12 *****************/

// empleadeSabeLenguaje, que tome por parámetro un objeto empleade (elemento del array empleades) y un lenguaje y devuelva true si dicho empleade sabe dicho lenguaje

const empleadeSabeLenguaje = (empleade, lenguaje) => {
  const sabeLenguaje = empleade.lenguajes.includes(lenguaje)

  return sabeLenguaje
}

// console.log(empleadeSabeLenguaje(empleades[0], "Java")); // true
// console.log(empleadeSabeLenguaje(empleades[0], "Javascript")); // false


/***************** EJERCICIO 13 *****************/

// empleadesQueSabenLenguaje, que tome por parámetro un lenguaje y devuelva todes les empleades que saben dicho lenguaje (usar la función anterior)

const empleadesQueSabenLenguaje = (lenguaje) => {
  const sabenLenguaje = empleades.filter((empleade) => empleadeSabeLenguaje(empleade, lenguaje))

  return sabenLenguaje
}
// console.table(empleadesQueSabenLenguaje("JavaScript"))


/***************** EJERCICIO 14 *****************/

// empleadesQueSabenLenguajes, que tome por parámetro un array de lenguajes y devuelva un array con aquelles empleades que sepan todos esos lenguajes

const empleadesQueSabenLenguajes = (lenguajesRequeridos) => {
  const sabenLenguajes = empleades.filter((empleade) => {
    return lenguajesRequeridos.every((lenguaje) => {
      return empleade.lenguajes.includes(lenguaje)
    })
  })
  return sabenLenguajes
}

// console.table(empleadesQueSabenLenguajes(['JavaScript', 'C#', 'Python', 'Java', 'Ruby', 'PHP']))


/***************** EJERCICIO 15 *****************/

// 15. `empleadesQueSabenAlgunosLenguajes`, que tome por parámetro un array de lenguajes y devuelva un array con aquelles empleades que sepan al menos uno de esos lenguajes

const empleadesQueSabenAlgunosLenguajes = (lenguajesRequeridos) => {
  const sabenLenguajes = empleades.filter((empleade) => {
    return lenguajesRequeridos.some((lenguaje) => {
      return empleade.lenguajes.includes(lenguaje)
    })
  })
  return sabenLenguajes
}

// console.table(empleadesQueSabenAlgunosLenguajes(['JavaScript', 'C#', 'Python', 'Java', 'Ruby', 'PHP']))


/***************** EJERCICIO 16 *****************/

// 16. `empleadesConMejorSueldo`, que devuelva un array con los 10 mejores empleades pagos (investigar metodo sort)

const empleadesConMejorSueldo = () => {
  const conMejorSueldo = empleades.sort((a, b) => b.sueldo - a.sueldo)

  return conMejorSueldo.slice(0, 10)
}

// console.table(empleadesConMejorSueldo())


/***************** EJERCICIO 17 *****************/

// 17. `obtenerTitulosCompletos`, que devuelva un array donde cada elemento es un string con la forma "nombre, puesto seniority, area", p.ej.: "Nadia Conrad, Senior Backend Developer, Desarrollo", habiendo un elemento por cada empleade (usar map)

const obtenerTitulosCompletos = () =>{
  const titulosCompletos = empleades.map((empleade) => {
    // return empleade.nombre + ", " + empleade.puesto + ", " + empleade.area + "."

    // con string template (comillas invertidas ``)
    return `${empleade.nombre}, ${empleade.puesto}, ${empleade.area}.`
  })

  return titulosCompletos
}

// console.log(obtenerTitulosCompletos())


/***************** EJERCICIO 18 *****************/

// 18. `obtenerInfoPersonal`, que devuelva un array donde cada elemento es un objeto con las propiedades
// - nombre
// - pais
// - edad
// habiendo un elemento por cada empleade, y donde cada propiedad se corresponde a la propiedad del objeto original (usar map)

const obtenerInfoPersonal = () => {
  // alternativa 1
  /*const infoPersonal = empleades.map((empleade) => {
    const nombre = empleade.nombre;
    const pais = empleade.pais;
    const edad = empleade.edad

    return {
      nombre,
      pais,
      edad
    }
  }) */

  // alternativa 2
  const infoPersonal = empleades.map((empleade) => {
    return {
      nombre: empleade.nombre,
      pais: empleade.pais,
      edad: empleade.edad
    }
  })
  return infoPersonal
}

// console.table(obtenerInfoPersonal());


/***************** EJERCICIO 19 *****************/
/*
19. `obtenerInfoPuestos`, que devuelva un array donde cada elemento es un objeto con las propiedades
    - nombre
    - area
    - puesto
    - seniority
    habiendo un elemento por cada empleade, y donde cada propiedad se corresponde a la propiedad del objeto original (usar map)
*/

const obtenerInfoPuestos = () => {
  const infoPuestos = empleades.map((empleade) => {
    return {
      nombre: empleade.nombre,
      area: empleade.area,
      puesto: empleade.puesto,
      seniority: empleade.seniority
    }
  })

  return infoPuestos
}

// console.table(obtenerInfoPuestos())

/***************** EJERCICIO 20 *****************/

/*
20. `obtenerInfoSeniority`, que devuelva un array donde cada elemento es un objeto con las propiedades
    - nombre
    - seniority
    - sueldo
    - cantidadLenguajes
    habiendo un elemento por cada empleade, y donde cada propiedad se corresponde a la propiedad del objeto original, eecepto cantidadLenguajes, que es un número indicando la cantidad de lenguajes que sabe (usar map)
*/

const obtenerInfoSeniority = () => {
  const infoSeniority = empleades.map((empleade) => {
    return {
      nombre: empleade.nombre,
      seniority: empleade.seniority,
      sueldo: empleade.sueldo,
      cantidadLenguajes: empleade.lenguajes.length
    }
  })

  return infoSeniority
}

// console.table(obtenerInfoSeniority())


/***************** EJERCICIO 21 *****************/


// 21 -`obtenerInfoPagos`, que devuelva una array donde cada elemento es un objeto con las propiedades
    // - nombre
    // - sueldoBruto
    // - obraSocial
    // - jubilacion
    // - sueldoNeto
    // habiendo un elemento por cada empleade, donde
    // - sueldoBruto es el sueldo del objeto original
    // - obraSocial es el 3% del sueldoBruto
    // - jubilacion es el 11% del sueldoBruto
    // - sueldoNeto es el resultado de restarle a sueldoBruto los valores de obraSocial y jubilacion

// (visto en la clase 63)

const obtenerInfoPagosConVariables = () =>{
  const infoPagos = empleades.map((empleade) =>{
    const obraSocial = empleade.sueldo * 0.03;
    const jubilacion = empleade.sueldo * 0.11;
    const sueldoNeto = empleade.sueldo - obraSocial - jubilacion;

    return {
      nombre: empleade.nombre,
      sueldoBruto: empleade.sueldo,
      obraSocial,
      jubilacion,
      sueldoNeto
    };

  });

  return infoPagos;
}

const obtenerInfoPagosConReturn = () =>{
  return empleades.map((empleade) =>{
    const obraSocial = empleade.sueldo * 0.03;
    const jubilacion = empleade.sueldo * 0.11;
    const sueldoNeto = empleade.sueldo - obraSocial - jubilacion;

    return {
      nombre: empleade.nombre,
      sueldoBruto: empleade.sueldo,
      obraSocial,
      jubilacion,
      sueldoNeto
    };
  });
}


/***************** EJERCICIO 22 *****************/

// 22. `obtenerEstadisticasSeniority` que devuelva un objeto donde cada propiedad es un seniority y el valor la cantidad de empleades con dicho seniority

// ver en clase 63 el ejercicio cantidadDeArtistasPorGenero

const obtenerEstadisticasSeniority = () => {
  return empleades.reduce((acc, empleade) => {
    if (acc[empleade.seniority]) {
      acc[empleade.seniority] ++
    } else {
      acc[empleade.seniority] = 1
    }

    return acc
  }, {})
}

/***************** EJERCICIO 23 *****************/

//23. `obtenerEstadisticasLenguajes` que devuelva un objeto donde cada propiedad es un lenguaje y el valor la cantidad de empleades que saben dicho lenguaje

const obtenerEstadisticasLenguajes = () => {
  // primero voy a usar un reduce para obtener un array con todos los lenguajes de todos los empleades, guardandolo la variable lenguajes
  const lenguajes = empleades.reduce((acc, empleade) => {
    empleade.lenguajes.forEach((lenguaje) =>{
      acc.push(lenguaje)
    })

  return acc
  }, [])

  // y retorno el mismo reduce que usamos en el ejercicio 22 recorriendo el nuevo array de lenguajes
  return lenguajes.reduce((acc, lenguaje) => {
    if(acc[lenguaje]) {
      acc[lenguaje] ++
    } else {
      acc[lenguaje] = 1
    }

    return acc
  }, {})
}

// console.log(obtenerEstadisticasLenguajes());