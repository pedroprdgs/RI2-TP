import Cliente from "./cliente.js";
import Telefone from "./telefone.js";
import Endereco from "./endereco.js";

function ordenarClientes(clientes: Cliente[]): Cliente[]{
    return [...clientes].sort((a, b) => {
        return a.getNome().localeCompare(b.getNome());
    });
}

let telefone1 = new Telefone(11, 984573171);
let endereco1 = new Endereco("SP", "São José dos Campos", "Rua dos Chads", 67);
let cliente1 = new Cliente("Pedro Pereira Rodrigues", telefone1, "pedropereirarodrigues16@gmail.com", endereco1);

let telefone2 = new Telefone(12, 988254981);
let endereco2 = new Endereco("SP", "São José dos Campos", "Rua dos Chuds", 42);
let cliente2 = new Cliente("Rafael Silva Mioni Coltro", telefone2, "rafaelchud42@gmail.com", endereco2);

let telefone3 = new Telefone(12, 997536546);
let endereco3 = new Endereco("SP", "São Paulo", "Rua emo", 33);
let cliente3 = new Cliente("Little Giela", telefone3, "littlerockstar33@gmail.com", endereco3);

let clientes = [
    cliente1,
    cliente2,
    cliente3
]

let clientesOrdenados = ordenarClientes(clientes);

console.log(clientesOrdenados);