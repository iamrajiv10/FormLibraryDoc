import React from 'react';
import { Box, Typography } from '@mui/material';

const LivePreview = ({ children }) => {
  return (
    <Box sx={{ mt: 2, p: 4, bgcolor: 'background.default', border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
      {children}
    </Box>
  );
};

export default LivePreview;
