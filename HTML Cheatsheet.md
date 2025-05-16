
# HTML Cheat Sheet (riassunto slide)

## 📜 Struttura di Base
```html
<!DOCTYPE html>
<html lang="it">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Titolo della Pagina</title>
  </head>
  <body>
    Contenuto visibile
  </body>
</html>
```

- `<!DOCTYPE html>`: Indica al browser che si sta usando HTML5
- `lang="it"`: Specifica la lingua del documento
- `<meta charset="UTF-8">`: Codifica dei caratteri (supporta accenti, simboli)
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Responsività su dispositivi mobili

---

## 📦 Elementi HTML

### Tag block level e inline
- **Tag Block Level:** Vengono visualizzati sullo schermo andando a capo, prima e dopo il tag
- **Tag Block Inline:** Vengono visualizzati senza andare a capo, all'interno del tag contenitore, nella posizione in cui sono stati inseriti


### Tag di intestazione (block level)
```html
<h1>Titolo principale</h1>
<h2>Sottotitolo</h2>
...
<h6>Titolo meno importante</h6>
```

### Paragrafi e Testo
```html
<p>Questo è un paragrafo. (block level)</p>
<b>Grassetto (inline)</b> o <strong>Importante (inline)</strong>
<i>Corsivo (inline)</i> o <em>Enfasi (inline)</em>
<code>Codice (inline)</code>
<cite>Citazione (inline)</cite>
<small>Testo piccolo (inline)</small> <big>Testo grande (inline)</big>
<br> Interruzione di riga (inline)
<hr> Linea orizzontale  (block level)
```

---

## 📄 Caratteri Speciali
| Codice | Significato |
|--------|-------------|
| `&lt;` | < |
| `&gt;` | > |
| `&amp;` | & |
| `&quot;` | " |
| `&nbsp;` | spazio non separabile |
| `&egrave;` | è |
| `&agrave;` | à |

---

## 🔗 Link (inline)
```html
<a href="pagina.html">Vai alla pagina</a>
<a href="pagina.html" target="_blank">Apri in nuova scheda</a>
<a href="file.pdf" download>Scarica PDF</a>
```

Percorsi:
- Relativi: `./`, `../`
- Assoluti: `/cartella/file.html`

---

## 🖼️ Immagini (inline)
```html
<img src="immagine.jpg" alt="Descrizione" width="300" height="200">
```
- `alt`: Testo alternativo accessibile e SEO-friendly

---

## 🎥 Video (inline)
```html
<video src="video.mp4" width="400" height="300" controls autoplay loop>
  Il tuo browser non supporta i video.
</video>
```

---

## 📋 Elenchi (block level)
### Non ordinati (punti)
```html
<ul>
  <li>Voce 1</li>
  <li>Voce 2</li>
</ul>
```

### Ordinati (numeri)
```html
<ol>
  <li>Primo</li>
  <li>Secondo</li>
</ol>
```

---

## 📊 Tabelle (block level)
```html
<table>
  <thead>
    <tr><th>Col 1</th><th>Col 2</th></tr>
  </thead>
  <tbody>
    <tr><td>Dato 1</td><td>Dato 2</td></tr>
    <tr><td>Dato 3</td><td>Dato 4</td></tr>
  </tbody>
</table>
```
- Attributo `colspan` e `rowspan` per unire celle

---

## 🧱 Contenitori
```html
<div>Contenitore generico block level</div>
<span>Contenitore inline</span>
```

---

## 🧩 Tag Semantici HTML5
- `<header>`: intestazione pagina
- `<footer>`: piè di pagina
- `<main>`: contenuto principale
- `<section>`: sezione tematica
- `<article>`: contenuto autonomo
- `<nav>`: menu di navigazione
- `<aside>`: barra laterale
- `<figure>` e `<figcaption>`: immagine + didascalia
- `<mark>`: testo evidenziato
- `<time>`: data/orario

---

## ✅ Validazione HTML
- [validator.w3.org](https://validator.w3.org): Controlla struttura e attributi del documento HTML

---

## 🛠️ Buone Pratiche
- Indentazione per migliorare la leggibilità
- Chiusura corretta di tutti i tag
- Usare tag semantici per migliorare accessibilità e SEO
- Un solo `<h1>` per pagina
- Non saltare livelli di intestazione (H1 → H2 → H3...)

---
