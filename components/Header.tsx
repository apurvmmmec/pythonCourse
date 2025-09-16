'use client';
import Link from 'next/link';
import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const nav = [
  { label: 'Curriculum', href: '/curriculum' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky" color="inherit" sx={{ borderBottom: '1px solid', borderColor: 'divider', bgcolor: 'background.paper' }}>
      <Container>
        <Toolbar disableGutters sx={{ gap: 2 }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h6" fontWeight={800}>GCSE Python by Apurv</Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {nav.map(i => (
              <Button key={i.href} LinkComponent={Link} href={i.href}>{i.label}</Button>
            ))}
            <Button variant="contained" LinkComponent={Link} href="/contact">Book a Lesson</Button>
          </Box>
          <Box sx={{ display: { xs: 'inline-flex', md: 'none' } }}>
            <IconButton onClick={() => setOpen(!open)} aria-label="menu"><MenuIcon /></IconButton>
          </Box>
        </Toolbar>
        {/* Simple mobile reveal */}
        {open && (
          <Box sx={{ display: { xs: 'block', md: 'none' }, pb: 2 }}>
            {nav.map(i => (
              <Button key={i.href} LinkComponent={Link} href={i.href} fullWidth sx={{ justifyContent: 'flex-start' }}>
                {i.label}
              </Button>
            ))}
            <Button variant="contained" LinkComponent={Link} href="/contact" fullWidth>Book a Lesson</Button>
          </Box>
        )}
      </Container>
    </AppBar>
  );
}
