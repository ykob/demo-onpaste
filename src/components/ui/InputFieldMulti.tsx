import { css } from "@emotion/css";

type Props = React.ComponentProps<"textarea">;

export const InputFieldMulti = ({ children, className, ...props }: Props) => {
  const classNameComp = css`
    ${className}
    padding: 8px 12px;
    border: 1px solid #888;
    border-radius: 4px;
    font-size: 16px;
  `;

  return (
    <textarea className={classNameComp} {...props}>
      {children}
    </textarea>
  );
};
