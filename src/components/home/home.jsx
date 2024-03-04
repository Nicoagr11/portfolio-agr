import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Card, Typography } from '@mui/material';

export default function Home() {
  return (
    <>
      <Container maxWidth="sm" sx={{ bgcolor: 'black' }}>
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
        <Typography>Portfolio</Typography>
        <Card sx={{ borderRadius: 5 }}>
            <Typography>-Tecnologias</Typography>

        </Card>
        <Card sx={{ borderRadius: 5 }}>
            <Typography>-Frameworks</Typography>

        </Card>
        <Card sx={{ borderRadius: 5 }}>
            <Typography>-Proyectos</Typography>

        </Card>
        <Card sx={{ borderRadius: 5 }}>
            <Typography>-Contactame</Typography>

        </Card>
      </Container>
    </>
  );
}