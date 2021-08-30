import React from 'react';

type ElemProps = { children: React.ReactNode };

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Container = ({ children }: ElemProps): JSX.Element => (
  <div>{children}</div>
);
