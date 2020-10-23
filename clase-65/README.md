## Ejercicios

### `calcularPorcentaje(numero, porcentaje)`

Crear una función `calcularPorcentaje` que tome como argumentos un número y un porcentaje y devuelva el valor del porcentaje correspondiente al número

```javascript
calcularPorcentaje(100, 15) // 15
calcularPorcentaje(10, 50) // 5
calcularPorcentaje(200, 10) // 20
```

---

### `restarPorcentaje(numero, porcentaje)`

Crear una función `restarPorcentaje` que tome como argumentos un número y un porcentaje y devuelva la resta de dicho número con la de su porcentaje. Usar la función `calcularPorcentaje` para obtener el porcentaje a restar

```javascript
restarPorcentaje(100, 15) // 85
restarPorcentaje(10, 40) // 6
restarPorcentaje(200, 10) // 180
```

---

### `burlarse(str)`

Crear una función `contarPalabras` que tome como argumento un string `str` y devuelva el mismo string con todas las vocales reemplazadas por la letra i

```javascript
burlarse('programar es dificil') // 'prigimir is dificil'
```

--- 

### `aHackerSpeak(str)`

Crear una función `aHackerSpeak` que tome como argumento un string `str` y devuelva el mismo string convertido a H4CK3R 5P3AK, siguiendo las siguientes reglas:

```
- Las i se transforman en 1
- Las e se transforman en 3
- Las a se transforman en 4
- Las s se transforman en 5
- Las 0 se transforman en 0
```

```javascript
aHackerSpeak('javascript') // 'j4v45cr1pt'
aHackerSpeak('soy una hacker') // '50y un4 h4ck3r'
aHackerSpeak('ADA LOVELACE') // '4D4 L0V3L4C3'
```