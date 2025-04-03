"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  ShareIcon,
  X,
  ClipboardCopy,
  Navigation2,
  Building,
  Map,
  Mountain,
  Compass,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Location {
  lat: number;
  lng: number;
  label?: string;
  address?: string;
}

interface LocationDetailsModalProps {
  location: Location | null;
  isOpen: boolean;
  onClose: () => void;
  onSave?: (location: Location) => void;
}

interface GeocodingResult {
  address?: {
    road?: string;
    house_number?: string;
    postcode?: string;
    town?: string;
    city?: string;
    state?: string;
    country?: string;
    country_code?: string;
  };
  name?: string;
  display_name?: string;
  type?: string;
  osm_type?: string;
}

interface ElevationResult {
  elevation: number;
  resolution: number;
}

const LocationDetailsModal: React.FC<LocationDetailsModalProps> = ({
  location,
  isOpen,
  onClose,
  onSave,
}) => {
  const [copied, setCopied] = useState(false);
  const [fullAddress, setFullAddress] = useState<string | null>(null);
  const [addressDetails, setAddressDetails] = useState<GeocodingResult | null>(
    null,
  );
  const [elevation, setElevation] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const copyToClipboard = () => {
    if (!location) return;
    const text = `${location.lat}, ${location.lng}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  useEffect(() => {
    if (location && isOpen) {
      setLoading(true);
      // Fetch reverse geocoding data
      fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${location.lat}&lon=${location.lng}&zoom=18&addressdetails=1`,
      )
        .then((response) => response.json())
        .then((data: GeocodingResult) => {
          setAddressDetails(data);
          setFullAddress(data.display_name ?? null);
        })
        .catch((error) => {
          console.error("Error fetching address:", error);
        });

      // Fetch elevation data
      fetch(
        `https://api.open-elevation.com/api/v1/lookup?locations=${location.lat},${location.lng}`,
      )
        .then((response) => response.json())
        .then((data: { results?: ElevationResult[] }) => {
          if (data.results?.[0]?.elevation !== undefined) {
            setElevation(data.results[0].elevation);
          }
        })
        .catch((error) => {
          console.error("Error fetching elevation:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [location, isOpen]);

  if (!location) return null;

  const locationString = `${location.lat.toFixed(6)}, ${location.lng.toFixed(6)}`;

  const openInMaps = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`,
      "_blank",
    );
  };

  const getFormattedAddress = () => {
    if (!addressDetails?.address) return "Address information unavailable";

    const addr = addressDetails.address;
    const parts = [];

    if (addr?.house_number) parts.push(addr.house_number);
    if (addr?.road) parts.push(addr.road);
    if (addr?.town ?? addr?.city) parts.push(addr.town ?? addr.city);
    if (addr?.state) parts.push(addr.state);
    if (addr?.country) parts.push(addr.country);
    if (addr?.postcode) parts.push(addr.postcode);

    return parts.join(", ");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md rounded-2xl border-0 bg-gradient-to-b from-[rgba(20,20,20,0.98)] to-[rgba(28,28,28,0.98)] p-0 text-white shadow-2xl backdrop-blur-2xl">
        {/* Subtle gradient overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#0141FF]/5 via-transparent to-[#6366F1]/5"></div>

        {/* Noise texture */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.15] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="relative">
          <DialogHeader className="px-6 pb-2 pt-6">
            <DialogTitle className="text-xl font-medium tracking-tight text-white">
              Location Details
            </DialogTitle>
            <DialogDescription className="text-[15px] text-white/60">
              {loading
                ? "Loading location information..."
                : fullAddress
                  ? getFormattedAddress()
                  : "Exact coordinates from your map selection"}
            </DialogDescription>
          </DialogHeader>

          <div className="custom-scrollbar max-h-[60vh] overflow-y-auto px-6 py-4">
            <div className="space-y-5">
              {/* Coordinates Section */}
              <div className="space-y-2">
                <div className="text-[13px] font-medium uppercase tracking-wider text-white/40">
                  Coordinates
                </div>
                <div className="flex items-center justify-between rounded-lg bg-white/[0.08] px-4 py-3">
                  <code className="text-[15px] font-medium tracking-tight text-white">
                    {locationString}
                  </code>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                      "h-8 w-8 rounded-md text-white/60 hover:bg-white/10 hover:text-white",
                      copied && "bg-green-500/20 text-green-400",
                    )}
                    onClick={copyToClipboard}
                  >
                    <ClipboardCopy className="h-4 w-4" />
                  </Button>
                </div>
                {location.label && (
                  <div className="text-[14px] leading-relaxed text-white/60">
                    {location.label}
                  </div>
                )}
              </div>

              {/* Address Section */}
              <div className="space-y-2">
                <div className="text-[13px] font-medium uppercase tracking-wider text-white/40">
                  Address
                </div>
                <div className="rounded-lg bg-white/[0.08] p-4">
                  {loading ? (
                    <div className="flex items-center justify-center py-4">
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-[#0A84FF]"></div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Building className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                        <div className="text-[14px] leading-tight text-white/80">
                          {fullAddress
                            ? getFormattedAddress()
                            : "Address information unavailable"}
                        </div>
                      </div>

                      {addressDetails?.osm_type && (
                        <div className="flex items-start gap-3">
                          <Map className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                          <div className="text-[14px] leading-tight text-white/80">
                            <span className="block text-white/40">
                              Location Type
                            </span>
                            {addressDetails.type} ({addressDetails.osm_type})
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Geographic Info */}
              <div className="space-y-2">
                <div className="text-[13px] font-medium uppercase tracking-wider text-white/40">
                  Geographic Information
                </div>
                <div className="rounded-lg bg-white/[0.08] p-4">
                  <div className="space-y-3 text-[14px] text-white/80">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Compass className="h-4 w-4 text-white/40" />
                        <span>Latitude</span>
                      </div>
                      <span className="font-medium">
                        {location.lat.toFixed(6)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Compass className="h-4 w-4 text-white/40" />
                        <span>Longitude</span>
                      </div>
                      <span className="font-medium">
                        {location.lng.toFixed(6)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Compass className="h-4 w-4 text-white/40" />
                        <span>DMS</span>
                      </div>
                      <span className="font-medium">
                        {convertToDMS(location.lat, location.lng)}
                      </span>
                    </div>
                    <div className="border-t border-white/[0.08] pt-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Mountain className="h-4 w-4 text-white/40" />
                          <span>Elevation</span>
                        </div>
                        <span className="font-medium">
                          {elevation !== null
                            ? `${Math.round(elevation)} m`
                            : loading
                              ? "Loading..."
                              : "Unavailable"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DialogFooter className="flex justify-between gap-2 border-t border-white/[0.08] bg-white/[0.03] px-6 py-4">
            <Button
              variant="outline"
              className="w-full rounded-lg border-white/20 bg-transparent py-5 text-[14px] font-medium text-white hover:bg-white/10"
              onClick={openInMaps}
            >
              <Navigation2 className="mr-2 h-4 w-4" />
              Open in Google Maps
            </Button>
            {onSave && (
              <Button
                className="w-full rounded-lg bg-[#0A84FF] py-5 text-[14px] font-medium text-white hover:bg-[#0A84FF]/90"
                onClick={() => onSave(location)}
              >
                <ShareIcon className="mr-2 h-4 w-4" />
                Save Location
              </Button>
            )}
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Helper function to convert decimal degrees to DMS (degrees, minutes, seconds)
function convertToDMS(latitude: number, longitude: number): string {
  const latDirection = latitude >= 0 ? "N" : "S";
  const lngDirection = longitude >= 0 ? "E" : "W";

  const latAbs = Math.abs(latitude);
  const lngAbs = Math.abs(longitude);

  const latDegrees = Math.floor(latAbs);
  const latMinutes = Math.floor((latAbs - latDegrees) * 60);
  const latSeconds = Math.round(((latAbs - latDegrees) * 60 - latMinutes) * 60);

  const lngDegrees = Math.floor(lngAbs);
  const lngMinutes = Math.floor((lngAbs - lngDegrees) * 60);
  const lngSeconds = Math.round(((lngAbs - lngDegrees) * 60 - lngMinutes) * 60);

  return `${latDegrees}°${latMinutes}'${latSeconds}"${latDirection}, ${lngDegrees}°${lngMinutes}'${lngSeconds}"${lngDirection}`;
}

export default LocationDetailsModal;
