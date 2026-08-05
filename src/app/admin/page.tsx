"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pengepulList, setPengepulList] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [viewMode, setViewMode] = useState<"list" | "form">("list");
  
  const [formData, setFormData] = useState({
    nama: "",
    slug: "",
    rt: "",
    alamat: "",
    deskripsi: "",
    produk: "",
    harga: "",
    telepon: "",
    koordinat_lat: "",
    koordinat_lng: "",
  });
  const [foto, setFoto] = useState<File | null>(null);
  const [existingFoto, setExistingFoto] = useState<string>("");

  // Password admin (bisa diganti)
  const ADMIN_PASSWORD = "leuwilaja2026";

  useEffect(() => {
    if (isAuthenticated) {
      fetchPengepul();
    }
  }, [isAuthenticated]);

  async function fetchPengepul() {
    setLoading(true);
    const { data } = await supabase
      .from("pengepul")
      .select("*")
      .order("rt", { ascending: true });
    setPengepulList(data || []);
    setLoading(false);
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPassword("");
    } else {
      alert("❌ Password salah!");
    }
  }

  async function handleUploadFoto(file: File): Promise<string> {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    
    const { error } = await supabase.storage
      .from("pengepul-fotos")
      .upload(fileName, file);

    if (error) {
      console.error("Upload error:", error);
      throw error;
    }

    const { data } = supabase.storage
      .from("pengepul-fotos")
      .getPublicUrl(fileName);

    return data.publicUrl;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      let fotoUrl = existingFoto;
      
      if (foto) {
        fotoUrl = await handleUploadFoto(foto);
      }

      const dataToInsert = {
        nama: formData.nama,
        slug: formData.slug || formData.nama.toLowerCase().replace(/\s+/g, "-"),
        rt: parseInt(formData.rt),
        alamat: formData.alamat,
        deskripsi: formData.deskripsi,
        produk: formData.produk.split(",").map((p) => p.trim()).filter(Boolean),
        harga: formData.harga,
        telepon: formData.telepon,
        koordinat_lat: parseFloat(formData.koordinat_lat),
        koordinat_lng: parseFloat(formData.koordinat_lng),
        foto_depan: fotoUrl,
        foto_galeri: [],
      };

      if (editId) {
        const { error } = await supabase
          .from("pengepul")
          .update(dataToInsert)
          .eq("id", editId);
        if (error) throw error;
        alert("✅ Pengepul berhasil diupdate!");
      } else {
        const { error } = await supabase
          .from("pengepul")
          .insert([dataToInsert]);
        if (error) throw error;
        alert("✅ Pengepul berhasil ditambahkan!");
      }

      resetForm();
      await fetchPengepul();
    } catch (error) {
      console.error(error);
      alert("❌ Terjadi kesalahan: " + (error as Error).message);
    } finally {
      setLoading(false);
    }
  }

  function handleEdit(p: any) {
    setEditId(p.id);
    setFormData({
      nama: p.nama,
      slug: p.slug,
      rt: p.rt.toString(),
      alamat: p.alamat,
      deskripsi: p.deskripsi || "",
      produk: p.produk?.join(", ") || "",
      harga: p.harga || "",
      telepon: p.telepon || "",
      koordinat_lat: p.koordinat_lat.toString(),
      koordinat_lng: p.koordinat_lng.toString(),
    });
    setExistingFoto(p.foto_depan || "");
    setFoto(null);
    setShowForm(true);
    setViewMode("form");
  }

  async function handleDelete(id: number, nama: string) {
    if (!confirm(`Yakin mau hapus "${nama}"?`)) return;
    
    const { error } = await supabase
      .from("pengepul")
      .delete()
      .eq("id", id);

    if (error) {
      alert("❌ Gagal hapus!");
    } else {
      alert("✅ Berhasil dihapus!");
      await fetchPengepul();
    }
  }

  function resetForm() {
    setFormData({
      nama: "", slug: "", rt: "", alamat: "", deskripsi: "",
      produk: "", harga: "", telepon: "", koordinat_lat: "", koordinat_lng: "",
    });
    setFoto(null);
    setExistingFoto("");
    setEditId(null);
    setShowForm(false);
    setViewMode("list");
  }

  // === LOGIN SCREEN ===
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-[#6B8F71] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600 text-sm mt-2">SIG Pengepul Rotan Desa Leuwilaja</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password Admin
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan password..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#6B8F71] focus:border-transparent"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-[#6B8F71] text-white py-3 rounded-lg font-semibold hover:bg-[#55755B] transition-colors shadow-lg"
            >
              Login
            </button>
            <p className="text-xs text-gray-500 text-center">
              Password default: <code className="bg-gray-100 px-2 py-1 rounded">leuwilaja2026</code>
            </p>
          </form>
        </div>
      </div>
    );
  }

  // === ADMIN DASHBOARD ===
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-sm text-gray-600">Kelola data pengepul rotan</p>
          </div>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-medium"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-[#6B8F71]">{pengepulList.length}</div>
            <div className="text-gray-600 text-sm mt-1">Total Pengepul</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-blue-600">
              {pengepulList.filter(p => p.foto_depan).length}
            </div>
            <div className="text-gray-600 text-sm mt-1">Dengan Foto</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-purple-600">
              {new Set(pengepulList.map(p => p.rt)).size}
            </div>
            <div className="text-gray-600 text-sm mt-1">RT Terdata</div>
          </div>
        </div>

        {/* Tombol Tambah */}
        {!showForm && (
          <button
            onClick={() => { resetForm(); setShowForm(true); setViewMode("form"); }}
            className="mb-6 bg-[#6B8F71] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#55755B] transition-colors shadow-lg flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Tambah Pengepul Baru
          </button>
        )}

        {/* FORM TAMBAH/EDIT */}
        {showForm && viewMode === "form" && (
          <div className="bg-white p-6 rounded-2xl shadow-lg mb-8 border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                {editId ? "✏️ Edit Pengepul" : "➕ Tambah Pengepul Baru"}
              </h2>
              <button
                onClick={resetForm}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nama <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.nama}
                    onChange={(e) => setFormData({...formData, nama: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#6B8F71] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Slug (URL)
                  </label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData({...formData, slug: e.target.value})}
                    placeholder="otomatis dari nama jika kosong"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    RT <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    value={formData.rt}
                    onChange={(e) => setFormData({...formData, rt: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telepon
                  </label>
                  <input
                    type="text"
                    value={formData.telepon}
                    onChange={(e) => setFormData({...formData, telepon: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alamat <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.alamat}
                  onChange={(e) => setFormData({...formData, alamat: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Deskripsi
                </label>
                <textarea
                  value={formData.deskripsi}
                  onChange={(e) => setFormData({...formData, deskripsi: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Produk (pisahkan dengan koma)
                </label>
                <input
                  type="text"
                  value={formData.produk}
                  onChange={(e) => setFormData({...formData, produk: e.target.value})}
                  placeholder="Contoh: Keranjang Rotan, Potato Kotak, Basket"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Harga
                </label>
                <input
                  type="text"
                  value={formData.harga}
                  onChange={(e) => setFormData({...formData, harga: e.target.value})}
                  placeholder="Contoh: Rp 20.000 - Rp 50.000"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Latitude <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.0000001"
                    value={formData.koordinat_lat}
                    onChange={(e) => setFormData({...formData, koordinat_lat: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Contoh: -6.7755237</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Longitude <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.0000001"
                    value={formData.koordinat_lng}
                    onChange={(e) => setFormData({...formData, koordinat_lng: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Contoh: 108.3498466</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Foto Depan {existingFoto && <span className="text-xs text-gray-500">(kosongkan jika tidak ganti)</span>}
                </label>
                {existingFoto && (
                  <div className="mb-2">
                    <img src={existingFoto} alt="Preview" className="w-32 h-32 object-cover rounded-lg" />
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFoto(e.target.files?.[0] || null)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>

              <div className="flex gap-2 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#6B8F71] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#55755B] disabled:opacity-50 transition-colors"
                >
                  {loading ? "💾 Menyimpan..." : editId ? "💾 Update" : "✅ Simpan"}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        )}

        {/* TABEL DATA */}
        {!showForm && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">📋 Daftar Pengepul</h2>
            </div>
            {loading ? (
              <div className="p-8 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6B8F71] mx-auto mb-4"></div>
                <p className="text-gray-600">Memuat data...</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Foto</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Nama</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">RT</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Produk</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Harga</th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-gray-600 uppercase">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {pengepulList.map((p) => (
                      <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3">
                          {p.foto_depan ? (
                            <img src={p.foto_depan} alt={p.nama} className="w-12 h-12 rounded-lg object-cover" />
                          ) : (
                            <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                          )}
                        </td>
                        <td className="px-4 py-3">
                          <div className="font-medium text-gray-900">{p.nama}</div>
                          <div className="text-sm text-gray-500">{p.alamat}</div>
                        </td>
                        <td className="px-4 py-3">
                          <span className="bg-[#E8F3E8] text-[#4E6B53] px-2 py-1 rounded-full text-xs font-medium">
                            RT {p.rt}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          {p.produk?.slice(0, 2).join(", ")}
                          {p.produk?.length > 2 && (
                            <span className="text-gray-400"> +{p.produk.length - 2}</span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">{p.harga || "-"}</td>
                        <td className="px-4 py-3 text-right space-x-2">
                          <button
                            onClick={() => handleEdit(p)}
                            className="text-blue-600 hover:text-blue-800 text-sm font-medium px-3 py-1 rounded hover:bg-blue-50 transition-colors"
                          >
                            ✏️ Edit
                          </button>
                          <button
                            onClick={() => handleDelete(p.id, p.nama)}
                            className="text-red-600 hover:text-red-800 text-sm font-medium px-3 py-1 rounded hover:bg-red-50 transition-colors"
                          >
                            🗑️ Hapus
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}