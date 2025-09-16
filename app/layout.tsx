// app/layout.tsx
import type { Metadata } from 'next';
import ClientThemeProvider from '@/components/ClientThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'GCSE Python Tuition | Apurv Nigam',
  description: 'Modern, project-based Python tutoring aligned to GCSE Computing.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientThemeProvider mode="light">
          <Header />
          {children}
          <Footer />
        </ClientThemeProvider>
      </body>
    </html>
  );
}
