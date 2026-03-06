# AutoSport Alex - Website

Acest proiect reprezintă noul website pentru școala de șoferi AutoSport Alex din Slatina, construit folosind [Astro v5](https://astro.build) și modernizat cu [Tailwind CSS](https://tailwindcss.com/).

## Meniu rapid de comenzi

Toate comenzile se rulează din rădăcina proiectului, folosind Terminalul (sau Command Prompt).

| Comandă                   | Acțiune                                           |
| :------------------------ | :------------------------------------------------ |
| `npm install`             | Instalează dependențele (prima dată după clonare) |
| `npm run dev`             | Pornește serverul local la `localhost:4321`       |
| `npm run build`           | Generează site-ul static pentru producție         |
| `npm run preview`         | Previzualizează site-ul generat local             |

## Gestionarea Conținutului

Site-ul nu necesită un CMS extern greoi. Toate informațiile sunt stocate în fișiere TS, aflate în folderul `src/content/`:

1. **Date generale (Telefon, Adresă, Nume):** Editați fișierul `src/content/site.ts`.
2. **Echipa de Instructori:** Editați fișierul `src/content/instructors.ts`. Puteți adăuga, șterge sau modifica instructori și categoriile pe care le predau.
3. **Pachete (Categorii Auto):** Editați fișierul `src/content/categories.ts`.
4. **Întrebări frecvente (FAQ):** Editați fișierul `src/content/faq.ts`.
5. **Recenzii:** Editați fișierul `src/content/reviews.ts`.

## Gestionarea Imaginilor și Videoclipurilor

Imaginile și clipurile video trebuie stocate local în folderul **`public/`**. Orice fișier din `public/` va fi disponibil direct la adresa site-ului:
- Puneți pozele galeriei în: `public/gallery/`
- Puneți videoclipurile în: `public/videos/`

*Notă: Formatele recomandate pentru web sunt `.webp` sau `.jpg` optimizat pentru poze (max 1MB) și `.mp4` pentru clipuri video scurte.*

Pentru a adăuga imagini noi în secțiunea Galerie Foto, actualizați lista de imagini din fișierul `src/components/GalleryGrid.astro`. Ca alternativă viitoare, se poate implementa o funcție automată Astro.glob() care să citească folderul `public/gallery/`.

## Setare Formular de Contact (Formspree)

Pentru a primi mesajele direct pe adresa de email (`alina_truica2000@yahoo.com`), folosim **Formspree** (serviciu gratuit suportat excelent de site-urile statice).

**Pași de configurare:**
1. Creați un cont gratuit pe [Formspree.io](https://formspree.io/).
2. Creați un **New Project / New Form**.
3. Va genera o adresă de tipul: `https://formspree.io/f/xnqwa...` (un ID unic).
4. Deschideți fișierul `src/components/ContactForm.astro` din acest proiect.
5. Modificați prima linie:
```javascript
const formAction = "https://formspree.io/f/ID_TĂU_AICI";
```
Gata! Orice mesaj trimis din pagină va ajunge pe adresa de email cu care ați creat contul pe Formspree.

## Deploy pe Cloudflare Pages (Gratuit)

Pentru a publica site-ul pe internet, gratuit și super-rapid:

1. Încărcați acest cod sursă într-un repository privat/public pe **GitHub** sau **GitLab**.
2. Autentificați-vă pe [Cloudflare Dashboard](https://dash.cloudflare.com/), secțiunea "Workers & Pages" -> **Pages**.
3. Apăsați **"Connect to Git"** și selectați repository-ul creat.
4. Setări build:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Click pe **"Save and Deploy"**.

În 2 minute, site-ul va fi live pe un domeniu de tipul `nume-proiect.pages.dev`.

### Setare domeniu Custom (ex. autosportalex.ro)
Când sunteți gata să conectați domeniul dorit:
- În panoul proiectului Cloudflare Pages, mergeți la tab-ul **Custom Domains**.
- Apăsați "Set up a custom domain" și introduceți numele domeniului.
- Urmați pașii pentru a schimba NameServer-urile de la registrar (RoTLD, Romarg etc.) la Cloudflare. Certificatul SSL (HTTPS) este generat automat și gratuit.
