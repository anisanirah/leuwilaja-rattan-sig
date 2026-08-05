import { config } from 'dotenv';
config({ path: '.env.local' }); // ← Memaksa baca file .env.local

import { supabase } from '../lib/supabaseClient';
import { pengepul } from '../data/pengepul';

async function migrateData() {
  console.log('🚀 Mulai migrate data ke Supabase...');
  
  for (const p of pengepul) {
    const { data, error } = await supabase
      .from('pengepul')
      .upsert({
        slug: p.slug,
        nama: p.nama,
        rt: p.rt,
        alamat: p.alamat,
        deskripsi: p.deskripsi,
        produk: p.produk,
        harga: p.harga,
        telepon: p.telepon,
        koordinat_lat: p.koordinat.lat,
        koordinat_lng: p.koordinat.lng,
        foto_depan: p.foto.depan,
        foto_galeri: p.foto.galeri,
      });

    if (error) {
      console.error(`❌ Error inserting ${p.nama}:`, error.message);
    } else {
      console.log(`✅ ${p.nama} berhasil dimasukkan`);
    }
  }
  
  console.log('🎉 Migrasi selesai! Silakan cek di dashboard Supabase.');
  process.exit(0);
}

migrateData();