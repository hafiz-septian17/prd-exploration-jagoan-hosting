"use client";

import { useState } from "react";
import Image from "next/image";
import { Copy, Instagram, Loader2, Sparkles, Share2 } from "lucide-react";
import { generatePromotionalContent } from "@/ai/flows/generate-promotional-content";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { products } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const posterTemplates = [
  { id: "poster-template-1", name: "Minimal" },
  { id: "poster-template-2", name: "Elegant" },
  { id: "poster-template-3", name: "Modern" },
];

export default function PromosiPage() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [generatedContent, setGeneratedContent] = useState<{ caption: string; hashtags: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!selectedProduct || !selectedTemplate) {
      toast({
        title: "Input Tidak Lengkap",
        description: "Silakan pilih produk dan template poster terlebih dahulu.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setGeneratedContent(null);
    try {
      const product = products.find(p => p.id === selectedProduct);
      if (!product) throw new Error("Produk tidak ditemukan");

      const result = await generatePromotionalContent({
        productName: product.name,
        productDescription: product.description,
        posterTemplate: selectedTemplate,
      });
      setGeneratedContent(result);
    } catch (error) {
      console.error(error);
      toast({
        title: "Gagal Membuat Konten",
        description: "Terjadi kesalahan saat mencoba menghasilkan konten promosi.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
        title: `${type} Disalin!`,
        description: `${type} telah berhasil disalin ke clipboard.`,
    });
  }

  return (
    <div className="grid flex-1 grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-1 flex flex-col gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Generator Promosi AI</CardTitle>
            <CardDescription>
              Buat konten promosi secara otomatis untuk produk Anda.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Pilih Produk</label>
              <Select onValueChange={setSelectedProduct}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih produk untuk dipromosikan" />
                </SelectTrigger>
                <SelectContent>
                  {products.map((product) => (
                    <SelectItem key={product.id} value={product.id}>
                      {product.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Pilih Template Poster</label>
              <div className="grid grid-cols-3 gap-2">
                {posterTemplates.map((template) => {
                  const image = PlaceHolderImages.find(p => p.id === template.id);
                  return (
                    <div
                      key={template.id}
                      onClick={() => setSelectedTemplate(template.name.toLowerCase())}
                      className={cn(
                        "cursor-pointer rounded-lg border-2 overflow-hidden transition-all",
                        selectedTemplate === template.name.toLowerCase() ? "border-primary ring-2 ring-primary" : "border-transparent"
                      )}
                    >
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={template.name}
                          width={150}
                          height={180}
                          className="object-cover w-full h-full"
                          data-ai-hint={image.imageHint}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <Button onClick={handleGenerate} disabled={isLoading} className="w-full">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4" />
              )}
              Buat Konten
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="md:col-span-2">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Hasil Konten</CardTitle>
            <CardDescription>
              Salin dan bagikan konten yang dihasilkan AI di bawah ini.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {isLoading && (
                 <div className="flex flex-col items-center justify-center h-64 gap-4">
                    <Loader2 className="h-12 w-12 animate-spin text-primary" />
                    <p className="text-muted-foreground">AI sedang meracik konten terbaik...</p>
                 </div>
            )}
            {!isLoading && generatedContent && (
              <>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium">Caption</label>
                    <Button variant="ghost" size="sm" onClick={() => handleCopy(generatedContent.caption, 'Caption')}>
                      <Copy className="h-4 w-4 mr-2" />
                      Salin
                    </Button>
                  </div>
                  <Textarea
                    readOnly
                    value={generatedContent.caption}
                    className="h-40"
                  />
                </div>
                <div className="space-y-2">
                   <div className="flex justify-between items-center">
                    <label className="text-sm font-medium">Hashtag</label>
                    <Button variant="ghost" size="sm" onClick={() => handleCopy(generatedContent.hashtags, 'Hashtag')}>
                      <Copy className="h-4 w-4 mr-2" />
                      Salin
                    </Button>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">{generatedContent.hashtags}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="w-full">
                        <Share2 className="h-4 w-4 mr-2"/> Bagikan
                    </Button>
                    <Button variant="outline" className="w-full">
                        <Instagram className="h-4 w-4 mr-2"/> Story Instagram
                    </Button>
                </div>
              </>
            )}
             {!isLoading && !generatedContent && (
                 <div className="flex flex-col items-center justify-center h-64 gap-4 bg-muted/50 rounded-lg">
                    <Sparkles className="h-12 w-12 text-muted-foreground" />
                    <p className="text-muted-foreground">Konten Anda akan muncul di sini.</p>
                 </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
