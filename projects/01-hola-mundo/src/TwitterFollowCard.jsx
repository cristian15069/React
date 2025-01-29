import { useState } from 'react';
import PropTypes from 'prop-types';

export function TwitterFollowCard({ children, userName, initialFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialFollowing);
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClass = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    };

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    src="https://unavatar.io/kikobeats?ttl=1h"
                    alt=""
                    className="tw-followCard-avatar"
                />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClass} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    );
}

TwitterFollowCard.propTypes = {
    children: PropTypes.node.isRequired,
    userName: PropTypes.string.isRequired,
    initialFollowing: PropTypes.bool.isRequired
};
