import { Box, SxProps, Theme } from '@mui/material';

type Props = {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  sx?: SxProps<Theme>;
};

export default function Image({ src, alt, width, height, sx }: Props) {
  return (
    <Box
      sx={{
        width: width || 100,
        height: height || 100,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...sx,
      }}
    >
      <img src={src} alt={alt} style={{ width: '100%', objectFit: 'cover' }} />
    </Box>
  );
}
