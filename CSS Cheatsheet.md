
# 🧠 CSS Base – Cheatsheet (riassunto slide)

## 🧾 Struttura di una Regola CSS

```css
selettore {
  proprietà: valore;
  proprietà2: valore2;
}
```

### Dove specificare il CSS:
- **File esterno**:
  ```html
  <link rel="stylesheet" href="stile.css">
  ```
- **Interno nel tag `<style>`**:
  ```html
  <style>
    p { color: red; }
  </style>
  ```
- **Inline (sconsigliato)**:
  ```html
  <p style="color: red;">Testo</p>
  ```

## 🎯 Selettori CSS

### Per Tipo (Tag)
```css
p { }
```

### Per Classe
```html
<p class="classe1 classe2">Testo</p>
```
```css
.classe1 { }
.classe1.classe2 { }  /* entrambe le classi */
```

### Per Tag + Classe
```css
p.classe1 { }
```

### Per ID (univoco)
```html
<p id="id1">Testo</p>
```
```css
#id1 { }
```

### Per Attributo
```css
a[target]
a[target="_blank"]
[class^="prezzo"]   /* inizia con */
[class$="netto"]    /* finisce con */
[class*="nome"]     /* contiene */
```

### Per Gerarchia
```css
p a { }          /* discendenti */
p > a { }        /* figli diretti */
h1 + p { }       /* fratello successivo */
h1 ~ p { }       /* tutti i fratelli successivi */
```

### Pseudo-selettori (posizione)
```css
ul li:first-child
ul li:last-child
ul li:nth-child(odd) /* dispari */
ul li:nth-child(even) /* pari */
```

### Pseudo-selettori (stato)
```css
a:visited
a:link
a:hover
a:focus
```

### Pseudo-elementi (contenuto)
```css
p::first-letter
p::first-line
p::selection
p::before
p::after
```

## 🔧 Specificità dei Selettori

| Tipo Selettore | Esempio     | Priorità |
|----------------|-------------|----------|
| ID             | `#id`       | Alta     |
| Classe         | `.classe`   | Media    |
| Tipo (tag)     | `div`       | Bassa    |

In caso di conflitto, vince il selettore più specifico. Se pari, vince quello **dichiarato per ultimo**.

## 🧬 Ereditarietà

- Gli stili sono ereditati dai genitori, **eccetto** per proprietà come `margin`, `border`, ecc.
- Attenzione ai **valori di default** del browser → usare `normalize.css`.

## ✨ Principali Stili CSS

### Tipografia
```css
color: red;
font-family: Arial;
font-weight: bold;
font-size: 16px;
font-style: italic;
text-align: center;
line-height: 1.5;
text-transform: uppercase;
text-decoration: underline;
text-shadow: 1px 1px black;
```

### Sfondi
```css
background-color: lightblue;
background-image: url("sfondo.jpg");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
background-attachment: fixed;
```

### Liste & Tabelle
```css
list-style-type: square;
list-style-image: url("icona.png");
list-style-position: inside;
border-collapse: collapse;
border-spacing: 10px;
```

## 🔗 Risorse Utili
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [CSS Reference](https://cssreference.io)
- [W3Schools](https://www.w3schools.com/cssref/default.asp)
- [Normalize.css](https://necolas.github.io/normalize.css/)

## 📦 CSS Box Model

Ogni elemento HTML è rappresentato come un **rettangolo** composto da quattro aree concentriche:

```
+----------------------------------+
|             margin               |
|   +--------------------------+   |
|   |         border           |   |
|   |   +------------------+   |   |
|   |   |     padding      |   |   |
|   |   |  +-----------+   |   |   |
|   |   |  |  content  |   |   |   |
|   |   |  +-----------+   |   |   |
|   |   |                  |   |   |
|   |   +------------------+   |   |
|   |                          |   |
|   +--------------------------+   |
|                                  |
+----------------------------------+
```
### Parti del Box Model:
- **content**: il contenuto dell’elemento (testo, immagini, ecc.)
- **padding**: spazio *interno* tra il contenuto e il bordo
- **border**: il bordo che circonda il padding e il contenuto
- **margin**: spazio *esterno* tra il bordo e gli elementi circostanti

### Esempio CSS:

```css
div {
  margin: 10px;
  padding: 20px;
  border: 2px solid black;
  width: 200px;
  height: 100px;
}
```

### Dimensionamento il larghezza di un elemento 
La larghezza totale di un box, così come la larghezza del solo contenuto, si calcolano in maniera differente in base alla situazione in cui ci si trova. Semplificando:
- Se è stata impostata la proprietà **width** allora la larghezza del contenuto sarà pari a tale valore.
- Se non è stata impostata la proprietà width:
    - Nel caso di tag **block level** la larghezza totale è pari alla larghezza del contenuto del tag padre
    - Nel caso di tag **inline** la larghezza del contenuto è pari alla dimensione necessaria per contenerlo

In ogni caso vale il seguente legame tra larghezza del contenuto (width) e larghezza totale:
```LarghTotale = width + padding-left + padding-right + border-left + border-right + margin-left + margin-right```

**NB**: Il tag body ha una larghezza di default pari alla larghezza della finestra del browser.

### Dimensionamento il altezza di un elemento 
L'altezza totale di un box, così come l'altezza del solo contenuto, si calcolano in maniera analoga a quanti visto per la larghezza. Semplificando:
- Se è stata impostata la proprietà **height** allora l'altezza del contenuto sarà pari a tale valore.
- Se non è stata impostata la proprietà height allora l'altezza del contenuto è pari alla dimensione necessaria per contenerlo

In ogni caso vale il seguente legame tra altezza del contenuto (height) e altezza totale:
```AltTotale = height + padding-top + padding-bottom + border-top + border-bottom + margin-top + margin-bottom```

### Box Sizing border box
E' possibile modificare il calcolo delle dimensioni visto precedentemente.
E' possibile fare in modo che width e heigth si riferiscano alle dimensioni totali del box, piuttosto che alle dimensioni del contenuto. Il contenuto sarà comunque calcolato con la solita forma.
```css
.element  { box-sizing: border-box; }
```

Oppure, per applicare a tutti gli elementi:
```css
*  { box-sizing: border-box; }
```

### Altri stili per box model
- `min-width` Specifica la larghezza minima. Il dimensionamento del box seguirà le regole precedentemente viste senza scendere sotto questa misura
- `max-width` Specifica la larghezza massima. Il dimensionamento del box seguirà le regole precedentemente viste senza salire sopra questa misura
- `min-height` Specifica l'altezza minima. Il dimensionamento del box seguirà le regole precedentemente viste senza scendere sotto questa misura
- `max-height` Specifica l'altezza massima Il dimensionamento del box seguirà le regole precedentemente viste senza salire sopra questa misura
