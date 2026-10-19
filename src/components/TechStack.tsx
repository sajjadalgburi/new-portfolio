import { DATA } from "@/data/resume";
import { Badge } from "@/components/ui/badge";

export function TechStack() {
  return (
    <dl className="mt-3 space-y-4">
      {DATA.skills.map(({ category, items }) => (
        <div key={category}>
          <dt className="mb-2 text-sm font-medium">{category}</dt>
          <dd className="flex flex-wrap gap-1.5">
            {items.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
}
