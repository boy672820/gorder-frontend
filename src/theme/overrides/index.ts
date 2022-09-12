import { Theme } from '@mui/material/styles';
import Tabs from './Tabs';

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(Tabs(theme));
}
