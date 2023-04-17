import styled from '@emotion/styled';

export const FriendListContainer = styled.ul`
  margin-left: 30px;
  margin-top: 30px;
  list-style: none;
  display: flex;
  gap: 30px;
  flex-direction: column;
`;

export const FriendItem = styled.li`
  display: flex;
  gap: 30px;
  align-items: center;

  width: 370px;
  padding: 15px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Avatar = styled.img`
  display: block;
  max-width: 100%;
  width: 70px;
`;

const statusColor = props => {
  switch (props.eventType) {
    case true:
      return '#b00404';
    case false:
      return '#137e02';

    default:
      return '#000';
  }
};

export const Starus = styled.span`
  display: block;
  width: 25px;
  height: 25px;
  background-color: ${statusColor};
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 800;
`;
