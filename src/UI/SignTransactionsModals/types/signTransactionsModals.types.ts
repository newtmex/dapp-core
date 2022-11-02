import { Transaction } from '@elrondnetwork/erdjs';

import { LoginMethodsEnum } from 'types';

export interface SignPropsType {
  handleClose: () => void;
  error: string | null;
  sessionId?: string;
  transactions: Transaction[];
  providerType: LoginMethodsEnum;
  callbackRoute: string;
  className?: string;
  verifyReceiverScam?: boolean;
}

export type ScreenType = (signProps: SignPropsType) => JSX.Element;

export interface CustomConfirmScreensType {
  Ledger?: ScreenType;
  Extension?: ScreenType;
  WalletConnect?: ScreenType;
  Wallet?: ScreenType;
  Extra?: ScreenType;
}