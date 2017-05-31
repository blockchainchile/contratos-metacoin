# contratos-metacoin
Ejemplo de Contratos :: Metacoin

## Instalar dependencias
```
$ npm install
```

## Compilar contratos
```
$ npm run compile
```

## Correr los test
```
$ npm test
```

## Deployar a un nodo local

Correr un cliente local (conectado a cualquier blockchain), en el `localhost:8545`. Los clientes más usados son [Geth](https://github.com/ethereum/go-ethereum) y [Parity](https://github.com/paritytech/parity), pero para un entorno de desarrollo local el más recomendado es [TestRPC](https://github.com/ethereumjs/testrpc).
Primero corremos el cliente, con el comando:
```
$ testrpc -a
```

Y luego hacemos el deploy al nodo local, con:

```
$ npm run deploy-local
```

## Deployar a la testnet rinkeby

El blockchain público tiene una red principal y redes de prueba (conocidas como testnets) para que podamos probar nuestros contratos. Usaremos la testnet [rinkeby](https://www.rinkeby.io/).

[INFURA](https://infura.io/) nos provee nodos públicos sin la necesidad de provisionarlos nosotros mismos.

Haremos el deploy a esta testnet a través de un nodo público de INFURA. Para esto debemos enviar las tx
ya firmadas. Necesitamos primero crear una semilla para generar las llaves.

```
$ npm run gen-seed
```
Luego hay que agregar fondos a la direccion generada con la semilla.
Para eso hay que crear un gist publico en https://gist.github.com y colocar la
`ADDRESS` generada.

Luego hay que copiar la URL del gist generado en: https://faucet.rinkeby.io/
para obtener ETH de test.

Finalmente se puede deployar los contratos en rinkeby

```
$ npm run deploy-local
```
