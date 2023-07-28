import PropTypes from 'prop-types';
import style from './Statistics.module.css'
import {generateColor} from './geterateColor'

export const Statistics = ({ title, stats }) => (
  <section className={style.statistics}>
    {title && <h2 className={style.title}>{title}</h2>}

    <ul className={style.statList}>
      {stats.map(({ label, percentage, id }) => <li
       key={id} 
        className={style.item}
      style={{ backgroundColor: generateColor() }}>
        <span className={style.label}>{label}</span>
        <span className={style.percentage}>{percentage}%</span>
    </li>)}

  </ul>
</section>
);

Statistics.propTypes = {
title: PropTypes.string,
stats: PropTypes.arrayOf(PropTypes.object.isRequired),
}

