import React from 'react';
import { Box, Typography } from '@mui/material';

const CodeBlock = () => {
  return (
    <Box sx={{ my: 2, p: 2, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
      <Typography variant="body2" color="text.secondary">
        CodeBlock Placeholder
      </Typography>
    </Box>
  );
};

export default CodeBlock;
