import './Section.scss';
export default function Section({ children, className = '', ...props }) {
  return (
    <section className={`idb-section ${className}`} {...props}>
      {children}
    </section>
  );
}