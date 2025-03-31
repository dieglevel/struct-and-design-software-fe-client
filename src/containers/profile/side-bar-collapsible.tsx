// SidebarCollapsibleItem.tsx
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { SidebarMenuItem } from "@/components/ui/sidebar";
import Link from "next/link";

interface MenuItem {
  name: string;
  href: string;
}

interface SidebarCollapsibleItemProps {
  title: string;
  Icon: React.ElementType;
  items: MenuItem[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  indexOffset?: number;
}

export function SidebarCollapsibleItem({
  title,
  Icon,
  items,
  activeIndex,
  setActiveIndex,
  indexOffset = 0,
}: SidebarCollapsibleItemProps) {
  return (
    <Collapsible defaultOpen className="group/collapsible">
      <SidebarMenuItem className="">
        <CollapsibleTrigger
          className="flex items-center justify-between w-full mb-4 cursor-pointer"
          asChild
        >
          <div>
            <h3 className="text-lg font-bold text-[#1a3c61]">{title}</h3>
            <Icon className="h-5 w-5 text-[#1a3c61]" />
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="mb-4">
          <ul className="space-y-4 ml-8">
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`pb-2 ${
                    activeIndex === index + indexOffset
                      ? "text-[#ff6b4a] border-b border-[#ff6b4a]"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveIndex(index + indexOffset)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}
