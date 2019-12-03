/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';


const Button = props => {
  const { colors } = useTheme();
  const base = css`
    background-color: ${colors.accent};
    color: white;
    transition: all 0.3s ease-in-out;
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  `;
  return (
    <button css={base}
    {...props}>
      {props.children}
    </button>
  )
}

export default Button;
