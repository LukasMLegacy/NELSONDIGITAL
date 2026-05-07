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

## Vercel

1. Importuj repozitár do Vercel (root directory = koreň repozitára).
2. Pridaj domény: **streamlinemedia.shop** a **nelsondigital.shop** (a voliteľne `www`).
3. Súbor `vercel.json` presmeruje host `nelsondigital.shop` do `sites/nelsondigital/`.

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
