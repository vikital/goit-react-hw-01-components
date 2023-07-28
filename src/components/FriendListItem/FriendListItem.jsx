import PropTypes from 'prop-types';
import style from './FriendListItem.module.css'

export const FriendListItem = ({ avatar, name, isOnline }) => (
<li className={style.item}>
        <span 
        className={`${isOnline ? style.online : style.offline}`}
        ></span>
        <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={style.name}>{name}</p>
</li>
);


FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}