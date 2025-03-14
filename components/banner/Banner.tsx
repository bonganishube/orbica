"use client";

import { Button } from "@/components/ui/button";
import { Truck, X } from "lucide-react";
import { useState } from "react";

export default function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="dark bg-muted px-4 py-3 text-foreground md:py-2">
      <div className="flex gap-2 md:items-center">
        <div className="flex grow gap-3 items-center md:justify-center">
          <Truck
            className="shrink-0 opacity-60 max-md:mt-0.5 hidden sm:flex"
            size={18}
            strokeWidth={2}
            aria-hidden="true"
          />
          <div className="flex flex-wrap justify-between gap-3 items-center">
            <p className="text-sm">
            Free shipping on orders R350+
            </p>
            <div className="flex gap-2 max-md:flex-wrap">
              <Button size="sm" className="rounded-full">
                Show all products
              </Button>
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
          onClick={() => setIsVisible(false)}
          aria-label="Close banner"
        >
          <X
            size={16}
            strokeWidth={2}
            className="opacity-60 transition-opacity group-hover:opacity-100"
            aria-hidden="true"
          />
        </Button>
      </div>
    </div>
  );
}
