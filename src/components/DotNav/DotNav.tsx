import { styles } from './DotNav.styles';
import BasicTimeline from '../BasicTimeline/BasicTimeline';
import { timeLineData } from '@/constants';

export const DotNav = ({
  onClick,
}: {
  onClick: (name: string) => void;
}) => {
  return (
    <div
      className='main-nav'
      style={styles.mainNav}
    >
      <div
      >
        <div
          style={styles.linkContainer}
        >
          <BasicTimeline
            timelineData={timeLineData}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  )
}