// Hacer ejercicios de empleades acá

// console.log(empleades); // la variable empleades viene del script data-empleades.js, vamos a poder acceder a ella siempre y cuando en nuestro HTML lo linkeemos antes del script en el que necesitemos usarla.

// 1- empleadesQueHacenGuardia, que devuelva un array con todes les empleades que hacen guardia

// Ejemplo con filter
function empleadesQueHacenGuardiaFilter() {
  // declaro una variable cuyo valor será el array que nos devuelva filter
  let hacenGuardia = empleades.filter((empleade) => empleade.haceGuardia); // filtramos el array original, quedandonos solamente con los objetos que cumplan la condición de tener la propiedad "haceGuardia" en true

  return hacenGuardia; // y retornamos/devolvemos el array filtrado
}

// Ejemplo con forEach
function empleadesQueHacenGuardiaForeach() {
  let hacenGuardia = [];

  empleades.forEach((empleade) => {
    if (empleade.haceGuardia) {
      hacenGuardia.push(empleade);
    }
  });

  return hacenGuardia;
}



// 2 - empleadesPorPais, que tome por parámetro el nombre de un país y devuelva un array con todes les empleades que son de dicho país

const empleadesPorPais = (pais) => {
  let empleadesPorPais = empleades.filter((empleade) => empleade.pais === pais);

  return empleadesPorPais;
};

// console.log(empleadesPorPais("Uruguay"));
// console.log(empleadesPorPais("Venezuela"));
// console.log(empleadesPorPais("Colombia"));




// 6 - sueldoPromedioEmpleades, que devuelva el sueldo promedio de todos los empleades
// Creamos un array más corto para ir probando nuestra función, y una vez resuelto probamos con el array original (empleades)
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

const sueldoPromedioEmpleades = () => {
  const sueldoPromedio = empleades.reduce((acc, empleade, index) => {
    console.log({ acc, empleade, index }); // esto nos va a mostrar el valor de los parametros en cada vuelta.

    return acc + empleade.sueldo;
  }, 0);

  return sueldoPromedio / empleade.length;
};



// 10 - `subirDeCategoria`, que tome como parámetro un objeto empleade. Si diche empleade no tiene un seniority "Senior", cambiar el valor de su propiedad seniority con el siguiente que le corresponde en orden ("Trainee" -> "Junior" -> "Semisenior" -> "Senior"), y le incremente en 10000 el sueldo

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
