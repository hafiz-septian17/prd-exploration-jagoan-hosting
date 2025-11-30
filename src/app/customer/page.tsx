"use client";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Search, ShoppingCart } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { testimonials, products } from '@/lib/data';
import LandingHeader from '@/components/landing/header';
import LandingFooter from '@/components/landing/footer';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

export default function CustomerPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'landing-hero');

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <LandingHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Temukan Produk Lokal Unggulan Sidoarjo
              </h1>
              <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
                Jelajahi beragam produk berkualitas langsung dari para pelaku UMKM. Dukung usaha lokal, nikmati kualitas terbaik.
              </p>
              <div className="w-full max-w-lg">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Cari sambel pecel, keripik, atau lainnya..."
                    className="w-full rounded-full pl-10 pr-4 py-3 h-12 text-base"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="w-full py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Katalog Produk
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Lihat dan temukan produk favorit Anda dari UMKM terbaik di Sidoarjo.
                </p>
            </div>
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
              {products.map((product) => {
                const image = PlaceHolderImages.find(p => p.id === product.image);
                return (
                  <Card key={product.id} className="flex flex-col overflow-hidden">
                    <CardHeader className="p-0">
                      {image && (
                          <Image
                              alt={product.name}
                              className="aspect-video w-full object-cover"
                              height="225"
                              src={image.imageUrl}
                              width="400"
                              data-ai-hint={image.imageHint}
                          />
                      )}
                    </CardHeader>
                    <CardContent className="p-4 flex-1">
                        <Badge variant={product.stock === 'Tersedia' ? 'outline' : 'destructive'}>{product.stock}</Badge>
                        <h3 className="text-lg font-bold mt-2">{product.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                    </CardContent>
                    <CardFooter className="p-4 flex justify-between items-center">
                        <p className="text-lg font-semibold text-primary">Rp {product.price.toLocaleString('id-ID')}</p>
                        <Button size="icon" variant="outline">
                            <ShoppingCart className="h-4 w-4" />
                            <span className="sr-only">Add to cart</span>
                        </Button>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>
             <div className="mt-12 text-center">
                <Button size="lg" variant="outline">
                    Lihat Semua Produk <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full bg-secondary py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Apa Kata Pelanggan Kami?
            </h2>
            <p className="mx-auto max-w-[700px] text-center text-muted-foreground md:text-xl/relaxed mt-4">
              Pengalaman mereka yang telah merasakan kualitas produk UMKM Sidoarjo.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => {
                const avatar = PlaceHolderImages.find((img) => img.id === testimonial.id);
                return (
                  <Card key={testimonial.name} className="flex flex-col">
                    <CardContent className="flex-1 pt-6">
                      <p className="italic text-foreground">"{testimonial.quote}"</p>
                    </CardContent>
                    <CardFooter className="mt-4 flex items-center gap-4">
                      {avatar && (
                        <Avatar>
                          <AvatarImage src={avatar.imageUrl} alt={testimonial.name} data-ai-hint={avatar.imageHint} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      )}
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </div>
  );
}
