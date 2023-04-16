import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  margin-left: 30px;
  margin-top: 30px;
  border: solid 1px;
  border-color: black;

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const TableHeadContainer = styled.thead`
  display: block;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: #00ffff;
`;

export const TableHeadList = styled.tr`
  display: flex;
  height: 50px;
  justify-content: space-around;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Type = styled.th`
  padding-top: 15px;
  width: 140px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const Amount = styled.th`
  padding-top: 15px;
  width: 140px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const Currency = styled.th`
  padding-top: 15px;
  width: 140px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
`;
export const TableBodyList = styled.th`
  display: flex;
`;
export const TableBodyType = styled.td`
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  width: 140px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const TableBodyAmount = styled.td`
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  width: 140px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const TableBodyCurrency = styled.td`
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  width: 140px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
