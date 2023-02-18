import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { FC } from 'react';
import { Link } from 'react-scroll';

export interface BasicTimelineProps {
  timelineData: {
    title: string;
    key: string;
    anchorId: string,
  }[],
  onClick: (name: string) => void;
}

const BasicTimeline: FC<BasicTimelineProps> = ({
  timelineData,
  onClick,
}) => {
  const renderSingleTimeline = (
    title: string,
    onClick: (
      name: string,
    ) => void,
    key: string,
    anchorId: string,
    lastObject: boolean,
  ) => (
    <TimelineItem
      key={key}
    >
      <TimelineSeparator>
        <Link
          activeClass="active"
          to={anchorId}
          className='single-dot-nav'
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={() => onClick(title)}
        >
          <TimelineDot />
        </Link>
        {!!lastObject
        && (<TimelineConnector />)}
      </TimelineSeparator>
    </TimelineItem>
  )
  return (
    <Timeline>
      {timelineData.map((
        timeline,
        index,
      ) => renderSingleTimeline(
        timeline.title,
        onClick,
        timeline.key,
        timeline.anchorId,
        index !== timelineData.length - 1
      ))}
    </Timeline>
  );
}

export default BasicTimeline;
