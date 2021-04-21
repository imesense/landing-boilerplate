import React, { FC } from "react";

export const RawJs: FC<{ js: string }> = props => <div dangerouslySetInnerHTML={{ __html: props.js }} />;
