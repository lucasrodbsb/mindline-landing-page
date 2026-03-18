import type { MetadataRoute } from "next";

const siteUrl = "https://mindlineclinic.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl + "/",
      lastModified: new Date(),
    },
  ];
}

