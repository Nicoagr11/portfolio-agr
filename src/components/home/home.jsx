import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Card, Typography, Stack, IconButton } from '@mui/material';
import WifiIcon from '@mui/icons-material/Wifi';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import PersonIcon from '@mui/icons-material/Person';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

export default function Home() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ bgcolor: 'black', padding: 2, borderRadius: 3 }}>
        <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>Mobile</Typography>

        <IconButton color="primary">
        <Card sx={{ display: 'flex', alignItems: 'center', mb: 1, bgcolor: '#333', borderRadius: 5, padding: 1 }}>
          <Stack sx={{ ml: 1 }}>
            <Typography sx={{ color: 'white' }}>Skills & technologies</Typography>
            <Typography variant="body2" sx={{ color: 'gray' }}>Connected</Typography>
          </Stack>
        </Card>
        </IconButton>

        <Card sx={{ display: 'flex', alignItems: 'center', mb: 1, bgcolor: '#333', borderRadius: 5, padding: 1 }}>
          {/* <IconButton color="primary"><BluetoothIcon /></IconButton> */}
          <Stack sx={{ ml: 1 }}>
            <Typography sx={{ color: 'white' }}>Projects</Typography>
            <Typography variant="body2" sx={{ color: 'gray' }}>Off</Typography>
          </Stack>
        </Card>

        <Card sx={{ display: 'flex', alignItems: 'center', mb: 1, bgcolor: '#333', borderRadius: 5, padding: 1 }}>
          <IconButton color="primary"><PersonIcon /></IconButton>
          <Stack sx={{ ml: 1 }}>
            <Typography sx={{ color: 'white' }}>CV</Typography>
            <Typography variant="body2" sx={{ color: 'gray' }}>Offline</Typography>
          </Stack>
        </Card>

        <Card sx={{ display: 'flex', alignItems: 'center', mb: 1, bgcolor: '#333', borderRadius: 5, padding: 1 }}>
          <IconButton color="primary"><CloudDownloadIcon /></IconButton>
          <Stack sx={{ ml: 1 }}>
            <Typography sx={{ color: 'white' }}>Contact</Typography>
            <Typography variant="body2" sx={{ color: 'gray' }}>1 ongoing transfer</Typography>
          </Stack>
        </Card>
      </Container>
    </>
  );
}
