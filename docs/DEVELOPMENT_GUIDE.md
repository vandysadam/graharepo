# Panduan Pengembangan — project-graha

> **Dokumen ini adalah acuan wajib** bagi developer (manusia maupun AI) sebelum menulis atau mengubah kode.
> Tujuannya menjaga konsistensi struktur folder, arsitektur, pola penulisan kode, penamaan, penggunaan
> library, dan konvensi yang sudah berjalan di proyek ini.
>
> Jika ada konvensi baru yang disepakati, **perbarui dokumen ini bersamaan dengan kodenya**.

---

## 1. Ringkasan Proyek

Situs company profile **PT. Graha Estimatika Pradana** (konsultan Quantity Surveyor) — aplikasi
**SPA statis** (tanpa backend), konten berbahasa Indonesia, di-deploy ke GitHub Pages.

| Aspek | Teknologi |
| --- | --- |
| Framework | React 18 + TypeScript 5.5 (mode `strict`) |
| Build | Vite 5 + `@vitejs/plugin-react-swc` |
| Styling | Tailwind CSS 3.4 + shadcn/ui (CSS variables HSL, base `slate`) |
| Routing | `react-router-dom` v7 (`BrowserRouter`) |
| Animasi | AOS (`data-aos` + `AOS.init`) |
| Carousel | `react-slick` + `slick-carousel` |
| Icon | `lucide-react` (utama) |
| Toast | `react-toastify` |
| Lint / Format | ESLint 9 (flat config) + Prettier |
| Deploy | `gh-pages` → `https://vandysadam.github.io/` |

---

## 2. Perintah & Alur Kerja

```bash
npm run dev        # server dev Vite
npm run build      # tsc -b && vite build — lihat catatan baseline di bawah
npm run lint       # eslint . — lihat catatan baseline di bawah
npm run format     # prettier --write (hanya src/**)
npm run preview    # preview hasil build
npm run deploy     # predeploy(npm run build) → vite build → push dist/ ke GitHub Pages
```

**Status baseline (perlu diketahui):**

- `npm run lint` saat ini **belum bersih** — ada ±18 masalah warisan di file lama
  (unused vars di `data-tables/datatable.tsx`, `no-explicit-any` di `entity/entity.ts` &
  `types/aos.d.ts`, empty interface/pattern di `home-screen.tsx`, `layanan.tsx`,
  `tentangkami-screen.tsx`, warning `react-refresh` di beberapa `components/ui/*`).
- `npm run build` (`tsc -b && vite build`) saat ini **gagal di baseline** — 9 error TS,
  semuanya di file yang tidak dipakai route mana pun:
  - `src/components/data-tables/datatable.tsx` (7 error `TS6133` unused vars)
  - `src/components/ui/combobox.tsx` (2 error `TS2322`: prop `render` & size `icon-xs`
    tidak ada di `Button` shadcn versi ini)
- `npx vite build` (tanpa `tsc`) **sukses** — inilah yang dipakai script `deploy`.
  Karena `predeploy` menjalankan `npm run build`, **`npm run deploy` saat ini ikut gagal**
  sampai baseline `tsc` beres.

Jangan "memperbaiki" semuanya secara acak dan **jangan mengira perubahan Anda yang menyebabkannya**.
Cukup pastikan **tidak menambah error baru** (bandingkan jumlah error sebelum & sesudah perubahan).
Jika diminta menyelesaikan baseline, perbaiki kedua file tersebut secara spesifik.

**Checklist sebelum menganggap selesai:**

1. `npm run lint` — tidak ada error/warning **baru** (bandingkan dengan baseline di atas).
2. `npm run build` — tidak ada error TS **baru**; jalankan `npx vite build` bila perlu
   memastikan bundel tetap ter-generate.
3. `npm run format` — format ulang file yang disentuh.
4. Route baru (jika ada) terdaftar di `router/app-router.tsx` **dan** menu `src/assets/menu-header-section.tsx`.
5. Tidak ada import yang rusak akibat rename/move file.

---

## 3. Struktur Folder

