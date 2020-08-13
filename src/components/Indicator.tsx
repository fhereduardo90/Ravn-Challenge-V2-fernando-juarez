type IndicatorProps = {
  width?: string;
  height?: string;
};

const defaultProps: IndicatorProps = {
  width: '0.741rem',
  height: '1.2rem',
};

const Indicator: React.FC<IndicatorProps> = (props) => (
  <svg viewBox="0 0 8 12" fill="none" {...props}>
    <path d="M.59 10.59L5.17 6 .59 1.41 2 0l6 6-6 6-1.41-1.41z" fill="#000" />
  </svg>
);

Indicator.defaultProps = defaultProps;

export default Indicator;
