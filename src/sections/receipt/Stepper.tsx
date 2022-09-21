import styled from '@emotion/styled';
import {
  Step,
  StepLabel as MuiStepLabel,
  stepLabelClasses,
  Stepper as MuiStepper,
  Theme,
  useTheme,
} from '@mui/material';

type StepItem = { id: number; label: string; active: string; completed: string };

const stepLabel: Array<StepItem> = [
  { id: 0, label: '접수 대기 중', active: '접수 대기 중 입니다.', completed: '접수 완료' },
  { id: 1, label: '픽업 중', active: '픽업 중 입니다.', completed: '수령 완료' },
  { id: 2, label: '픽업완료', active: '픽업 완료', completed: '픽업 완료' },
];

const StepLabel = styled(MuiStepLabel)(({ theme }: { theme: Theme }) => ({
  [`& .${stepLabelClasses.label}`]: {
    [`&.${stepLabelClasses.active}`]: {
      color: theme.palette.primary.main,
    },
    width: 'max-content',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 4,
    fontSize: theme.typography.pxToRem(11),
  },
}));

type Props = {
  activeStep: 0 | 1 | 2;
};

export default function Stepper({ activeStep }: Props) {
  const theme = useTheme();

  return (
    <MuiStepper activeStep={activeStep} alternativeLabel>
      {stepLabel.map(({ id, label, active, completed }: StepItem, index: number) => (
        <Step key={id}>
          <StepLabel theme={theme}>
            {activeStep < index && label}
            {activeStep === index && active}
            {activeStep > index && completed}
          </StepLabel>
        </Step>
      ))}
    </MuiStepper>
  );
}
