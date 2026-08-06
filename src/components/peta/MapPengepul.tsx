"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polygon, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import Image from "next/image";

interface PengepulData {
  id: number;
  slug: string;
  nama: string;
  rt: number;
  alamat: string;
  deskripsi: string;
  produk: string[];
  harga: string;
  telepon?: string;
  koordinat: { lat: number; lng: number };
  foto: { depan: string; galeri: string[] };
}

function FitBoundsToMarkers({ data }: { data: PengepulData[] }) {
  const map = useMap();
  useEffect(() => {
    if (data.length > 0) {
      const bounds = L.latLngBounds(
        data.map((p) => [p.koordinat.lat, p.koordinat.lng])
      );
      map.fitBounds(bounds, { padding: [60, 60], maxZoom: 16 });
    }
  }, [map, data]);
  return null;
}

// Marker foto dengan hover effect
const createCustomIcon = (fotoUrl: string) => {
  return L.divIcon({
    className: "custom-marker",
    html: `
      <div style="
        width: 52px;
        height: 52px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 3px 12px rgba(0,0,0,0.35);
        overflow: hidden;
        background: white;
        transition: transform 0.2s ease;
      " onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform='scale(1)'">
        <img 
          src="${fotoUrl}" 
          alt="Foto" 
          style="width:100%;height:100%;object-fit:cover;"
          onerror="this.parentElement.style.background='linear-gradient(135deg, #059669, #047857)'"
        />
      </div>
    `,
    iconSize: [52, 52],
    iconAnchor: [26, 26],
    popupAnchor: [0, -26],
  });
};

const batasDesaLeuwilaja: [number, number][] = [
  [-6.773076, 108.339799], [-6.773213, 108.340664], [-6.773135, 108.341889],
  [-6.772814, 108.342910], [-6.772465, 108.343515], [-6.771570, 108.344543],
  [-6.770760, 108.345598], [-6.770382, 108.345908], [-6.770103, 108.346457],
  [-6.769921, 108.346823], [-6.769809, 108.347259], [-6.769781, 108.347766],
  [-6.770913, 108.348709], [-6.771514, 108.349455], [-6.771528, 108.350159],
  [-6.771473, 108.350764], [-6.770997, 108.350877], [-6.770494, 108.350820],
  [-6.770061, 108.351243], [-6.768887, 108.351806], [-6.768593, 108.352214],
  [-6.769642, 108.353115], [-6.770075, 108.353340], [-6.770494, 108.353467],
  [-6.770927, 108.353495], [-6.771724, 108.354142], [-6.773094, 108.356057],
  [-6.773443, 108.356577], [-6.773988, 108.358323], [-6.774282, 108.358928],
  [-6.774603, 108.359378], [-6.775526, 108.360040], [-6.775847, 108.360392],
  [-6.776295, 108.360730], [-6.779020, 108.363151], [-6.780124, 108.363967],
  [-6.781536, 108.364558], [-6.781480, 108.363967], [-6.781452, 108.362137],
  [-6.781578, 108.361476], [-6.781704, 108.361011], [-6.782053, 108.359772],
  [-6.782277, 108.358632], [-6.782304, 108.358350], [-6.782382, 108.357586],
  [-6.782456, 108.357065], [-6.782524, 108.356254], [-6.782675, 108.355517],
  [-6.782743, 108.354490], [-6.782759, 108.353569], [-6.782722, 108.352669],
  [-6.782790, 108.351094], [-6.782210, 108.350868], [-6.781870, 108.350547],
  [-6.781483, 108.349657], [-6.781248, 108.348299], [-6.781368, 108.347930],
  [-6.781237, 108.346961], [-6.780683, 108.346587], [-6.780166, 108.345998],
  [-6.779821, 108.345819], [-6.779250, 108.345848], [-6.778649, 108.346238],
  [-6.778236, 108.346090], [-6.778105, 108.345063], [-6.777713, 108.344795],
  [-6.776840, 108.344368], [-6.776411, 108.343884], [-6.776301, 108.343415],
  [-6.775894, 108.342931], [-6.775261, 108.342763], [-6.775198, 108.342231],
  [-6.775271, 108.341757], [-6.775198, 108.341230], [-6.775062, 108.340920],
  [-6.774587, 108.340472], [-6.774100, 108.340146], [-6.773076, 108.339799],
];

const bounds: L.LatLngBoundsExpression = [
  [-6.7850, 108.3400],
  [-6.7650, 108.3650],
];

