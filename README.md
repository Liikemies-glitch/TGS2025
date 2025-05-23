# TGS2025 - Moderni kotisivu

Moderni verkkosivusto, joka on rakennettu Next.js 14:llä, Tailwind CSS:llä ja shadcn/ui komponenteilla. Valmis integroitavaksi Strapi CMS:n kanssa.

## 🚀 Teknologiastäkki

### Frontend
- **Next.js 14** - App Router arkkitehtuurilla
- **React 19** - Uusimmat React ominaisuudet
- **TypeScript** - Tyyppiturvallisuus
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Korkealaatuiset React komponentit

### Backend & CMS (tuleva)
- **Strapi v4** - Headless CMS
- **RESTful API** - Standardoidut API-rajapinnat
- **GraphQL** - Joustava data-haku
- **PostgreSQL/MySQL** - Tietokanta

## 🛠️ Kehitysympäristön asennus

### Vaatimukset
- Node.js 18.17 tai uudempi
- npm, yarn tai pnpm

### Asennus

1. **Kloonaa repositorio**
   ```bash
   git clone <repository-url>
   cd tgs2025-website
   ```

2. **Asenna riippuvuudet**
   ```bash
   npm install
   # tai
   yarn install
   # tai
   pnpm install
   ```

3. **Käynnistä kehitysserveri**
   ```bash
   npm run dev
   # tai
   yarn dev
   # tai
   pnpm dev
   ```

4. **Avaa selain**
   Siirry osoitteeseen [http://localhost:3000](http://localhost:3000)

## 📁 Projektin rakenne

```
tgs2025-website/
├── src/
│   ├── app/                 # Next.js 14 App Router
│   │   ├── globals.css      # Globaalit tyylit
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Kotisivu
│   ├── components/
│   │   └── ui/              # shadcn/ui komponentit
│   └── lib/
│       └── utils.ts         # Apufunktiot
├── public/                  # Staattiset tiedostot
├── components.json          # shadcn/ui konfiguraatio
├── tailwind.config.ts       # Tailwind CSS konfiguraatio
├── tsconfig.json           # TypeScript konfiguraatio
└── package.json            # Projektin riippuvuudet
```

## 🎨 Komponentit

Projektissa käytetään [shadcn/ui](https://ui.shadcn.com/) komponenttikirjastoa. Asennetut komponentit:

- `Button` - Painikkeet
- `Card` - Kortit sisällön esittämiseen

### Uusien komponenttien asentaminen

```bash
npx shadcn@latest add [komponentti]
```

Esimerkiksi:
```bash
npx shadcn@latest add dialog
npx shadcn@latest add form
npx shadcn@latest add input
```

## 🎯 Ominaisuudet

### ✅ Valmiina
- Responsiivinen design
- Dark mode tuki
- TypeScript tyypitys
- SEO optimointi (meta tagit)
- Moderni gradient suunnittelu
- Smooth scrolling navigaatio
- Hover efektit ja animaatiot

### 🔄 Tulossa (Strapi CMS integraatio)
- Dynaaminen sisällönhallinta
- Blog toiminnallisuus
- Käyttäjien hallinta
- Media kirjasto
- Multilingual tuki
- API endpoints

## 🚀 Production deployment

### Vercel (suositeltu)
1. Pushaa koodi GitHubiin
2. Yhdistä Vercel tili GitHub repositorioon
3. Deploy automaattisesti

### Manuaalinen build
```bash
npm run build
npm start
```

## 🔧 Konfiguraatio

### Tailwind CSS
Tailwind konfiguraatio löytyy tiedostosta `tailwind.config.ts`. Mukana:
- Custom väripaletti
- Dark mode tuki
- Responsive breakpoints

### TypeScript
TypeScript konfiguraatio löytyy tiedostosta `tsconfig.json`. Sisältää:
- Path mapping (`@/` viittaa `src/` kansioon)
- Strict mode
- Next.js optimoinnit

## 📝 Kehitysohjeet

### Koodin tyyli
- Käytä TypeScript:ä
- Noudata ESLint sääntöjä
- Komponentit PascalCase:ssa
- Tiedostot kebab-case:ssa

### Commit viestit
- `feat: uusi ominaisuus`
- `fix: bugikorjaus`
- `docs: dokumentaation päivitys`
- `style: koodin formatointi`
- `refactor: koodin uudelleenjärjestely`

## 🤝 Kehitykseen osallistuminen

1. Fork projekti
2. Luo feature branch (`git checkout -b feature/amazing-feature`)
3. Commit muutokset (`git commit -m 'feat: add amazing feature'`)
4. Push branchiin (`git push origin feature/amazing-feature`)
5. Avaa Pull Request

## 📄 Lisenssi

MIT License - katso [LICENSE](LICENSE) tiedosto

## 📞 Yhteystiedot

- **Email:** info@tgs2025.fi
- **GitHub:** [github.com/tgs2025](https://github.com/tgs2025)
- **Verkkosivusto:** [tgs2025.fi](https://tgs2025.fi)

---

Rakennettu ❤️:llä käyttäen Next.js 14 & Tailwind CSS
