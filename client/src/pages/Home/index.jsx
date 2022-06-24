import React from "react";
import ProfileSide from "../../components/profile";
import "./index.css";

function Home() {
  return (
    <div className="Home">
      <ProfileSide />
      <div className="postSide">Post</div>
      <div className="rightSide">Right</div>
    </div>
  );
}

export default Home;
