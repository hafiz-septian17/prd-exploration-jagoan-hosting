export type Feature = {
  icon: string;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: 'LayoutTemplate',
    title: 'Buat Minisite',
    description: 'Tampilkan produk Anda dengan minisite yang menarik dan profesional dalam hitungan menit.',
  },
  {
    icon: 'BookOpen',
    title: 'Katalog Produk',
    description: 'Kelola semua produk Anda di satu tempat yang mudah diakses oleh pelanggan.',
  },
  {
    icon: 'Sparkles',
    title: 'Promosi Otomatis',
    description: 'Buat konten promosi menarik dengan bantuan AI untuk meningkatkan penjualan.',
  },
  {
    icon: 'BarChart2',
    title: 'Insight Pengunjung',
    description: 'Pahami perilaku pelanggan dengan data analitik yang mudah dibaca.',
  },
];

export type Testimonial = {
  id: string;
  name: string;
  title: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Budi Santoso',
    title: 'Pemilik "Warung Pojok"',
    quote: 'JUALIN benar-benar mengubah cara saya berbisnis. Minisite saya sekarang terlihat jauh lebih profesional dan penjualan meningkat 50%!',
  },
  {
    id: 'testimonial-2',
    name: 'Siti Aminah',
    title: 'Owner "Dapur Bunda"',
    quote: 'Fitur promosi otomatis sangat membantu. Saya tidak perlu pusing lagi memikirkan caption untuk media sosial. Sangat praktis!',
  },
  {
    id: 'testimonial-3',
    name: 'Eka Wijaya',
    title: 'Pengusaha "Keripik Jaya"',
    quote: 'Platform yang sangat mudah digunakan, bahkan untuk orang awam seperti saya. Pelatihannya juga sangat bermanfaat untuk mengembangkan bisnis.',
  },
];

export type Product = {
  id: string;
  name: string;
  price: number;
  stock: 'Tersedia' | 'Habis';
  category: string;
  image: string;
  description: string;
};

export const products: Product[] = [
    { id: 'product-1', name: 'Sambel Pecel Khas Sidoarjo', price: 25000, stock: 'Tersedia', category: 'Makanan', image: 'product-1', description: 'Sambel pecel legendaris dengan resep turun-temurun.' },
    { id: 'product-2', name: 'Keripik Tempe Renyah', price: 15000, stock: 'Tersedia', category: 'Camilan', image: 'product-2', description: 'Keripik tempe gurih dan renyah, cocok untuk teman santai.' },
    { id: 'product-3', name: 'Bandeng Asap Sidoarjo', price: 75000, stock: 'Habis', category: 'Lauk Pauk', image: 'product-3', description: 'Bandeng asap asli Sidoarjo, diolah dengan metode tradisional.' },
    { id: 'product-4', name: 'Telur Asin Premium', price: 5000, stock: 'Tersedia', category: 'Lauk Pauk', image: 'product-4', description: 'Telur asin berkualitas dengan kuning telur masir.' },
    { id: 'product-5', name: 'Kue Lumpur Bakar', price: 3000, stock: 'Tersedia', category: 'Kue', image: 'product-5', description: 'Kue lumpur lembut dengan aroma bakar yang khas.' },
    { id: 'product-6', name: 'Ote-Ote Porong', price: 7000, stock: 'Tersedia', category: 'Camilan', image: 'product-6', description: 'Ote-ote (heci) khas Porong dengan isian melimpah.' },
];

export const recentActivities = [
  { item: "Katalog", activity: "Produk 'Sambel Pecel' diperbarui", time: "1 jam lalu" },
  { item: "Minisite", activity: "Banner utama telah diubah", time: "3 jam lalu" },
  { item: "Insight", activity: "Laporan mingguan telah dibuat", time: "1 hari lalu" },
  { item: "Katalog", activity: "Produk baru 'Kue Lumpur' ditambahkan", time: "2 hari lalu" },
  { item: "Promosi", activity: "Konten promosi dibuat untuk 'Keripik Tempe'", time: "2 hari lalu" },
];

export const pageVisitsData = [
  { date: "Sen", visits: 120 },
  { date: "Sel", visits: 150 },
  { date: "Rab", visits: 170 },
  { date: "Kam", visits: 130 },
  { date: "Jum", visits: 190 },
  { date: "Sab", visits: 250 },
  { date: "Min", visits: 230 },
];

export const popularProductsData = [
  { name: 'Sambel Pecel', views: 450 },
  { name: 'Kue Lumpur', views: 320 },
  { name: 'Keripik Tempe', views: 280 },
  { name: 'Ote-Ote', views: 210 },
  { name: 'Telur Asin', views: 150 },
];
