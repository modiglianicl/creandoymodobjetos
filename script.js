// 1 .- Funciones constructoras

const Consultorio = function (nombre) {
    this._nombre = nombre;
    this._pacientes = [];
}

const Paciente = function (nombre,edad,rut,diagnostico) {
    this._nombre = nombre;
    this._edad = edad;
    this._rut = rut;
    this._diagnostico = diagnostico;

}

// 2 .- Agregamos Getters y Setters para Paciente

/// Getters
Paciente.prototype.getNombre = function() {
    return this._nombre;
}

Paciente.prototype.getEdad = function() {
    return this._edad;
}

Paciente.prototype.getRut = function() {
    return this._rut;
}

Paciente.prototype.getDiagnostico = function() {
    return this._diagnostico;
}

/// Setters

Paciente.prototype.setNombre = function(nuevoNombre) {
    if (typeof nuevoNombre === 'string') {
        this._nombre = nuevoNombre;
    } else {
        console.log('Debe ser solo texto!')
    }
    
}

Paciente.prototype.setEdad = function(nuevaEdad) {
    if (typeof nuevaEdad === 'number') {
        this._edad = nuevaEdad;
    } else {
        console.log('Edad debe ser un número entero!')
    }
    
}

Paciente.prototype.setRut = function(nuevoRut) {
    if (typeof nuevoRut === 'string') {
        this._rut = nuevoRut;
    } else {
        console.log('El rut debe ser una cadena de texto!')
    }
    
}

Paciente.prototype.setDiagnostico = function(nuevoDiagnostico) {
    if (typeof nuevoDiagnostico === 'string') {
        this._diagnostico = nuevoDiagnostico;
    } else {
        console.log('Porfavor ingresar texto')
    }
    
}

// Creando un consultorio con pacientes

let consultorioUno = new Consultorio('Radiologia Mario Bros');

// Setter para agregar pacientes al consulturio

Consultorio.prototype.setNuevoPaciente = function(nuevoPaciente) {
    this._pacientes.push(nuevoPaciente);
}

// Agregamos gente al consultorioUno

consultorioUno.setNuevoPaciente(new Paciente('Felipe',32,'17809470-k','adicto a la pastabase'));
consultorioUno.setNuevoPaciente(new Paciente('Camila',22,'19809470-k','dolor de watita'));
consultorioUno.setNuevoPaciente(new Paciente('Ramiro',29,'18809470-k','angustiado'));
consultorioUno.setNuevoPaciente(new Paciente('Miguel',22,'19809470-k','muy nervioso'));
consultorioUno.setNuevoPaciente(new Paciente('Felipe II',25,'19809470-k','perdido en la vida'));

/// 3.- Metodo que permite buscar por nombre a todos los consultorios

Consultorio.prototype.buscarPaciente = function (busqueda) {
    // Contador
    let contadorEncontrados = 0;
    if (typeof busqueda === 'string') {
        for (let i = 0; i < this._pacientes.length; i++) {
            // Transformamos nombre a chequear a minusculas
            let nombreRevisar = this._pacientes[i]._nombre.toLowerCase();
            if (nombreRevisar.includes(busqueda.toLowerCase())) {
                console.log(`Paciente n° ${i + 1}`);
                console.log(`Nombre : ${this._pacientes[i]._nombre}`);
                console.log(`Edad : ${this._pacientes[i]._edad}`);
                console.log(`RUT : ${this._pacientes[i]._rut}`);
                console.log(`Diagnostico : ${this._pacientes[i]._diagnostico}`);
                console.log(`------------------------------------------------`);
                contadorEncontrados += 1;
            }
        }
    } else {
        console.log("Porfavor ingrese un texto, un nombre!");
    } if (contadorEncontrados === 0) {
        console.log("No se encontraron personas con ese nombre.")
    } else {
        console.log(`Se encontraron ${contadorEncontrados} personas con ese nombre.`)
    }
}

/// 3.- Metodo que permite mostrar todos los datos de los usuarios registrados en un consultorio

Consultorio.prototype.getPacientes = function() {
    console.log(`Mostrando todos los pacientes, actualmente hay ${this._pacientes.length} pacientes registrados!`)
    for (let i = 0 ; i < this._pacientes.length ; i++) {
        console.log(`Paciente n° ${i+1}`);
        console.log(`Nombre : ${this._pacientes[i]._nombre}`);
        console.log(`Edad : ${this._pacientes[i]._edad}`);
        console.log(`RUT : ${this._pacientes[i]._rut}`);
        console.log(`Diagnostico : ${this._pacientes[i]._diagnostico}`);
        console.log(`------------------------------------------------`);
    }
}

// PROBANDO Metodos creados para buscar por nombre y mostrar todos los pacientes

// Buscando a pacientes que se llamen felipe
console.log(consultorioUno.buscarPaciente("felipe"));

// Mostramos todos los pacientes

console.log(consultorioUno.getPacientes());
