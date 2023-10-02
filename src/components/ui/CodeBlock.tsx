import { css } from "@emotion/css";

type Props = React.ComponentProps<"pre">;

export const CodeBlock = ({ children, className }: Props) => {
  const classNameComp = css`
    ${className}
    padding: 8px 12px;
    min-height: 120px;
    border-radius: 4px;
    font-size: 16px;
    background-color: #e6e6e6;
  `;
  return <pre className={classNameComp}>{children}</pre>;
};
