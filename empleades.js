// Hacer ejercicios de empleades acá

console.log(empleades); // la variable empleades viene del script data-empleades.js, vamos a poder acceder a ella siempre y cuando en nuestro HTML lo linkeemos antes del script en el que necesitemos usarla.

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

console.log(empleadesPorPais("Uruguay"));
console.log(empleadesPorPais("Venezuela"));
console.log(empleadesPorPais("Colombia"));




// 3- sueldoPromedioEmpleades, que devuelva el sueldo promedio de todos los empleades
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
