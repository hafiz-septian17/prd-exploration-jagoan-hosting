import { Package2 } from 'lucide-react';
import Link from 'next/link';

export default function LandingFooter() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 md:px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-2">
            <Package2 className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold text-foreground">JUALIN</span>
          </Link>
          <p className="text-muted-foreground text-sm max-w-xs">
            Platform untuk UMKM Sidoarjo. Mudah, cepat, dan elegan.
          </p>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold text-foreground">Produk</h3>
          <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
            Fitur
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
            Harga
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
            Pelatihan
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold text-foreground">Perusahaan</h3>
          <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
            Tentang Kami
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
            Kontak
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
            Karir
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold text-foreground">Legal</h3>
          <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
            Syarat & Ketentuan
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
            Kebijakan Privasi
          </Link>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto px-4 md:px-6 py-6 flex justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} JUALIN. All rights reserved.
          </p>
          {/* Social media icons can be added here */}
        </div>
      </div>
    </footer>
  );
}
