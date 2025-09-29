import styles from './BenefitCard.module.scss';

function BenefitCard({ iconClass, title, description }) {
  return (
    <div className={styles['benefit-card']}>
      <i className={iconClass} style={{ fontSize: '2rem', color: '#004080',}}></i>
      <h3 className={styles['benefit-card__title']}>{title}</h3>
      <p className={styles['benefit-card__description']}>{description}</p>
    </div>
  );
}
export default BenefitCard;