const size = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
};

const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};

export default device;
