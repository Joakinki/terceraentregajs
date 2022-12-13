

const stored = localStorage.getItem('test') || '';


console.log(stored.toUpperCase())

const array = ['lunes', 'martes', 'miercoles'];
const array1 = [...array]

const nuevoArray = [...array1, 'jueves', 'viernes']
console.log(nuevoArray);
console.log(array);
console.log();
console.log(array1);


console.log(...array)

const usuario = {
    nombre: 'john do',
    edad: 19,
}

const usuarioExtendido = {
    ...usuario,
    altura: 173,
    nacionalidad: 'argentino'
};
usuarioExtendido.profesion = 'programador';

console.log(usuario);
console.log(usuarioExtendido);

const texto = 'texto';
console.log([...texto]);