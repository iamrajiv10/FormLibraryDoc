import React from 'react';
import {
  Alert,
  Box,
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Form } from 'skemvora';

import LivePreview from './LivePreview/LivePreview';
import CodeBlock from './CodeBlock/CodeBlock';

/* ==========================================
   PAGE HEADER
========================================== */

export const PageHeader = ({ title, description, details }) => (
  <Box sx={{ mb: 4 }}>
    <Typography
      variant="h3"
      component="h1"
      sx={{
        fontWeight: 700,
        mb: 2
      }}
    >
      {title}
    </Typography>

    {description && (
      <Typography
        variant="h5"
        color="text.secondary"
        sx={{
          mb: 2,
          lineHeight: 1.7,
          fontWeight: 500,
        }}
      >
        {description}
      </Typography>
    )}

    {details && (
      <Typography
        variant="body1"
        sx={{
          lineHeight: 1.9
        }}
      >
        {details}
      </Typography>
    )}
  </Box>
);

/* ==========================================
   CONTENT SECTION
========================================== */

export const ContentSection = ({ title, children }) => (
  <Box sx={{ mb: 7, mt:7 }}>
    {title && (
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 2
        }}
      >
        {title}
      </Typography>
    )}

    {children}
  </Box>
);

/* ==========================================
   CONTENT BLOCK
========================================== */

export const ContentBlock = ({ children }) => (
  <Typography
    variant="body1"
    sx={{
      mb: 2.5,
      lineHeight: 1.9,
      color: 'text.primary'
    }}
  >
    {children}
  </Typography>
);

/* ==========================================
   BULLET LIST
========================================== */

export const BulletList = ({ items = [] }) => (
  <List disablePadding sx={{ ml: 2,  mb: 2 }}>
    {items.map((item, index) => (
      <ListItem
        key={index}
        disableGutters
        sx={{
          alignItems: 'center',
          py: 0.5
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 28,
          }}
        >
          <FiberManualRecordIcon
            sx={{
              fontSize: 8,
            }}
          />
        </ListItemIcon>

        <ListItemText
  primary={
    <Typography sx={{ lineHeight: 1.8 }}>
      {item}
    </Typography>
  }
/>
      </ListItem>
    ))}
  </List>
);

/* ==========================================
   FEATURE CARD
========================================== */

export const FeatureCard = ({ title, description }) => (
  <Card
    sx={(theme) => ({
      width: '100%',
      height: '100%',
      borderRadius: 3,
      border: `1px solid ${
        theme.palette.mode === 'dark'
          ? theme.palette.grey[700]
          : theme.palette.grey[300]
      }`,
      // backgroundColor: theme.palette.background.paper,
      transition: 'all 0.2s ease',

      '&:hover': {
        borderColor: theme.palette.primary.main,
        boxShadow:
          theme.palette.mode === 'dark'
            ? '0 6px 30px rgba(235, 234, 234, 0.25)'
            : '0 6px 30px rgba(0, 0, 0, 0.23)'
      }
    })}
  >
    <CardContent>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          mb: 1.5
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          lineHeight: 1.8
        }}
      >
        {description}
      </Typography>
    </CardContent>
  </Card>
);

/* ==========================================
   INFO CALLOUT
========================================== */

export const InfoCallout = ({ children }) => (
  <Alert
    severity="info"
    sx={{
      mt: 3,
      borderRadius: 3,
      alignItems: 'center'
    }}
  >
    {children}
  </Alert>
);

/* ==========================================
   EXAMPLE SECTION
========================================== */

export const ExampleSection = ({
  title,
  description,
  children
}) => (
  <Box sx={{ mb: 7 }}>
    <Typography
      variant="h5"
      sx={{
        fontWeight: 600,
        mb: 1
      }}
    >
      {title}
    </Typography>

    {description && (
      <Typography
        color="text.secondary"
        sx={{
          mb: 3,
          lineHeight: 1.8
        }}
      >
        {description}
      </Typography>
    )}

    {children}
  </Box>
);

/* ==========================================
   PROPS TABLE
========================================== */

