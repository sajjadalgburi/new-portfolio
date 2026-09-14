import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "css",
  "tailwindcss",
  "react",
  "reactquery",
  "html5",
  "nodedotjs",
  "express",
  "fastapi",
  "nextdotjs",
  "prisma",
  "postgresql",
  "firebase",
  "googlecloud",
  "vercel",
  "jest",
  "python",
  "git",
  "linear",
  "github",
  "gitlab",
  "graphql",
  "supabase",
  "n8n",
  "anthropic",
  "openai",
];

export function TechStack() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
