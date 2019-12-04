/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';

const Button = ({ children, ...props }) => {
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
    <button css={base} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Button.getDefaultProps = () => {
  return {
    children: null,
  };
};

export default Button;
