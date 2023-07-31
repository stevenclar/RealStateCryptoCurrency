import color from 'color';
import {ThemeProp} from 'react-native-paper/lib/typescript/src/types';
import {DefaultTheme} from 'react-native-paper';

const theme: ThemeProp = {
  ...DefaultTheme,
  dark: false,
  roundness: 10,
  mode: 'adaptive',
  isV3: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1e1e1e',
    primaryContainer: color('#1e1e1e').alpha(0.1).string(),
    secondary: '#3721a5',
    secondaryContainer: color('#3721a5').alpha(0.1).string(),
    error: '#F04984',
    background: '#fff',
    surface: color('#000').alpha(0.05).string(),
    onBackground: '#000000',
    onSurface: '#000000',
    backdrop: color('#000').alpha(0.5).rgb().string(),
    elevation: {
      level0: 'transparent',
      level1: color('#1e1e1e').alpha(0.05).toString(), // palette.primary40, alpha 0.05
      level2: color('#1e1e1e').alpha(0.08).toString(), // palette.primary40, alpha 0.08
      level3: color('#1e1e1e').alpha(0.11).toString(), // palette.primary40, alpha 0.11
      level4: color('#1e1e1e').alpha(0.12).toString(), // palette.primary40, alpha 0.12
      level5: color('#1e1e1e').alpha(0.14).toString(), // palette.primary40, alpha 0.14
    },
  },
  animation: {
    scale: 1.0,
  },
};

export default theme;
