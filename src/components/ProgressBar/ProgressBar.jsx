import clsx from 'clsx';
import css from './ProgressBar.module.css';

const ProgressBarColors = {
  low: '#da0e0e',
  medium: '#f5b642',
  high: '#5cb85c',
};

const ProgressBar = ({ value }) => {
  const getColor = () => {
    if (value < 50) {
      return ProgressBarColors.low;
    }

    if (value < 70) {
      return ProgressBarColors.medium;
    }

    return ProgressBarColors.high;
  }

  return (
    <div
      className={clsx(
        css.ProgressBar,
        { [css.ProgressBarComplete]: value === 100 },
        { [css.ProgressBarZero]: value === 0 },
      )}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        style={{
          '--progress': `${value}`,
          '--color': getColor(),
        }}
      >
        <circle className={css.ProgressBar__border} />
        <circle
          className={css.ProgressBar__progress}
        />
      </svg>

      {value} %
    </div>
  );
};

export default ProgressBar;
