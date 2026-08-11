export function getFotoUrl(path: string | null): string {
  if (!path) return '/images/placeholder.jpg';
  
  // Kalau sudah URL lengkap (dari Supabase Storage)
  if (path.startsWith('http')) return path;
  
  // Kalau path lokal (dari GitHub)
  return path;
}