import { useEffect, useRef } from "react";

type LeafletMap = {
  setView: (center: [number, number], zoom: number) => LeafletMap;
  remove: () => void;
};

type LeafletLayer = {
  addTo: (map: LeafletMap) => LeafletLayer;
};

type LeafletApi = {
  map: (element: HTMLElement, options: { scrollWheelZoom: boolean }) => LeafletMap;
  tileLayer: (url: string, options: { attribution: string; maxZoom: number }) => LeafletLayer;
  marker: (position: [number, number]) => LeafletLayer & {
    bindPopup: (content: string) => LeafletLayer;
  };
};

declare global {
  interface Window {
    L?: LeafletApi;
  }
}

export default function LocationMap() {
  const mapElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const leaflet = window.L;
    if (!mapElement.current || !leaflet) return;

    // Regional center only; the profile lists Caraga, not a street address.
    const map = leaflet.map(mapElement.current, { scrollWheelZoom: false }).setView([8.5, 126], 7);

    leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    leaflet.marker([8.5, 126])
      .bindPopup("Caraga Region, Philippines · Remote-friendly")
      .addTo(map);

    return () => map.remove();
  }, []);

  return <div className="contact-panel__map" ref={mapElement} aria-label="Interactive map centered on Caraga Region, Philippines" />;
}
