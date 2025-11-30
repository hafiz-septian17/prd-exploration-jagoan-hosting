import Image from "next/image"
import Link from "next/link"
import { Package2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export default function LoginPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'landing-hero');

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
             <Link href="/" className="flex items-center gap-2 justify-center mb-4">
                <Package2 className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold text-foreground">JUALIN</span>
            </Link>
            <h1 className="text-3xl font-bold">Selamat Datang Kembali</h1>
            <p className="text-balance text-muted-foreground">
              Masukkan email Anda untuk masuk ke akun JUALIN
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Lupa password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full" asChild>
                <Link href="/dashboard">Masuk</Link>
            </Button>
            <Button variant="outline" className="w-full">
              Masuk dengan Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Belum punya akun?{" "}
            <Link href="#" className="underline">
              Daftar
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt="JUALIN dashboard mockup"
                width="1920"
                height="1080"
                className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                data-ai-hint={heroImage.imageHint}
            />
        )}
      </div>
    </div>
  )
}
