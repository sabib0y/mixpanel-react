import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MixpanelProvider, useMixpanel } from '../.';

const Comp = () => {
const mixpanel = useMixpanel();

return <div>mixpanel:token {mixpanel.get_config("token")} =  anything </div>
}
const App = () => {
  return (
    <MixpanelProvider token="anything">
      <Comp />
    </MixpanelProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
