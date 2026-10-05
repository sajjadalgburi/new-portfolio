"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  preload?: boolean;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  preload = false,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const descriptionId = React.useId();

  return (
    <Card className="flex p-2">
      <div className="flex-none">
        <Link
          href={href || "#"}
          target={href ? "_blank" : undefined}
          rel={href ? "noopener noreferrer" : undefined}
          aria-label={`Visit ${title}`}
          className="block rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
        >
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <Image
              src={logoUrl}
              alt={altText}
              width={48}
              height={48}
              preload={preload}
              fetchPriority={preload ? "high" : undefined}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </Link>
      </div>
      <div className="grow ml-4 items-center flex-col group">
        <CardHeader>
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
              {description ? (
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  aria-controls={descriptionId}
                  onClick={() => setIsExpanded((expanded) => !expanded)}
                  className="inline-flex cursor-pointer items-center gap-1 text-left rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
                >
                  {title}
                  <ChevronRightIcon
                    aria-hidden="true"
                    className={cn(
                      "size-4 shrink-0 transition-transform duration-300",
                      isExpanded ? "rotate-90" : "rotate-0",
                    )}
                  />
                </button>
              ) : (
                title
              )}
              {badges && (
                <span className="inline-flex gap-x-1">
                  {badges.map((badge, index) => (
                    <Badge
                      variant="secondary"
                      className="align-middle text-xs"
                      key={index}
                    >
                      {badge}
                    </Badge>
                  ))}
                </span>
              )}
            </h3>
            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
              {period}
            </div>
          </div>
          {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
        </CardHeader>
        {description && (
          <motion.div
            id={descriptionId}
            aria-hidden={!isExpanded}
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,

              height: isExpanded ? "auto" : 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-2 overflow-hidden text-xs sm:text-sm"
          >
            {description}
          </motion.div>
        )}
      </div>
    </Card>
  );
};
