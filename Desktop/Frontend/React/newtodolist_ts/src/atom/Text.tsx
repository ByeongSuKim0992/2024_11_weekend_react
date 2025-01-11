type TextProps = {
  text: string;
  css?: React.CSSProperties;
};

const Text = ({ text, css }: TextProps) => {
  return <span style={css}>{text}</span>;
};

export default Text;
