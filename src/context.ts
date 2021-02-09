import {createContext} from 'react'
import mixpanel, {Mixpanel} from 'mixpanel-browser'
export default createContext<Mixpanel>(mixpanel)