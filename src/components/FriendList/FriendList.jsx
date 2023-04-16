import PropTypes from 'prop-types';
import {
  FriendListContainer,
  FriendItem,
  Avatar,
  Starus,
  Name,
} from './FriandList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListContainer>
      {friends.map(friend => (
        <FriendItem key={friend.id}>
          <Starus eventType={friend.isOnline}>{friend.isOnline}</Starus>
          <Avatar src={friend.avatar} alt={friend.name} width="48" />
          <Name>{friend.name}</Name>
        </FriendItem>
      ))}
    </FriendListContainer>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    }).isRequired
  ),
};
