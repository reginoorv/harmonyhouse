# Panduan Deployment dan Pengelolaan Website Harmony House

## Daftar Isi
1. [Pengenalan](#pengenalan)
2. [Deployment ke Netlify](#deployment-ke-netlify)
3. [Deployment ke Vercel](#deployment-ke-vercel) 
4. [Cara Mengedit Konten](#cara-mengedit-konten)
5. [Struktur File Penting](#struktur-file-penting)

## Pengenalan

Website Harmony House dibangun dengan teknologi berikut:
- **Frontend**: React dengan TypeScript, Tailwind CSS
- **Backend**: Node.js dengan Express
- **Database**: PostgreSQL
- **ORM**: Drizzle

Website ini memiliki beberapa fitur utama:
- Halaman beranda (Home)
- Halaman Proyek dengan detail dari setiap proyek
- Halaman Layanan
- Halaman About/Studio
- Halaman Kontak

## Deployment ke Netlify

Netlify sangat baik untuk deployment situs statis dan aplikasi frontend. Untuk website Harmony House yang memiliki backend, perlu pendekatan khusus.

### Langkah-langkah Deployment ke Netlify:

1. **Persiapan Proyek untuk Deployment**

   - Pastikan repository ada di GitHub, GitLab, atau Bitbucket
   - Pastikan proyek sudah memiliki file `netlify.toml` di folder root dengan konfigurasi berikut:

   ```toml
   [build]
     command = "npm run build"
     publish = "dist"
     functions = "netlify/functions"

   [dev]
     command = "npm run dev"
     port = 5000

   [[redirects]]
     from = "/api/*"
     to = "/.netlify/functions/:splat"
     status = 200
   
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

2. **Buat Akun dan Proyek di Netlify**

   - Kunjungi [netlify.com](https://www.netlify.com/) dan daftar/masuk
   - Klik tombol "New site from Git"
   - Pilih layanan Git yang Anda gunakan (GitHub, GitLab, Bitbucket)
   - Berikan akses Netlify ke repository
   - Pilih repository website Harmony House

3. **Konfigurasi Deploy Settings**

   - Di panel "Build settings":
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Klik "Advanced build settings" dan tambahkan variabel lingkungan:
     - Tambahkan `DATABASE_URL` dengan nilai URL database PostgreSQL Anda
     - Tambahkan variabel lingkungan lain yang dibutuhkan

4. **Deploy Site**

   - Klik tombol "Deploy site"
   - Tunggu proses build dan deployment selesai
   - Netlify akan memberikan URL untuk website (misalnya `harmony-house.netlify.app`)

5. **Konfigurasi Database**

   - Karena aplikasi menggunakan database PostgreSQL, Anda harus menyediakan database terpisah
   - Opsi terbaik adalah menggunakan layanan seperti [Neon](https://neon.tech) atau [Supabase](https://supabase.com)
   - Konfigurasikan `DATABASE_URL` di pengaturan situs Netlify

6. **Fungsi Serverless untuk Backend**

   - Buat folder `netlify/functions` di proyek
   - Tulis fungsi serverless untuk setiap endpoint API
   - Contoh sederhana fungsi serverless:

   ```javascript
   // netlify/functions/api.js
   const express = require('express');
   const serverless = require('serverless-http');
   const app = express();
   const { db } = require('../../db');

   app.get('/api/projects', async (req, res) => {
     try {
       const projects = await db.query.projects.findMany();
       return res.json(projects);
     } catch (error) {
       return res.status(500).json({ error: 'Failed to fetch projects' });
     }
   });

   // Tambahkan endpoint lainnya...

   module.exports.handler = serverless(app);
   ```

7. **Mengatur Domain Kustom**

   - Di Netlify, navigasi ke "Domain settings"
   - Klik "Add custom domain"
   - Masukkan domain Anda (misalnya `harmonyhouse.id`)
   - Ikuti petunjuk untuk konfigurasi DNS

## Deployment ke Vercel

Vercel sangat baik untuk deployment aplikasi Next.js dan React, termasuk yang memiliki fungsi backend.

### Langkah-langkah Deployment ke Vercel:

1. **Persiapan Proyek untuk Deployment**

   - Pastikan repository ada di GitHub, GitLab, atau Bitbucket
   - Tambahkan file `vercel.json` di folder root dengan konfigurasi berikut:

   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "server/index.ts",
         "use": "@vercel/node"
       },
       {
         "src": "client/package.json",
         "use": "@vercel/static-build",
         "config": {
           "distDir": "dist"
         }
       }
     ],
     "routes": [
       {
         "src": "/api/(.*)",
         "dest": "server/index.ts"
       },
       {
         "src": "/(.*)",
         "dest": "client/dist/$1"
       }
     ]
   }
   ```

2. **Buat Akun dan Proyek di Vercel**

   - Kunjungi [vercel.com](https://vercel.com/) dan daftar/masuk
   - Klik tombol "New Project"
   - Pilih layanan Git yang Anda gunakan (GitHub, GitLab, Bitbucket)
   - Berikan akses Vercel ke repository
   - Pilih repository website Harmony House

3. **Konfigurasi Deploy Settings**

   - Di panel konfigurasi proyek:
     - Framework Preset: Pilih "Other"
     - Root Directory: Biarkan kosong (default)
   - Klik "Environment Variables" dan tambahkan variabel lingkungan:
     - Tambahkan `DATABASE_URL` dengan nilai URL database PostgreSQL Anda
     - Tambahkan variabel lingkungan lain yang dibutuhkan

4. **Deploy Site**

   - Klik tombol "Deploy"
   - Tunggu proses build dan deployment selesai
   - Vercel akan memberikan URL untuk website (misalnya `harmony-house.vercel.app`)

5. **Konfigurasi Database**

   - Seperti Netlify, Anda harus menyediakan database PostgreSQL terpisah
   - Gunakan layanan seperti [Neon](https://neon.tech), [Supabase](https://supabase.com), atau [Railway](https://railway.app)
   - Konfigurasikan `DATABASE_URL` di pengaturan situs Vercel

6. **Mengatur Domain Kustom**

   - Di Vercel, navigasi ke tab "Domains"
   - Klik "Add" dan masukkan domain Anda (misalnya `harmonyhouse.id`)
   - Ikuti petunjuk untuk konfigurasi DNS

## Cara Mengedit Konten

### Mengedit Gambar dan Konten Proyek

#### Mengubah Gambar Proyek

1. **Persiapan Gambar**
   - Persiapkan gambar dengan rasio aspek yang konsisten (disarankan 16:9)
   - Optimalkan ukuran gambar (gunakan format .jpg atau .webp)
   - Disarankan ukuran minimal 800x450 piksel

2. **Upload Gambar**
   - Upload gambar ke layanan hosting seperti Cloudinary, ImgBB, atau Amazon S3
   - Dapatkan URL publik dari gambar

3. **Mengubah di Database**
   - Anda dapat mengubah URL gambar di database dengan beberapa cara:
     - Menggunakan layanan seperti [Supabase](https://supabase.com) atau [pgAdmin](https://www.pgadmin.org/)
     - Melalui API endpoint yang aman (jika dibuat)
   - Alternatif: Ubah di file seed database

   ```typescript
   // db/seed.ts
   const projectsData = [
     {
       title: "Desain dapur",
       slug: "desain-dapur",
       category: "Dapur",
       image: "https://contoh-url-gambar-baru.jpg", // Ganti URL di sini
       featured: true,
     },
     // ...proyek lainnya
   ];
   ```

   Setelah mengubah file seed, jalankan perintah:
   ```bash
   npm run db:seed
   ```

#### Menambah/Mengedit Proyek

1. **Menambah Proyek Baru**
   
   - Edit file `db/seed.ts` dan tambahkan objek proyek baru:

   ```typescript
   const projectsData = [
     // ...proyek yang sudah ada
     {
       title: "Nama Proyek Baru",
       slug: "nama-proyek-baru", // URL-friendly, tanpa spasi
       category: "Kategori Proyek",
       image: "https://url-gambar-proyek.jpg",
       featured: false, // true jika ingin ditampilkan di halaman utama
       description: "Deskripsi detail tentang proyek ini" // opsional
     },
   ];
   ```

2. **Mengedit Proyek yang Ada**
   
   - Temukan dan edit proyek yang sesuai di file `db/seed.ts`
   - Jalankan perintah `npm run db:seed` untuk memperbarui database

### Mengedit Layanan

1. **Menambah/Mengubah Layanan**
   
   - Edit file `db/seed.ts` dan ubah array `servicesData`:

   ```typescript
   const servicesData = [
     // ...layanan yang sudah ada
     {
       title: "Nama Layanan Baru",
       slug: "nama-layanan-baru",
       description: "Deskripsi singkat tentang layanan ini",
       longDescription: "Deskripsi lengkap tentang layanan ini yang akan ditampilkan di halaman detail",
       image: "https://url-gambar-layanan.jpg"
     },
   ];
   ```

### Mengedit Teks dan Konten

1. **Teks Studio**
   
   - Untuk mengubah teks di halaman Studio/About, edit bagian ini di `server/routes.ts`:

   ```typescript
   app.get('/api/studio', async (req, res) => {
     return res.json({
       history: "Teks sejarah studio Anda...", // Ubah teks di sini
       approach: "Pendekatan desain Anda...", // Ubah teks di sini
       team: "Deskripsi tim Anda..." // Ubah teks di sini
     });
   });
   ```

2. **Menu dan Navigasi**
   
   - Untuk mengubah menu navigasi, edit file `client/src/components/layout/Header.tsx`:

   ```typescript
   const navItems = [
     { label: "NAMA STUDIO", path: "/studio" },
     { label: "PROYEK", path: "/proyek" },
     { label: "LAYANAN", path: "/layanan" },
     { label: "KONTAK", path: "/kontak" }
   ];
   ```

3. **Footer**
   
   - Untuk mengubah konten footer, edit file `client/src/components/layout/Footer.tsx`:

   ```tsx
   <div>
     <p className="text-sm text-muted-foreground">Jl. Menteng Raya 58, Jakarta, 10340</p> // Ubah alamat
   </div>
   
   <div>
     <p className="text-sm text-muted-foreground">hello@harmonyhouse.id</p> // Ubah email
   </div>
   ```

4. **WhatsApp Contact**
   
   - Untuk mengubah nomor WhatsApp, cari semua instance URL seperti ini:

   ```
   https://wa.me/6285703178423
   ```

   Dan ganti dengan nomor baru (pastikan format dengan kode negara dan tanpa tanda +):

   ```
   https://wa.me/628XXXXXXXXXX
   ```

## Struktur File Penting

```
├── client
│   ├── src
│   │   ├── components
│   │   │   ├── home - Komponen untuk halaman beranda
│   │   │   ├── layout - Header, Footer, dll
│   │   │   └── ui - Komponen UI (button, card, dll)
│   │   ├── pages - Halaman utama aplikasi
│   │   │   ├── AboutPage.tsx - Halaman Studio
│   │   │   ├── ContactPage.tsx - Halaman Kontak
│   │   │   ├── Home.tsx - Halaman Beranda
│   │   │   ├── ProjectCategoryPage.tsx - Halaman kategori proyek
│   │   │   ├── ProjectDetailPage.tsx - Halaman detail proyek
│   │   │   ├── ProjectsPage.tsx - Halaman daftar proyek
│   │   │   └── ServicesPage.tsx - Halaman layanan
│   │   ├── App.tsx - Konfigurasi router dan layout utama
├── db
│   ├── index.ts - Konfigurasi database
│   └── seed.ts - Data untuk database
├── server
│   ├── index.ts - Server Express
│   └── routes.ts - Definisi endpoint API
└── shared
    └── schema.ts - Skema database
```

### Catatan Penting

- Pastikan selalu membuat backup database sebelum melakukan perubahan besar
- Jangan lupa untuk melakukan test di lingkungan local sebelum melakukan deploy ke production
- Jika Anda melakukan perubahan pada struktur database, pastikan untuk memperbarui file `shared/schema.ts`