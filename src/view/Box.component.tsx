import React from 'react';

type ElemProps = { children: React.ReactNode };

export function Box({ children }: ElemProps): JSX.Element {
  return <div>{children}</div>;
}
