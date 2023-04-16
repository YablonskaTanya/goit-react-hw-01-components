import PropTypes from 'prop-types';

import {
  TransactionTable,
  TableHeadContainer,
  TableHeadList,
  Type,
  Amount,
  Currency,
  TableBody,
  TableBodyList,
  TableBodyType,
  TableBodyAmount,
  TableBodyCurrency,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TableHeadContainer>
        <TableHeadList>
          <Type>Type</Type>
          <Amount>Amount</Amount>
          <Currency>Currency</Currency>
        </TableHeadList>
      </TableHeadContainer>
      <TableBody>
        {items.map(item => (
          <TableBodyList key={item.id}>
            <TableBodyType>{item.type}</TableBodyType>
            <TableBodyAmount>{item.amount}</TableBodyAmount>
            <TableBodyCurrency>{item.currency}</TableBodyCurrency>
          </TableBodyList>
        ))}
      </TableBody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    curency: PropTypes.string.isRequired,
  }),
};
