import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"

export default function PengaturanPage() {
  return (
    <div className="mx-auto grid w-full max-w-6xl gap-2">
      <h1 className="text-3xl font-semibold">Pengaturan</h1>

      <main className="grid flex-1 gap-4 md:grid-cols-4 md:gap-8">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-4">
          <Card>
            <CardHeader>
              <CardTitle>Profil Toko</CardTitle>
              <CardDescription>
                Informasi ini akan ditampilkan di halaman minisite Anda.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-3">
                        <label className="font-medium text-sm" htmlFor="store-name">Nama Toko</label>
                        <Input id="store-name" type="text" defaultValue="Toko Kue Ibu Siti" />
                    </div>
                    <div className="grid gap-3">
                        <label className="font-medium text-sm" htmlFor="store-owner">Nama Pemilik</label>
                        <Input id="store-owner" type="text" defaultValue="Siti Aminah" />
                    </div>
                </div>
                 <div className="grid gap-3">
                    <label className="font-medium text-sm" htmlFor="store-email">Email Kontak</label>
                    <Input id="store-email" type="email" defaultValue="siti.aminah@example.com" />
                </div>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button>Simpan</Button>
            </CardFooter>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle>Keamanan</CardTitle>
              <CardDescription>
                Ubah kata sandi Anda di sini.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
                 <div className="grid gap-3">
                    <label className="font-medium text-sm" htmlFor="current-password">Kata Sandi Saat Ini</label>
                    <Input id="current-password" type="password" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-3">
                        <label className="font-medium text-sm" htmlFor="new-password">Kata Sandi Baru</label>
                        <Input id="new-password" type="password" />
                    </div>
                    <div className="grid gap-3">
                        <label className="font-medium text-sm" htmlFor="confirm-password">Konfirmasi Kata Sandi</label>
                        <Input id="confirm-password" type="password" />
                    </div>
                </div>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button>Ubah Kata Sandi</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Notifikasi</CardTitle>
              <CardDescription>
                Atur preferensi notifikasi email Anda.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="flex items-center space-x-2">
                <Checkbox id="promo-emails" defaultChecked />
                <label
                  htmlFor="promo-emails"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email promosi dan tips dari JUALIN
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="report-emails" defaultChecked />
                <label
                  htmlFor="report-emails"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Laporan performa mingguan
                </label>
              </div>
            </CardContent>
             <CardFooter className="border-t px-6 py-4">
              <Button>Simpan Preferensi</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}
