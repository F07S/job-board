const Jobs = (props) => {
  return (
    <>
      <div className="job-box">
        <h4>{props.title}</h4>
        <div className="description">
          <span>{props.contractType}</span>
          <span>{props.country}</span>
          <span>{props.city}</span>
        </div>
      </div>
    </>
  );
};

export default Jobs;
