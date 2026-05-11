# NELSONDIGITAL (multidoménový web)

V jednom repozitári sú **dva** statické weby:

| Doména | Obsah |
|--------|--------|
| **streamlinemedia.shop** | Koreň projektu (`index.html`, `about.html`, …) |
| **nelsondigital.shop** | `sites/nelsondigital/` |

## Lokálny náhľad

```bash
make dev-streamline   # http://localhost:8080
make dev-nelson       # http://localhost:8081
```

Alebo ručne:

```bash
python3 -m http.server 8080
cd sites/nelsondigital && python3 -m http.server 8081
```

## Vercel (jeden projekt = dve domény)

Routing nie je vo `vercel.json`, ale v **`middleware.js`**: pri hoste `nelsondigital.shop` / `www.nelsondigital.shop` sa obsah interným rewrite nasmeruje do `sites/nelsondigital/`. Všetky ostatné hosty (vrátane **streamlinemedia.shop**) dostanú web z koreňa repozitára.

1. Vytvor **jeden** Vercel projekt z tohto repozitára (**Root Directory** = koreň, kde je `middleware.js` a `package.json`).
2. V **Settings → Domains** pripoj **obe** produkčné domény k tomu istému projektu, napr.:
   - `streamlinemedia.shop` (+ voliteľne `www.streamlinemedia.shop`)
   - `nelsondigital.shop` (+ voliteľne `www.nelsondigital.shop`)
3. Každý deploy musí prebehnúť s **`npm install`** (kvôli závislosti `@vercel/functions` pre middleware). Štandardne Vercel pri `package.json` závislosti nainštaluje.
4. Kontrola po nasadení:
   - na doméne Streamline musí byť titulok stránky „Streamline Media …“,
   - na doméne Nelson „Nelson Digital …“.

Ak GitHub pri klone vráti **HTTP 500**, ide o výpadok GitHub/Vercel – skús **Redeploy** alebo po čase znova.

## GitHub organizácia `streamline`

Účet **LukasMLegacy** momentálne **nie je členom** organizácie [github.com/streamline](https://github.com/streamline), preto nejde vytvoriť ani preniesť repozitár na `streamline/NELSONDIGITAL` bez kroku vlastníka orgy.

**Vlastník organizácie `streamline` nech:**

1. Pozve **LukasMLegacy** do orgy s právom vytvárať repozitáre (alebo rolou **Owner**), **alebo**
2. Vytvorí prázdny repozitár **streamline/NELSONDIGITAL**, pridá **LukasMLegacy** ako **Admin** a potom stačí:

```bash
git remote add streamline https://github.com/streamline/NELSONDIGITAL.git
git push streamline main
```

Prípadne po pozvánke: **Settings** na `LukasMLegacy/NELSONDIGITAL` → **Transfer ownership** → organizácia **streamline**.

---

Repozitár na GitHub: **https://github.com/LukasMLegacy/NELSONDIGITAL**
