import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem'
import style from './FriendList.module.css'

export const FriendList = ({ friends }) => (
    <ul className={style.friendList}>
        {friends.map(friend =>
            <FriendListItem
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline} />
    )}       
</ul>
);

FriendList.propTypes = {
friends: PropTypes.arrayOf(PropTypes.object.isRequired),
}