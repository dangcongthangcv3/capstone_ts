import React from 'react'

import './GlobalCss.css'

type Props = {
    children:JSX.Element;
}

const GlobalCss: React.FC<Props> = ({ children }: Props) => {
    return children;
  };
  
export default GlobalCss;
  

