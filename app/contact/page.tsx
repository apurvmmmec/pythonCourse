'use client';
import { Box, Button, Container, Stack, TextField, Typography, Alert } from '@mui/material';
import { useState } from 'react';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export default function Contact() {
  const [ok, setOk] = useState<boolean | null>(null);

  async function onSubmit(formData: FormData) {
    setOk(null);
    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      message: String(formData.get('message') || ''),
    };
    const parse = schema.safeParse(payload);
    if (!parse.success) return setOk(false);
    const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(payload) });
    setOk(res.ok);
  }

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h2" gutterBottom>Contact / Book a Trial</Typography>
        <form action={onSubmit}>
          <Stack spacing={2} maxWidth={560}>
            <TextField name="name" label="Your name" required />
            <TextField name="email" label="Email" type="email" required />
            <TextField name="message" label="Message" multiline minRows={5} required />
            <Button variant="contained" type="submit">Send</Button>
            {ok === true && <Alert severity="success">Thanks! I’ll reply shortly.</Alert>}
            {ok === false && <Alert severity="error">Please check your details and try again.</Alert>}
          </Stack>
        </form>
        <Typography variant="body2" sx={{ mt: 3 }}>
          Prefer to book directly? Add a scheduling link (e.g., Cal.com/Calendly) here.
        </Typography>
      </Container>
    </Box>
  );
}
