import { Card, CardContent, CardActions, Typography, Button, Stack } from '@mui/material';
import Link from 'next/link';

export default function CourseCard({
  title, weeks, blurb, href,
}: { title: string; weeks: number; blurb: string; href: string; }) {
  return (
    <Card>
      <CardContent>
        <Stack spacing={1.5}>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2" color="text.secondary">{blurb}</Typography>
          <Typography variant="caption" color="text.secondary">{weeks} weeks</Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button LinkComponent={Link} href={href}>View</Button>
      </CardActions>
    </Card>
  );
}
