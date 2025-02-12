class Presentation {
    constructor(nombre, edad, departamento, telefono){
        this._nombre = nombre;
        this._edad = edad;
        this._departamento = departamento;
        this._telefono = telefono;
    }


    informacion(){
        return `${this._nombre}, ${this._edad},${this._departamento}, ${this._telefono}`
    }
}

nombre = prompt('Digite su nombre');
edad = prompt('Digite su edad');
departamento = prompt('Digite el departamento en donde reside');
telefono = prompt('Digite su numero de telefono');

let Estudiante = new Presentation(nombre,edad,departamento,telefono)

document.getElementById('nombre').innerText = Estudiante._nombre
document.getElementById('edad').innerText = Estudiante._edad
document.getElementById('departamento').innerText = Estudiante._departamento
document.getElementById('telefono').innerText = Estudiante._telefono
