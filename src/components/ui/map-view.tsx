"use client";

import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "./button";
import { Compass, MapPin } from "lucide-react";
import LocationDetailsModal from "./location-details-modal";

// Fix for default marker icons in Leaflet with Next.js
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const CustomRedIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  className: "custom-icon-pin", // We'll apply a red filter to this class
});

L.Marker.prototype.options.icon = DefaultIcon;

interface Location {
  lat: number;
  lng: number;
  label?: string;
}

interface MapViewProps {
  selectedLocation?: Location | null;
  onMapClick?: (location: Location) => void;
}

// Component to handle map center updates
function MapUpdater({ center }: { center: [number, number] }) {
  const map = useMap();

  useEffect(() => {
    map.setView(center, map.getZoom());
  }, [center, map]);

  return null;
}

// Custom component to handle map clicks
function MapClickHandler({
  onMapClick,
}: {
  onMapClick: (location: Location) => void;
}) {
  const map = useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      onMapClick({
        lat,
        lng,
        label: "Clicked location",
      });
    },
  });

  return null;
}

function LocationMarker() {
  const [position, setPosition] = useState<Location | null>(null);
  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e: L.LocationEvent) {
      setPosition({
        lat: e.latlng.lat,
        lng: e.latlng.lng,
        label: "Your current location",
      });
      map.flyTo(e.latlng, map.getZoom());
    });
  }, [map]);

  return position ? (
    <Marker position={[position.lat, position.lng]}>
      <Popup>{position.label}</Popup>
    </Marker>
  ) : null;
}

const MapView: React.FC<MapViewProps> = ({ selectedLocation, onMapClick }) => {
  const [showCurrentLocation, setShowCurrentLocation] = useState(false);
  const [clickedLocation, setClickedLocation] = useState<Location | null>(null);
  const [showModal, setShowModal] = useState(false);
  const defaultCenter: [number, number] = [27.7172, 85.324]; // Default to Kathmandu, Nepal

  const center = selectedLocation
    ? ([selectedLocation.lat, selectedLocation.lng] as [number, number])
    : defaultCenter;

  const handleMapClick = (location: Location) => {
    setClickedLocation(location);
    setShowModal(true);
    if (onMapClick) {
      onMapClick(location);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (selectedLocation) {
      setShowCurrentLocation(false);
    }
  }, [selectedLocation]);

  // Add a CSS style for the red marker
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .custom-icon-pin {
        filter: hue-rotate(140deg) saturate(1.5);
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative h-[400px] w-full rounded-lg border">
      <MapContainer
        center={center}
        zoom={13}
        className="h-full w-full rounded-lg"
        style={{ position: "relative", zIndex: 1 }}
      >
        <MapUpdater center={center} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Display the selected location from search */}
        {selectedLocation && (
          <Marker position={[selectedLocation.lat, selectedLocation.lng]}>
            <Popup>{selectedLocation.label ?? "Selected location"}</Popup>
          </Marker>
        )}
        {/* Display the clicked location with a different icon */}
        {clickedLocation && (
          <Marker
            position={[clickedLocation.lat, clickedLocation.lng]}
            icon={CustomRedIcon}
          >
            <Popup>
              <div className="space-y-2 p-1">
                <div className="font-medium">Clicked location</div>
                <div className="text-sm">
                  {clickedLocation.lat.toFixed(6)},{" "}
                  {clickedLocation.lng.toFixed(6)}
                </div>
                <Button
                  className="w-full bg-[#0A84FF] py-1 text-xs text-white"
                  onClick={() => setShowModal(true)}
                >
                  View Details
                </Button>
              </div>
            </Popup>
          </Marker>
        )}
        {showCurrentLocation && <LocationMarker />}
        {/* Add the map click handler */}
        <MapClickHandler onMapClick={handleMapClick} />
      </MapContainer>

      {/* Controls */}
      <div className="absolute right-2 top-2 z-10 flex flex-col gap-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-gray-50"
          onClick={() => setShowCurrentLocation(true)}
          title="Show my location"
        >
          <Compass className="h-4 w-4" />
        </Button>

        {clickedLocation && (
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-gray-50"
            onClick={() => setShowModal(true)}
            title="Show clicked location details"
          >
            <MapPin className="h-4 w-4 text-red-500" />
          </Button>
        )}
      </div>

      {/* Hint overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="rounded-full bg-black/40 px-4 py-2 text-[13px] text-white/80 backdrop-blur-sm">
          Click anywhere on the map to get exact coordinates
        </div>
      </div>

      {/* Modal */}
      <LocationDetailsModal
        location={clickedLocation}
        isOpen={showModal}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default MapView;
