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

// Warna berbeda untuk setiap RT
const RT_COLORS: { [key: number]: string } = {
  1: "#dc2626",   // Merah
  2: "#ea580c",   // Oranye
  3: "#d97706",   // Amber
  4: "#65a30d",   // Lime
  5: "#16a34a",   // Hijau
  6: "#0891b2",   // Cyan
  7: "#0284c7",   // Biru
  8: "#2563eb",   // Blue
  9: "#4f46e5",   // Indigo
  10: "#7c3aed",  // Violet
  11: "#a855f7",  // Purple
  12: "#db2777",  // Pink
  13: "#e11d48",  // Rose
  14: "#f43f5e",  // Pink Red
  15: "#ef4444",  // Red
  16: "#f97316",  // Orange
};

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

// Marker titik kecil dengan warna
const createDotIcon = (rt: number) => {
  const color = RT_COLORS[rt] || "#6b7280";
  return L.divIcon({
    className: "custom-dot-marker",
    html: `
      <div style="
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: ${color};
        border: 3px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.4);
        transition: transform 0.2s ease;
      " onmouseover="this.style.transform='scale(1.5)'" onmouseout="this.style.transform='scale(1)'">
      </div>
    `,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
    popupAnchor: [0, -16],
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
  const [selectedRT, setSelectedRT] = useState<number | null>(null);

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

  // Kelompokkan data per RT
  const groupedByRT = pengepul.reduce((acc, p) => {
    if (!acc[p.rt]) {
      acc[p.rt] = [];
    }
    acc[p.rt].push(p);
    return acc;
  }, {} as { [key: number]: PengepulData[] });

  const uniqueRTs = Object.keys(groupedByRT).map(Number).sort((a, b) => a - b);

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
          border-radius: 12px !important;
          padding: 0 !important;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15) !important;
        }
        .leaflet-popup-content {
          margin: 0 !important;
          min-width: 240px !important;
          max-width: 280px !important;
        }
        .leaflet-popup-tip {
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
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
            icon={createDotIcon(p.rt)}
          >
            <Popup>
              <div className="p-3">
                <div className="flex items-center gap-2 mb-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: RT_COLORS[p.rt] || "#6b7280" }}
                  ></div>
                  <h3 className="text-base font-bold text-gray-900">
                    {p.nama}
                  </h3>
                </div>
                <p className="text-xs text-gray-500 mb-1">RT {p.rt.toString().padStart(2, "0")}</p>
                <p className="text-xs text-gray-600 mb-2 line-clamp-2">{p.alamat}</p>
                {p.produk && p.produk.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-2">
                    {p.produk.slice(0, 2).map((prod, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-medium"
                      >
                        {prod}
                      </span>
                    ))}
                  </div>
                )}
                {p.harga && p.harga !== "-" && (
                  <p className="text-sm font-bold text-emerald-700">{p.harga}</p>
                )}
                <div className="flex gap-2 mt-2">
                  <Link
                    href={`/pengepul/${p.slug}`}
                    className="flex-1 text-center text-xs font-semibold text-emerald-700 bg-emerald-50 py-1.5 rounded-lg hover:bg-emerald-100 transition-colors"
                  >
                    Detail
                  </Link>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${p.koordinat.lat},${p.koordinat.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-xs font-semibold text-white bg-emerald-600 py-1.5 rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    Navigasi
                  </a>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
        <FitBoundsToMarkers data={pengepul} />
      </MapContainer>

      {/* Legend RT */}
      <div className="absolute top-4 right-4 z-[1000] bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 border border-gray-100 max-h-[calc(100vh-200px)] overflow-y-auto">
        <h4 className="text-sm font-bold text-gray-900 mb-3">Peta Sebaran</h4>
        
        <div className="space-y-1.5 mb-3 pb-3 border-b border-gray-200">
          <p className="text-xs text-gray-600 font-medium">{pengepul.length} Pengepul</p>
          <p className="text-xs text-gray-600 font-medium">{uniqueRTs.length} RT</p>
        </div>

        <div className="space-y-1.5">
          <p className="text-xs font-semibold text-gray-700 mb-2">Legenda RT:</p>
          {uniqueRTs.map((rt) => (
            <button
              key={rt}
              onClick={() => setSelectedRT(selectedRT === rt ? null : rt)}
              className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all ${
                selectedRT === rt ? "bg-gray-100" : "hover:bg-gray-50"
              }`}
            >
              <div 
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: RT_COLORS[rt] || "#6b7280" }}
              ></div>
              <span className="text-xs font-medium text-gray-700">
                RT {rt.toString().padStart(2, "0")}
              </span>
              <span className="text-xs text-gray-500 ml-auto">
                {groupedByRT[rt].length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Zoom Control */}
      <div className="absolute bottom-6 right-4 z-[1000] flex flex-col gap-1">
        <button
          onClick={() => {}}
          className="w-9 h-9 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 font-bold text-lg border border-gray-200"
        >
          +
        </button>
        <button
          onClick={() => {}}
          className="w-9 h-9 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 font-bold text-lg border border-gray-200"
        >
          −
        </button>
      </div>
    </div>
  );
}