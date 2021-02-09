import context from './context';
import mixpanel  from 'mixpanel-browser'
import React, { FC, ReactNode } from 'react';



const Provider = context.Provider;

interface Panel {
    children: ReactNode;
    token: string;
}
const MixpanelProvider: FC<Panel> = ({children, token}) => {
  mixpanel.init(token, { "api_host": "https://api-eu.mixpanel.com",track_pageview: false }, "");

    return <Provider value={mixpanel}>
        {children}
    </Provider>
}


export default MixpanelProvider;