```
project-graha/
├── index.html                  # entry HTML (title, meta, favicon)
├── router/
│   └── app-router.tsx          # SEMUA route + lazy loading + ToastContainer (di LUAR src/)
├── src/
│   ├── main.tsx                # root render: StrictMode > BrowserRouter > AppRouter
│   ├── App.tsx                 # ⚠ legacy, TIDAK dipakai main.tsx — jangan jadikan acuan
│   ├── index.css               # Tailwind directives + variabel tema shadcn/ui
│   ├── layout/
│   │   └── dashboerd-layout.tsx    # layout utama: Header + <main> + BackToTop + Footer
│   ├── component/              # komponen GLOBAL bersama (singular!)
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── backtotopbutton.tsx
│   ├── components/             # (plural) — berbeda fungsi dengan src/component/
│   │   ├── ui/                 # komponen primitives shadcn/ui (button, input, card, ...)
│   │   └── data-tables/        # DataTable generik (@tanstack/react-table)
│   ├── pages/                  # satu folder per halaman/route
│   │   ├── homescreen/         # home-screen.tsx + menuNsection.tsx (hero memuat header sendiri)
│   │   ├── tentangkami/        # tentangkami-screen.tsx + section/
│   │   ├── layanan/            # layanan.tsx + component/ + section/ + type/
│   │   ├── project/            # projects.tsx (list) + projects-slider.tsx (detail /project/:id)
│   │   │   └── entity/         # data + import gambar (project.ts, entity.ts)
│   │   ├── costplaning/        # cost-planning.tsx  (⚠ ejaan "costplaning" sudah dipakai)
│   │   ├── contact/            # contact-screen.tsx
│   │   └── dashboard-loader.tsx    # fallback Suspense (progress bar)
│   ├── assets/
│   │   ├── images/             # foto/gambar; foto proyek di Data-Foto-Proyek/<folder-kebab>/
│   │   ├── svg/  video/
│   │   └── menu-header-section.tsx # navigasi header (daftar link menu)
│   ├── lib/utils.ts            # cn() — gabungan clsx + tailwind-merge
│   └── types/                  # deklarasi ambient (*.d.ts) untuk lib tanpa tipe
├── public/                     # aset statis (favicon, 404.html untuk SPA di GitHub Pages)
└── docs/DEVELOPMENT_GUIDE.md   # dokumen ini
```

### Aturan penempatan (penting)

| Mau membuat sesuatu | Taruh di |
| --- | --- |
| Halaman baru (1 route) | `src/pages/<nama-halaman>/<nama>-screen.tsx` |
| Bagian/halaman dalam satu halaman | `src/pages/<halaman>/section/` |
| Komponen khusus satu halaman | `src/pages/<halaman>/component/` |
| Komponen bersama lintas halaman (header/footer/dll.) | `src/component/` (singular) |
| Primitives UI generik (gaya shadcn/ui) | `src/components/ui/` |
| Tipe interface / data statis halaman | `src/pages/<halaman>/type/` atau `entity/` |
| Helper utilitas umum | `src/lib/` |
| Gambar konten | `src/assets/images/...` (di-import sebagai modul) |
| File statis yang dibutuhkan browser langsung | `public/` |

> ⚠ **Jangan "memperbaiki" typo nama file/folder yang sudah ada** (`dashboerd-layout`,
> `costplaning`, `footerSecton`, `backtotopbutton`, `src/component` singular, dll). Banyak file
> sudah mengimpor nama tersebut; rename hanya boleh dilakukan sebagai perubahan eksplisit menyeluruh.

---

## 4. Arsitektur & Alur Aplikasi

```
main.tsx
  └─ BrowserRouter (basename="/")
       └─ AppRouter (router/app-router.tsx)
            ├─ useEffect: reset scroll ke atas saat path berubah
            ├─ <Routes> — tiap halaman dibungkus React.Suspense fallback={<DashboardLoaderPage/>}
            │     └─ halaman (React.lazy import) → <DashboardLayout> → konten
            └─ <ToastContainer/> (react-toastify) — didaftarkan SEKALI di sini
```

**Fakta arsitektur yang wajib dipertahankan:**

- Route didefinisikan **hanya** di `router/app-router.tsx`, memakai `React.lazy(() => import(...))`
  + `<React.Suspense fallback={<DashboardLoaderPage />}>`.
- `DashboardLayout` (`src/layout/dashboerd-layout.tsx`) membungkus **semua halaman**
  (`children` → `<main>`), kecuali **home** yang menyusun section sendiri
  (`home-screen.tsx` → `menu1section.tsx` sudah memuat header + hero video).
- `DashboardLoaderPage` juga membungkus `DashboardLayout` (loader tampil dengan header/footer).
- Path route yang sudah ada bersifat **case-sensitive dan campuran**:
  `/`, `/TentangKami`, `/Layanan`, `/project`, `/project/:id`, `/costplaning`, `/contact`.
  Route baru sebaiknya **lowercase-kebab** (`/layanan-baru`), dan **jangan mengubah** path lama
  karena sudah terpasang di menu `src/assets/menu-header-section.tsx`.
