class Instrumento {
    constructor(nomPersona,tipo) {
        this._nomPersona = nomPersona;
        this._tipo = tipo;
    }

    quieroAprender(){
        return `El estudiante ${this._nomPersona} desea aprender ${this._tipo}.`;
    }

    seTocar(){
        return  `El estudiante ${this._nomPersona} sabe tocar ${this._tipo}.`;
    }
}

const Piano = new Instrumento('Emanuel Marquina','Piano');
const Guitarra = new Instrumento('Emanuel Marquina', 'Guitarra')
console.log(Piano.quieroAprender());
console.log(Guitarra.seTocar());




