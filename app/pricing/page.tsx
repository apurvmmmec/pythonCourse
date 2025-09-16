import { Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material';
import Link from 'next/link';

const plans = [
  { name: '1–to–1', price: '£50/hr', features: ['Personalised plan', 'Homework feedback', 'Parent updates'] },
  { name: 'Small Group (3–5)', price: '£25/hr', features: ['Live Q&A', 'Projects', 'Exam prep drills'] },
  { name: 'Booster Pack', price: '£180 / 4 lessons', features: ['Focused revision', 'Past paper practice'] },
];

export default function Pricing() {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h2" gutterBottom>Pricing</Typography>
        <Grid container spacing={3}>
          {plans.map(p => (
            <Grid key={p.name} item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Stack spacing={1.5}>
                    <Typography variant="h6">{p.name}</Typography>
                    <Typography variant="h4">{p.price}</Typography>
                    <ul style={{ margin: 0, paddingLeft: 18 }}>
                      {p.features.map(f => <li key={f}><Typography variant="body2">{f}</Typography></li>)}
                    </ul>
                    <Button variant="contained" LinkComponent={Link} href="/contact">Book</Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
