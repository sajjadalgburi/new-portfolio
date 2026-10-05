"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { type ComponentProps, useId, useRef, useState } from "react";

export function EmailContact(props: ComponentProps<typeof Button>) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [copyStatus, setCopyStatus] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(DATA.contact.email);
      setCopyStatus("Email address copied.");
    } catch {
      setCopyStatus("Select and copy the email address above.");
    }
  }

  return (
    <>
      <Button
        {...props}
        type="button"
        variant="ghost"
        size="icon"
        aria-label="Email"
        aria-haspopup="dialog"
        className="size-12 text-neutral-900 dark:text-neutral-100"
        onClick={() => {
          setCopyStatus("");
          dialogRef.current?.showModal();
        }}
      >
        <Icons.email className="size-4" />
      </Button>
      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        className="fixed inset-0 m-auto w-[calc(100%-3rem)] max-w-sm rounded-xl border bg-background p-6 text-foreground shadow-xl backdrop:bg-black/40"
      >
        <h2 id={titleId} className="text-xl font-bold">
          Send an email
        </h2>
        <p className="mt-2 select-all break-all text-sm">
          {DATA.contact.email}
        </p>
        <div className="mt-4 flex flex-col gap-2">
          <Button asChild>
            <a href={DATA.contact.social.Email.url}>Open email app</a>
          </Button>
          <Button asChild variant="outline">
            <a
              href={`https://mail.google.com/mail/?extsrc=mailto&url=${encodeURIComponent(DATA.contact.social.Email.url)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Gmail
            </a>
          </Button>
          <Button type="button" variant="outline" onClick={copyEmail}>
            Copy email address
          </Button>
          <p role="status" className="text-sm">
            {copyStatus}
          </p>
          <Button
            type="button"
            variant="ghost"
            onClick={() => dialogRef.current?.close()}
          >
            Close
          </Button>
        </div>
      </dialog>
    </>
  );
}
