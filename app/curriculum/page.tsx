import { Box, Container, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';

export default function CurriculumPage() {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h2" gutterBottom>Curriculum</Typography>
        <Typography id="foundations" variant="h5" sx={{ mt: 4 }}>Module 1: Foundations</Typography>
        <List dense>
          <ListItem><ListItemText primary="Python basics, I/O, variables, types" /></ListItem>
          <ListItem><ListItemText primary="Conditionals & loops" /></ListItem>
        </List>
        <Divider sx={{ my: 3 }} />
        <Typography id="data" variant="h5">Module 2: Data & Functions</Typography>
        <List dense>
          <ListItem><ListItemText primary="Strings, lists, dictionaries" /></ListItem>
          <ListItem><ListItemText primary="Files, CSV, exceptions" /></ListItem>
          <ListItem><ListItemText primary="Functions & modularity" /></ListItem>
        </List>
        <Divider sx={{ my: 3 }} />
        <Typography id="projects" variant="h5">Module 3: Projects & Exam Prep</Typography>
        <List dense>
          <ListItem><ListItemText primary="Tic-Tac-Toe, Quiz game, Grade tracker" /></ListItem>
          <ListItem><ListItemText primary="Trace tables, pseudocode practice" /></ListItem>
        </List>
      </Container>
    </Box>
  );
}
