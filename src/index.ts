import { useContext } from 'react';
import context from './context';
export const useMixpanel = () => useContext(context);
export { default as MixpanelProvider } from './MixpanelProvider';
