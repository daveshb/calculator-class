import 'react-native-reanimated';

import { CaculatorView } from './presentation/calculatorView';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {

  return (
   
      <CaculatorView/>
     
  );
}
