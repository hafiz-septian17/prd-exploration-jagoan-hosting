"use client"
import Link from 'next/link';
import { Building, Package2, ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function WelcomePage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-background p-4">
       <div className="flex items-center gap-2 mb-8">
          <Package2 className="h-8 w-8 text-primary" />
          <span className="text-3xl font-bold text-foreground">JUALIN</span>
        </div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Selamat Datang di JUALIN
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
          Platform digital untuk UMKM Sidoarjo. Temukan produk lokal berkualitas atau kembangkan bisnis Anda bersama kami.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <Card className="flex flex-col items-center justify-center text-center p-8 hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full mb-4">
              <ShoppingCart className="h-12 w-12" />
            </div>
            <CardTitle className="text-2xl font-bold">Saya Pembeli</CardTitle>
            <CardDescription>
              Jelajahi dan temukan produk-produk unggulan dari UMKM terbaik di Sidoarjo.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild size="lg">
              <Link href="/customer">
                Jelajahi Produk
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="flex flex-col items-center justify-center text-center p-8 hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full mb-4">
                <Building className="h-12 w-12" />
            </div>
            <CardTitle className="text-2xl font-bold">Saya Penjual</CardTitle>
            <CardDescription>
              Buat minisite, kelola katalog, dan jangkau lebih banyak pelanggan. Gabung sekarang!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild size="lg" variant="outline">
              <Link href="/login">
                Mulai Berjualan
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
       <p className="mt-12 text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} JUALIN. All rights reserved.
      </p>
    </div>
  );
}
