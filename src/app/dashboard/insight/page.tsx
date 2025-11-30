"use client"

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart,
    Line,
  } from "recharts"
import { Eye, DollarSign, ShoppingCart, Users, ArrowDown, ArrowUp } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { pageVisitsData, popularProductsData } from "@/lib/data"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const visitsChartConfig = {
    visits: {
      label: "Kunjungan",
      color: "hsl(var(--primary))",
    },
};

const productsChartConfig = {
    views: {
        label: "Dilihat",
        color: "hsl(var(--accent))",
    },
};


export default function InsightPage() {
  return (
    <div className="flex flex-col gap-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Kunjungan</CardTitle>
                    <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">12,832</div>
                    <p className="text-xs text-muted-foreground flex items-center">
                        <ArrowUp className="h-4 w-4 text-green-500"/> +15.2% vs bulan lalu
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Penjualan</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">Rp 18.2M</div>
                    <p className="text-xs text-muted-foreground flex items-center">
                        <ArrowUp className="h-4 w-4 text-green-500"/> +8.1% vs bulan lalu
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Produk Terjual</CardTitle>
                    <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">892</div>
                     <p className="text-xs text-muted-foreground flex items-center">
                        <ArrowDown className="h-4 w-4 text-red-500"/> -2.4% vs bulan lalu
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Pelanggan Baru</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">152</div>
                    <p className="text-xs text-muted-foreground flex items-center">
                        <ArrowUp className="h-4 w-4 text-green-500"/> +31% vs bulan lalu
                    </p>
                </CardContent>
            </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <Card className="lg:col-span-3">
                <CardHeader>
                <CardTitle>Grafik Kunjungan (30 Hari Terakhir)</CardTitle>
                <CardDescription>Analisis tren kunjungan ke minisite Anda.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={visitsChartConfig} className="min-h-[300px] w-full">
                        <LineChart accessibilityLayer data={Array(30).fill(0).map((_, i) => ({ day: i + 1, visits: 100 + Math.random() * 150 + i * 5 }))}>
                            <CartesianGrid vertical={false} />
                            <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(v) => `Hari ${v}`} />
                            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                            <Tooltip content={<ChartTooltipContent />} />
                            <Line type="monotone" dataKey="visits" stroke="var(--color-visits)" strokeWidth={2} dot={false} />
                        </LineChart>
                    </ChartContainer>
                </CardContent>
            </Card>
            <Card className="lg:col-span-2">
                <CardHeader>
                <CardTitle>Produk Paling Populer</CardTitle>
                <CardDescription>Produk yang paling banyak dilihat pengunjung.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={productsChartConfig} className="min-h-[300px] w-full">
                        <BarChart accessibilityLayer data={popularProductsData} layout="vertical" margin={{ left: 10 }}>
                            <YAxis dataKey="name" type="category" tickLine={false} axisLine={false} tickMargin={8} width={80} />
                            <XAxis type="number" hide />
                            <Tooltip cursor={false} content={<ChartTooltipContent />} />
                             <Bar dataKey="views" layout="vertical" fill="var(--color-views)" radius={4} />
                        </BarChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </div>
    </div>
  )
}
