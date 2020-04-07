import React, {useState} from 'react';
import './profile.scss';
import { animationTransitionGroup as AnimationTransitionGroup } from '../../../../component/animation-transition-group';

export const Profile = props => {
  const [isProfileListShow, profileListTrigger] = useState(false);
  const [positionX, positionXTrigger] = useState(0);
  const [positionY, positionYTrigger] = useState(0);
  const [width, widthTrigger] = useState(0);
  const profileListTriggerShow = event => {
    const elementRect = event.target.getBoundingClientRect();
    profileListTrigger(!isProfileListShow);
    positionXTrigger(Math.round(elementRect.x));
    positionYTrigger(Math.round(elementRect.top + elementRect.y));
    widthTrigger(Math.round(elementRect.width));
  };
  const profileListTriggerHide = event => {
    profileListTrigger(false);
    positionXTrigger(0);
    positionYTrigger(0);
  };
  return (
    <div className="profile">
      <div className="profile-welcome" onClick={event => profileListTriggerShow(event)}>Здраствуйте, Роман</div>
      <AnimationTransitionGroup type={'fade'} isShow={isProfileListShow}>
        <div className="profile-list-overlay" onClick={event => profileListTriggerHide(event)}>
          <ul
            className="profile-list-actions"
            style={{
              top: `${positionY}px`,
              left: `${positionX}px`,
              width: `${width}px`
            }}
            onClick={event => event.stopPropagation()}>
            <li className="profile-list-actions__item">Профиль</li>
            <li className="profile-list-actions__item">Выйти</li>
          </ul>
        </div>
      </AnimationTransitionGroup>
    </div>
  )
};
