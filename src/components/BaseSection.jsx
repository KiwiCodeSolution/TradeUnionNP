const BaseSection = ({ children, style }) => {
  return <section className={`w-full overflow-hidden relative ${style}`}>{children}</section>;
};

export default BaseSection;
