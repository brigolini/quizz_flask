import React from "react";
import {FontWeightProperty} from "csstype";

interface IFontProps {
    fontType: FontWeightProperty;
}

export const Font: React.FC<IFontProps> = props =>
    <span style={{fontWeight: props.fontType}}>
        {props.children}
    </span>