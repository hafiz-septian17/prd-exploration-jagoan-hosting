import { Package2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function LandingHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 bg-transparent py-4">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Package2 className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold text-foreground">JUALIN</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#features" className="text-foreground hover:text-primary transition-colors">
            Fitur
          </Link>
          <Link href="#testimonials" className="text-foreground hover:text-primary transition-colors">
            Testimoni
          </Link>
          <Link href="#training" className="text-foreground hover:text-primary transition-colors">
            Pelatihan
          </Link>
        </nav>
        <Button asChild variant="outline">
          <Link href="/login">Masuk / Daftar</Link>
        </Button>
      </div>
    </header>
  );
}
