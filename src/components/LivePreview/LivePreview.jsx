import React from 'react';
import { Box, Typography } from '@mui/material';

const LivePreview = () => {
  return (
    <Box sx={{ my: 2, p: 4, bgcolor: 'background.default', border: '1px solid', borderColor: 'divider', borderRadius: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant="body1" color="text.secondary">
        Live Preview Placeholder
      </Typography>
    </Box>
  );
};

export default LivePreview;
