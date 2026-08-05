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
      map.fitBounds(bounds, { padding: [80, 80], maxZoom: 16 });
    }
  }, [map, data]);
  return null;
}

const createCustomIcon = (fotoUrl: string) => {
  return L.divIcon({
    className: "custom-marker",
    html: `
      <div style="
        width: 45px;
        height: 45px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.25);
        overflow: hidden;
        background: white;
      ">
        <img 
          src="${fotoUrl}" 
          alt="Foto" 
          style="width:100%;height:100%;object-fit:cover;"
          onerror="this.parentElement.style.background='linear-gradient(135deg, #6B8F71, #4E6B53)'"
        />
      </div>
    `,
    iconSize: [45, 45],
    iconAnchor: [22, 22],
    popupAnchor: [0, -22],
  });
};

const batasDesaLeuwilaja: [number, number][] = [
  [-6.773076, 108.339799],
  [-6.773213, 108.340664],
  [-6.773135, 108.341889],
  [-6.772814, 108.342910],
  [-6.772465, 108.343515],
  [-6.771570, 108.344543],
  [-6.770760, 108.345598],
  [-6.770382, 108.345908],
  [-6.770103, 108.346457],
  [-6.769921, 108.346823],
  [-6.769809, 108.347259],
  [-6.769781, 108.347766],
  [-6.770913, 108.348709],
  [-6.771514, 108.349455],
  [-6.771528, 108.350159],
  [-6.771473, 108.350764],
  [-6.770997, 108.350877],
  [-6.770494, 108.350820],
  [-6.770061, 108.351243],
  [-6.768887, 108.351806],
  [-6.768593, 108.352214],
  [-6.769642, 108.353115],
  [-6.770075, 108.353340],
  [-6.770494, 108.353467],
  [-6.770927, 108.353495],
  [-6.771724, 108.354142],
  [-6.773094, 108.356057],
  [-6.773443, 108.356577],
  [-6.773988, 108.358323],
  [-6.774282, 108.358928],
  [-6.774603, 108.359378],
  [-6.775526, 108.360040],
  [-6.775847, 108.360392],
  [-6.776295, 108.360730],
  [-6.779020, 108.363151],
  [-6.780124, 108.363967],
  [-6.781536, 108.364558],
  [-6.781480, 108.363967],
  [-6.781452, 108.362137],
  [-6.781578, 108.361476],
  [-6.781704, 108.361011],
  [-6.782053, 108.359772],
  [-6.782277, 108.358632],
  [-6.782304, 108.358350],
  [-6.782382, 108.357586],
  [-6.782456, 108.357065],
  [-6.782524, 108.356254],
  [-6.782675, 108.355517],
  [-6.782743, 108.354490],
  [-6.782759, 108.353569],
  [-6.782722, 108.352669],
  [-6.782790, 108.351094],
  [-6.782210, 108.350868],
  [-6.781870, 108.350547],
  [-6.781483, 108.349657],
  [-6.781248, 108.348299],
  [-6.781368, 108.347930],
  [-6.781237, 108.346961],
  [-6.780683, 108.346587],
  [-6.780166, 108.345998],
  [-6.779821, 108.345819],
  [-6.779250, 108.345848],
  [-6.778649, 108.346238],
  [-6.778236, 108.346090],
  [-6.778105, 108.345063],
  [-6.777713, 108.344795],
  [-6.776840, 108.344368],
  [-6.776411, 108.343884],
  [-6.776301, 108.343415],
  [-6.775894, 108.342931],
  [-6.775261, 108.342763],
  [-6.775198, 108.342231],
  [-6.775271, 108.341757],
  [-6.775198, 108.341230],
  [-6.775062, 108.340920],
  [-6.774587, 108.340472],
  [-6.774100, 108.340146],
  [-6.773076, 108.339799],
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
      const { data, error } = await supabase
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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6B8F71] mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat peta...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[calc(100vh-100px)] rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative">
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
            color: "#ef4444",
            weight: 2,
            dashArray: "8, 6",
            fillColor: "#ef4444",
            fillOpacity: 0.08,
          }}
        />
        {pengepul.map((p) => (
          <Marker
            key={p.id}
            position={[p.koordinat.lat, p.koordinat.lng]}
            icon={createCustomIcon(p.foto.depan)}
          >
            <Popup maxWidth={280}>
              <div className="font-sans">
                <div className="relative w-full h-36 -mx-3 -mt-3 mb-3 overflow-hidden rounded-t-xl">
                  <Image
                    src={p.foto.depan}
                    alt={p.nama}
                    fill
                    sizes="280px"
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <span className="text-xs font-bold text-[#6B8F71]">
                      RT {p.rt.toString().padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <div className="px-1 pb-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{p.nama}</h3>
                  <p className="text-xs text-gray-500 mb-3">{p.alamat}</p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {p.produk.slice(0, 2).map((prod, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-[#E8F3E8] text-[#4E6B53] px-2 py-0.5 rounded-full font-medium"
                      >
                        {prod}
                      </span>
                    ))}
                  </div>

                  {p.harga && p.harga !== "-" && (
                    <p className="text-sm font-semibold text-[#6B8F71] mb-3">{p.harga}</p>
                  )}

                  <div className="flex gap-2">
                    <Link
                      href={`/pengepul/${p.slug}`}
                      className="flex-1 text-center bg-[#6B8F71] text-white font-medium py-2 rounded-lg hover:bg-[#55755B] transition-colors text-sm"
                    >
                      Detail
                    </Link>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${p.koordinat.lat},${p.koordinat.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-[#3b82f6] text-white font-medium py-2 rounded-lg hover:bg-[#2563eb] transition-colors text-sm"
                    >
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

      <div className="absolute top-4 right-4 z-[1000] bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-3">
        <h4 className="text-sm font-bold text-gray-900 mb-2">Peta Sebaran</h4>
        <div className="space-y-1.5 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#6B8F71]"></div>
            <span className="text-gray-700">{pengepul.length} Pengepul</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
            <span className="text-gray-700">Batas Desa</span>
          </div>
        </div>
      </div>
    </div>
  );
}