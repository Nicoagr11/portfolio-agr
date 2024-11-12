import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Card, Typography, Stack, IconButton } from '@mui/material';
import WifiIcon from '@mui/icons-material/Wifi';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import PersonIcon from '@mui/icons-material/Person';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

export default function Home() {
  const [expandedCard, setExpandedCard] = React.useState(null);

  const cards = [
    { id: 1, title: 'Skills & technologies', subtitle: 'Connected', icon: <WifiIcon /> },
    { id: 2, title: 'Projects', subtitle: 'Off', icon: <BluetoothIcon /> },
    { id: 3, title: 'CV', subtitle: 'Offline', icon: <PersonIcon /> },
    { id: 4, title: 'Contact', subtitle: '1 ongoing transfer', icon: <CloudDownloadIcon /> },
  ];

  const handleCardClick = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ bgcolor: 'black', padding: 2, borderRadius: 3 }}>
        <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>Mobile</Typography>

        {cards.map((card) => (
          <Card
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 1,
              bgcolor: '#333',
              borderRadius: 5,
              padding: expandedCard === card.id ? 2 : 1,
              cursor: 'pointer',
              justifyContent: expandedCard === card.id ? 'flex-start' : 'center',
              width: expandedCard === card.id ? '100%' : '50px',
              transition: 'all 0.3s ease-in-out',
            }}
          >
            <IconButton color="primary">
              {card.icon}
            </IconButton>
            {expandedCard === card.id && (
              <Stack sx={{ ml: 1 }}>
                <Typography sx={{ color: 'white' }}>{card.title}</Typography>
                <Typography variant="body2" sx={{ color: 'gray' }}>{card.subtitle}</Typography>
              </Stack>
            )}
          </Card>
        ))}
      </Container>
    </>
  );
}