- **Belum ada layer API.** Semua data statis. State lokal (`useState`/`useMemo`) cukup.
  Redux Toolkit/axios terpasang tapi **belum dipakai** — jangan tambah state manager baru
  tanpa kebutuhan nyata.

---

## 5. Konvensi Penamaan

| Objek | Konvensi | Contoh |
| --- | --- | --- |
| File komponen/halaman | `kebab-case.tsx` | `home-screen.tsx`, `projects-slider.tsx` |
| Folder halaman | `kebab-case` / huruf kecil satu kata | `tentangkami/`, `costplaning/` |
| Nama komponen (export) | `PascalCase` | `HomeScreen`, `Menu1Section`, `ServiceDetail` |
| Function util / hook | `camelCase` | `cn()`, `useDataTable` |
| Interface / Type | `PascalCase`, awalan `XxxProps` untuk props | `Service`, `DashboardLayoutProps` |
| Variabel state | `value` / `setValue` | `const [search, setSearch] = useState("")` |
| Variabel data statis | `camelCase` (boleh jamak sesuai konteks) | `projek`, `serviceDataservice` |
| Konstanta menu/opsi | array di atas file, `camelCase` | `const components: {title, to}[]` |
| Route path | lihat bagian 4 | `/project/:id` |
| Atribut animasi | `data-aos="fade-down|fade-up|fade-right"` | — |

- **Satu komponen default export per file** (lihat pola di bagian 6).
- Nama file section: pakai `section/section-1.tsx`, `section/section-2.tsx` (kebab + nomor)
  untuk halaman baru; varian lama (`layanansec1.tsx`, `menu1section.tsx`) dibiarkan apa adanya.
- Komenten dan teks UI berbahasa **Indonesia**.

---

## 6. Pola Penulisan Kode

### 6.1 Halaman (route)

```tsx
// src/pages/<halaman>/<nama>-screen.tsx
import DashboardLayout from "@/layout/dashboerd-layout";
import Section1 from "./section/section-1";

export default function MyScreen() {
  return (
    <DashboardLayout>
      <div>
        <div className="flex flex-col flex-1">
          <Section1 />
        </div>
      </div>
    </DashboardLayout>
  );
}
```

### 6.2 Section / komponen biasa (pola dominan proyek)

```tsx
// src/pages/<halaman>/section/section-1.tsx
export interface Section1Props {
  title?: string;
}

export default function Section1({ title }: Section1Props) {
  return (
    <section className="relative w-full py-16 bg-gray-50 overflow-hidden">
      <h2 className="text-3xl font-medium text-black text-center mb-5">{title}</h2>
    </section>
  );
}
```

- **Pola utama: `export default function NamaKomponen() { ... }`** — dipakai di mayoritas file.
  Alternatif yang juga ada (arrow function + `export default Nama;` / `React.FC`) hanya ditemui di
  file lama — untuk kode baru ikuti pola `export default function`.
- Interface props ditulis **di atas** komponen dengan `export interface XxxProps { ... }`.
  (Beberapa file lama memakai `export interface DashboardProps {}` + `({}: DashboardProps)` pada
  komponen tanpa props — pola ini sudah terlanjur ada, **biarkan**, tapi untuk komponen baru tanpa
  props cukup tulis `export default function Nama() {}` tanpa interface kosong.)

### 6.3 Komponen UI primitives shadcn/ui (perubahan jarang)

```tsx
// src/components/ui/xxx.tsx — pola shadcn: forwardRef + cva + cn()
const Xxx = React.forwardRef<HTMLButtonElement, XxxProps>(({ className, ...props }, ref) => (
  <button ref={ref} className={cn(baseStyles, className)} {...props} />
));
Xxx.displayName = "Xxx";
export { Xxx, xxxVariants };
```

- **Jangan mengubah gaya bawaan file di `src/components/ui/`** kecuali diminta. Komponen baru dari
  shadcn boleh ditambahkan lewat CLI (`npx shadcn-ui@latest add <komponen>`) agar konfigurasi
  `components.json` terpenuhi.

### 6.4 Data statis + gambar (pola `entity/`)

```tsx
// src/pages/<halaman>/entity/data.ts
import cover from "@/assets/images/foto-baru.webp";

export const dataList = [
  {
    id: "id-slug-huruf-kecil",
    title: "Judul Tampilan",
    image: cover,
    images: [cover],
  },
];
```

