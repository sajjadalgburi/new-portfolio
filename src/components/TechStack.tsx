import { IconCloud } from "@/components/magicui/icon-cloud";
import { DATA } from "@/data/resume";

const slugs = [
  "typescript",
  "javascript",
  "python",
  "react",
  "nextdotjs",
  "tailwindcss",
  "nodedotjs",
  "fastapi",
  "express",
  "prisma",
  "postgresql",
  "mongodb",
  "supabase",
  "firebase",
  "graphql",
  "vitest",
  "jest",
  "docker",
  "googlecloud",
  "git",
];

export function TechStack() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <>
      <div
        aria-hidden="true"
        className="relative flex size-full items-center justify-center overflow-hidden"
      >
        <IconCloud images={images} />
      </div>
      <dl className="sr-only">
        {DATA.skills.map(({ category, items }) => (
          <div key={category}>
            <dt>{category}</dt>
            <dd>{items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </>
  );
}
