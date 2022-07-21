import React, {FC} from 'react';
import {ReactComponent as Logotype} from '../static/svg/logo.svg'

export const Logo: FC = () =>  {
    return (
      <div style={{height: '35px', width: '35px'}}>
        <Logotype/>
      </div>
    );

}
