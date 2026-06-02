# 📊 KKT Portfolio - Feature Guide

## ✨ Fitur Baru

### 1. Google Analytics Integration
Website sekarang terintegrasi dengan Google Analytics untuk tracking visitor behavior.

#### Setup:
1. Buka [Google Analytics](https://analytics.google.com/)
2. Create property baru untuk domain Anda
3. Copy Google Analytics ID (format: `G_XXXXXXXXXX`)
4. Buat file `.env.local` di root project:
```
NEXT_PUBLIC_GA_ID=G_XXXXXXXXXX
```
5. Restart dev server: `npm run dev`

#### Events Tracked:
- **Page views** - Setiap kali user navigate
- `gallery_filter` - Filter gallery by category
- `gallery_search` - Search dalam gallery
- `gallery_view_full` - View foto full size
- `view_founder_profile` - Lihat profile pendiri
- `click_founder_instagram` - Klik Instagram pendiri

### 2. Enhanced Memory Gallery - Search & Filter
Gallery sekarang punya search functionality untuk mencari memories lebih mudah.

#### Features:
- **Search by caption** - Cari berdasarkan judul foto
- **Search by date** - Cari berdasarkan tanggal (e.g., "Mei 2026")
- **Filter by category** - Tetap bisa filter by category
- **Results counter** - Tampil jumlah hasil yang cocok
- **Keyboard support** - Clear search dengan tombol ✕

#### UI/UX:
- Search box modern dengan glass morphism
- Real-time filtering saat ketik
- No results message yang friendly
- Results counter yang informatif

---

## 🔧 Development

### Commands:
```bash
npm run dev      # Start dev server
npm run build    # Production build
npm start        # Run production build
```

### Project Structure:
```
components/
  ├── MemoryGallery.tsx      (Gallery dengan search/filter)
  ├── PeopleCard.tsx          (Founder cards dengan tracking)
  ├── ProfileModal.tsx        (Detail profile modal)
  └── ...

lib/
  └── analytics.ts            (Analytics utilities)

data/
  ├── gallery.ts              (Photo data)
  ├── people.ts               (Founder data)
  └── ...
```

---

## 📈 Next Steps (Optional)

1. **Image Optimization**
   - Convert ke WebP format
   - Add blur placeholder

2. **Admin Dashboard**
   - Simple interface untuk update data
   - No need edit code

3. **Advanced Analytics**
   - Custom dashboards
   - Conversion tracking

4. **SEO Enhancement**
   - Better meta tags
   - Structured data

---

## 📝 Notes

- Google Analytics tracking dimulai otomatis setelah deploy dengan env var set
- Search/filter bekerja di client-side (real-time)
- Semua event names di-track untuk analytics reporting

Enjoy! 🚀
