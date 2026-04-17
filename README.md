# Pico – Sito vetrina + Helpdesk

Stack: **Next.js 14** · **Sanity CMS** · **Clerk Auth** · **Supabase** · **Vercel**

---

## Setup in 5 passi

### 1. Clona e installa

```bash
git clone https://github.com/tuouser/pico-site.git
cd pico-site
npm install
```

### 2. Crea il progetto Sanity

```bash
npx sanity init --project pico-site --dataset production
# Annota il Project ID che ti viene mostrato
```

### 3. Configura le variabili d'ambiente

```bash
cp .env.local.example .env.local
# Apri .env.local e compila tutti i valori:
# - NEXT_PUBLIC_SANITY_PROJECT_ID  (dal passo 2)
# - SANITY_API_TOKEN               (Sanity dashboard → API → Tokens → crea token "Editor")
# - NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY + CLERK_SECRET_KEY  (clerk.com → nuovo progetto)
# - NEXT_PUBLIC_SUPABASE_URL + chiavi  (supabase.com → nuovo progetto)
```

### 4. Importa il dataset simulato in Sanity

```bash
# Copia il file dataset nella root del progetto
cp /path/to/pico_dataset.json .

# Esegui il seed
npm run seed
# Output atteso:
# ✓ 6 servizi importati
# ✓ 6 commesse importate
# ✓ 5 membri del team importati
# ✓ 5 partner importati
```

### 5. Crea il database Supabase

Nel pannello Supabase → SQL Editor, incolla ed esegui il contenuto di `supabase_schema.sql`.

### 6. Avvia in locale

```bash
npm run dev
# → http://localhost:3000
```

---

## Deploy su Vercel

```bash
# Installa Vercel CLI (una tantum)
npm i -g vercel

# Deploy (prima volta: segue wizard interattivo)
vercel

# Deploy in produzione
vercel --prod
```

Poi in **Vercel Dashboard → Settings → Environment Variables** aggiungi tutte le variabili di `.env.local`.

---

## Struttura del progetto

```
pico-site/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home
│   │   ├── about/page.tsx        # Chi siamo
│   │   ├── services/page.tsx     # Soluzioni
│   │   ├── projects/
│   │   │   ├── page.tsx          # Lista progetti
│   │   │   └── [id]/page.tsx     # Dettaglio progetto
│   │   ├── team/page.tsx         # Team
│   │   ├── contact/page.tsx      # Contatti
│   │   ├── helpdesk/
│   │   │   └── (auth)/
│   │   │       └── dashboard/    # Area riservata (protetta Clerk)
│   │   └── api/
│   │       ├── contact/route.ts  # Form contatti
│   │       └── tickets/route.ts  # CRUD ticket helpdesk
│   ├── components/
│   │   └── layout/Navbar.tsx
│   ├── lib/
│   │   └── sanity.ts             # Client + query GROQ
│   ├── middleware.ts             # Protezione route Clerk
│   └── styles/globals.css
├── sanity/
│   └── schemas/                  # Tipi Sanity (project, service, team, partner)
├── scripts/
│   └── seed-sanity.mjs           # Import dataset → Sanity
├── supabase_schema.sql           # Schema DB helpdesk
├── sanity.config.ts
├── vercel.json
└── .env.local.example
```

---

## Aggiornamenti contenuti (mensili)

L'editor non tecnico accede a `https://pico.sanity.studio` con le sue credenziali e modifica direttamente.

Per aggiornamento tramite agente AI, usa l'API Sanity con il token Editor:

```bash
# Esempio: aggiorna il risultato di una commessa
curl -X PATCH "https://<project>.api.sanity.io/v2024-01-01/data/mutate/production" \
  -H "Authorization: Bearer $SANITY_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"mutations":[{"patch":{"id":"project-radmon-arpa","set":{"results":"Nuovo testo risultati"}}}]}'
```

---

## Costi stimati (piano Free)

| Servizio | Piano | Costo |
|---|---|---|
| Vercel | Free | $0 |
| Sanity | Free (3 editor) | $0 |
| Clerk | Free (10k utenti) | $0 |
| Supabase | Free tier | $0 |
| Claude API | ~aggiornamenti mensili | $3–5 |
| **Totale** | | **~$3–5/mese** |
