import { Box, Container, Grid, Typography } from '@mui/material';
import Hero from '@/components/Hero';
import CourseCard from '@/components/CourseCard';

export default function Page() {
  return (
    <>
      <Hero />
      <Box sx={{ py: 6, bgcolor: 'background.default' }}>
        <Container>
          <Typography variant="h2" gutterBottom>What students get</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}><CourseCard title="Foundations" weeks={6} blurb="Variables, control flow, loops, problem solving." href="/curriculum#foundations" /></Grid>
            <Grid item xs={12} md={4}><CourseCard title="Data & Functions" weeks={8} blurb="Lists/dicts, files/CSV, functions, debugging." href="/curriculum#data" /></Grid>
            <Grid item xs={12} md={4}><CourseCard title="Projects & Exam Prep" weeks={12} blurb="Mini-projects, trace tables, final project." href="/curriculum#projects" /></Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
