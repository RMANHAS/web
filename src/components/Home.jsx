import React from "react";
import vg from "../assets/spider.png";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>hello sir</h1>
          <p>this is for all for you</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Grapics" />
        <div>
          <p>
            this is the one who can be there for only one condition.the
            condition is you can do whatever you do not others want is it okay
            or not tell me first
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Computer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            explicabo numquam dolore dolor corrupti debitis adipisci fuga
            placeat, nam modi cum? Deserunt quod magnam dolore cum tenetur ipsa
            rem aliquid?
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                AnimationDelay: "0.5s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                AnimationDelay: "0.7s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                AnimationDelay: "0.9s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
            <div
              style={{
                AnimationDelay: "1s",
              }}
            >
              <AiFillYoutube />
              <p>YouTube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
