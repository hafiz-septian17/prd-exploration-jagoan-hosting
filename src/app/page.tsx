"use client"
import Link from 'next/link';
import { Building, Package2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SellerPage from './seller/page';

export default function WelcomePage() {
  return (
    <SellerPage />
  );
}
