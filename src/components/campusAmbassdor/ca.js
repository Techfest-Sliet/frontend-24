import React from "react";

function CA() {
  return (
    <>
      <nav class="bg-black text-white py-4">
        <div class="flex justify-between px-4">
          <div class="flex space-x-2 rounded-lg">
            <h3>techFEST `23</h3>
            <span class="">
              <input
                type="text"
                placeholder="search...."
                class="rounded-full  pl-2"
              />
            </span>
            <span class="w-6">
              <img src="Images/search bar.jpg" alt="" />
            </span>
          </div>
          <ul class="flex space-x-4">
            <li>About US</li>
            <li>Workshops</li>
            <li>Domain</li>
            <li>CA Program</li>
            <li>
              <button class="font-medium border-r-3 rounded-lg px-2 p-1 tracking-wider bg-blue-600 hover:bg-blue-900">
                SignIn
              </button>
            </li>
          </ul>
        </div>
      </nav>

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
              <img src="Images/guy.png" alt="" />
            </div>
          </div>
        </div>
      </main>
      <div class="flex space-x-24 justify-center text-white font-semibold pt-36 items-center">
        <div>
          <div class="w-20 h-12 ">
            <img src="Images/heights.png" alt="" />
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
            <img src="Images/grp.png" alt="" />
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
            <img src="Images/urn.png" alt="" />
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
            <img src="Images/image 47.png" alt="" />
          </span>
          <p class="italic font-bold">Improve your soft skills</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            quasi odio, atque{" "}
          </p>
        </div>
        <div class="w-36 pt-28">
          <span>
            <img src="Images/image 43.png" alt="" />
          </span>
          <p class="italic font-bold">Become a leader</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            quasi odio, atque{" "}
          </p>
        </div>
        <div class="w-36">
          <span>
            <img src="Images/image 45.png" alt="" />
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
            <img src="Images/Saly-12.png" alt="" />
          </span>
          <p class="italic font-bold">Improve your soft skills</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            quasi odio, atque{" "}
          </p>
        </div>
        <div class="w-36">
          <span>
            <img src="Images/image 41.png" alt="" />
          </span>
          <p class="italic font-bold">Get recognised</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            quasi odio, atque{" "}
          </p>
        </div>
        <div class="w-36  pt-28">
          <span>
            <img src="Images/image 43.png" alt="" />
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
      <br />
      <br />
      <hr class="bg-green-500 h-2  px-28" />
      <br />
      <footer class="text-center text-white p-2">
        <p> techFEST /</p>
      </footer>
    </>
  );
}

export default CA;
