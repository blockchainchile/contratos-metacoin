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

Correr un nodo local en el `localhost:8545`. Este nodo puede ser un geth o parity
conectado a cualquier blockchain. La forma mas simple es correr un `testrpc`

```
$ npm run deploy-local
```

## Deployar a la testnet rinkeby

Esto se hace usando un nodo publico de INFURA. Para esto debemos enviar las tx
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
