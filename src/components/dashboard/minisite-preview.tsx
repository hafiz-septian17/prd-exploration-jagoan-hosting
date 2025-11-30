'use client';

import Image from 'next/image';
import { Instagram, MapPin, Phone, ShoppingBag, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface MinisitePreviewProps {
  logo: string | null;
  banner: string | null;
  description: string;
  cta: {
    whatsapp: string;
    instagram: string;
    shopee: string;
  };
  location: string;
}

export function MinisitePreview({
  logo,
  banner,
  description,
  cta,
  location,
}: MinisitePreviewProps) {
  const placeholderLogo = PlaceHolderImages.find((p) => p.id === 'umkm-logo');
  const placeholderBanner = PlaceHolderImages.find((p) => p.id === 'umkm-banner');
  const products = PlaceHolderImages.filter(p => p.id.startsWith('product-')).slice(0, 3);

  return (
    <div className="w-full h-full bg-secondary rounded-lg overflow-hidden">
      <div className="w-full max-w-md mx-auto bg-background shadow-lg rounded-lg h-full overflow-y-auto">
        <div className="relative">
          <Image
            src={banner || placeholderBanner?.imageUrl || ''}
            alt="Banner"
            width={1200}
            height={400}
            className="w-full h-40 object-cover"
            data-ai-hint={placeholderBanner?.imageHint || 'store banner'}
          />
          <div className="absolute -bottom-12 left-6">
            <Image
              src={logo || placeholderLogo?.imageUrl || ''}
              alt="Logo"
              width={100}
              height={100}
              className="w-24 h-24 rounded-full object-cover border-4 border-background bg-background"
              data-ai-hint={placeholderLogo?.imageHint || 'company logo'}
            />
          </div>
        </div>
        <div className="pt-16 px-6 pb-6">
          <h1 className="text-2xl font-bold">Nama UMKM Anda</h1>
          <p className="text-muted-foreground mt-2">
            {description || 'Deskripsi singkat tentang usaha Anda akan muncul di sini. Jelaskan apa yang membuat produk Anda istimewa.'}
          </p>
          {location && (
            <div className="flex items-center gap-2 mt-4 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          )}
          <div className="mt-6 flex flex-wrap gap-2">
            {cta.whatsapp && (
              <Button variant="outline">
                <Phone className="w-4 h-4 mr-2" /> WhatsApp
              </Button>
            )}
            {cta.instagram && (
              <Button variant="outline">
                <Instagram className="w-4 h-4 mr-2" /> Instagram
              </Button>
            )}
            {cta.shopee && (
              <Button variant="outline">
                <ShoppingBag className="w-4 h-4 mr-2" /> Shopee
              </Button>
            )}
             <Button variant="outline">
                <Globe className="w-4 h-4 mr-2" /> Website
              </Button>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Produk Unggulan</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {products.map(product => (
                <Card key={product.id}>
                  <CardContent className="p-0">
                    <Image
                      src={product.imageUrl}
                      alt={product.description}
                      width={400}
                      height={300}
                      className="w-full h-24 object-cover rounded-t-lg"
                      data-ai-hint={product.imageHint}
                    />
                    <div className="p-3">
                      <h3 className="font-semibold text-sm truncate">{product.description}</h3>
                      <p className="text-primary font-bold text-sm mt-1">Rp 25.000</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
