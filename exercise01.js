class Presentation {
    constructor(nombre, apellido, edad, direccion, gusto){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._direccion = direccion;
        this._gusto = gusto;
    }

    //Metodo o Función
    presentarse(){
        return `Mi nombre es ${this._nombre} ${this._apellido} tengo ${this._edad} años y vivo en ${this._direccion}. Me gusta ${this._gusto}`
    }
}


const Estudiante = new Presentation('Emanuel','Marquina', 21, 'El Cuco','Surfear')
console.log(Estudiante.presentarse());
