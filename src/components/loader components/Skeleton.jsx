import "./Skeleton.css";

function Skeleton() {
  return (
    <div className="skeleton">
      <div className="img-skeleton"></div>
      <div className="preview-right-skeleton">
        <div className="job-preview-skeleton">
          <div className="span-skeleton"></div>
          <div className="h3-skeleton"></div>
          <div className="job-mini-details-skeleton">
            <div>
              {/* <MdLocationOn /> */}
              <div className="span-skeleton"></div>
            </div>
            <div>
              {/* <FaMoneyBillWave /> */}
              <div className="span-skeleton"></div>
            </div>
            <div>
              {/* <BiSolidUser /> */}
              <div className="span-skeleton"></div>
            </div>
          </div>
        </div>

        <div className="button-skeleton"></div>
      </div>
    </div>
  );
}

export default Skeleton;
