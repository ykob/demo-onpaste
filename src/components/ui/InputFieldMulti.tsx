import { css } from "@emotion/css";
import { useContext } from "react";
import { ClipboardDataContext } from "../../contexts/clipboard-data-context";

type Props = React.ComponentProps<"textarea">;

export const InputFieldMulti = ({ children, className, ...props }: Props) => {
  const { setClipboardData } = useContext(ClipboardDataContext);
  const classNameComp = css`
    ${className}
    padding: 8px 12px;
    border: 1px solid #888;
    border-radius: 4px;
    font-size: 16px;
  `;

  return (
    <textarea
      className={classNameComp}
      {...props}
      onPaste={(e) => {
        const text = e.clipboardData.getData("text/html");
        setClipboardData(text);
        console.log(text);
      }}
    >
      {children}
    </textarea>
  );
};
