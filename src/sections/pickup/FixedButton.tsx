import { Button, Box } from '@mui/material';

type Props = {
  isCompleted: boolean;
};

export default function FixedButton({ isCompleted }: Props) {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
        p: 2,
        borderTop: '1px solid',
        backgroundColor: 'white',
        borderTopColor: (theme) => theme.palette.divider,
        zIndex: 1,
      }}
    >
      <Button
        variant="contained"
        color="primary"
        size="large"
        fullWidth
        sx={{
          width: '100%',
          borderRadius: 3,
          position: 'relative',
          boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
          ...(isCompleted ? { backgroundColor: '#303839' } : {}),
        }}
      >
        {!isCompleted && (
          <Box
            component="span"
            sx={{
              width: 24,
              height: 24,
              borderRadius: 12,
              backgroundColor: 'white',
              color: 'primary.main',
              fontFamily: 'Apple SD Gothic Neo',
              fontSize: (theme) => theme.typography.pxToRem(12),
              lineHeight: (theme) => theme.typography.pxToRem(24),
              position: 'absolute',
              left: 16,
            }}
          >
            6
          </Box>
        )}

        <Box component="span">{isCompleted ? '픽업 완료하기' : '내가 픽업하기'}</Box>

        {!isCompleted && (
          <Box
            component="span"
            sx={{
              position: 'absolute',
              right: 16,
              fontFamily: 'Apple SD Gothic Neo',
              fontSize: (theme) => theme.typography.pxToRem(13),
            }}
          >
            24,000원
          </Box>
        )}
      </Button>
    </Box>
  );
}
