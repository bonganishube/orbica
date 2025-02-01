import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChartBarStacked } from "lucide-react";
import { CategoryLinks } from "@/utils/links";

function BrowseCategories() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild key="item">
          <Button variant="outline" className="text-sm flex gap-4 dark:bg-muted bg-muted text-muted-foreground font-normal px-3">
            <ChartBarStacked className="w-6 h-6" /> <span className="hidden sm:flex">Browse All Categories</span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56" align="start">
          {CategoryLinks.map((item) => (
            <DropdownMenuSub key={item.category}>
              <DropdownMenuSubTrigger>
                {item.icon}
                {item.category}
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Brand 1</DropdownMenuItem>
                  <DropdownMenuItem>Brand 2</DropdownMenuItem>
                  <DropdownMenuItem>Brand 3</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default BrowseCategories;
