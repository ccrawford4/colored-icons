interface DocIconProps {
  src: string;
  alt: string;
  className: string;
}
const DocIcon: React.FC<DocIconProps> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};

export default DocIcon;
