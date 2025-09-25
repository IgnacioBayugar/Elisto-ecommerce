import './Container.scss';
export default function Container({ children, className = '', ...props }) {
  return (
    <div className={`idb-container ${className}`} {...props}>
      {children}
    </div>
  );
}