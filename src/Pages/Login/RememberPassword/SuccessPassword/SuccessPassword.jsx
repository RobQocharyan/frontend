import "./SuccessPassword.scss";

import React from 'react'
import { icons } from '../../../Registartion/icons';

export const SuccessPassword = () => {
  return (
    <div className="successPassword">
            {icons.checkbox}
            <h1>Ձեր գաղտնաբառը փոփոխված է: </h1>
            <p>Այժմ Դուք կարող եք մուտք գործել կայք` օգտագործելով նոր գաղտնաբառը:</p>
    </div>
  )
}
