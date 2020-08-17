import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import * as moment from "moment";
import logo from "../images/logo.png";
import More from "../images/More.png";
import Mask from "../images/Mask.png";
import photoBorder from "../images/photoBorder.png";

function Page() {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };
  const appointmentMark = ["04-07-2020"];
  const canceledMark = ["07-07-2020"];
  return (
    <div>
      <div className="bodyContainer">
        <div className="topBar">
          <div className="mountains">
            <img width="100%" src={Mask}></img>
          </div>

          <div className="profileBar">
            <div
              style={{
                position: "absolute",
                color: "white",
                marginTop: "5px",
                marginLeft: "10px",
                fontSize: "40px",
              }}
            >
              <i
                height="50px"
                class="fas fa-angle-left"
                style={{
                  marginLeft: "20px",
                }}
              ></i>
            </div>
            <div className="profileTitle mx-auto">Profile</div>
            <div></div>
          </div>
          <div className="fullscreenFormat">
            <div className="w-100">
              <div className="image text-center w-100 mt-5">
                <img
                  width="148px"
                  height="148px"
                  className="imgStyle"
                  src="https://s3-alpha-sig.figma.com/img/6ca9/510f/a19f243859fc31737fb97f590b8f33ec?Expires=1598227200&Signature=WHhLbYUSwD4az4ljtTvYjwsKnAwIe60s8VKq3NXqqYUMZfpv0i~vZb3ka0qs-R8cKVkbb6H3K6~CG8YlCDQRBPHo0LIcMi~MuJXGBJnQ22hKLUnbarTRG8Z-SV43l-8i0bfiEl5H-embtUBrpOSIrjIIDnUenmf8LqBKXRnaj0IVm9UdjpSGpZ1A0jvdsWFwS7YjA3pyA0UP52JIXx~mk13OyNKU5QDTbZWemT8f2ZskMe-8e-Kk6rgji0FWo3X3B9BAvsRba3vPKNT8eSDgl9ES3Glazm1a1RrEuErn0q5VbBMa2Bxcn2DoqeQorSin0oo5yaluVMPBk32h1A0PAA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                ></img>
              </div>
              <div
                className="doctorName w-100 mx-auto"
                style={{ marginTop: "30px", color: "white" }}
              >
                Hi Michail
              </div>
              <div
                className="affiliation w-100 mx-auto"
                style={{ marginTop: "80px", color: "white", marginLeft: "0%" }}
              >
                {" "}
                <div>
                  Affiliation: School Name / Institute / None/sssssssssssssss
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div className="subscriptions">
          <div style={{ textAlign: "center", width: "100%" }}>
            Subscriptions
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="dhyan">
            <div
              style={{ width: "50%", textAlign: "center", paddingTop: "13px" }}
            >
              Dhyanin
            </div>
            <div className="dhyanSubClass">
              {" "}
              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                  paddingTop: "0px",
                }}
              >
                Annual regular
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button className="subscribeNow">Subscribe Now</button>
        </div>

        <div className="preferences">
          <div style={{ textAlign: "center", width: "100%" }}>Preferences</div>
        </div>
        <div className="fullscreenFormat"></div>
        <div>
          <div>
            <div className="interest mr-3">Interests</div>
          </div>
          <div className="itemLists mr-1">
            <div className="items mr-3 "> items</div>
            <div className="items mr-3"> items</div>
            <div className="items mr-3"> items</div>
            <div className="items mr-3"> items</div>
            <div className="items mr-3"> items</div>
          </div>

          <div>
            <div>
              <div className="interest mr-3">Focus</div>
            </div>
            <div className="itemLists ">
              <div className="items mr-3 "> items</div>
              <div className="items mr-3"> items</div>
              <div className="items mr-3"> items</div>
              <div className="items mr-3"> items</div>
              <div className="items mr-3"> items</div>
            </div>
            <div className="itemLists">
              <div className="items mr-3 "> items</div>
              <div className="items mr-3"> items</div>
              <div className="items mr-3"> items</div>
              <div className="items mr-3"> items</div>
              <div className="items mr-3"> items</div>
            </div>
          </div>
          <div>
            <div>
              <div className="interest mr-3">Improve</div>
            </div>
            <div className="itemLists">
              <div className="items mr-3 "> items</div>
              <div className="items mr-3"> items</div>
              <div className="items mr-3"> items</div>
              <div className="items mr-3"> items</div>
              <div className="items mr-3"> items</div>
            </div>
            <div className="itemLists">
              <div className="items mr-3 "> items</div>
              <div className="items mr-3"> items</div>
              <div className="items mr-3"> items</div>
              <div className="items mr-3"> items</div>
              <div className="items mr-3"> items</div>
            </div>
            <div className="itemLists">
              <div className="items mr-3 "> items</div>
              <div className="items mr-3"> items</div>
              <div className="items mr-3"> items</div>
              <div className="items mr-3"> items</div>
              <div className="items mr-3"> items</div>
            </div>
            <div className="itemLists">
              <div className="items mr-3 "> items</div>
              <div className="items mr-3"> items</div>
              <div className="items mr-3"> items</div>
              <div className="items mr-3"> items</div>
              <div className="items mr-3"> items</div>
            </div>
          </div>
          <div className="preferences">
            <div
              style={{
                textAlign: "center",
                width: "100%",
                marginBottom: "16px",
              }}
            >
              <i
                style={{ color: "red", marginRight: "15px" }}
                class="fas fa-heart"
              ></i>
              My Heart
            </div>
          </div>
          <div className="cardList">
            <div className="cards">
              <img
                height="145"
                style={{ borderRadius: "13px", marginTop: "10px" }}
                src="https://s3-alpha-sig.figma.com/img/6ca9/510f/a19f243859fc31737fb97f590b8f33ec?Expires=1598227200&Signature=WHhLbYUSwD4az4ljtTvYjwsKnAwIe60s8VKq3NXqqYUMZfpv0i~vZb3ka0qs-R8cKVkbb6H3K6~CG8YlCDQRBPHo0LIcMi~MuJXGBJnQ22hKLUnbarTRG8Z-SV43l-8i0bfiEl5H-embtUBrpOSIrjIIDnUenmf8LqBKXRnaj0IVm9UdjpSGpZ1A0jvdsWFwS7YjA3pyA0UP52JIXx~mk13OyNKU5QDTbZWemT8f2ZskMe-8e-Kk6rgji0FWo3X3B9BAvsRba3vPKNT8eSDgl9ES3Glazm1a1RrEuErn0q5VbBMa2Bxcn2DoqeQorSin0oo5yaluVMPBk32h1A0PAA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              ></img>
              <div className="myHeartTitle">Counselling Annie Ray</div>
            </div>{" "}
            <div className="cards">
              <div className="blueBox">
                <h3>
                  <i
                    class="fas fa-play"
                    style={{ color: "white" }}
                    color="white"
                  ></i>
                </h3>
              </div>
              <div className="myHeartTitle">Deep Relaxation</div>
            </div>
          </div>
          <div
            className="d-flex justify-content-start"
            style={{
              marginTop: "60px",
            }}
          >
            <div className="col-example text-center">
              <div className="moodHistory">Mood History</div>
            </div>
          </div>
          <div
            className="d-flex justify-content-end"
            style={{
              marginTop: "20px",
            }}
          >
            <div className="col-example text-center">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <svg
                  style={{ marginTop: "50px" }}
                  width="61"
                  height="75"
                  viewBox="0 0 61 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M59.7892 58.933C60.0086 58.7653 60.0505 58.4515 59.8828 58.2321L57.1502 54.6568C56.9825 54.4374 56.6687 54.3955 56.4493 54.5632C56.2299 54.7309 56.188 55.0447 56.3557 55.2641L58.7847 58.4421L55.6067 60.8711C55.3873 61.0388 55.3454 61.3526 55.513 61.572C55.6807 61.7914 55.9945 61.8333 56.2139 61.6656L59.7892 58.933ZM24.8519 0.649964C13.3327 12.3996 9.60947 21.9969 10.7029 29.8132C11.7957 37.6258 17.6737 43.4617 24.8764 47.7564C32.09 52.0576 40.7314 54.8741 47.5506 56.6149C50.9638 57.4862 53.9282 58.0899 56.04 58.4759C57.096 58.6689 57.9393 58.8075 58.5192 58.898C58.8092 58.9433 59.0334 58.9765 59.1855 58.9984C59.2616 59.0094 59.3196 59.0176 59.3589 59.023C59.3785 59.0258 59.3934 59.0278 59.4035 59.0292C59.4086 59.0299 59.4124 59.0304 59.4151 59.0307C59.4164 59.0309 59.4175 59.0311 59.4182 59.0312C59.4189 59.0313 59.4194 59.0313 59.4856 58.5357C59.5518 58.0401 59.5516 58.0401 59.5512 58.0401C59.5506 58.04 59.5499 58.0399 59.5488 58.0397C59.5465 58.0394 59.5431 58.039 59.5385 58.0383C59.5292 58.0371 59.5152 58.0351 59.4964 58.0325C59.4589 58.0273 59.4027 58.0194 59.3284 58.0087C59.1799 57.9873 58.9595 57.9546 58.6734 57.91C58.1012 57.8207 57.2666 57.6835 56.2198 57.4922C54.126 57.1095 51.1847 56.5105 47.798 55.646C41.0175 53.9151 32.4824 51.1272 25.3885 46.8975C18.2839 42.6613 12.7235 37.0398 11.6932 29.6747C10.6635 22.3133 14.1322 13.0125 25.566 1.35004L24.8519 0.649964Z"
                    fill="url(#paint0_linear)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="48.7873"
                      y1="-21.6028"
                      x2="78.1838"
                      y2="49.2655"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#5570F7" />
                      <stop offset="1" stop-color="#A38CFF" />
                    </linearGradient>
                  </defs>
                </svg>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div className="happiness">Happiness Program</div>
                  <div className="clickHere">Click here to see results</div>
                </div>
              </div>
            </div>
          </div>

          <div className="preferences">
            <div style={{ textAlign: "center", width: "100%" }}>Calendar</div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Calendar
              style={{ marginLeft: "15px" }}
              border="0px"
              onChange={onChange}
              value={date}
              tileClassName={({ date }) => {
                if (
                  appointmentMark.find(
                    (x) => x === moment(date).format("DD-MM-YYYY")
                  )
                ) {
                  return "highlightgreen";
                }
              }}
              tileClassName={({ date, view }) => {
                if (
                  appointmentMark.find(
                    (x) => x === moment(date).format("DD-MM-YYYY")
                  )
                ) {
                  return "highlight";
                }
              }}
            />
          </div>
          <div className="preferences">
            <div
              style={{
                textAlign: "center",
                width: "100%",
                marginBottom: "16px",
              }}
            >
              Upcoming
            </div>
          </div>
          <div className="fullscreenFormat">
            <div>
              <div className="today">Today</div>
              <div className="cardList">
                <div className="cards">
                  <div className="Pbox" style={{ margin: "0" }}>
                    <div className="pboxText"> Yoga Class</div>
                    <div className="pboxText">M-W-F</div>
                  </div>
                  <div className="Tstyling ">
                    <div className="t1">Yoga Teacher :</div>
                    <div className="t2">
                      <b> Andy Allen</b>
                    </div>
                    <div className="t3"> 5:00 PM - Mon, Jun 15</div>
                    <div className="t4">
                      <i
                        style={{ color: "orange" }}
                        class="fas fa-calendar-alt"
                      ></i>
                    </div>
                  </div>
                </div>

                <div className="cards">
                  <div className="Pbox" style={{ margin: "0" }}></div>
                  <div className="Tstyling pl-3">
                    <div className="t1">Yoga Teacher :</div>
                    <div className="t2">
                      <b> Andy Allen</b>
                    </div>
                    <div className="t3"> 5:00 PM - Mon, Jun 15</div>
                    <div className="t4">
                      <i
                        style={{ color: "orange" }}
                        class="fas fa-calendar-alt"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="today">Tomorrow</div>
              <div className="d-flex bd-highlight example-parent">
                {" "}
                <div
                  style={{
                    height: "195px",
                    width: "220px",
                    borderRadius: "25px",
                    border: "2px solid #5B86E5",
                    marginLeft: "10px",
                  }}
                >
                  <h6 style={{ marginTop: "40%", textAlign: "center" }}>
                    {" "}
                    No appoinments
                  </h6>
                </div>
              </div>

              <div className="d-flex flex-row" style={{ marginTop: "16px" }}>
                <div className="dateTags1 p-2">
                  <div className="date1">Wed, Jun 17</div>
                </div>
                <div className="dateTag2 p-2" style={{}}>
                  <div className="date2">Thrus, Jun 18</div>
                </div>
                <div className="dateTag2 p-2">
                  <div className="date2">Fri, Jun 19</div>
                </div>
              </div>
              <div className="d-flex bd-highlight example-parent">
                <div className="p-2 flex-fill bd-highlight col-example">
                  {" "}
                  <div className="blueBox">
                    <h6 style={{ textAlign: "center", color: "white" }}>
                      {" "}
                      Meditation Class
                    </h6>
                  </div>
                  <div className="Tstyling ">
                    <div className="t1">Yoga Teacher :</div>
                    <div className="t2">
                      <b> Andy Allen</b>
                    </div>
                    <div className="t3"> 5:00 PM - Mon, Jun 15</div>
                    <div className="t4">
                      <i
                        style={{ color: "orange" }}
                        class="fas fa-calendar-alt"
                      ></i>
                    </div>
                  </div>
                </div>
                <div className="p-2 flex-fill bd-highlight col-example ">
                  {" "}
                  <div className="blueBox2">
                    <h6 style={{ textAlign: "center", color: "white" }}>
                      {" "}
                      Breath Work
                    </h6>
                  </div>
                  <div className="Tstyling">
                    <div className="t1">Yoga Teacher :</div>
                    <div className="t2">
                      <b> Mandy Mallen</b>
                    </div>
                    <div className="t3"> 5:00 PM - Mon, Jun 15</div>
                    <div className="t4">
                      <i
                        style={{ color: "orange" }}
                        class="fas fa-calendar-alt"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fullscreenFormat pl-2">
            <div>
              <div className="preferences">
                <div style={{ textAlign: "center", width: "100%" }}>
                  History
                </div>
              </div>

              <div className="audios pl-2">Audios</div>
              <div className="d-flex flex-row" style={{ marginTop: "16px" }}>
                <div
                  className="p-2"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "16px",
                    width: "100px",
                    height: "35px",
                    marginLeft: "16px",
                    background:
                      "linear-gradient(90deg, #36D1DC 0%, #5B86E5 100%)",
                    borderRadius: "25px",
                  }}
                >
                  <div
                    className="date1"
                    style={{
                      width: "100%",
                      textAlign: "center",
                      marginLeft: "25%",
                    }}
                  >
                    Liked
                  </div>
                </div>
                <div
                  className="p-2"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "16px",
                    width: "100px",
                    height: "35px",
                    border: "1px solid #5B86E5",
                    borderRadius: "25px",
                    marginLeft: "18px",
                    textAlign: "center",
                  }}
                >
                  <div
                    className="date2"
                    style={{
                      width: "100%",
                      textAlign: "center",
                      marginLeft: "50%",
                    }}
                  >
                    Played
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "spaceBetween",
                }}
              >
                <div className="d-flex bd-highlight example-parent">
                  <div className="p-2 flex-fill bd-highlight col-example">
                    <div className="Bbox">
                      <h3>
                        <i
                          class="fas fa-play"
                          style={{ color: "white" }}
                          color="white"
                        ></i>
                      </h3>
                    </div>
                    <div className="audiosLabel pl-1">Music for kids</div>
                  </div>
                  <div className="p-2 flex-fill bd-highlight col-example">
                    {" "}
                    <div className="Pbox">
                      <h3>
                        <i
                          class="fas fa-play"
                          style={{ color: "white" }}
                          color="white"
                        ></i>
                      </h3>
                    </div>
                    <div className="audiosLabel pl-3">Music for kids</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fullscreenFormat ">
            <div>
              <div className="audios pl-2">Personalised</div>
              <div className="d-flex flex-row" style={{ marginTop: "16px" }}>
                <div
                  className="p-2"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "16px",
                    width: "100px",
                    height: "35px",
                    marginLeft: "16px",
                    background:
                      "linear-gradient(90deg, #36D1DC 0%, #5B86E5 100%)",
                    borderRadius: "25px",
                  }}
                >
                  <div
                    className="date1"
                    style={{
                      width: "100%",
                      textAlign: "center",
                      marginLeft: "6%",
                    }}
                  >
                    Appointments
                  </div>
                </div>
                <div
                  className="p-2"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "16px",
                    width: "100px",
                    height: "35px",
                    border: "1px solid #5B86E5",
                    borderRadius: "25px",
                    marginLeft: "18px",
                    textAlign: "center",
                  }}
                >
                  <div
                    className="date2"
                    style={{
                      width: "100%",
                      textAlign: "center",
                      marginLeft: "50%",
                    }}
                  >
                    Liked
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "spaceBetween",
                }}
              >
                <div className="d-flex bd-highlight example-parent">
                  <div className="p-2 flex-fill bd-highlight col-example">
                    <div className="Bbox">
                      <h3>
                        <i
                          class="fas fa-play"
                          style={{ color: "white" }}
                          color="white"
                        ></i>
                      </h3>
                    </div>
                    <div className="Tstyling pl-1 ">
                      <div className="t1">Yoga Teacher :</div>
                      <div className="t2">
                        <b> Andy Allen</b>
                      </div>
                      <div className="t3"> 5:00 PM - Mon, Jun 15</div>
                      <div className="t4">
                        <i
                          style={{ color: "orange" }}
                          class="fas fa-calendar-alt"
                        ></i>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 flex-fill bd-highlight col-example">
                    {" "}
                    <div className="Pbox">
                      <h3>
                        <i
                          class="fas fa-play"
                          style={{ color: "white" }}
                          color="white"
                        ></i>
                      </h3>
                    </div>
                    <div className="Tstyling pl-3">
                      <div className="t1">Yoga Teacher :</div>
                      <div className="t2">
                        <b> Mandy Mallen</b>
                      </div>
                      <div className="t3"> 5:00 PM - Mon, Jun 15</div>
                      <div className="t4">
                        <i
                          style={{ color: "orange" }}
                          class="fas fa-calendar-alt"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fullscreenFormat">
            <div>
              <div className="audios pl-2">Courses</div>
              <div className="d-flex flex-row" style={{ marginTop: "16px" }}>
                <div
                  className="p-2"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "16px",
                    width: "100px",
                    height: "35px",
                    marginLeft: "16px",
                    background:
                      "linear-gradient(90deg, #36D1DC 0%, #5B86E5 100%)",
                    borderRadius: "25px",
                  }}
                >
                  <div
                    className="date1"
                    style={{
                      width: "100%",
                      textAlign: "center",
                      marginLeft: "12%",
                    }}
                  >
                    Completed
                  </div>
                </div>
                <div
                  className="p-2"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "16px",
                    width: "100px",
                    height: "35px",
                    border: "1px solid #5B86E5",
                    borderRadius: "25px",
                    marginLeft: "18px",
                    textAlign: "center",
                  }}
                >
                  <div
                    className="date2"
                    style={{
                      width: "100%",
                      textAlign: "center",
                      marginLeft: "50%",
                    }}
                  >
                    Liked
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "spaceAround",
                }}
              >
                <div className="d-flex bd-highlight example-parent">
                  <div className="p-2 flex-fill bd-highlight col-example">
                    <div className="Bbox">
                      <h3>
                        <i
                          class="fas fa-play"
                          style={{ color: "white" }}
                          color="white"
                        ></i>
                      </h3>
                    </div>
                    <div className="Tstyling pl-1">
                      <div className="t1">Courses timing :</div>
                      <div className="t3"> 5:00 PM - Mon, Jun 15</div>
                      <div className="t4">
                        <i
                          style={{ color: "orange" }}
                          class="fas fa-calendar-alt"
                        ></i>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 flex-fill bd-highlight col-example">
                    {" "}
                    <div className="Pbox">
                      <h3>
                        <i
                          class="fas fa-play"
                          style={{ color: "white" }}
                          color="white"
                        ></i>
                      </h3>
                    </div>
                    <div className="Tstyling pl-3">
                      <div className="t1">Courses timing :</div>
                      <div className="t3"> 5:00 PM - Mon, Jun 15</div>
                      <div className="t4">
                        <i
                          style={{ color: "orange" }}
                          class="fas fa-calendar-alt"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fullscreenFormat">
            <div>
              <div className="audios pl-2">YogaStudio</div>
              <div className="d-flex flex-row" style={{ marginTop: "8px" }}>
                <div
                  className="p-2"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "16px",
                    width: "100px",
                    height: "35px",
                    marginLeft: "16px",
                    background:
                      "linear-gradient(90deg, #36D1DC 0%, #5B86E5 100%)",
                    borderRadius: "25px",
                  }}
                >
                  <div
                    className="date1"
                    style={{
                      width: "100%",
                      textAlign: "center",
                      marginLeft: "25%",
                    }}
                  >
                    Joined
                  </div>
                </div>

                <div
                  className=" p-2"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "4px 14px",
                    marginTop: "16px",
                    width: "100px",
                    height: "35px",
                    border: "1px solid #5B86E5",
                    borderRadius: "25px",
                    marginLeft: "18px",
                    textAlign: "center",
                  }}
                >
                  <div
                    className="date2"
                    style={{
                      width: "100%",
                      textAlign: "center",
                      marginLeft: "50%",
                    }}
                  >
                    Liked
                  </div>
                </div>
              </div>
              <div className="cardList">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <img
                    height="100"
                    style={{
                      marginBottom: "16px",
                      marginTop: "16px",
                      borderRadius: "13px",
                    }}
                    src="https://s3-alpha-sig.figma.com/img/9f82/e6d9/7588a6a32d3c2b986c005966215ae474?Expires=1598227200&Signature=Jf2x6bvroP62CE2dcMAXFkdw8IGhXvDfhd0aLEIUPA2U367Pk--u-uFH96iZXhl4rf6PXtdk3IXFm-5SwsACUkpcLhM6fPZa7dqSqeLr7shxlz62QTaKob1Pj0NTG8ojdD5wsggoNgFbHPSv8XYMpQ44iy0k0BggHvwskZ5paCIWcJeHqkC5qtrdorTZArG4MQ0O8j~LC81plFBVIwKBW7E1LNiJNq2IUf4iWaaIFHIQoJk6o2mGJShjBV3KXgFZs3TV3FuiZAc0bR6kLZDFvB25-B8G74qolaGKbcwFikiExRJJhIKHJfqeq90kby-Lj8z18oQhG4SYkX45~k0qxw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  ></img>
                  <div className="imgTit">studio</div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <img
                    height="100"
                    style={{
                      marginBottom: "16px",
                      marginTop: "16px",
                      borderRadius: "13px",
                    }}
                    src="https://s3-alpha-sig.figma.com/img/9f82/e6d9/7588a6a32d3c2b986c005966215ae474?Expires=1598227200&Signature=Jf2x6bvroP62CE2dcMAXFkdw8IGhXvDfhd0aLEIUPA2U367Pk--u-uFH96iZXhl4rf6PXtdk3IXFm-5SwsACUkpcLhM6fPZa7dqSqeLr7shxlz62QTaKob1Pj0NTG8ojdD5wsggoNgFbHPSv8XYMpQ44iy0k0BggHvwskZ5paCIWcJeHqkC5qtrdorTZArG4MQ0O8j~LC81plFBVIwKBW7E1LNiJNq2IUf4iWaaIFHIQoJk6o2mGJShjBV3KXgFZs3TV3FuiZAc0bR6kLZDFvB25-B8G74qolaGKbcwFikiExRJJhIKHJfqeq90kby-Lj8z18oQhG4SYkX45~k0qxw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  ></img>
                  <div className="imgTit">studio</div>
                </div>
              </div>

              <div className="audios pl-2" style={{ width: "maxContent" }}>
                Foodie
              </div>
              <div className="d-flex flex-row" style={{ marginTop: "8px" }}>
                <div
                  className="p-2"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "16px",
                    width: "100px",
                    height: "35px",
                    marginLeft: "0px",
                    background:
                      "linear-gradient(90deg, #36D1DC 0%, #5B86E5 100%)",
                    borderRadius: "25px",
                  }}
                >
                  <div
                    className="date1"
                    style={{
                      width: "100%",
                      textAlign: "center",
                      marginLeft: "15%",
                    }}
                  >
                    Purchased
                  </div>
                </div>
                <div
                  className="p-2"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "4px 14px",
                    marginTop: "16px",
                    width: "100px",
                    height: "35px",
                    border: "1px solid #5B86E5",
                    borderRadius: "25px",
                    marginLeft: "18px",
                    textAlign: "center",
                  }}
                >
                  <div
                    className="date2"
                    style={{
                      width: "100%",
                      textAlign: "center",
                      marginLeft: "50%",
                    }}
                  >
                    Liked
                  </div>
                </div>
              </div>
              <div className="cardList">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <img
                    height="110"
                    style={{
                      marginBottom: "16px",
                      marginTop: "16px",
                      borderRadius: "13px",
                    }}
                    src="https://s3-alpha-sig.figma.com/img/d72b/b5a1/c2cfb26ebcce57bccf105aa2328feab9?Expires=1598227200&Signature=WUt8NeRkaMaV8D1lMrHJjlRKRH3Iz8K6dCvvSJ6UViev1uQgcUFdJLLjLMNMG0sXIob~LzCDORUXAOsPziQx8ryU-V2OzQeECYJ0sOk9cdSOweOhg7BsN418YIXyzx5ZNnOqAFBScO8pdv0b4864hnPO~Yn8d9NKwV54F7oaptK4u~oYKy3XJQhXEIs4~tq5Gx1s8HznPivVjsab0GOckzl1OySD5e~JV2~~XT30YqosFzFsyhd1i2fdzHQJ4gJjQ0-JsdSR1p9LFvbYe9~b6-FUDXSsJOOTHuUQhxjCHe9JbYPh443YxlHH-F7RyBRDJwQZtJebOqRbkArtqkc9Ow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  ></img>
                  <div className="imgTit">item name</div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <img
                    height="110"
                    style={{
                      marginBottom: "16px",
                      marginTop: "16px",
                      borderRadius: "13px",
                    }}
                    src="https://s3-alpha-sig.figma.com/img/d72b/b5a1/c2cfb26ebcce57bccf105aa2328feab9?Expires=1598227200&Signature=WUt8NeRkaMaV8D1lMrHJjlRKRH3Iz8K6dCvvSJ6UViev1uQgcUFdJLLjLMNMG0sXIob~LzCDORUXAOsPziQx8ryU-V2OzQeECYJ0sOk9cdSOweOhg7BsN418YIXyzx5ZNnOqAFBScO8pdv0b4864hnPO~Yn8d9NKwV54F7oaptK4u~oYKy3XJQhXEIs4~tq5Gx1s8HznPivVjsab0GOckzl1OySD5e~JV2~~XT30YqosFzFsyhd1i2fdzHQJ4gJjQ0-JsdSR1p9LFvbYe9~b6-FUDXSsJOOTHuUQhxjCHe9JbYPh443YxlHH-F7RyBRDJwQZtJebOqRbkArtqkc9Ow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  ></img>
                  <div className="imgTit">item name</div>
                </div>
              </div>

              <div className="audios pl-2" style={{ width: "maxContent" }}>
                Products
              </div>
              <div className="d-flex flex-row" style={{ marginTop: "8px" }}>
                <div
                  className="p-2"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "16px",
                    width: "100px",
                    height: "35px",
                    marginLeft: "16px",
                    background:
                      "linear-gradient(90deg, #36D1DC 0%, #5B86E5 100%)",
                    borderRadius: "25px",
                  }}
                >
                  <div
                    className="date1"
                    style={{
                      width: "100%",
                      textAlign: "center",
                      marginLeft: "15%",
                    }}
                  >
                    Purchased
                  </div>
                </div>
                <div
                  className="p-2"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "4px 14px",
                    marginTop: "16px",
                    width: "100px",
                    height: "35px",
                    border: "1px solid #5B86E5",
                    borderRadius: "25px",
                    marginLeft: "18px",
                    textAlign: "center",
                  }}
                >
                  <div
                    className="date2"
                    style={{
                      width: "100%",
                      textAlign: "center",
                      marginLeft: "50%",
                    }}
                  >
                    Liked
                  </div>
                </div>
              </div>
              <div className="cardList">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <img
                    height="92"
                    style={{
                      marginBottom: "16px",
                      marginTop: "16px",
                      borderRadius: "13px",
                    }}
                    src="https://s3-alpha-sig.figma.com/img/3fd1/6c51/6348f1b383c87c7549d2a61b5dd3eb33?Expires=1598227200&Signature=f1Mk5120MFWnvqNFLnT5atoUNBfGLQuhi6tcs1TsP88Dc7JD9UHZ7RsOWoZ5O6sUIDMbj0ArR97-qMco6~kc4gs7dupjSpIf8w1aDL2T5Xtb9lFIOK1BBzF7JjaMvt8aObk9SNkR4XdHkwvh06mjhNBwyLJCYVT8pdskBSSwaDSMWDv0aZ0xlV8Yds-2BVUjv5R2fL3i~zqlpyP6tgxCnlH9aI4qxyDmgpARUTuwvUdgE8-xLIf-Dvw8J7km0mRX1-RA-B7swhO0gXKoOIx8UPrErIJtfiZjVSIt2q1lvLqv1s2otoarFjyYxgMlhdKfU6bXQYSbVSOefJzaM1g8WA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  ></img>
                  <div className="imgTit">Name of Product</div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <img
                    height="92"
                    style={{
                      marginBottom: "16px",
                      marginTop: "16px",
                      borderRadius: "13px",
                    }}
                    src="https://s3-alpha-sig.figma.com/img/3fd1/6c51/6348f1b383c87c7549d2a61b5dd3eb33?Expires=1598227200&Signature=f1Mk5120MFWnvqNFLnT5atoUNBfGLQuhi6tcs1TsP88Dc7JD9UHZ7RsOWoZ5O6sUIDMbj0ArR97-qMco6~kc4gs7dupjSpIf8w1aDL2T5Xtb9lFIOK1BBzF7JjaMvt8aObk9SNkR4XdHkwvh06mjhNBwyLJCYVT8pdskBSSwaDSMWDv0aZ0xlV8Yds-2BVUjv5R2fL3i~zqlpyP6tgxCnlH9aI4qxyDmgpARUTuwvUdgE8-xLIf-Dvw8J7km0mRX1-RA-B7swhO0gXKoOIx8UPrErIJtfiZjVSIt2q1lvLqv1s2otoarFjyYxgMlhdKfU6bXQYSbVSOefJzaM1g8WA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  ></img>
                  <div className="imgTit">Name of Product</div>
                </div>
              </div>

              <div className="audios pl-2" style={{ width: "maxContent" }}>
                Restaurant
              </div>
              <div className="d-flex flex-row" style={{ marginTop: "8px" }}>
                <div
                  className="p-2"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "16px",
                    width: "100px",
                    height: "35px",
                    marginLeft: "16px",
                    background:
                      "linear-gradient(90deg, #36D1DC 0%, #5B86E5 100%)",
                    borderRadius: "25px",
                  }}
                >
                  <div
                    className="date1"
                    style={{
                      width: "100%",
                      textAlign: "center",
                      marginLeft: "15%",
                    }}
                  >
                    Purchased
                  </div>
                </div>
                <div
                  className="p-2"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "4px 14px",
                    marginTop: "16px",
                    width: "100px",
                    height: "35px",
                    border: "1px solid #5B86E5",
                    borderRadius: "25px",
                    marginLeft: "18px",
                    textAlign: "center",
                  }}
                >
                  <div
                    className="date2"
                    style={{
                      width: "100%",
                      textAlign: "center",
                      marginLeft: "50%",
                    }}
                  >
                    Liked
                  </div>
                </div>
              </div>
              <div className="cardList">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <img
                    height="110"
                    style={{
                      marginBottom: "16px",
                      marginTop: "16px",
                      borderRadius: "13px",
                    }}
                    src="https://s3-alpha-sig.figma.com/img/419d/eb9c/a75b535fe9af4ce479e5c58f0528faf0?Expires=1598227200&Signature=R4mQy235oz29ai8p6cEY50vGD5mMQdX3kHElt5neEzGJr8hetLQ-CwmE-WPcGPJymYUWhBMwg3kjK20qnEDVIAwYSoG5BriCb8uX9IXTluRC86mGngm7qo0oCbDOOWmqAARtfZz-a9oavvUHikMKf7fiLlKEXvMQCtkSo3GPnxEUsm-yDrgfg3eVsLeV6E5PxxB-XXsCj-PHoL918huWKWW-1d44LOfR8uR05CBxzG5M8OCNXBbv4jjRJpmOafcm0pCxGETWOaNV6KYaVj-84F4ecCaErKCtz0OaEwYrN7MD6Pyj8-QoKSquHEplQNU5JWAK6Y~EBSe1n2gIuUUGmA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  ></img>
                  <div className="imgTit">Restaurant name</div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <img
                    height="110"
                    className="imgStudio2"
                    style={{
                      marginBottom: "16px",
                      marginTop: "16px",
                      borderRadius: "13px",
                    }}
                    src="https://s3-alpha-sig.figma.com/img/419d/eb9c/a75b535fe9af4ce479e5c58f0528faf0?Expires=1598227200&Signature=R4mQy235oz29ai8p6cEY50vGD5mMQdX3kHElt5neEzGJr8hetLQ-CwmE-WPcGPJymYUWhBMwg3kjK20qnEDVIAwYSoG5BriCb8uX9IXTluRC86mGngm7qo0oCbDOOWmqAARtfZz-a9oavvUHikMKf7fiLlKEXvMQCtkSo3GPnxEUsm-yDrgfg3eVsLeV6E5PxxB-XXsCj-PHoL918huWKWW-1d44LOfR8uR05CBxzG5M8OCNXBbv4jjRJpmOafcm0pCxGETWOaNV6KYaVj-84F4ecCaErKCtz0OaEwYrN7MD6Pyj8-QoKSquHEplQNU5JWAK6Y~EBSe1n2gIuUUGmA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  ></img>
                  <div className="imgTit">Restaurant name</div>
                </div>
              </div>
            </div>
          </div>
          <div className="fullscreenFormat">
            <footer style={{ width: "100%" }}>
              <img
                className="footerImage"
                width="100%"
                style={{ marginTop: "30px" }}
                src={More}
              ></img>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Page;
