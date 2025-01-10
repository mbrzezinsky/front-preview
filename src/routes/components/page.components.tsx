import { AppSidebar } from "@/components/custom/navigation/sidebar/app-sidebar.tsx";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb.tsx";
import { ThemePicker } from "@/components/custom/theme-picker/theme-picker.tsx";
import {
    Accordion,
    AccordionContent,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionItem } from "@/components/ui/accordion.tsx";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert.tsx";
import {
    Bold,
    Calculator,
    Calendar1,
    CalendarIcon,
    Check,
    ChevronsUpDown,
    CreditCard,
    Italic,
    Settings,
    Smile,
    Terminal,
    Underline,
    User,
} from "lucide-react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog.tsx";
import { Button } from "@/components/ui/button.tsx";
import { AspectRatio } from "@/components/ui/aspect-ratio.tsx";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@/components/ui/avatar.tsx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Calendar } from "@/components/ui/calendar.tsx";
import React, { useContext } from "react";
import {
    Card,
    CardDescription,
    CardFooter,
    CardTitle,
} from "@/components/ui/card";
import { CardContent, CardHeader } from "@/components/ui/card.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Input } from "@/components/ui/input.tsx";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select.tsx";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel.tsx";
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart.tsx";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible.tsx";
import { Popover } from "@/components/ui/popover";
import { PopoverContent, PopoverTrigger } from "@/components/ui/popover.tsx";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command.tsx";
import { cn } from "@/lib/utils.ts";
import {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { ContextMenuContent } from "@/components/ui/context-menu.tsx";
import { format } from "date-fns";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog.tsx";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card.tsx";
import { InputOTP, InputOTPSlot } from "@/components/ui/input-otp";
import {
    InputOTPGroup,
    InputOTPSeparator,
} from "@/components/ui/input-otp.tsx";
import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu.tsx";
import {
    Pagination,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { PaginationContent } from "@/components/ui/pagination.tsx";
import { Progress } from "@/components/ui/progress.tsx";
import { RadioGroup } from "@/components/ui/radio-group";
import { RadioGroupItem } from "@/components/ui/radio-group.tsx";
import {
    ResizableHandle,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ResizablePanel } from "@/components/ui/resizable.tsx";
import { ScrollArea } from "@/components/ui/scroll-area.tsx";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { Slider } from "@/components/ui/slider.tsx";
import { toast } from "sonner";
import { Switch } from "@/components/ui/switch.tsx";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Toggle } from "@/components/ui/toggle.tsx";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip.tsx";
import { UserContext } from "@/contexts/user-context";

export default function Components() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const [datePicker, setDatePicker] = React.useState<Date>();
    const [isOpen, setIsOpen] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");

    const chartData = [
        { month: "January", desktop: 186, mobile: 80 },
        { month: "February", desktop: 305, mobile: 200 },
        { month: "March", desktop: 237, mobile: 120 },
        { month: "April", desktop: 73, mobile: 190 },
        { month: "May", desktop: 209, mobile: 130 },
        { month: "June", desktop: 214, mobile: 140 },
    ];

    const chartConfig = {
        desktop: {
            label: "Desktop",
            color: "#2563eb",
        },
        mobile: {
            label: "Mobile",
            color: "#60a5fa",
        },
    } satisfies ChartConfig;

    const frameworks = [
        {
            value: "next.js",
            label: "Next.js",
        },
        {
            value: "sveltekit",
            label: "SvelteKit",
        },
        {
            value: "nuxt.js",
            label: "Nuxt.js",
        },
        {
            value: "remix",
            label: "Remix",
        },
        {
            value: "astro",
            label: "Astro",
        },
    ];

    const ListItem = React.forwardRef<
        React.ElementRef<"a">,
        React.ComponentPropsWithoutRef<"a">
    >(({ className, title, children, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-primary-content focus:bg-primary focus:text-primary-content",
                            className,
                        )}
                        {...props}
                    >
                        <div className="text-sm font-medium leading-none">
                            {title}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug ">
                            {children}
                        </p>
                    </a>
                </NavigationMenuLink>
            </li>
        );
    });
    ListItem.displayName = "ListItem";

    const components: { title: string; href: string; description: string }[] = [
        {
            title: "Alert Dialog",
            href: "/docs/primitives/alert-dialog",
            description:
                "A modal dialog that interrupts the user with important content and expects a response.",
        },
        {
            title: "Hover Card",
            href: "/docs/primitives/hover-card",
            description:
                "For sighted users to preview content available behind a link.",
        },
        {
            title: "Progress",
            href: "/docs/primitives/progress",
            description:
                "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
        },
        {
            title: "Scroll-area",
            href: "/docs/primitives/scroll-area",
            description: "Visually or semantically separates content.",
        },
        {
            title: "Tabs",
            href: "/docs/primitives/tabs",
            description:
                "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
        },
        {
            title: "Tooltip",
            href: "/docs/primitives/tooltip",
            description:
                "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
        },
    ];

    const [progress, setProgress] = React.useState(13);

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500);
        return () => clearTimeout(timer);
    }, []);

    const tags = Array.from({ length: 50 }).map(
        (_, i, a) => `v1.2.0-beta.${a.length - i}`,
    );

    const val = useContext(UserContext);

    return (
        <>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center justify-between gap-2">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 h-4"
                        />
                        <Breadcrumb variant="components" />
                    </div>
                    <div className={"mr-3"}>
                        <ThemePicker />
                    </div>
                </header>

                <div className="flex p-4 rounded-md flex-1 flex-col pt-0">
                    <div className="min-h-[100vh] p-4 flex-1 rounded-xl bg-base-100 md:min-h-min">
                        <div id={"accordion"}>
                            <h1 className={"text-lg"}> Accordion </h1>
                            <Accordion
                                type="single"
                                collapsible
                                className="w-full"
                            >
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>
                                        Is it accessible?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design
                                        pattern.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>
                                        Is it styled?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It comes with default styles that
                                        matches the other components&apos;
                                        aesthetic.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>
                                        Is it animated?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It's animated by default, but you
                                        can disable it if you prefer.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        User{" "}
                        {val?.sessionData ? val?.sessionData.email : "No user"}
                        <div className={"mt-4"} id={"alert"}>
                            <h1 className={"text-lg mb-4"}> Alert </h1>
                            <Alert>
                                <Terminal className="h-4 w-4" />
                                <AlertTitle>Heads up!</AlertTitle>
                                <AlertDescription>
                                    You can add components to your app using the
                                    cli.
                                </AlertDescription>
                            </Alert>
                        </div>
                        <div className={"mt-4"} id={"alert-dialog"}>
                            <h1 className={"text-lg mb-4 text-base-content"}>
                                {" "}
                                Alert dialog
                            </h1>
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button size={"sm"} variant={"primary"}>
                                        Show Dialog
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>
                                            Are you absolutely sure?
                                        </AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This
                                            will permanently delete your account
                                            and remove your data from our
                                            servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>
                                            Cancel
                                        </AlertDialogCancel>
                                        <AlertDialogAction>
                                            Continue
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                        <div className={"mt-4"} id={"aspect-ratio"}>
                            <h1 className={"text-lg mb-4"}> Aspect ratio </h1>
                            <AspectRatio ratio={16 / 9} className="">
                                <img
                                    src="https://asset.gecdesigns.com/img/wallpapers/beautiful-fantasy-wallpaper-ultra-hd-wallpaper-4k-sr10012418-1706506236698-cover.webp"
                                    alt="Photo by Drew Beamer"
                                    className="h-full w-full rounded-md object-cover"
                                />
                            </AspectRatio>
                        </div>
                        <div className={"mt-4"} id={"avatar"}>
                            <h1 className={"text-lg mb-4"}> Avatar </h1>
                            <Avatar>
                                <AvatarImage
                                    src="https://github.com/shadcn.png"
                                    alt="@shadcn"
                                />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className={"mt-4"} id={"badge"}>
                            <h1 className={"text-lg mb-4"}> Badge </h1>
                            <Badge>Badge</Badge>
                        </div>
                        <div className={"mt-4"} id={"breadcrumb"}>
                            <h1 className={"text-lg mb-4"}> Breadcrumb </h1>
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink to="/">
                                            Home
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger className="flex items-center gap-1">
                                                <BreadcrumbEllipsis className="h-4 w-4" />
                                                <span className="sr-only">
                                                    Toggle menu
                                                </span>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="start">
                                                <DropdownMenuItem>
                                                    Documentation
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    Themes
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    GitHub
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink to="/components">
                                            Components
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>
                                            Breadcrumb
                                        </BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                        <div className={"mt-4"} id={"button"}>
                            <h1 className={"text-lg mb-4"}> Button </h1>
                            <Button variant={"primary"}>Button</Button>
                        </div>
                        <div className={"mt-4"} id={"calendar"}>
                            <h1 className={"text-lg mb-4"}> Calendar </h1>
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="rounded-md border shadow max-w-fit"
                            />
                        </div>
                        <div className={"mt-4"} id={"card"}>
                            <h1 className={"text-lg mb-4"}> Card </h1>
                            <Card className="w-[350px]">
                                <CardHeader>
                                    <CardTitle>Create project</CardTitle>
                                    <CardDescription>
                                        Deploy your new project in one-click.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form>
                                        <div className="grid w-full items-center gap-4">
                                            <div className="flex flex-col space-y-1.5">
                                                <Label htmlFor="name">
                                                    Name
                                                </Label>
                                                <Input
                                                    bordered
                                                    id="name"
                                                    placeholder="Name of your project"
                                                />
                                            </div>
                                            <div className="flex flex-col space-y-1.5">
                                                <Label htmlFor="framework">
                                                    Framework
                                                </Label>
                                                <Select>
                                                    <SelectTrigger id="framework">
                                                        <SelectValue placeholder="Select" />
                                                    </SelectTrigger>
                                                    <SelectContent position="popper">
                                                        <SelectItem value="next">
                                                            Next.js
                                                        </SelectItem>
                                                        <SelectItem value="sveltekit">
                                                            SvelteKit
                                                        </SelectItem>
                                                        <SelectItem value="astro">
                                                            Astro
                                                        </SelectItem>
                                                        <SelectItem value="nuxt">
                                                            Nuxt.js
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                    </form>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <Button
                                        outline
                                        variant={"error"}
                                        size={"sm"}
                                    >
                                        Cancel
                                    </Button>
                                    <Button variant={"primary"} size={"sm"}>
                                        Deploy
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                        <div className={"mt-4"} id={"carousel"}>
                            <h1 className={"text-lg mb-4"}> Carousel </h1>
                            <Carousel className="ml-12 w-full max-w-xs">
                                <CarouselContent>
                                    {Array.from({ length: 5 }).map(
                                        (_, index) => (
                                            <CarouselItem key={index}>
                                                <div className="p-1">
                                                    <Card>
                                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                                            <span className="text-4xl font-semibold">
                                                                {index + 1}
                                                            </span>
                                                        </CardContent>
                                                    </Card>
                                                </div>
                                            </CarouselItem>
                                        ),
                                    )}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>
                        <div className={"mt-4"} id={"chart"}>
                            <h1 className={"text-lg mb-4"}> Chart </h1>
                            <ChartContainer
                                config={chartConfig}
                                className="min-h-[200px] max-h-[600px] w-full"
                            >
                                <BarChart accessibilityLayer data={chartData}>
                                    <CartesianGrid vertical={false} />
                                    <XAxis
                                        dataKey="month"
                                        tickLine={false}
                                        tickMargin={10}
                                        axisLine={false}
                                        tickFormatter={(value) =>
                                            value.slice(0, 3)
                                        }
                                    />
                                    <ChartTooltip
                                        content={<ChartTooltipContent />}
                                    />
                                    <ChartLegend
                                        content={<ChartLegendContent />}
                                    />
                                    <Bar
                                        dataKey="desktop"
                                        fill="var(--color-desktop)"
                                        radius={4}
                                    />
                                    <Bar
                                        dataKey="mobile"
                                        fill="var(--color-mobile)"
                                        radius={4}
                                    />
                                </BarChart>
                            </ChartContainer>
                        </div>
                        <div className={"mt-4"} id={"checkbox"}>
                            <h1 className={"text-lg mb-4"}> Checkbox </h1>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Accept terms and conditions
                                </label>
                            </div>
                        </div>
                        <div className={"mt-4"} id={"collapsible"}>
                            <h1 className={"text-lg mb-4"}> Collapsible </h1>
                            <Collapsible
                                open={isOpen}
                                onOpenChange={setIsOpen}
                                className="w-[350px] space-y-2"
                            >
                                <div className="flex items-center justify-between space-x-4 px-4">
                                    <h4 className="text-sm font-semibold">
                                        @peduarte starred 3 repositories
                                    </h4>
                                    <CollapsibleTrigger asChild>
                                        <Button variant="ghost" size="sm">
                                            <ChevronsUpDown className="h-4 w-4" />
                                            <span className="sr-only">
                                                Toggle
                                            </span>
                                        </Button>
                                    </CollapsibleTrigger>
                                </div>
                                <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                                    @radix-ui/primitives
                                </div>
                                <CollapsibleContent className="space-y-2">
                                    <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                                        @radix-ui/colors
                                    </div>
                                    <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                                        @stitches/react
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                        </div>
                        <div className={"mt-4"} id={"combobox"}>
                            <h1 className={"text-lg mb-4"}> Combobox </h1>
                            <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                        outline
                                        role="combobox"
                                        size={"sm"}
                                        aria-expanded={open}
                                        className="w-[300px] justify-between"
                                    >
                                        {value
                                            ? frameworks.find(
                                                  (framework) =>
                                                      framework.value === value,
                                              )?.label
                                            : "Select framework..."}
                                        <ChevronsUpDown className="opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-[200px] p-0">
                                    <Command>
                                        <CommandInput
                                            placeholder="Search framework..."
                                            className="h-9"
                                        />
                                        <CommandList>
                                            <CommandEmpty>
                                                No framework found.
                                            </CommandEmpty>
                                            <CommandGroup>
                                                {frameworks.map((framework) => (
                                                    <CommandItem
                                                        key={framework.value}
                                                        value={framework.value}
                                                        onSelect={(
                                                            currentValue,
                                                        ) => {
                                                            setValue(
                                                                currentValue ===
                                                                    value
                                                                    ? ""
                                                                    : currentValue,
                                                            );
                                                            setOpen(false);
                                                        }}
                                                    >
                                                        {framework.label}
                                                        <Check
                                                            className={cn(
                                                                "ml-auto",
                                                                value ===
                                                                    framework.value
                                                                    ? "opacity-100"
                                                                    : "opacity-0",
                                                            )}
                                                        />
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className={"mt-4"} id={"command"}>
                            <h1 className={"text-lg mb-4"}> Command </h1>
                            <Command className="rounded-lg border shadow-md md:min-w-[450px]">
                                <CommandInput placeholder="Type a command or search..." />
                                <CommandList>
                                    <CommandEmpty>
                                        No results found.
                                    </CommandEmpty>
                                    <CommandGroup heading="Suggestions">
                                        <CommandItem>
                                            <Calendar1 />
                                            <span>Calendar</span>
                                        </CommandItem>
                                        <CommandItem>
                                            <Smile />
                                            <span>Search Emoji</span>
                                        </CommandItem>
                                        <CommandItem disabled>
                                            <Calculator />
                                            <span>Calculator</span>
                                        </CommandItem>
                                    </CommandGroup>
                                    <CommandSeparator />
                                    <CommandGroup heading="Settings">
                                        <CommandItem>
                                            <User />
                                            <span>Profile</span>
                                            <CommandShortcut>
                                                ⌘P
                                            </CommandShortcut>
                                        </CommandItem>
                                        <CommandItem>
                                            <CreditCard />
                                            <span>Billing</span>
                                            <CommandShortcut>
                                                ⌘B
                                            </CommandShortcut>
                                        </CommandItem>
                                        <CommandItem>
                                            <Settings />
                                            <span>Settings</span>
                                            <CommandShortcut>
                                                ⌘S
                                            </CommandShortcut>
                                        </CommandItem>
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </div>
                        <div className={"mt-4"} id={"context-menu"}>
                            <h1 className={"text-lg mb-4"}> Context menu </h1>
                            <ContextMenu>
                                <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
                                    Right click here
                                </ContextMenuTrigger>
                                <ContextMenuContent className="w-64">
                                    <ContextMenuItem inset>
                                        Back
                                        <ContextMenuShortcut>
                                            ⌘[
                                        </ContextMenuShortcut>
                                    </ContextMenuItem>
                                    <ContextMenuItem inset disabled>
                                        Forward
                                        <ContextMenuShortcut>
                                            ⌘]
                                        </ContextMenuShortcut>
                                    </ContextMenuItem>
                                    <ContextMenuItem inset>
                                        Reload
                                        <ContextMenuShortcut>
                                            ⌘R
                                        </ContextMenuShortcut>
                                    </ContextMenuItem>
                                    <ContextMenuSub>
                                        <ContextMenuSubTrigger inset>
                                            More Tools
                                        </ContextMenuSubTrigger>
                                        <ContextMenuSubContent className="w-48">
                                            <ContextMenuItem>
                                                Save Page As...
                                                <ContextMenuShortcut>
                                                    ⇧⌘S
                                                </ContextMenuShortcut>
                                            </ContextMenuItem>
                                            <ContextMenuItem>
                                                Create Shortcut...
                                            </ContextMenuItem>
                                            <ContextMenuItem>
                                                Name Window...
                                            </ContextMenuItem>
                                            <ContextMenuSeparator />
                                            <ContextMenuItem>
                                                Developer Tools
                                            </ContextMenuItem>
                                        </ContextMenuSubContent>
                                    </ContextMenuSub>
                                    <ContextMenuSeparator />
                                    <ContextMenuCheckboxItem checked>
                                        Show Bookmarks Bar
                                        <ContextMenuShortcut>
                                            ⌘⇧B
                                        </ContextMenuShortcut>
                                    </ContextMenuCheckboxItem>
                                    <ContextMenuCheckboxItem>
                                        Show Full URLs
                                    </ContextMenuCheckboxItem>
                                    <ContextMenuSeparator />
                                    <ContextMenuRadioGroup value="pedro">
                                        <ContextMenuLabel inset>
                                            People
                                        </ContextMenuLabel>
                                        <ContextMenuSeparator />
                                        <ContextMenuRadioItem value="pedro">
                                            Pedro Duarte
                                        </ContextMenuRadioItem>
                                        <ContextMenuRadioItem value="colm">
                                            Colm Tuite
                                        </ContextMenuRadioItem>
                                    </ContextMenuRadioGroup>
                                </ContextMenuContent>
                            </ContextMenu>
                        </div>
                        <div className={"mt-4"} id={"data-table"}>
                            <h1 className={"text-lg mb-4"}> Data table </h1>
                        </div>
                        <div className={"mt-4"} id={"date-picker"}>
                            <h1 className={"text-lg mb-4"}> Date picker </h1>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        outline
                                        className={cn(
                                            "w-[280px] justify-start text-left font-normal",
                                            !datePicker &&
                                                "text-muted-foreground",
                                        )}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {datePicker ? (
                                            format(datePicker, "PPP")
                                        ) : (
                                            <span>Pick a date</span>
                                        )}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={datePicker}
                                        onSelect={setDatePicker}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className={"mt-4"} id={"dialog"}>
                            <h1 className={"text-lg mb-4"}> Dialog </h1>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button outline>Edit Profile</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Edit profile</DialogTitle>
                                        <DialogDescription>
                                            Make changes to your profile here.
                                            Click save when you're done.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label
                                                htmlFor="name"
                                                className="text-right"
                                            >
                                                Name
                                            </Label>
                                            <Input
                                                bordered
                                                id="name"
                                                value="Pedro Duarte"
                                                className="col-span-3"
                                            />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label
                                                htmlFor="username"
                                                className="text-right"
                                            >
                                                Username
                                            </Label>
                                            <Input
                                                bordered
                                                id="username"
                                                value="@peduarte"
                                                className="col-span-3"
                                            />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button type="submit">
                                            Save changes
                                        </Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                        <div className={"mt-4"} id={"drawer"}>
                            <h1 className={"text-lg mb-4"}> Drawer </h1>
                        </div>
                        <div className={"mt-4"} id={"dropdown-menu"}>
                            <h1 className={"text-lg mb-4"}> Dropdown menu </h1>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button outline>Open</Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuLabel>
                                        My Account
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            Profile
                                            <DropdownMenuShortcut>
                                                ⇧⌘P
                                            </DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Billing
                                            <DropdownMenuShortcut>
                                                ⌘B
                                            </DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Settings
                                            <DropdownMenuShortcut>
                                                ⌘S
                                            </DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Keyboard shortcuts
                                            <DropdownMenuShortcut>
                                                ⌘K
                                            </DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            Team
                                        </DropdownMenuItem>
                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>
                                                Invite users
                                            </DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <DropdownMenuItem>
                                                        Email
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        Message
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem>
                                                        More...
                                                    </DropdownMenuItem>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>
                                        <DropdownMenuItem>
                                            New Team
                                            <DropdownMenuShortcut>
                                                ⌘+T
                                            </DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>GitHub</DropdownMenuItem>
                                    <DropdownMenuItem>Support</DropdownMenuItem>
                                    <DropdownMenuItem disabled>
                                        API
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        Log out
                                        <DropdownMenuShortcut>
                                            ⇧⌘Q
                                        </DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <div className={"mt-4"} id={"form"}>
                            <h1 className={"text-lg mb-4"}> Form </h1>
                        </div>
                        <div className={"mt-4"} id={"hover-card"}>
                            <h1 className={"text-lg mb-4"}> Hover card </h1>
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <Button variant="link">@nextjs</Button>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-80">
                                    <div className="flex justify-between space-x-4">
                                        <Avatar>
                                            <AvatarImage src="https://github.com/vercel.png" />
                                            <AvatarFallback>VC</AvatarFallback>
                                        </Avatar>
                                        <div className="space-y-1">
                                            <h4 className="text-sm font-semibold">
                                                @nextjs
                                            </h4>
                                            <p className="text-sm">
                                                The React Framework – created
                                                and maintained by @vercel.
                                            </p>
                                            <div className="flex items-center pt-2">
                                                <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                                                <span className="text-xs text-muted-foreground">
                                                    Joined December 2021
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                        <div className={"mt-4"} id={"input"}>
                            <h1 className={"text-lg mb-4"}> Input </h1>
                            <Input bordered type="email" placeholder="Email" />
                        </div>
                        <div className={"mt-4"} id={"input-otp"}>
                            <h1 className={"text-lg mb-4"}> Input OTP </h1>
                            <InputOTP maxLength={6}>
                                <InputOTPGroup>
                                    <InputOTPSlot index={0} />
                                    <InputOTPSlot index={1} />
                                    <InputOTPSlot index={2} />
                                </InputOTPGroup>
                                <InputOTPSeparator />
                                <InputOTPGroup>
                                    <InputOTPSlot index={3} />
                                    <InputOTPSlot index={4} />
                                    <InputOTPSlot index={5} />
                                </InputOTPGroup>
                            </InputOTP>
                        </div>
                        <div className={"mt-4"} id={"label"}>
                            <h1 className={"text-lg mb-4"}> Label </h1>
                        </div>
                        <div className={"mt-4"} id={"menu-bar"}>
                            <h1 className={"text-lg mb-4"}> Menu bar </h1>
                            <Menubar className={"max-w-fit"}>
                                <MenubarMenu>
                                    <MenubarTrigger>File</MenubarTrigger>
                                    <MenubarContent>
                                        <MenubarItem>
                                            New Tab{" "}
                                            <MenubarShortcut>
                                                ⌘T
                                            </MenubarShortcut>
                                        </MenubarItem>
                                        <MenubarItem>
                                            New Window{" "}
                                            <MenubarShortcut>
                                                ⌘N
                                            </MenubarShortcut>
                                        </MenubarItem>
                                        <MenubarItem disabled>
                                            New Incognito Window
                                        </MenubarItem>
                                        <MenubarSeparator />
                                        <MenubarSub>
                                            <MenubarSubTrigger>
                                                Share
                                            </MenubarSubTrigger>
                                            <MenubarSubContent>
                                                <MenubarItem>
                                                    Email link
                                                </MenubarItem>
                                                <MenubarItem>
                                                    Messages
                                                </MenubarItem>
                                                <MenubarItem>Notes</MenubarItem>
                                            </MenubarSubContent>
                                        </MenubarSub>
                                        <MenubarSeparator />
                                        <MenubarItem>
                                            Print...{" "}
                                            <MenubarShortcut>
                                                ⌘P
                                            </MenubarShortcut>
                                        </MenubarItem>
                                    </MenubarContent>
                                </MenubarMenu>
                                <MenubarMenu>
                                    <MenubarTrigger>Edit</MenubarTrigger>
                                    <MenubarContent>
                                        <MenubarItem>
                                            Undo{" "}
                                            <MenubarShortcut>
                                                ⌘Z
                                            </MenubarShortcut>
                                        </MenubarItem>
                                        <MenubarItem>
                                            Redo{" "}
                                            <MenubarShortcut>
                                                ⇧⌘Z
                                            </MenubarShortcut>
                                        </MenubarItem>
                                        <MenubarSeparator />
                                        <MenubarSub>
                                            <MenubarSubTrigger>
                                                Find
                                            </MenubarSubTrigger>
                                            <MenubarSubContent>
                                                <MenubarItem>
                                                    Search the web
                                                </MenubarItem>
                                                <MenubarSeparator />
                                                <MenubarItem>
                                                    Find...
                                                </MenubarItem>
                                                <MenubarItem>
                                                    Find Next
                                                </MenubarItem>
                                                <MenubarItem>
                                                    Find Previous
                                                </MenubarItem>
                                            </MenubarSubContent>
                                        </MenubarSub>
                                        <MenubarSeparator />
                                        <MenubarItem>Cut</MenubarItem>
                                        <MenubarItem>Copy</MenubarItem>
                                        <MenubarItem>Paste</MenubarItem>
                                    </MenubarContent>
                                </MenubarMenu>
                                <MenubarMenu>
                                    <MenubarTrigger>View</MenubarTrigger>
                                    <MenubarContent>
                                        <MenubarCheckboxItem>
                                            Always Show Bookmarks Bar
                                        </MenubarCheckboxItem>
                                        <MenubarCheckboxItem checked>
                                            Always Show Full URLs
                                        </MenubarCheckboxItem>
                                        <MenubarSeparator />
                                        <MenubarItem inset>
                                            Reload{" "}
                                            <MenubarShortcut>
                                                ⌘R
                                            </MenubarShortcut>
                                        </MenubarItem>
                                        <MenubarItem disabled inset>
                                            Force Reload{" "}
                                            <MenubarShortcut>
                                                ⇧⌘R
                                            </MenubarShortcut>
                                        </MenubarItem>
                                        <MenubarSeparator />
                                        <MenubarItem inset>
                                            Toggle Fullscreen
                                        </MenubarItem>
                                        <MenubarSeparator />
                                        <MenubarItem inset>
                                            Hide Sidebar
                                        </MenubarItem>
                                    </MenubarContent>
                                </MenubarMenu>
                                <MenubarMenu>
                                    <MenubarTrigger>Profiles</MenubarTrigger>
                                    <MenubarContent>
                                        <MenubarRadioGroup value="benoit">
                                            <MenubarRadioItem value="andy">
                                                Andy
                                            </MenubarRadioItem>
                                            <MenubarRadioItem value="benoit">
                                                Benoit
                                            </MenubarRadioItem>
                                            <MenubarRadioItem value="Luis">
                                                Luis
                                            </MenubarRadioItem>
                                        </MenubarRadioGroup>
                                        <MenubarSeparator />
                                        <MenubarItem inset>Edit...</MenubarItem>
                                        <MenubarSeparator />
                                        <MenubarItem inset>
                                            Add Profile...
                                        </MenubarItem>
                                    </MenubarContent>
                                </MenubarMenu>
                            </Menubar>
                        </div>
                        <div className={"mt-4"} id={"navigation-menu"}>
                            <h1 className={"text-lg mb-4"}> Navigation menu</h1>
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>
                                            Getting started
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                                <li className="row-span-3">
                                                    <NavigationMenuLink asChild>
                                                        <a
                                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                            href="/"
                                                        >
                                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                                shadcn/ui
                                                            </div>
                                                            <p className="text-sm leading-tight text-muted-foreground">
                                                                Beautifully
                                                                designed
                                                                components built
                                                                with Radix UI
                                                                and Tailwind
                                                                CSS.
                                                            </p>
                                                        </a>
                                                    </NavigationMenuLink>
                                                </li>
                                                <ListItem
                                                    href="/docs"
                                                    title="Introduction"
                                                >
                                                    Re-usable components built
                                                    using Radix UI and Tailwind
                                                    CSS.
                                                </ListItem>
                                                <ListItem
                                                    href="/docs/installation"
                                                    title="Installation"
                                                >
                                                    How to install dependencies
                                                    and structure your app.
                                                </ListItem>
                                                <ListItem
                                                    href="/docs/primitives/typography"
                                                    title="Typography"
                                                >
                                                    Styles for headings,
                                                    paragraphs, lists...etc
                                                </ListItem>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>
                                            Components
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                                {components.map((component) => (
                                                    <ListItem
                                                        key={component.title}
                                                        title={component.title}
                                                        href={component.href}
                                                    >
                                                        {component.description}
                                                    </ListItem>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <a href="/docs">
                                            <NavigationMenuLink
                                                className={navigationMenuTriggerStyle()}
                                            >
                                                Documentation
                                            </NavigationMenuLink>
                                        </a>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                        <div className={"mt-4"} id={"pagination"}>
                            <h1 className={"text-lg mb-4"}> Pagination </h1>
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious href="#" />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">
                                            1
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#" isActive>
                                            2
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">
                                            3
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationEllipsis />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationNext href="#" />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                        <div className={"mt-4"} id={"popover"}>
                            <h1 className={"text-lg mb-4"}> Popover </h1>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button outline>Open popover</Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-80">
                                    <div className="grid gap-4">
                                        <div className="space-y-2">
                                            <h4 className="font-medium leading-none">
                                                Dimensions
                                            </h4>
                                            <p className="text-sm text-muted-foreground">
                                                Set the dimensions for the
                                                layer.
                                            </p>
                                        </div>
                                        <div className="grid gap-2">
                                            <div className="grid grid-cols-3 items-center gap-4">
                                                <Label htmlFor="width">
                                                    Width
                                                </Label>
                                                <Input
                                                    id="width"
                                                    defaultValue="100%"
                                                    className="col-span-2 h-8"
                                                />
                                            </div>
                                            <div className="grid grid-cols-3 items-center gap-4">
                                                <Label htmlFor="maxWidth">
                                                    Max. width
                                                </Label>
                                                <Input
                                                    id="maxWidth"
                                                    defaultValue="300px"
                                                    className="col-span-2 h-8"
                                                />
                                            </div>
                                            <div className="grid grid-cols-3 items-center gap-4">
                                                <Label htmlFor="height">
                                                    Height
                                                </Label>
                                                <Input
                                                    id="height"
                                                    defaultValue="25px"
                                                    className="col-span-2 h-8"
                                                />
                                            </div>
                                            <div className="grid grid-cols-3 items-center gap-4">
                                                <Label htmlFor="maxHeight">
                                                    Max. height
                                                </Label>
                                                <Input
                                                    id="maxHeight"
                                                    defaultValue="none"
                                                    className="col-span-2 h-8"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className={"mt-4"} id={"progress"}>
                            <h1 className={"text-lg mb-4"}> Progress </h1>
                            <Progress value={progress} className="w-[60%]" />
                        </div>
                        <div className={"mt-4"} id={"radio-group"}>
                            <h1 className={"text-lg mb-4"}> Radio group </h1>
                            <RadioGroup defaultValue="comfortable">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="default" id="r1" />
                                    <Label htmlFor="r1">Default</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="comfortable"
                                        id="r2"
                                    />
                                    <Label htmlFor="r2">Comfortable</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="compact" id="r3" />
                                    <Label htmlFor="r3">Compact</Label>
                                </div>
                            </RadioGroup>
                        </div>
                        <div className={"mt-4"} id={"resizable"}>
                            <h1 className={"text-lg mb-4"}> Resizable </h1>
                            <ResizablePanelGroup
                                direction="horizontal"
                                className="max-w-md rounded-lg border md:min-w-[450px]"
                            >
                                <ResizablePanel defaultSize={50}>
                                    <div className="flex h-[200px] items-center justify-center p-6">
                                        <span className="font-semibold">
                                            One
                                        </span>
                                    </div>
                                </ResizablePanel>
                                <ResizableHandle />
                                <ResizablePanel defaultSize={50}>
                                    <ResizablePanelGroup direction="vertical">
                                        <ResizablePanel defaultSize={25}>
                                            <div className="flex h-full items-center justify-center p-6">
                                                <span className="font-semibold">
                                                    Two
                                                </span>
                                            </div>
                                        </ResizablePanel>
                                        <ResizableHandle withHandle />
                                        <ResizablePanel defaultSize={75}>
                                            <div className="flex h-full items-center justify-center p-6">
                                                <span className="font-semibold">
                                                    Three
                                                </span>
                                            </div>
                                        </ResizablePanel>
                                    </ResizablePanelGroup>
                                </ResizablePanel>
                            </ResizablePanelGroup>
                        </div>
                        <div className={"mt-4"} id={"scroll"}>
                            <h1 className={"text-lg mb-4"}> Scroll </h1>
                            <ScrollArea className="h-72 w-48 rounded-md border">
                                <div className="p-4">
                                    <h4 className="mb-4 text-sm font-medium leading-none">
                                        Tags
                                    </h4>
                                    {tags.map((tag) => (
                                        <>
                                            <div key={tag} className="text-sm">
                                                {tag}
                                            </div>
                                            <Separator className="my-2" />
                                        </>
                                    ))}
                                </div>
                            </ScrollArea>
                        </div>
                        <div className={"mt-4"} id={"select"}>
                            <h1 className={"text-lg mb-4"}> Select </h1>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a fruit" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Fruits</SelectLabel>
                                        <SelectItem value="apple">
                                            Apple
                                        </SelectItem>
                                        <SelectItem value="banana">
                                            Banana
                                        </SelectItem>
                                        <SelectItem value="blueberry">
                                            Blueberry
                                        </SelectItem>
                                        <SelectItem value="grapes">
                                            Grapes
                                        </SelectItem>
                                        <SelectItem value="pineapple">
                                            Pineapple
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className={"mt-4"} id={"separator"}>
                            <h1 className={"text-lg mb-4"}> Separator </h1>
                            <div>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-medium leading-none">
                                        Radix Primitives
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                        An open-source UI component library.
                                    </p>
                                </div>
                                <Separator className="my-4" />
                                <div className="flex h-5 items-center space-x-4 text-sm">
                                    <div>Blog</div>
                                    <Separator orientation="vertical" />
                                    <div>Docs</div>
                                    <Separator orientation="vertical" />
                                    <div>Source</div>
                                </div>
                            </div>
                        </div>
                        <div className={"mt-4"} id={"sheet"}>
                            <h1 className={"text-lg mb-4"}> Sheet </h1>
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button outline>Open</Button>
                                </SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetTitle>Edit profile</SheetTitle>
                                        <SheetDescription>
                                            Make changes to your profile here.
                                            Click save when you're done.
                                        </SheetDescription>
                                    </SheetHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label
                                                htmlFor="name"
                                                className="text-right"
                                            >
                                                Name
                                            </Label>
                                            <Input
                                                id="name"
                                                value="Pedro Duarte"
                                                className="col-span-3"
                                            />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label
                                                htmlFor="username"
                                                className="text-right"
                                            >
                                                Username
                                            </Label>
                                            <Input
                                                id="username"
                                                value="@peduarte"
                                                className="col-span-3"
                                            />
                                        </div>
                                    </div>
                                    <SheetFooter>
                                        <SheetClose asChild>
                                            <Button type="submit">
                                                Save changes
                                            </Button>
                                        </SheetClose>
                                    </SheetFooter>
                                </SheetContent>
                            </Sheet>
                        </div>
                        <div className={"mt-4"} id={"skeleton"}>
                            <h1 className={"text-lg mb-4"}> Skeleton </h1>
                            <div className="flex items-center space-x-4">
                                <Skeleton className="h-12 w-12 rounded-full" />
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-[250px]" />
                                    <Skeleton className="h-4 w-[200px]" />
                                </div>
                            </div>
                        </div>
                        <div className={"mt-4"} id={"slider"}>
                            <h1 className={"text-lg mb-4"}> Slider </h1>
                            <Slider defaultValue={[33]} max={100} step={1} />
                        </div>
                        <div className={"mt-4"} id={"sooner"}>
                            <h1 className={"text-lg mb-4"}> Sooner </h1>
                            <Button
                                outline
                                onClick={() =>
                                    toast("Event has been created", {
                                        description:
                                            "Sunday, December 03, 2023 at 9:00 AM",
                                        action: {
                                            label: "Undo",
                                            onClick: () => console.log("Undo"),
                                        },
                                    })
                                }
                            >
                                Show Toast
                            </Button>
                        </div>
                        <div className={"mt-4"} id={"switch"}>
                            <h1 className={"text-lg mb-4"}> Switch </h1>
                            <div className="flex items-center space-x-2">
                                <Switch id="airplane-mode" />
                                <Label htmlFor="airplane-mode">
                                    Airplane Mode
                                </Label>
                            </div>
                        </div>
                        <div className={"mt-4"} id={"table"}>
                            <h1 className={"text-lg mb-4"}> Table </h1>
                        </div>
                        <div className={"mt-4"} id={"tabs"}>
                            <h1 className={"text-lg mb-4"}> Tabs </h1>
                            <Tabs defaultValue="account" className="w-[400px]">
                                <TabsList className="grid w-full grid-cols-2">
                                    <TabsTrigger value="account">
                                        Account
                                    </TabsTrigger>
                                    <TabsTrigger value="password">
                                        Password
                                    </TabsTrigger>
                                </TabsList>
                                <TabsContent value="account">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Account</CardTitle>
                                            <CardDescription>
                                                Make changes to your account
                                                here. Click save when you're
                                                done.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-2">
                                            <div className="space-y-1">
                                                <Label htmlFor="name">
                                                    Name
                                                </Label>
                                                <Input
                                                    id="name"
                                                    defaultValue="Pedro Duarte"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <Label htmlFor="username">
                                                    Username
                                                </Label>
                                                <Input
                                                    id="username"
                                                    defaultValue="@peduarte"
                                                />
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <Button
                                                variant={"primary"}
                                                size={"sm"}
                                            >
                                                Save password
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </TabsContent>
                                <TabsContent value="password">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Password</CardTitle>
                                            <CardDescription>
                                                Change your password here. After
                                                saving, you'll be logged out.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-2">
                                            <div className="space-y-1">
                                                <Label htmlFor="current">
                                                    Current password
                                                </Label>
                                                <Input
                                                    id="current"
                                                    type="password"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <Label htmlFor="new">
                                                    New password
                                                </Label>
                                                <Input
                                                    id="new"
                                                    type="password"
                                                />
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <Button
                                                variant={"primary"}
                                                size={"sm"}
                                            >
                                                Save password
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </TabsContent>
                            </Tabs>
                        </div>
                        <div className={"mt-4"} id={"textarea"}>
                            <h1 className={"text-lg mb-4"}> Textarea </h1>
                            <Textarea placeholder="Type your message here." />
                        </div>
                        <div className={"mt-4"} id={"toggle"}>
                            <h1 className={"text-lg mb-4"}> Toggle </h1>
                            <Toggle aria-label="Toggle italic">
                                <Bold className="h-4 w-4" />
                            </Toggle>
                        </div>
                        <div className={"mt-4"} id={"toggle-group"}>
                            <h1 className={"text-lg mb-4"}> Toggle group </h1>
                            <ToggleGroup type="multiple">
                                <ToggleGroupItem
                                    value="bold"
                                    aria-label="Toggle bold"
                                >
                                    <Bold className="h-4 w-4" />
                                </ToggleGroupItem>
                                <ToggleGroupItem
                                    value="italic"
                                    aria-label="Toggle italic"
                                >
                                    <Italic className="h-4 w-4" />
                                </ToggleGroupItem>
                                <ToggleGroupItem
                                    value="strikethrough"
                                    aria-label="Toggle strikethrough"
                                >
                                    <Underline className="h-4 w-4" />
                                </ToggleGroupItem>
                            </ToggleGroup>
                        </div>
                        <div className={"mt-4"} id={"tooltip"}>
                            <h1 className={"text-lg mb-4"}> Tooltip </h1>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button outline>Hover</Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Add to library</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </>
    );
}
