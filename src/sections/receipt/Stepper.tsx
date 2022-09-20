import { Step, StepLabel, Stepper as MuiStepper, Typography } from '@mui/material';

type StepItem = { label: string; activeLabel: string };

const steps: Array<StepItem> = [
  { label: '접수 대기 중', activeLabel: '접수 대기 중 입니다.' },
  { label: '픽업 중', activeLabel: '픽업 중 입니다.' },
  { label: '픽업완료', activeLabel: '픽업이 완료되었습니다.' },
];

export default function Stepper() {
  const activeStep = 0;

  return (
    <MuiStepper activeStep={activeStep} alternativeLabel>
      {steps.map(({ label, activeLabel }: StepItem, index: number) => (
        <Step
          key={label}
        >
          {/* <Typography>{activeStep === index ? activeLabel : label}</Typography> */}
          <StepLabel>{activeStep === index ? activeLabel : label}</StepLabel>
        </Step>
      ))}
    </MuiStepper>
  );
}
