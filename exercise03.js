class DispensadorElectronico {
    constructor(producto, precio){
        this._Producto = producto;
        this._precio = precio;
    }

    DarProducto() {
        return `El cliente pidio uan ${this._Producto} con el precio ${this._precio}.`
    }
}

const Cliente1 = new DispensadorElectronico('Pepsi', ' $1.00' );
const Cliente2 = new DispensadorElectronico('Fanta','$1.50');
const Cliente3 = new DispensadorElectronico('7Up','$1.75');

console.log(Cliente1.DarProducto());
console.log(Cliente2.DarProducto());
console.log(Cliente3.DarProducto());