- `id` untuk `/project/:id` berupa **string slug** (dipakai `find()` di halaman detail).
- Daftar proyek ada di `src/pages/project/entity/project.ts` (export `projek`); tipe di
  `entity/entity.ts` (interface `ProjekList`).

### 6.5 Aturan import

- **Path alias `@/` → `src/`** sudah dikonfigurasi di `vite.config.ts` + `tsconfig`.
  Untuk kode baru **gunakan `@/...`** (contoh: `@/layout/dashboerd-layout`,
  `@/components/ui/button`, `@/assets/images/...`). Import relatif lama dibiarkan.
- **Gambar wajib di-import sebagai modul**, jangan sebagai string path runtime:

  ```tsx
  // ✅ benar
  import jumbotron from "@/assets/images/jumbotron.jpeg";
  <img src={jumbotron} alt="..." />

  // ❌ salah — hanya jalan saat dev, 404 saat production build
  <img src="src/assets/images/jumbotron.jpeg" />
  ```

- CSS pihak ketiga di-import dari nama paket, bukan path `node_modules`:

  ```tsx
  import "aos/dist/aos.css";                 // ✅
  import "slick-carousel/slick/slick.css";   // ✅
  import "slick-carousel/slick/slick-theme.css";
  ```

- Hapus import yang tidak terpakai (`noUnusedLocals` aktif).

### 6.6 State, efek, dan interaksi

- Pakai hook lokal dulu (`useState`, `useMemo`, `useRef`, `useEffect`).
- Selalu **bersihkan event listener/timer** di `return` cleanup `useEffect`.
- Animasi AOS: init per halaman yang memakainya —

  ```tsx
  useEffect(() => { AOS.init({ duration: 1000 }); }, []);
  ```
  lalu atribut `data-aos="..."` pada elemen.
- Toast: cukup `import { toast } from "react-toastify"` — `ToastContainer` sudah terdaftar di
  `router/app-router.tsx`; **jangan** menambah container kedua.

---

## 7. Styling (Tailwind + shadcn/ui)

- **Utility-first, className langsung di JSX** — tidak ada CSS module/SCSS untuk komponen baru.
  (Satu-satunya CSS adalah `src/index.css` + import CSS pihak ketiga.)
- Gunakan **token tema** shadcn: `bg-background`, `text-foreground`, `bg-primary`,
  `text-muted-foreground`, `border-border`, `rounded-lg` (radius dari `--radius`).
  Warna arbitrar (`bg-blue-800`, `text-indigo-900`) hanya bila memang dibutuhkan gaya yang sudah ada.
- **Responsive**: prefix `sm:` / `md:` / `lg:` wajib untuk tampilan mobile-first
  (target utama desktop + mobile, container `max-w-* mx-auto px-*`).
- Komponen shadcn: gabungkan gaya dengan helper `cn()` dari `@/lib/utils`
  (clsx + tailwind-merge) — jangan string-concat className.
- Dark mode dikonfigurasi (`darkMode: ["class"]`) tapi **tema aktif light** — tidak perlu
  menulis varian `dark:` kecuali diminta.
- Class kustom yang tersedia: `font-arial` dan animasi `accordion-down` / `accordion-up`.
  (Ada entri `patah: steps(6, end)` di config, tapi dengan key salah eja
  `transitionTimmingFunction` sehingga utility `transition-patah` **tidak ter-generate** —
  jangan diandalkan; hanya ubah bila diminta secara eksplisit.)

---

## 8. Panduan Penggunaan Library

### 8.1 Sudah dipakai — ikuti pola yang ada

| Kebutuhan | Pakai | Catatan |
| --- | --- | --- |
| Navigasi antar halaman | `react-router-dom` (`Link`, `useNavigate`, `useParams`) | Daftarkan route di `router/app-router.tsx` |
| Animasi scroll | `aos` | Init di halaman + `data-aos` |
| Carousel/slider proyek | `react-slick` + CSS `slick-carousel` | Lihat `projects-slider.tsx` |
| Ikon | `lucide-react` | Contoh: `<Mail className="h-5 w-5" />` |
| Toast/notifikasi | `react-toastify` | Container sudah ada di router |
| Form element shadcn | `@radix-ui/react-*` via `src/components/ui/*` | Import dari `@/components/ui/...` |
| Tabel data | `@tanstack/react-table` via `src/components/data-tables/datatable.tsx` | Komponen generik, sudah ada |
| Debounce input | `use-debounce` | Dipakai DataTable |
| Gabungan class | `cn()` dari `@/lib/utils` | Jangan pakai string concat |

