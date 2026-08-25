# Who Wants to Be a Millionaire?
Esta librería contiene una función para calcular el premio total que recibe el jugador que participa en el juego "Who Wants to Be Millionaire?".

*"No hay preguntas, solo se pasan las acciones del jugador a cada ronda. Estas se comparan con la plantilla de respuestas correctas y calcula el premio que recibe por cada pregunta correcta, a menos que falle algula pregunta o utilice las acciones de huída("W") o parada("X").
Los comodines solo se cuentan, para saber cuantos han sido utilizados"*

- **Total de preguntas**: 15.
- **Los premios se acumulan**: [100,200] = 300
- **Puntos de guardado**(saveHaven): Pregunta 5 y 10.
- **Opciones de respuesta**: ["A","B","C","D"]
- **Comodines disponibles**: 
  - 50/50
  - Phone a friend
  - Ask the audience
- **Acciones**: 
  - **Huída**(Antes de ver la siguiente pregunta): "W", el jugador decide terminar el juego con lo acumulado hasta el momento.
  - **Parada**(Después de ver la pregunta): "X", el jugador se arriesga y decide ver la siguiente pregunta pero no la sabe y decide retirarse con almacenado en el punto de guardado.
- **La función recibe**:
  - Lista de 15 premios: prizeFund = [100,200,...] 
  - Plantilla de respuestas correctas: correctAnswers = ["A","B"]
  - Acciones del jugador: playerActions = ["A","123B","X||W"]
## 🚀 Funcionalidades Principales
- Calcular premio total.
- Calcular el premio total tras retirarse antes de leer la pregunta("W").
- Calcular el premio total tras leer la pregunta("X").
- Almacenar el premio acumulado en los puntos seguros (saveHaven)

## 💻 Ejemplo de Uso Técnico

```javascript

correctAnswers = [
  "A",
  "B",
  "B",
  "D",
  "B",
  "C",
  "A",
  "A",
  "B",
  "D",
  "D",
  "D",
  "B",
  "C",
  "B",
];

//Colección de 15 premios
prizeFund = [
  100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000,
  250000, 500000, 1000000,
];


playerActions = [
  "A",
  "B",
  "12B",
  "D",
  "B",
  "C",
  "X",
  "A",
  "B",
  "D",
  "D",
  "D",
  "B",
  "C",
  "B",
];

console.log(getTotalCashPrize(prizeFund, correctAnswers, playerActions));

// Salida esperada: [2100, 2] (Suma acumulada hasta la ronda 6 debido a la retirada 'X')
```

## 🛠️ Instalación y Pruebas

1. Descarga el repositorio de katas:
   ```bash
   git clone https://github.com
   ```
2. Accede al directorio de la solución:
   ```bash
   cd katas/katas/js/6-kyu/beAMillionaire
   ```
3. Ejecuta la suite de pruebas unitarias automatizadas (Jest):
   ```bash
   npm test
   ```












