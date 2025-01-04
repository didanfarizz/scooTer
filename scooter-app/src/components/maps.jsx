import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: -6.233221564624543,
  lng: 106.61242397844633,
};

// Fungsi untuk menghasilkan posisi acak di sekitar koordinat
const generateRandomScooters = (total) => {
  const scooters = [];
  for (let i = 0; i < total; i++) {
    const active = Math.random() < 0.5; // 50% aktif, 50% tidak aktif
    scooters.push({
      id: i + 1,
      lat: center.lat + (Math.random() - 0.5) * 0.001, // Variasi kecil di sekitar koordinat pusat
      lng: center.lng + (Math.random() - 0.5) * 0.001,
      active: active,
    });
  }
  return scooters;
};

const Maps = () => {
  const [scooters, setScooters] = useState([]);

  // Menyiapkan 100 scooter saat komponen pertama kali dimuat
  useEffect(() => {
    const initialScooters = generateRandomScooters(100);
    setScooters(initialScooters);

    const interval = setInterval(() => {
      // Update posisi scooter aktif (bergerak)
      setScooters((prevScooters) =>
        prevScooters.map((scooter) =>
          scooter.active
            ? {
                ...scooter,
                lat: scooter.lat + (Math.random() - 0.5) * 0.0001,
                lng: scooter.lng + (Math.random() - 0.5) * 0.0001,
              }
            : scooter
        )
      );
    }, 1000); // Update setiap 1 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyDdmQsrButJdwDoAE2wqN3QbWakV1jvRzo">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        {scooters.map((scooter) => (
          <Marker
            key={scooter.id}
            position={{ lat: scooter.lat, lng: scooter.lng }}
            icon={
              scooter.active
                ? "http://maps.google.com/mapfiles/ms/icons/red-dot.png" // Ikon merah untuk scooter aktif
                : "http://maps.google.com/mapfiles/ms/icons/green-dot.png" // Ikon hijau untuk scooter tidak aktif
            }
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Maps;