export default function MapPengepul() {
  const [pengepul, setPengepul] = useState<PengepulData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPengepul() {
      const { data } = await supabase
        .from("pengepul")
        .select("*")
        .order("rt", { ascending: true });

      if (data) {
        const formatted: PengepulData[] = data.map((p: any) => ({
          id: p.id,
          slug: p.slug,
          nama: p.nama,
          rt: p.rt,
          alamat: p.alamat,
          deskripsi: p.deskripsi,
          produk: p.produk || [],
          harga: p.harga,
          telepon: p.telepon,
          koordinat: { lat: p.koordinat_lat, lng: p.koordinat_lng },
          foto: { depan: p.foto_depan || "/images/placeholder.jpg", galeri: p.foto_galeri || [] },
        }));
        setPengepul(formatted);
      }
      setLoading(false);
    }

    fetchPengepul();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-[calc(100vh-100px)] flex items-center justify-center bg-gray-100 rounded-2xl">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat peta...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[calc(100vh-100px)] rounded-2xl overflow-hidden shadow-xl border border-gray-200 relative">
      {/* Custom CSS untuk popup */}
      <style jsx global>{`
        .leaflet-popup-content-wrapper {
          border-radius: 16px !important;
          padding: 0 !important;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15) !important;
          overflow: hidden !important;
        }
        .leaflet-popup-content {
          margin: 0 !important;
          min-width: 320px !important;
        }
        .leaflet-popup-tip {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
        }
        .leaflet-container a.leaflet-popup-close-button {
          color: #6b7280 !important;
          padding: 12px 12px 0 0 !important;
          font-size: 20px !important;
          font-weight: 300 !important;
          z-index: 10;
        }
        .leaflet-container a.leaflet-popup-close-button:hover {
          color: #111827 !important;
        }
      `}</style>

      <MapContainer
        center={[-6.7750, 108.3520]}
        zoom={16}
        minZoom={14}
        maxZoom={19}
        maxBounds={bounds}
        maxBoundsViscosity={1.0}
        scrollWheelZoom={true}
        zoomControl={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; Esri'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
          opacity={0.9}
        />
        <Polygon
          positions={batasDesaLeuwilaja}
          pathOptions={{
            color: "#dc2626",
            weight: 2.5,
            dashArray: "8, 6",
            fillColor: "#dc2626",
            fillOpacity: 0.08,
          }}
        />
        {pengepul.map((p) => (
          <Marker
            key={p.id}
            position={[p.koordinat.lat, p.koordinat.lng]}
            icon={createCustomIcon(p.foto.depan)}
          >
            <Popup>
              <div className="flex gap-3 p-3">
                {/* Foto Kiri */}
                <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    src={p.foto.depan}
                    alt={p.nama}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                  <div className="absolute top-1 left-1 bg-white/95 backdrop-blur-sm px-1.5 py-0.5 rounded-md shadow-sm">
                    <span className="text-[10px] font-bold text-emerald-700">
                      RT {p.rt.toString().padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Info Kanan */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-gray-900 mb-0.5 leading-tight">
                    {p.nama}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                    <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="truncate">RT {p.rt.toString().padStart(2, "0")}, Desa Leuwilaja</span>
                  </div>

                  {/* Produk Badge */}
                  {p.produk && p.produk.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-2">
                      {p.produk.slice(0, 2).map((prod, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md font-medium border border-emerald-100"
                        >
                          {prod}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Harga */}
                  {p.harga && p.harga !== "-" && (
                    <p className="text-sm font-bold text-emerald-700 mb-2">
                      {p.harga}
                    </p>
                  )}

                  {/* Tombol */}
                  <div className="flex gap-2 mt-1">
                    <Link
                      href={`/pengepul/${p.slug}`}
                      className="flex-1 flex items-center justify-center gap-1 text-xs font-semibold text-gray-700 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      Detail
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${p.koordinat.lat},${p.koordinat.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1 text-xs font-semibold text-white bg-emerald-600 py-2 rounded-lg hover:bg-emerald-700 transition-colors shadow-sm"
                    >
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Navigasi
                    </a>
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
        <FitBoundsToMarkers data={pengepul} />
      </MapContainer>

      {/* Legend */}
      <div className="absolute top-4 right-4 z-[1000] bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-3.5 border border-gray-100">
        <h4 className="text-sm font-bold text-gray-900 mb-2.5">Peta Sebaran</h4>
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-600 shadow-sm"></div>
            <span className="text-gray-700 font-medium">{pengepul.length} Pengepul</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-600 shadow-sm"></div>
            <span className="text-gray-700 font-medium">Batas Desa</span>
          </div>
        </div>
      </div>
    </div>
  );
}