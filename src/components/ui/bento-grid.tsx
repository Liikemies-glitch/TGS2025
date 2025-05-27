"use client";

// Icons imported for potential use in BentoGrid items
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Box, Lock, Search, Settings, Sparkles, Wand2, Banknote, Compass, Lightbulb, Users } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

interface BentoItem {
    title: string;
    meta?: string;
    description: string;
    icon: React.ReactNode;
    status?: string;
    tags?: string[];
    colSpan?: number;
    hasPersistentHover?: boolean;
}

interface BentoGridProps {
    items: BentoItem[];
}

export function BentoGrid({ items }: BentoGridProps) {
    return (
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
            {items.map((item, index) => (
                <GridItem
                    key={index}
                    area={getGridArea(index)}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    meta={item.meta}
                    status={item.status}
                    tags={item.tags}
                    hasPersistentHover={item.hasPersistentHover}
                />
            ))}
        </ul>
    );
}

interface GridItemProps extends BentoItem {
    area: string;
}

const getGridArea = (index: number): string => {
    // Default grid areas for different indices
    const gridAreas = [
        "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
        "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
        "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
        "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
        "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
    ];

    return gridAreas[index] || "";
};

const GridItem = ({ area, icon, title, description, meta, tags, hasPersistentHover }: GridItemProps) => {
    return (
        <li className={cn("min-h-[14rem] list-none", area)}>
            <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect
                    spread={40}
                    glow={hasPersistentHover}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="flex items-center justify-between">
                            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
                                {icon}
                            </div>
                            {meta && (
                                <span className="text-xs text-muted-foreground">
                                    {meta}
                                </span>
                            )}
                        </div>
                        <div className="space-y-3">
                            <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                                {title}
                            </h3>
                            <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                                {description}
                            </h2>
                            {tags && tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}; 