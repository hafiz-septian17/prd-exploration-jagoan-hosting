"use client";

import { useState } from 'react';
import { Instagram, MapPin, Phone, ShoppingBag, Upload } from "lucide-react";
import { MinisitePreview } from "@/components/dashboard/minisite-preview";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function MinisiteEditorPage() {
  const [logo, setLogo] = useState<string | null>(null);
  const [banner, setBanner] = useState<string | null>(null);
  const [description, setDescription] = useState('');
  const [cta, setCta] = useState({ whatsapp: '', instagram: '', shopee: '' });
  const [location, setLocation] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string | null>>) => {
    if (e.target.files && e.target.files[0]) {
      setter(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="grid flex-1 grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-1 flex flex-col gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Editor Minisite</CardTitle>
            <CardDescription>
              Sesuaikan tampilan dan informasi minisite Anda.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Template</Label>
              <Select defaultValue="default">
                <SelectTrigger>
                  <SelectValue placeholder="Pilih template" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default Modern</SelectItem>
                  <SelectItem value="elegant">Elegant</SelectItem>
                  <SelectItem value="minimal">Minimal</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
                <Label htmlFor="logo-upload">Logo Usaha</Label>
                <div className="flex items-center gap-4">
                    <Input id="logo-upload" type="file" className="hidden" onChange={e => handleFileChange(e, setLogo)} />
                    <Button asChild variant="outline" size="icon"><Label htmlFor="logo-upload" className="cursor-pointer"><Upload/></Label></Button>
                    <span className="text-sm text-muted-foreground">{logo ? 'Logo terpilih' : 'Upload logo Anda'}</span>
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="banner-upload">Banner</Label>
                <div className="flex items-center gap-4">
                    <Input id="banner-upload" type="file" className="hidden" onChange={e => handleFileChange(e, setBanner)} />
                    <Button asChild variant="outline" size="icon"><Label htmlFor="banner-upload" className="cursor-pointer"><Upload/></Label></Button>
                    <span className="text-sm text-muted-foreground">{banner ? 'Banner terpilih' : 'Upload banner toko'}</span>
                </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Deskripsi Usaha</Label>
              <Textarea
                id="description"
                placeholder="Contoh: Toko kami menjual aneka kue basah khas Sidoarjo..."
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>
            <div className="space-y-2">
                <Label>Tombol Aksi (CTA)</Label>
                <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Nomor WhatsApp" value={cta.whatsapp} onChange={e => setCta(prev => ({...prev, whatsapp: e.target.value}))}/>
                </div>
                <div className="flex items-center gap-2">
                    <Instagram className="h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Username Instagram" value={cta.instagram} onChange={e => setCta(prev => ({...prev, instagram: e.target.value}))}/>
                </div>
                <div className="flex items-center gap-2">
                    <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Link Toko Shopee" value={cta.shopee} onChange={e => setCta(prev => ({...prev, shopee: e.target.value}))}/>
                </div>
            </div>
             <div className="space-y-2">
                <Label htmlFor="location">Lokasi</Label>
                <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <Input id="location" placeholder="Contoh: Sidoarjo, Jawa Timur" value={location} onChange={e => setLocation(e.target.value)} />
                </div>
            </div>
            <Button className="w-full">Simpan Perubahan</Button>
          </CardContent>
        </Card>
      </div>
      <div className="md:col-span-2 rounded-lg">
        <div className="sticky top-4">
          <Card className="h-[calc(100vh-8rem)]">
              <CardHeader>
                  <CardTitle>Live Preview</CardTitle>
              </CardHeader>
              <CardContent>
                  <MinisitePreview
                    logo={logo}
                    banner={banner}
                    description={description}
                    cta={cta}
                    location={location}
                  />
              </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
