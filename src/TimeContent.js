import './TimeContent.css';
import React from 'react';

const timeConfig = {
  morning: {
    text: 'Good morning sunshine!',
    iconName: 'coffee'
  },
  afternoon: {
    text: 'Afternoon scout! Are you being productive?',
    iconName: 'battery half'
  },
  night: {
    text: 'Hey, start winding down for the end of day and bed.',
    iconName: 'moon'
  }
}

const getTimeOfDay = (time) => {
  if (time < 12) {
    return 'morning'
  }
  else if (time < 18) {
    return 'afternoon'
  }
  else {
    return 'night'
  }
}

const TimeContent = props => {
  const statement = getTimeOfDay(props.time)
  const { text, iconName } = timeConfig[statement]

  return (
    <div className={`time-content ${statement}`} >
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  )
}

export default TimeContent
