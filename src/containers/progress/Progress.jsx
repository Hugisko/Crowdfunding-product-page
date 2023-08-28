import "./progress.css";

const Progress = ({ stats }) => {
  return (
    <section className="progress__section section">
      <div className="progress__stats">
        <div className="progress__stats-backed progress__stat">
          <span>${stats.backed}</span>
          <p>of $100,000 backed</p>
        </div>
        <div className="progress__stats-backers progress__stat">
          <div className="line-one" />
          <span>{stats.total}</span>
          <p>total backers</p>
          <div className="line-two" />
        </div>
        <div className="progress__stats-left progress__stat">
          <span>56</span>
          <p>days left</p>
        </div>
      </div>
      <div className="progress__bar">
        <div
          className="bar"
          style={{
            width: `${stats.backed / 1000 > 100 ? 100 : stats.backed / 1000}%`,
          }}
        ></div>
      </div>
    </section>
  );
};

export default Progress;
