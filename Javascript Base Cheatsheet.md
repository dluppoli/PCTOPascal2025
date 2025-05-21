
# 🧠 JavaScript Cheat Sheet (riassunto slide fino a controllo del flusso e array)

## ⚙️ Caratteristiche Principali
- **Imperativo**, **strutturato**, **procedurale**, **funzionale**, **OOP (basato su prototipi)**
- **Tipizzazione dinamica** e **debole**
- **Interpretato** (eseguito da browser o Node.js)
- **Garbage Collector** automatico

---

## 📍 Integrazione HTML
```html
<!-- Inline -->
<span onclick="alert('Ciao!')">Cliccami</span>

<!-- Interno -->
<script>
  function saluta() { alert("Ciao!"); }
</script>

<!-- Esterno -->
<script src="main.js"></script>
```

---

## 🔡 Sintassi Base
- **Case sensitive**, istruzioni con `;`
- Blocchi con `{ }`, commenti:
  ```js
  // Singola linea
  /* Multi
     linea */
  ```

- Operatori:
  - **Matematici**: `= + - * / % ++ --`
  - **Logici**: `== != > < >= <= && || !`
  - **Ugualianza stretta**: `===` (confronto tipo + valore)

---

## 📦 Variabili
```js
var nome = "Mario";  // globale o funzione
let eta = 25;        // blocco
const PI = 3.14;     // costante
```

- `null` = valore nullo noto
- `undefined` = variabile non inizializzata

---

## 🔁 Controllo del Flusso

### ✅ Condizioni
```js
if (condizione) { ... }
else if (condizione) { ... }
else { ... }

condizione ? valore1 : valore2; // Operatore ternario
```

### 🔁 Cicli
```js
while (condizione) { ... }

do { ... } while (condizione);

for (inizio; condizione; incremento) { ... }

for (let x of array) { ... } // iterazione su array
```

### ⛔ Break & Continue
```js
break;     // esce dal ciclo
continue;  // salta alla prossima iterazione
```

---

## 🔠 Stringhe
```js
let s = "Test";
s.length;
s.toUpperCase();
s.toLowerCase();
s.slice(1, 4);
s.replace("T", "B");
s.includes("es");
s.startsWith("T");
s.endsWith("t");

let multiline = `Riga1
Riga2`;

let nome = "Luca";
let saluto = `Ciao ${nome}`;
```

---

## 📚 Array
```js
let arr = [1, 2, 3];
arr[0];          // accesso
arr[3] = 4;      // aggiunta diretta
arr.length;      // numero elementi

// Metodi principali
arr.push(5);     // aggiunta in fondo
arr.unshift(0);  // aggiunta in testa
arr.pop();       // rimuove ultimo
arr.shift();     // rimuove primo
arr.splice(1, 1); // rimuove da indice
arr.concat([6, 7]);
arr.slice(1, 3); // copia parziale
arr.includes(2);
arr.indexOf(2);
arr.lastIndexOf(2);
arr.join("-");   // array → stringa
arr.toString();
```

### 🔁 Spread Operator
```js
const arr1 = [1, 2];
const arr2 = [3, 4];
const uniti = [...arr1, ...arr2];
```