export const PropsTable = ({ data = [] }) => (
  <TableContainer
    component={Paper}
    variant="outlined"
    sx={{
      borderRadius: 3,
      overflow: 'hidden'
    }}
  >
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <strong>Property</strong>
          </TableCell>

          <TableCell>
            <strong>Type</strong>
          </TableCell>

          <TableCell>
            <strong>Required</strong>
          </TableCell>

          <TableCell>
            <strong>Description</strong>
          </TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {data.map((row) => (
          <TableRow key={row.property}>
            <TableCell
              sx={{
                fontFamily: 'monospace',
                color: 'primary.main',
                fontWeight: 600
              }}
            >
              {row.property}
            </TableCell>

            <TableCell
              sx={{
                fontFamily: 'monospace',
                color: 'error.main'
              }}
            >
              {row.type}
            </TableCell>

            <TableCell>{row.required}</TableCell>

            <TableCell>{row.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

/* ==========================================
   PARAGRAPH GROUP
========================================== */

export const ParagraphGroup = ({ paragraphs = [] }) => (
  <>
    {paragraphs.map((paragraph, index) => (
      <ContentBlock key={index}>
        {paragraph}
      </ContentBlock>
    ))}
  </>
);

/* ==========================================
   Feature Bullet List
========================================== */

export const FeatureBulletList = ({ items = [] }) => (
  <Box>
    {items.map((item) => (
      <Box
        key={item.title}
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          mb: 2.5
        }}
      >
        <Typography
          component="span"
          sx={{
            mr: 1,
            mt: '2px'
          }}
        >
          •
        </Typography>

        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.8
          }}
        >
          <Box
            component="span"
            sx={{
              fontWeight: 600
            }}
          >
            {item.title}
          </Box>
          {': '}
          {item.description}
        </Typography>
      </Box>
    ))}
  </Box>
);

/* ==========================================
   STEP SECTION
========================================== */

export const StepSection = ({
  step,
  title,
  description,
  children
}) => (
  <Box sx={{ mb: 8 }}>
    <Typography
      variant="h4"
      sx={{
        fontWeight: 700,
        mb: 2
      }}
    >
      Step {step}: {title}
    </Typography>

    {description && (
      <Typography
        color="text.secondary"
        sx={{
          mb: 3,
          lineHeight: 1.8
        }}
      >
        {description}
      </Typography>
    )}

    {children}
  </Box>
);

/* ==========================================
   CHIP GROUP
========================================== */

export const ChipGroup = ({
  title,
  items
}) => (
  <Box sx={{ mb: 4 }}>
    <Typography
      variant="h6"
      sx={{
        fontWeight: 600,
        mb: 2
      }}
    >
      {title}
    </Typography>

    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1
      }}
    >
      {items.map((item) => (
        <Chip
          key={item}
          label={item}
          variant="outlined"
        />
      ))}
    </Box>
  </Box>
);

/* ==========================================
   TAG LIST
========================================== */

export const TagList = ({ items = [] }) => (
  <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 1
    }}
  >
    {items.map((item) => (
      <Chip
        key={item}
        label={item}
        variant="outlined"
      />
    ))}
  </Box>
);

/* ==========================================
   CODE SECTION
========================================== */

export const CodeSection = ({
  title,
  description,
  snippet,
  fullCode,
  language = 'jsx',
}) => (
  <Box sx={{ mb: 5 }}>
    <Typography
      variant="h5"
      sx={{
        fontWeight: 600,
        mb: 1
      }}
    >
      {title}
    </Typography>

    {description && (
      <Typography
        color="text.secondary"
        sx={{
          mb: 3,
          lineHeight: 1.8
        }}
      >
        {description}
      </Typography>
    )}

    <CodeBlock
      language={language}
      snippet={snippet}
      fullCode={fullCode}
    />
  </Box>
);

/* ==========================================
   PROPERTY EXAMPLE
========================================== */

export const PropertyExample = ({
  title,
  description,
  snippet,
  fullCode,
  note,
  previewData,
  previewWidth = '100%',
  children
}) => (
  <Box sx={{ mb: 5 }}>
    <Typography
      variant="h5"
      sx={{
        fontWeight: 600,
        mb: 2
      }}
    >
      {title}
    </Typography>

    {description && (
      <ContentBlock>
        {description}
      </ContentBlock>
    )}

    {children}

    {previewData && (
      <LivePreview>
        <Box
          sx={{
            width: '100%',
            maxWidth: previewWidth
          }}
        >
          <Form data={previewData} />
        </Box>
      </LivePreview>
    )}

    <CodeBlock
      language="jsx"
      snippet={snippet}
      fullCode={fullCode}
    />

    {note && (
      <Box sx={{ mt: 2 }}>
        <InfoCallout>
          {note}
        </InfoCallout>
      </Box>
    )}
  </Box>
);

/* ==========================================
   PROPS SECTION
========================================== */

export const PropsSection = ({ data }) => (
  <ContentSection
    id="supported-properties"
    title="Supported Properties"
  >
    <PropsTable data={data} />
  </ContentSection>
);

/* ==========================================
   PROPS SECTION
========================================== */

export const NextStepCard = ({
  title = 'Next Step',
  description
}) => (
  <Paper
    variant="outlined"
    sx={(theme) => ({
      mt: 6,
      p: 3,
      borderRadius: 3,
      border: `1px solid ${theme.palette.divider}`,
      backgroundColor:
        theme.palette.mode === 'dark'
          ? 'rgba(255,255,255,0.02)'
          : 'rgba(25,118,210,0.03)'
    })}
  >
    <Typography
      variant="h5"
      sx={{
        fontWeight: 700,
        mb: 1
      }}
    >
      {title}
    </Typography>

    <Typography color="text.secondary">
      {description}
    </Typography>
  </Paper>
);

/* ==========================================
   PROPS SECTION
========================================== */

export const RelatedSection = ({
  id,
  title = 'Related Documentation',
  children
}) => (
  <Box
    id={id}
    sx={{
      mt: 6
    }}
  >
    <Typography
      variant="h4"
      sx={{
        fontWeight: 700,
        mb: 3
      }}
    >
      {title}
    </Typography>

    <Paper
      variant="outlined"
      sx={(theme) => ({
        p: 3,
        borderRadius: 3,
        border: `1px solid ${theme.palette.divider}`,
        backgroundColor:
          theme.palette.mode === 'dark'
            ? 'rgba(255,255,255,0.02)'
            : 'background.paper'
      })}
    >
      {children}
    </Paper>
  </Box>
);