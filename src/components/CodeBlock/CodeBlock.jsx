import React, { useState } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const CodeBlock = ({ language = 'jsx', snippet, fullCode }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const displayCode = isExpanded && fullCode ? fullCode : (snippet || fullCode);
  const canExpand = !!fullCode && !!snippet && fullCode !== snippet;

  const handleCopy = () => {
    navigator.clipboard.writeText(displayCode).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box sx={{ mb: 2, borderRadius: 1, overflow: 'hidden', border: '1px solid', borderColor: 'divider' }}>
      {/* Header */}
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          // color: '#d4d4d4',
          px: 2, 
          py: 1,
          borderBottom: '1px solid #242424ff'
        }}
      >
        <Typography variant="overline" sx={{ fontWeight: 'bold', letterSpacing: 1 }}>
          {language.toUpperCase()}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {canExpand && (
            <Button 
              size="small" 
              onClick={toggleExpand}
              sx={{  textTransform: 'none', fontSize: '0.75rem' }}
              startIcon={isExpanded ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
            >
              {isExpanded ? 'Collapse' : 'Expand Full Example'}
            </Button>
          )}
          <Button
            size="small"
            onClick={handleCopy}
            sx={{  textTransform: 'none', fontSize: '0.75rem' }}
            startIcon={isCopied ? <CheckIcon fontSize="small" color="success" /> : <ContentCopyIcon fontSize="small" />}
          >
            {isCopied ? 'Copied!' : 'Copy'}
          </Button>
        </Box>
      </Box>

      {/* Code Area */}
      <Box sx={{ m: 0,  
          bgcolor: '#1e1e1e',

        '& pre': { m: '0 !important', borderRadius: '0 !important',  } }}>
        <SyntaxHighlighter 
          language={language} 
          style={vscDarkPlus}
          customStyle={{ margin: 0, padding: '16px', fontSize: '0.875rem' }}
        >
          {displayCode}
        </SyntaxHighlighter>
      </Box>
    </Box>
  );
};

export default CodeBlock;
