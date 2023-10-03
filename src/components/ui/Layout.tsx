import { css } from "@emotion/css";

type Props = React.ComponentProps<"div">;

const className = css`
  box-sizing: border-box;
  display: grid;
  gap: 24px;
  margin-inline: auto;
  padding: 24px;
  max-width: 1200px;
`;
const classNameBody = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 24px;
  min-height: 480px;
`;

export const Layout = ({ children }: Props) => {
  return (
    <div className={className}>
      <h1>Demo onPaste</h1>
      <div className={classNameBody}>{children}</div>
    </div>
  );
};
