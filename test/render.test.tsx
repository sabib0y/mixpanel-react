import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MixpanelProvider, useMixpanel } from '../src';

const Comp = () => {
  const mixpanel = useMixpanel();

  return <div>mixpanel:token {mixpanel.get_config('token')} = anything </div>;
};

describe('it would not crahs the app', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <MixpanelProvider token="anything">
        <Comp />
      </MixpanelProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
