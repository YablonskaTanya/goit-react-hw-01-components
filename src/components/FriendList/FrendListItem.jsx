import PropTypes from 'prop-types';
import { FriendItem, Avatar, Starus, Name } from './FriandList.styled';

export const FrendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <Starus eventType={isOnline}>{isOnline}</Starus>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </FriendItem>
  );
};

FrendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
