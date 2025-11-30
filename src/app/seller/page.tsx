"use client";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { trainingFeatures } from '@/lib/data';
import * as Icons from 'lucide-react';
import LandingHeader from '@/components/landing/header';
import LandingFooter from '@/components/landing/footer';

type IconName = keyof typeof Icons;

const HeroIcon = ({ name, ...props }: { name: IconName } & React.ComponentProps<typeof Icons.Icon>) => {
  const Icon = Icons[name] as React.ElementType;
  if (!Icon) return null;
  return <Icon {...props} />;
};

export default function SellerPage() {
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
                  Transformasi Bisnis UMKM Anda dari Pemula Menjadi Profesional
                </h1>
                <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                  Ikuti program pelatihan intensif 7 sesi kami dan kuasai semua aspek penting untuk membawa bisnis Anda ke level selanjutnya.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg">
                    <Link href="/login">
                      Daftar Pelatihan Sekarang <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="#features">Lihat Materi</Link>
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
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Materi Pelatihan</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Kurikulum Komprehensif untuk UMKM Profesional
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Setiap sesi dirancang untuk memberikan Anda keahlian praktis yang bisa langsung diterapkan pada bisnis Anda.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-4 mt-12">
              {trainingFeatures.map((feature) => (
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
             <div className="mt-16 text-center">
                <p className="text-muted-foreground">Dan masih banyak lagi materi bermanfaat lainnya!</p>
            </div>
          </div>
        </section>
        
        {/* Training Call to Action Section */}
        <section id="training" className="w-full py-20 md:py-32">
          <div className="container mx-auto grid items-center justify-center gap-6 px-4 text-center md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-primary md:text-4xl/tight">
                Siap Meningkatkan Level Bisnis Anda?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Investasi terbaik untuk masa depan bisnis Anda. Daftar program pelatihan 7 sesi kami dengan biaya hanya <strong>Rp 100.000 per sesi</strong>.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Button asChild size="lg" className="w-full">
                <Link href="/login">Daftar Pelatihan</Link>
              </Button>
              <p className="text-xs text-muted-foreground">
                Jadilah bagian dari komunitas UMKM profesional yang bertumbuh bersama.
              </p>
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </div>
  );
}
