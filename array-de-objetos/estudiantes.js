// Hacer ejercicios de estudiantes acá

/***************** EJERCICIO 1 *****************/

//1. `estudiantesPorHechizo`, que tome por parámetro el nombre de un hechizo y un array de estudiantes y devuelva un array con todos les estudiantes que tengan ese hechizo como hechizoPreferido

const estudiantesPorHechizoConReduce = (hechizo, arrayEstudiantes) =>{
    return arrayEstudiantes.reduce((acc, estudiante) => {
        if(estudiante.hechizoPreferido === hechizo){
            acc.push(estudiante);
        }
        return acc;
    }, [])
}

const estudiantesPorHechizo = (hechizo, arrayEstudiantes) => {
    return arrayEstudiantes.filter((estudiante) => estudiante.hechizoPreferido === hechizo)
}

// console.table(estudiantesPorHechizo('Expecto Patronum'))


/***************** EJERCICIO 2 *****************/

// 2. `estudiantesConMasAmiguesQue`, que tome por parametro un numero y un array de estudiantes y devuelva un array con todos les estudiantes que tengan un número de amigues mayor o igual a el número pasado por parámetro

const estudiantesConMasAmiguesQue = (numero, arrayEstudiantes) => {
    return arrayEstudiantes.filter((estudiante) => estudiante.amigues.length >= numero)
}

// console.table(estudiantesConMasAmiguesQue(6, estudiantes))

/***************** EJERCICIO 3 *****************/

// 3. `estudiantesConFamiliares`, que tome por parámetro un array con nombres de familiares (p.ej, ["Sapo", "Lechuza"]) y un array de estudiantes y devuelva un array con les estudiantes que tengan cuyo familiar sea alguno de los incluidos en el parámetro

const estudiantesConFamiliares = (familiares, arrayEstudiantes) => {
    return arrayEstudiantes.filter((estudiante) => {
        return familiares.includes(estudiante.familiar)
    })
}

// console.table(estudiantesConFamiliares(["Sapo", "Lechuza"], estudiantes))

/***************** EJERCICIO 4 *****************/

//4-obtenerPromedioDeEstudiante, que tome por parámetro une estudiante (que se saca del array estudiantes) 
//devuelva el promedio total de todas las materias
const obtenerPromedioDeEstudiante = (objetoEstudiante) => {
    const promedio = objetoEstudiante.materias.reduce((acc, materia) => {
        return acc + materia.promedio;
    }, 0);
    return promedio / objetoEstudiante.materias.length;
}


/***************** EJERCICIO 5 *****************/

// 5. `estudiantesConPromedioMayorA`, que tome por parámetro un número y un array de estudiantes y devuelva un array con les estudiantes que tengan un promedio total mayor a dicho número (usar la función anterior)
const estudiantesConPromedioMayorA = (numero, arrayEstudiantes) => {
    return arrayEstudiantes.filter((estudiante) => obtenerPromedioDeEstudiante(estudiante) > numero)
}

// console.table(estudiantesConPromedioMayorA(6, estudiantes))


/***************** EJERCICIO 6 *****************/

// 6. `mejoresEstudiantesPorCasa`, que tome por parámetro el nombre de una casa y un array de estudiantes y devuelva les estudiantes de dicha casa cuyo promedio total es mayor a 6

const mejoresEstudiantesPorCasa = (casa, arrayEstudiantes) => {
    const porCasa = arrayEstudiantes.filter((estudiante) => estudiante.casa === casa)
    console.log(porCasa) // 37

    return estudiantesConPromedioMayorA(6, porCasa)
}

// console.table(mejoresEstudiantesPorCasa('Hufflepuff', estudiantes))


/***************** EJERCICIO 7 *****************/

// 7. `casaConMejoresEstudiantes`, que tome por parámetro un array de estudiantes y devuelva el nombre de la casa que tiene más cantidad de estudiantes con promedio total mayor a 6 (usar la función anterior)

const casaConMejoresEstudiantes = (arrayEstudiantes) => {
    const casas = ["Ravenclaw", "Gryffindor", "Slytherin", "Hufflepuff"]

    return casas.reduce((acc, casa) => {
        
        if(mejoresEstudiantesPorCasa(acc, arrayEstudiantes).length > mejoresEstudiantesPorCasa(casa, arrayEstudiantes).length) {
            return acc
        } else {
            return casa
        }
    })
}

// console.log(casaConMejoresEstudiantes(estudiantes));


/***************** EJERCICIO 8 *****************/

//8. `estudiantesPorMateriaAprobada`, que tome por parámetro el nombre de una materia y un array de estudiantes y devuelva una array con les estudiantes que tienen en dicha materia un promedio superior a 6

const estudiantesPorMateriaAprobada = (nombreMateria, arrayEstudiantes) => {
    return arrayEstudiantes.filter((estudiante) => {
        return estudiante.materias.filter((materia) => materia.nombre === nombreMateria && materia.promedio > 6).length != 0
    })
}

// console.log(estudiantesPorMateriaAprobada('Astronomía', estudiantes))


/***************** EJERCICIO 9 *****************/

// 9. `obtenerInfoResumida`, que tome por parámetro un array de estudiantes y devuelva un array con objetos, habiendo un objeto por estudiante, donde cada objeto tiene las siguientes propiedades: `nombre`, `casa`, `promedio`, `amigues` (cantidad)

const obtenerInfoResumida = (arrayEstudiantes) => {
    return arrayEstudiantes.map((estudiante) => {
        return {
            nombre: estudiante.nombreCompleto.nombre,
            casa: estudiante.casa,
            promedio: obtenerPromedioDeEstudiante(estudiante),
            amigues: estudiante.amigues.length
        }
    })
}

// console.table(obtenerInfoResumida(estudiantes))


/***************** EJERCICIO 10 *****************/

// 10. `cantidadDeEstudiantesPorCasa`, que tome por parámetro un array de estudiantes y devuelva un objeto con los nombres de las casas como propiedades y la cantidad de estudiantes por casa (no debe contar amigues)

const cantidadDeEstudiantesPorCasa = (arrayEstudiantes) => {
    return arrayEstudiantes.reduce((acc, estudiante) => {
        if(acc[estudiante.casa]){
            acc[estudiante.casa] ++
        } else {
            acc[estudiante.casa] = 1
        }

        return acc
    }, {})
}

// console.table(cantidadDeEstudiantesPorCasa(estudiantes))


/***************** EJERCICIO 11 *****************/

// 11. `cantidadDeEstudiantesPorMateriaAprobada`, que tome por parámetro un array de estudiantes y devuelva un objeto con los nombres de las materias como propiedades y la cantidad de estudiantes que aprobaron dicha materia (promedio superior a 6)

const cantidadDeEstudiantesPorMateriaAprobada = (arrayEstudiantes) => {
    const materias = arrayEstudiantes[0].materias.map((materia) => materia.nombre)

    return materias.reduce((acc, materia) => {
        acc[materia] = estudiantesPorMateriaAprobada(materia, arrayEstudiantes).length

        return acc
    }, {})
}

// console.table(cantidadDeEstudiantesPorMateriaAprobada(estudiantes));
