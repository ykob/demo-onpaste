import { createContext } from "react";

export type ClipboardData = {
  clipboardData: string;
  setClipboardData: (c: string) => void;
};

export const ClipboardDataContext = createContext<ClipboardData>({
  clipboardData: "",
  setClipboardData: () => {},
});
