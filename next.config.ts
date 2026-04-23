import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Requis pour le déploiement Docker (Coolify)
  output: "standalone",

  // Optimisations images
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "soacademysite.vled.fr",
      },
    ],
  },

  // Turbopack : forcer la racine sur ce dossier (évite le warning multi-lockfiles)
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
