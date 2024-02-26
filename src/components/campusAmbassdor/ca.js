import React from "react";
import guy from "./Images/guy.png";
import height from "./Images/heights.png"
import group from "./Images/grp.png"
import urn from "./Images/urn.png"
import image47 from "./Images/image 47.png"
import image43 from "./Images/image 43.png"
import image45 from "./Images/image 45.png"
import image41 from "./Images/image 41.png"
import saly12 from "./Images/Saly-12.png"

function CA() {
  return (
    <>

      <main>
        <div class="flex justify-end">
          <div class="text-7xl font-semibold pt-32 px-28 text-white w-1/2">
            <h1>
              CAMPUS
              <br />
              AMBASSADAR
              <br />
              PROGRAM
            </h1>
            <span class="text-white pt-12">
              <button class="text-sm font-medium border-r-0 rounded-lg p-4 tracking-wider bg-blue-600 hover:bg-blue-800">
                REGISTER NOW
              </button>
            </span>
          </div>

          <div class="flex justify-end px-36 pt-32 w-1/2">
            <div class=" h-72 align-top">
              <img src={guy} alt="" />
            </div>
          </div>
        </div>
      </main>
      <div class="flex space-x-24 justify-center text-white font-semibold pt-36 items-center">
        <div>
          <div class="w-20 h-12 ">
            <img src={height} alt="" />
          </div>

          <h5 class="text-5xl px-3 pt-7">30+</h5>
          <p class="font-serif pt-4">
            Institutes Part
            <br />
            Every Year
          </p>
        </div>
        <div class="border-l-4 h-24"></div>
        <div>
          <div class="w-20 h-12  ">
            <img src={group} alt="" />
          </div>

          <h5 class="text-5xl px30 pt-7">10k+</h5>
          <h2 class="pt-4">
            Footfall During <br />
            Techfest 21
          </h2>
        </div>
        <div class="border-l-4 h-24"></div>
        <div>
          <div class="w-20 h-12">
            {" "}
            <img src={urn} alt="" />
          </div>

          <h5 class="text-5xl px-3 pt-7">5L+</h5>
          <h2 class="pt-4">
            Worth of Goodies <br />
            and Prizes money
          </h2>
        </div>
      </div>
      <div class="pt-48">
        <p class="font-bold text-white text-4xl px-12 pt-10 ">
          PERKS OF BEING A CA
        </p>
        <p class="text-white px-80 ">
          __________________________________________________
        </p>
      </div>

      <div class="flex px-52 space-x-52 text-white">
        <div class="w-36 h-12">
          <span>
            <img src={image47} alt="" />
          </span>
          <p class="italic font-bold">Improve your soft skills</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            quasi odio, atque{" "}
          </p>
        </div>
        <div class="w-36 pt-28">
          <span>
            <img src={image43} alt="" />
          </span>
          <p class="italic font-bold">Become a leader</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            quasi odio, atque{" "}
          </p>
        </div>
        <div class="w-36">
          <span>
            <img src={image45} alt="" />
          </span>
          <p class="italic font-bold">Letter of recommendation</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            quasi odio, atque{" "}
          </p>
        </div>
      </div>
      <br />
      <br />

      <div class="flex px-52 space-x-52 text-white">
        <div class="w-36 h-12  pt-28">
          <span>
            <img src={saly12}alt="" />
          </span>
          <p class="italic font-bold">Improve your soft skills</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            quasi odio, atque{" "}
          </p>
        </div>
        <div class="w-36">
          <span>
            <img src={image41} alt="" />
          </span>
          <p class="italic font-bold">Get recognised</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            quasi odio, atque{" "}
          </p>
        </div>
        <div class="w-36  pt-28">
          <span>
            <img src={image43} alt="" />
          </span>
          <p class="italic font-bold">Goodies and rewards</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            quasi odio, atque{" "}
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default CA;
