import Image from "next/image"
import { MoreHorizontal, PlusCircle } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { products } from "@/lib/data"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


export default function KatalogPage() {
  return (
    <Tabs defaultValue="all">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="all">Semua</TabsTrigger>
          <TabsTrigger value="Makanan">Makanan</TabsTrigger>
          <TabsTrigger value="Camilan">Camilan</TabsTrigger>
          <TabsTrigger value="Lauk Pauk">Lauk Pauk</TabsTrigger>
          <TabsTrigger value="Kue">Kue</TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
            <Dialog>
                <DialogTrigger asChild>
                    <Button size="sm" className="h-8 gap-1">
                        <PlusCircle className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Tambah Produk
                        </span>
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                    <DialogTitle>Tambah Produk Baru</DialogTitle>
                    <DialogDescription>
                        Isi detail produk Anda di sini. Klik simpan jika sudah selesai.
                    </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="photo" className="text-right">Foto</Label>
                            <Input id="photo" type="file" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">Nama</Label>
                            <Input id="name" placeholder="Sambel Pecel" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="price" className="text-right">Harga</Label>
                            <Input id="price" type="number" placeholder="25000" className="col-span-3" />
                        </div>
                         <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="category" className="text-right">Kategori</Label>
                            <Select>
                                <SelectTrigger className="col-span-3">
                                    <SelectValue placeholder="Pilih Kategori" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Makanan">Makanan</SelectItem>
                                    <SelectItem value="Camilan">Camilan</SelectItem>
                                    <SelectItem value="Lauk Pauk">Lauk Pauk</SelectItem>
                                    <SelectItem value="Kue">Kue</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                         <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="stock" className="text-right">Stok</Label>
                            <Select>
                                <SelectTrigger className="col-span-3">
                                    <SelectValue placeholder="Status Stok" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Tersedia">Tersedia</SelectItem>
                                    <SelectItem value="Habis">Habis</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                         <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">Deskripsi</Label>
                            <Textarea id="description" placeholder="Deskripsi singkat produk" className="col-span-3" />
                        </div>
                    </div>
                    <DialogFooter>
                    <Button type="submit">Simpan Produk</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
      </div>
      <TabsContent value="all">
        <Card>
          <CardHeader>
            <CardTitle>Katalog Produk</CardTitle>
            <CardDescription>
              Kelola produk Anda dan lihat performanya.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="hidden w-[100px] sm:table-cell">
                    <span className="sr-only">Image</span>
                  </TableHead>
                  <TableHead>Nama</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden md:table-cell">Harga</TableHead>
                  <TableHead className="hidden md:table-cell">Dilihat</TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map(product => {
                    const image = PlaceHolderImages.find(p => p.id === product.image);
                    return (
                        <TableRow key={product.id}>
                            <TableCell className="hidden sm:table-cell">
                                {image && 
                                    <Image
                                        alt={product.name}
                                        className="aspect-square rounded-md object-cover"
                                        height="64"
                                        src={image.imageUrl}
                                        width="64"
                                        data-ai-hint={image.imageHint}
                                    />
                                }
                            </TableCell>
                            <TableCell className="font-medium">{product.name}</TableCell>
                            <TableCell>
                                <Badge variant={product.stock === 'Tersedia' ? 'outline' : 'destructive'}>{product.stock}</Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">Rp {product.price.toLocaleString('id-ID')}</TableCell>
                            <TableCell className="hidden md:table-cell">1,204</TableCell>
                            <TableCell>
                                <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button aria-haspopup="true" size="icon" variant="ghost">
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Toggle menu</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                                    <DropdownMenuItem>Edit</DropdownMenuItem>
                                    <DropdownMenuItem>Hapus</DropdownMenuItem>
                                </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    )
                })}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <div className="text-xs text-muted-foreground">
              Menampilkan <strong>1-6</strong> dari <strong>6</strong> produk
            </div>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
