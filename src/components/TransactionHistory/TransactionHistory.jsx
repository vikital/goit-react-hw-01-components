import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => (
  <table className={style.transactionHistory}>
  <thead className={style.thead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

        <tbody>
            {items.map(({ id, type, amount, currency }) => <tr key={id}>
      <td className={style.td}>{type}</td>
      <td className={style.td}>{amount}</td>
      <td className={style.td}>{currency}</td>
    </tr>)}

  </tbody>
</table>
);

TransactionHistory.propTypes = {
items: PropTypes.arrayOf(PropTypes.object.isRequired),
}