# Panduan Pengeditan Konten Website Harmony House

## Daftar Isi
1. [Pengenalan](#pengenalan)
2. [Mengedit Konten Proyek](#mengedit-konten-proyek)
3. [Mengedit Gambar](#mengedit-gambar)
4. [Mengedit Layanan](#mengedit-layanan)
5. [Mengedit Teks Halaman](#mengedit-teks-halaman)
6. [Mengedit Kontak dan Informasi](#mengedit-kontak-dan-informasi)

## Pengenalan

Dokumen ini berisi panduan lengkap untuk mengedit konten website Harmony House seperti gambar, teks, proyek, layanan, dan informasi lainnya. Panduan ini dirancang untuk pengguna non-teknis yang ingin memperbarui konten website tanpa perlu memahami kode secara mendalam.

## Mengedit Konten Proyek

### Cara Menambah Proyek Baru

1. **Persiapkan Informasi Proyek**
   - Judul proyek
   - Kategori (Dapur, Ruang Tamu, Kamar Tidur, dll)
   - Gambar proyek (siapkan URL gambar)
   - Deskripsi (opsional)
   - Apakah proyek akan ditampilkan di halaman utama (featured)

2. **Edit File Database Seed**
   - Buka file `db/seed.ts` dengan editor kode
   - Cari bagian `projectsData` yang berisi array proyek-proyek
   - Tambahkan objek proyek baru di akhir array:

   ```typescript
   const projectsData = [
     // ... proyek yang sudah ada ...
     {
       title: "Desain Ruang Keluarga Modern",
       slug: "desain-ruang-keluarga-modern", // gunakan huruf kecil dan ganti spasi dengan tanda -
       category: "Ruang Keluarga",
       image: "https://example.com/path-to-image.jpg", // ganti dengan URL gambar Anda
       featured: true, // true jika ingin ditampilkan di halaman utama
       description: "Deskripsi lengkap tentang proyek ruang keluarga ini..."
     }
   ];
   ```

3. **Terapkan Perubahan ke Database**
   - Buka terminal di folder proyek
   - Jalankan perintah: `npm run db:seed`
   - Tunggu hingga proses selesai

### Cara Mengedit Proyek yang Sudah Ada

1. **Temukan Proyek yang Ingin Diubah**
   - Buka file `db/seed.ts`
   - Cari data proyek berdasarkan judul atau id

2. **Edit Informasi yang Diinginkan**
   - Ubah nilai properti seperti `title`, `category`, `image`, atau `description`
   - Pastikan format data tetap konsisten

   ```typescript
   {
     title: "Desain Dapur Minimalis", // Judul baru
     slug: "desain-dapur-minimalis", // Ganti juga slug jika judul berubah
     category: "Dapur",
     image: "https://example.com/new-image.jpg", // URL gambar baru
     featured: true,
     description: "Deskripsi baru tentang proyek ini..."
   }
   ```

3. **Terapkan Perubahan**
   - Jalankan perintah: `npm run db:seed`

### Cara Menghapus Proyek

1. **Hapus Objek Proyek dari Array**
   - Buka file `db/seed.ts`
   - Cari dan hapus seluruh objek proyek yang ingin dihapus
   - Pastikan untuk tidak menghapus tanda koma atau kurung yang penting

2. **Terapkan Perubahan**
   - Jalankan perintah: `npm run db:seed`

## Mengedit Gambar

### Persiapan Gambar yang Optimal

1. **Format Gambar yang Direkomendasikan**
   - Gunakan format JPG untuk foto
   - Gunakan format PNG untuk gambar dengan transparansi
   - Gunakan format WebP jika ingin ukuran file yang lebih kecil dengan kualitas yang sama

2. **Ukuran Gambar yang Direkomendasikan**
   - Untuk gambar proyek: 1200×800 piksel
   - Untuk gambar layanan: 800×600 piksel
   - Untuk gambar banner: 1920×1080 piksel

3. **Optimasi Gambar**
   - Kompres gambar untuk mengurangi ukuran file
   - Gunakan tools online seperti TinyPNG, Squoosh, atau ImageOptim
   - Pastikan ukuran file tidak lebih dari 500KB untuk performa yang baik

### Cara Mengunggah dan Menggunakan Gambar

1. **Opsi 1: Upload ke Layanan Hosting Gambar**
   - Daftar di layanan seperti [Cloudinary](https://cloudinary.com), [ImgBB](https://imgbb.com), atau [Imgur](https://imgur.com)
   - Unggah gambar Anda
   - Salin URL gambar untuk digunakan di website

2. **Opsi 2: Upload ke CDN (Content Delivery Network)**
   - Jika Anda memiliki akun Amazon S3, Google Cloud Storage, atau layanan CDN lainnya
   - Unggah gambar dan atur agar bisa diakses publik
   - Salin URL gambar

3. **Menggunakan URL Gambar di Website**
   - Ganti URL gambar di file `db/seed.ts` untuk proyek atau layanan
   - Format: `image: "https://example.com/path-to-image.jpg"`

### Tips Penggunaan Gambar

- Gunakan gambar dengan rasio aspek yang konsisten
- Pastikan gambar memiliki resolusi yang cukup dan tidak buram
- Hindari gambar dengan ukuran file terlalu besar (>1MB)
- Selalu gunakan URL gambar yang stabil dan tidak akan berubah

## Mengedit Layanan

### Cara Menambah Layanan Baru

1. **Persiapkan Informasi Layanan**
   - Judul layanan
   - Deskripsi singkat
   - Deskripsi panjang (untuk halaman detail)
   - Gambar yang mewakili layanan

2. **Edit File Database Seed**
   - Buka file `db/seed.ts`
   - Cari array `servicesData`
   - Tambahkan objek layanan baru:

   ```typescript
   const servicesData = [
     // ... layanan yang sudah ada ...
     {
       title: "Konsultasi Desain",
       slug: "konsultasi-desain",
       description: "Konsultasi profesional untuk kebutuhan desain interior Anda",
       longDescription: "Layanan konsultasi desain kami menawarkan sesi bersama desainer profesional untuk membahas kebutuhan dan preferensi desain Anda. Dalam sesi ini, kami akan memberikan saran dan rekomendasi yang sesuai dengan ruang, anggaran, dan gaya yang Anda inginkan.",
       image: "https://example.com/konsultasi-desain.jpg"
     }
   ];
   ```

3. **Terapkan Perubahan**
   - Jalankan perintah: `npm run db:seed`

### Cara Mengedit Layanan yang Sudah Ada

1. **Temukan Layanan yang Ingin Diubah**
   - Buka file `db/seed.ts`
   - Cari objek layanan berdasarkan judul atau id

2. **Edit Informasi**
   - Ubah nilai yang ingin diubah
   - Pastikan format tetap konsisten

3. **Terapkan Perubahan**
   - Jalankan perintah: `npm run db:seed`

## Mengedit Teks Halaman

### Mengedit Teks di Halaman Studio (About)

1. **Edit Teks Studio di API Routes**
   - Buka file `server/routes.ts`
   - Cari endpoint `/api/studio`
   - Edit teks di objek yang dikembalikan:

   ```typescript
   app.get('/api/studio', async (req, res) => {
     return res.json({
       history: "Harmony House didirikan pada tahun 2015 dengan visi untuk menciptakan ruang interior yang tidak hanya indah secara visual, tetapi juga fungsional dan mencerminkan kepribadian penghuninya. Kami percaya bahwa desain yang baik harus menggabungkan estetika dengan fungsi, menciptakan keseimbangan sempurna antara keindahan dan kenyamanan.", // Edit teks sejarah
       approach: "Pendekatan desain kami berpusat pada kebutuhan klien. Kami bekerja sama dengan setiap klien untuk memahami preferensi, gaya hidup, dan kebutuhan fungsional mereka. Tim desainer berpengalaman kami kemudian menerjemahkan visi ini menjadi rencana desain yang terperinci, memperhatikan setiap detail untuk menciptakan ruang yang benar-benar mencerminkan kepribadian dan kebutuhan klien kami.", // Edit teks pendekatan
       team: "Tim kami terdiri dari desainer interior berpengalaman, arsitek, dan spesialis teknis yang bekerja sama untuk memberikan hasil terbaik. Dengan kombinasi kreativitas, keahlian teknis, dan perhatian terhadap detail, kami berkomitmen untuk mewujudkan visi klien kami dan menciptakan ruang yang tidak hanya indah tetapi juga fungsional dan nyaman untuk dihuni." // Edit teks tim
     });
   });
   ```

### Mengedit Teks di Halaman Beranda

1. **Edit Komponen Hero**
   - Buka file `client/src/components/home/Hero.tsx`
   - Cari dan edit teks judul dan subjudul

2. **Edit Komponen Philosophy**
   - Buka file `client/src/components/home/Philosophy.tsx`
   - Edit teks di bagian filosofi desain

3. **Edit Komponen Statistics**
   - Buka file `client/src/components/home/Statistics.tsx`
   - Edit angka dan teks statistik

### Mengedit Teks di Footer dan Header

1. **Edit Teks Footer**
   - Buka file `client/src/components/layout/Footer.tsx`
   - Edit alamat, email, dan teks hak cipta

2. **Edit Menu di Header**
   - Buka file `client/src/components/layout/Header.tsx`
   - Edit array `navItems` untuk mengubah label menu

## Mengedit Kontak dan Informasi

### Mengubah Nomor WhatsApp

1. **Cari Semua Referensi WhatsApp**
   - Gunakan fitur pencarian di editor kode Anda
   - Cari string: `https://wa.me/6285703178423`

2. **Ganti dengan Nomor Baru**
   - Format: `https://wa.me/628XXXXXXXXXX` (tanpa tanda + dan dengan kode negara)
   - Pastikan untuk mengganti di semua file yang menggunakan nomor tersebut

### Mengubah Alamat dan Kontak

1. **Edit di Footer**
   - Buka file `client/src/components/layout/Footer.tsx`
   - Edit bagian alamat dan email:
   ```tsx
   <div>
     <p className="text-sm text-muted-foreground">Jl. Menteng Raya 58, Jakarta, 10340</p>
   </div>
   
   <div>
     <p className="text-sm text-muted-foreground">hello@harmonyhouse.id</p>
   </div>
   ```

2. **Edit di Halaman Kontak**
   - Buka file `client/src/pages/ContactPage.tsx`
   - Edit informasi kontak dan alamat

### Mengubah Link Media Sosial

1. **Edit Link Media Sosial di Footer**
   - Buka file `client/src/components/layout/Footer.tsx`
   - Cari bagian link media sosial:
   ```tsx
   <div className="flex space-x-6">
     <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Instagram</a>
     <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Facebook</a>
     <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Pinterest</a>
   </div>
   ```
   - Ganti `href="#"` dengan URL media sosial yang sebenarnya, misalnya: `href="https://instagram.com/harmonyhouse"`

## Tips Tambahan

1. **Selalu Backup Sebelum Edit**
   - Buat backup dari file yang akan diedit
   - Catat perubahan yang Anda buat

2. **Testing Perubahan**
   - Setelah menerapkan perubahan, periksa website untuk memastikan semuanya berfungsi dengan baik
   - Periksa di berbagai perangkat (desktop, tablet, mobile)

3. **Bantuan Tambahan**
   - Jika Anda mengalami kesulitan, jangan ragu untuk menghubungi pengembang website atau tim dukungan

4. **Rekomendasi Tools**
   - Editor kode: Visual Studio Code
   - Pengolah gambar: Adobe Photoshop, GIMP, atau Canva
   - Kompresi gambar: TinyPNG, Squoosh
   - Hosting gambar: Cloudinary, ImgBB