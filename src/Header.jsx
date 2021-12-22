import React from "react";

import "./style.css";

const Header = () => {
  return (
    <>
      <section>
        <div className="container-fluid bg-color2 ">
          <div className="row">
            <div className="col my-4 mx-4 p-md-2">
              <button className="btn bg-color1 text-black font-weight-bolder   ">
                Overall Attendance &nbsp; &#160;{" "}
                <span className="green">80%</span>
              </button>
            </div>

            <div className="col my-4 p-md-2">
              <button className="btn bg-color1 text-black font-weight-bolder">
                Avg. Test score &nbsp; &#160;
                <span className="orn">40%</span>
              </button>
            </div>

            <div className="col my-4 p-md-2">
              <button className="btn bg-color1 text-black font-weight-bolder">
                Assignment to check &nbsp; &#160;
                <span className="orn">3</span>
              </button>
            </div>
            <div className="col my-4 p-md-2">
              <button className="btn bg-color1 text-black font-weight-bolder">
                Course progress &nbsp; &#160; <span className="orn">39%</span>
              </button>
            </div>
          </div>

          <h6 className="font-weight-bold my-3 mb-2 mx-4">
            Pending at your desk
          </h6>

          <div className="row ">
            <div className="col-lg-9 col-md-3 col-12  ">
              <section>
                <div className="container-fluid border mx-4 bg-color1  my-1 border6">
                  <div className="row ">
                    <div className="col mx-2">
                      <div className="row text-black">
                        <h6>
                          Last minute revision - Light & sound Post your comment
                        </h6>
                        <div>
                          Physics class 6B *
                          <span className="orn">2/6 submitted</span>
                        </div>
                      </div>
                      <hr></hr>
                      <div className="row text-black">
                        <h6>
                          Grade Assignments - Light & sound Post your comment{" "}
                          &#160; &#160; &#160; &#160; &#160; &#160; &#160;
                          &#160; &#160; &#160; &#160; &#160; &#160; &#160;
                          &#160; &#160; &#160; &#160; &#160; &#160; &#160;
                          &#160; &#160; &#160; &#160; &#160; &#160; &#160;
                          &#160; &#160; &#160; &#160; &#160; &#160; &#160;
                          &#160; &#160; &#160; &#160; &#160; &#160; &#160;
                          &#160; &#160; &#160; &#160; &#160; &#160; &#160;
                          &#160; &#160; &#160; &#160; &#160; &#160; &#160;
                          <span className="txt">Physics class 6 </span>
                        </h6>
                        <div>
                          Physics class 6B *
                          <span className="orn">2/6 submitted</span>
                        </div>
                      </div>
                      <hr></hr>
                      <div className="row text-black">
                        <h6>Grade Test - Light & sound Post your comment</h6>
                        <div>
                          Physics class 6B *
                          <span className="orn">2/6 submitted</span>
                        </div>
                      </div>
                      <hr></hr>
                      <div className="row text-black">
                        <h6>Grade Quiz - Light & sound Post your comment</h6>
                        <div>
                          Physics class 6B *
                          <span className="orn">2/6 submitted</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="col-lg-2  col-12 mx-4 mb-5">
              <section>
                <div className="container-fluid ">
                  <h6 className="font-weight-bold ">
                    Time Table &#160; &#160; &#160; &#160;
                    <span className="green">View more</span>
                  </h6>
                  <div className="row box4 ">
                    <div className="row box2 text-white vl f-15 ">
                      <h6 className="f-16 my-1"> Class 11A - Chemistry</h6>
                      <p className="orn"> in 30 mins - 6c3d / 1PM</p>
                    </div>
                  </div>
                </div>
                <br></br>
                <h6 className="font-weight-bold mx-2">Student Overview</h6>
                <div className="row box3 font-weight-bolder text-black f-15  mx-2 ">
                  <h6 className="font-weight-bold my-2 f-15">TOP PERFORMER</h6>
                  <p>
                    Himanshu Raj &#160; &#160; &#160; &#160; &#160; &#160; Marks
                  </p>
                  <p>
                    Sudhanshu Raj &#160; &#160; &#160; &#160; &#160; &#160; Marks
                  </p>
                  <p>
                    Priyanshu Raj &#160; &#160; &#160; &#160; &#160; &#160; Marks
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
