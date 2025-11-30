import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { features, testimonials } from '@/lib/data';
import * as Icons from 'lucide-react';
import LandingHeader from '@/components/landing/header';
import LandingFooter from '@/components/landing/footer';

type IconName = keyof typeof Icons;

const HeroIcon = ({ name, ...props }: { name: IconName } & React.ComponentProps<typeof Icons.Icon>) => {
  const Icon = Icons[name] as React.ElementType;
  if (!Icon) return null;
  return <Icon {...props} />;
};

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'landing-hero');

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <LandingHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center space-y-6">
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                  Bangun Minisite & Katalog Digital untuk UMKM Anda dalam Hitungan Menit
                </h1>
                <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                  Solusi cepat, mudah, dan elegan untuk hadir secara online. JUALIN membantu UMKM Sidoarjo untuk tumbuh dan menjangkau lebih banyak pelanggan.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg">
                    <Link href="/login">
                      Mulai Sekarang <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="#features">Lihat Fitur</Link>
                  </Button>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                {heroImage && (
                  <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    width={1200}
                    height={800}
                    className="rounded-xl object-cover shadow-2xl"
                    data-ai-hint={heroImage.imageHint}
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full bg-secondary py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Fitur Utama</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Semua yang Anda Butuhkan untuk Go Digital
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Dari membuat halaman produk hingga menganalisis performa, JUALIN menyediakan alat yang tepat untuk kesuksesan bisnis Anda.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-4 mt-12">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col items-center text-center gap-4">
                  <div className="bg-primary/10 text-primary p-4 rounded-full">
                    <HeroIcon name={feature.icon as IconName} className="h-8 w-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Kisah Sukses dari Rekan UMKM
            </h2>
            <p className="mx-auto max-w-[700px] text-center text-muted-foreground md:text-xl/relaxed mt-4">
              Lihat bagaimana JUALIN membantu para pelaku usaha seperti Anda.
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

        {/* Training Section */}
        <section className="w-full bg-secondary py-20 md:py-32">
          <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter text-primary md:text-4xl/tight">
                Tingkatkan Skill Bisnis Anda
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ikuti program pelatihan 7 sesi kami untuk menjadi pengusaha UMKM profesional. Investasi hanya Rp 100.000 per sesi.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Button asChild size="lg" className="w-full">
                <Link href="/login">Daftar Pelatihan</Link>
              </Button>
              <p className="text-xs text-muted-foreground">
                Jadilah bagian dari komunitas UMKM yang bertumbuh bersama.
              </p>
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </div>
  );
}
