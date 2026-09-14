import { DATA } from "@/data/resume";
import { avatarUrl } from "@/lib/seo";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: DATA.url,
      changeFrequency: "monthly",
      priority: 1,
      images: [
        avatarUrl,
        ...DATA.projects.map((project) =>
          new URL(project.image, DATA.url).toString(),
        ),
        ...DATA.more_projects.map((project) =>
          new URL(project.image, DATA.url).toString(),
        ),
      ],
    },
  ];
}
