export type Feature = {
  icon: string;
  title: string;
  description: string;
};

export const trainingFeatures: Feature[] = [
  {
    icon: 'Goal',
    title: 'Mindset & Business Plan',
    description: 'Bangun fondasi bisnis yang kokoh dengan mindset yang benar dan rencana yang matang.',
  },
  {
    icon: 'ScanFace',
    title: 'Branding & Target Market',
    description: 'Ciptakan identitas brand yang kuat dan kenali siapa target pasar Anda.',
  },
  {
    icon: 'Megaphone',
    title: 'Digital Marketing',
    description: 'Pelajari strategi pemasaran digital untuk menjangkau lebih banyak pelanggan online.',
  },
  {
    icon: 'BookCopy',
    title: 'Content Creation',
    description: 'Kuasai cara membuat konten yang menarik dan menjual di berbagai platform.',
  },
  {
    icon: 'Users',
    title: 'Customer Service',
    description: 'Berikan pelayanan prima untuk membangun loyalitas pelanggan.',
  },
  {
    icon: 'Wallet',
    title: 'Financial Management',
    description: 'Kelola keuangan bisnis Anda secara efektif dan efisien.',
  },
  {
    icon: 'TrendingUp',
    title: 'Business Scaling',
    description: 'Pelajari cara mengembangkan dan menskalakan bisnis Anda ke level berikutnya.',
  },
   {
    icon: 'Lightbulb',
    title: 'Inovasi Produk',
    description: 'Kembangkan produk yang relevan dan diminati pasar secara berkelanjutan.',
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
    title: 'Alumni Pelatihan, Pemilik "Warung Pojok"',
    quote: 'Pelatihan di JUALIN membuka wawasan saya. Bisnis saya jadi lebih terarah dan omzet meningkat setelah menerapkan ilmu dari sini!',
  },
  {
    id: 'testimonial-2',
    name: 'Siti Aminah',
    title: 'Alumni Pelatihan, Owner "Dapur Bunda"',
    quote: 'Materi digital marketing sangat aplikatif. Saya jadi lebih percaya diri untuk promosi di media sosial. Terima kasih JUALIN!',
  },
  {
    id: 'testimonial-3',
    name: 'Eka Wijaya',
    title: 'Alumni Pelatihan, Pengusaha "Keripik Jaya"',
    quote: 'Ilmu manajemen keuangannya juara! Sekarang saya bisa mengatur cash flow bisnis dengan lebih baik. Sangat direkomendasikan.',
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
  { item: "Pelatihan", activity: "Anda mendaftar sesi 'Digital Marketing'", time: "1 jam lalu" },
  { item: "Akun", activity: "Profil Anda telah diperbarui", time: "3 jam lalu" },
  { item: "Sertifikat", activity: "Sertifikat 'Business Plan' telah terbit", time: "1 hari lalu" },
  { item: "Pembayaran", activity: "Pembayaran untuk sesi 'Branding' berhasil", time: "2 hari lalu" },
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

export type TrainingSession = {
  id: string;
  icon: string;
  title: string;
  description: string;
  progress: number;
  status: 'selesai' | 'sedang-berjalan' | 'belum-dimulai';
}

export const trainingSessions: TrainingSession[] = [
  { ...trainingFeatures[0], id: 'session-1', progress: 100, status: 'selesai' },
  { ...trainingFeatures[1], id: 'session-2', progress: 100, status: 'selesai' },
  { ...trainingFeatures[2], id: 'session-3', progress: 50, status: 'sedang-berjalan' },
  { ...trainingFeatures[3], id: 'session-4', progress: 0, status: 'belum-dimulai' },
  { ...trainingFeatures[4], id: 'session-5', progress: 0, status: 'belum-dimulai' },
  { ...trainingFeatures[5], id: 'session-6', progress: 0, status: 'belum-dimulai' },
  { ...trainingFeatures[6], id: 'session-7', progress: 0, status: 'belum-dimulai' },
  { ...trainingFeatures[7], id: 'session-8', progress: 0, status: 'belum-dimulai' },
];
