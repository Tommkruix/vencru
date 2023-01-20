import { ReactElement } from "react";

export type NavMenuType = {
  title: String;
  icon: ReactElement;
  rightLabel?: String | undefined;
  addBreak?: Boolean | undefined;
};

export type GroupButtonType = {
  title: String;
};

export type PaymentMethodType = {
  expiryDate: String;
  last4: String;
  isClicked: boolean;
  icon: ReactElement;
};

export type ProjectType = {
  title: String;
  amount: String;
  date: String;
  status: boolean;
  users: string[];
};