### 8.2 Terpasang, belum terpakai — hanya dipakai bila kebutuhan muncul

| Kebutuhan | Pakai | Jangan dipakai |
| --- | --- | --- |
| Form + validasi | `react-hook-form` + `zod` + `@hookform/resolvers` | `formik` + `yup` (duplikat fungsi, pilih satu) |
| HTTP request | `axios` | — (belum ada API) |
| State global | `@reduxjs/toolkit` + `react-redux` + `redux-persist` | — hanya bila state benar-benar lintas aplikasi |
| Grafik | `recharts` | — |
| Ekspor PDF tabel | `jspdf` + `jspdf-autotable` | `@react-pdf/renderer` (pilih satu) |
| QR code | `qrcode.react` | — |
| Peta | `@react-google-maps/api` (butuh API key via `import.meta.env.VITE_*`) | — |
| Ikon alternatif | — | `phosphor-react`, `@radix-ui/react-icons` — **utamakan `lucide-react`** |

**Prinsip: JANGAN menambah dependency baru tanpa kebutuhan yang jelas.** Periksa dulu apakah
sudah tersedia di `package.json` atau bisa diselesaikan dengan Tailwind/shadcn.

### 8.3 Deklarasi tipe untuk library tanpa tipe

Buat file di `src/types/*.d.ts` (folder sudah masuk `typeRoots`), contoh: `src/types/aos.d.ts`.

---

## 9. TypeScript & Lint

- Mode **strict** + `noUnusedLocals` + `noUnusedParameters` + `noFallthroughCasesInSwitch`.
- **Hindari `any`** (mis. `ProjekList.id: any` adalah warisan — untuk data baru gunakan `string`).
- Props komponen selalu bertipe (`XxxProps`); handler event bertipe benar
  (`React.SyntheticEvent<HTMLVideoElement>`, `(e: React.ChangeEvent<HTMLInputElement>)`).
- ESLint flat config (`eslint.config.js`): `react-hooks` + `react-refresh`.
  - `react-refresh/only-export-components` aktif — **di file `.tsx` hindari mengekspor hal lain
    selain komponen**; taruh data/tipe di file `.ts` terpisah (mis. `entity/*.ts`, `type/*.ts`).
- Path extension `.tsx` untuk berisi JSX, `.ts` untuk data/tipe murni.

---

## 10. File Legacy / Tidak Aktif (jangan jadikan acuan, jangan dihapus tanpa konfirmasi)

| File | Status |
| --- | --- |
| `src/App.tsx` | Tidak diimpor `main.tsx` (root memakai `AppRouter` langsung); hanya me-render halaman home secara langsung |
| `src/component/headers.tsx` | Seluruh isinya komentar |
| `src/assets/test.tsx` | Seluruh isinya komentar |
| `src/pages/project/project.tsx` | Versi lama galeri, terkomentar semua |
| `src/pages/tentangkami/backup` | Cuplikan HTML lama, terkomentar |
| `src/components/ui/*` yang belum terpakai (dialog, select, combobox, nav, dll.) & `data-tables/` | Aset siap pakai — **jangan dihapus** |
| Route/komentar di `app-router.tsx` yang dikomentari | Arsip — biarkan kecuali diminta bersih-bersih |

---

## 11. Checklist Ringkas untuk AI/Developer

Sebelum menulis kode:

- [ ] Baca bagian 3 (folder mana yang tepat) dan bagian 4 (cara route/layout bekerja).
- [ ] Cek `package.json` — library yang dibutuhkan mungkin sudah terpasang (bagian 8).

Sesudah menulis kode:

- [ ] Mengikuti pola `export default function NamaKomponen()` + `export interface XxxProps`.
- [ ] Memakai path alias `@/` dan **import gambar sebagai modul**.
- [ ] Membungkus halaman dengan `DashboardLayout` (kecuali home).
- [ ] Route baru terdaftar di `router/app-router.tsx` (lazy + Suspense) dan menu header.
- [ ] Tidak ada `any` baru, tidak ada import tak terpakai.
- [ ] `npm run lint` & `npm run build` tidak menambah error baru (lihat baseline bagian 2) → `npm run format`.
- [ ] Tidak mengubah/meng-rename file lama (terutama yang typo) tanpa instruksi eksplisit.
