// Hacer ejercicios de estudiantes acá

//1. `estudiantesPorHechizo`, que tome por parámetro el nombre de un hechizo y un array de estudiantes y devuelva un array con todos les estudiantes que tengan ese hechizo como hechizoPreferido

const estudiantesPorHechizoConReduce = (hechizo) =>{
    return estudiantes.reduce((acc, estudiante) => {
        if(estudiante.hechizoPreferido === hechizo){
            acc.push(estudiante);
        }
        return acc;
    }, [])
}

const estudiantesPorHechizo = (hechizo) => {
    return estudiantes.filter((estudiante) => estudiante.hechizoPreferido === hechizo)
}

// console.table(estudiantesPorHechizo('Expecto Patronum'))


// 3. `estudiantesConFamiliares`, que tome por parámetro un array con nombres de familiares (p.ej, ["Sapo", "Lechuza"]) y un array de estudiantes y devuelva un array con les estudiantes que tengan cuyo familiar sea alguno de los incluidos en el parámetro

const estudiantesConFamiliares = (familiares, arrayDeEstudiantes) => {
    return arrayDeEstudiantes.filter((estudiante) => {
        return familiares.includes(estudiante.familiar)
    })
}

// console.table(estudiantesConFamiliares(["Sapo", "Lechuza"], estudiantes))


//4-obtenerPromedioDeEstudiante, que tome por parámetro une estudiante (que se saca del array estudiantes) 
//devuelva el promedio total de todas las materias
const obtenerPromedioDeEstudiante = (objetoEstudiante) => {
    const promedio = objetoEstudiante.materias.reduce((acc, materia) => {
        return acc + materia.promedio;
    }, 0);
    return promedio / objetoEstudiante.materias.length;
}


// 5. `estudiantesConPromedioMayorA`, que tome por parámetro un número y un array de estudiantes y devuelva un array con les estudiantes que tengan un promedio total mayor a dicho número (usar la función anterior)
const estudiantesConPromedioMayorA = (numero, arrayEstudiantes) => {
    return arrayEstudiantes.filter((estudiante) => obtenerPromedioDeEstudiante(estudiante) > numero)
}

// console.table(estudiantesConPromedioMayorA(6, estudiantes))

// 6. `mejoresEstudiantesPorCasa`, que tome por parámetro el nombre de una casa y un array de estudiantes y devuelva les estudiantes de dicha casa cuyo promedio total es mayor a 6

const mejoresEstudiantesPorCasa = (casa, arrayDeEstudiantes) => {
    const porCasa = arrayDeEstudiantes.filter((estudiante) => estudiante.casa === casa)
    console.log(porCasa) // 37

    return estudiantesConPromedioMayorA(6, porCasa)
}

// console.table(mejoresEstudiantesPorCasa('Hufflepuff', estudiantes))