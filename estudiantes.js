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

console.table(estudiantesConFamiliares(["Sapo", "Lechuza"], estudiantes))