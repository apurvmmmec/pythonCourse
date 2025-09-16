import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';

export default function Hero() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container>
        <Stack spacing={3} alignItems="flex-start" maxWidth="md">
          <Typography variant="h1">GCSE Python, done right.</Typography>
          <Typography variant="h5" color="text.secondary">
            Project-based lessons aligned to AQA/OCR/Edexcel. Build real skills, ace the exam.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" LinkComponent={Link} href="/contact">Book a free intro</Button>
            <Button variant="outlined" LinkComponent={Link} href="/curriculum">See curriculum</Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
