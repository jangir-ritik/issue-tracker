import * as React from 'react';
import Container from '@mui/material/Container'
import Slider from '@mui/material/Slider'
import { alpha, styled } from '@mui/material/styles';

function valuetext(value) {
  return `${value}`;
}

const StyledSlider = styled(Slider)(({ theme }) => ({
  width: 250,
  color: theme.palette.success.main,
  '& .MuiSlider-thumb': {
    '&:hover, &.Mui-focusVisible': {
      boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
    },
    '&.Mui-active': {
      boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
    },
  },
}));

export default function DiscreteSlider() {
  return (
    <Container sx={{ borderRadius: '20px', border: '1px solid #0000ff'}}>
      <StyledSlider
        aria-label="Effort"
        defaultValue={5}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={10}
      />
    </Container>
  );
}