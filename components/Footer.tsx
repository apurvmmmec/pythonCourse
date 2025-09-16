import { Box, Container, Link as MuiLink, Stack, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: '1px solid', borderColor: 'divider', mt: 8, py: 6 }}>
      <Container>
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" gap={3}>
          <Typography variant="body2">© {new Date().getFullYear()} Apurv Nigam — GCSE Python Tuition</Typography>
          <Stack direction="row" gap={3}>
            <MuiLink href="/privacy">Privacy</MuiLink>
            <MuiLink href="/terms">Terms</MuiLink>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
