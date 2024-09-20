import React from "react";
import MemberCard from "./MemberCard";
import { photos } from "./images";
import { useMediaQuery } from "@mui/material";

const OurTeam = () => {
  const isMobile = useMediaQuery("(max-width: 450px)");

  return (
    <div>
      <div className="ourTeam" style={{ marginTop: "5rem", width: "100%" }}>
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          Patron-In-Chief
        </h1>
        <section
          className="Director"
          style={{
            display: "flex",
            marginBottom: "4.5rem",
            justifyContent: "center",
            flexDirection: isMobile && "column",
          }}
        >
          <MemberCard
            name={"Dr. Mani Kant Paswan"}
            post={"Director, SLIET Longowal"}
            linkedIn={
              "https://www.linkedin.com/in/mani-kant-paswan-3359b314a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            }
            image={photos.Director}
            mail={"director@sliet.ac.in"}
          />
        </section>
        <h1 style={{ display: "flex", justifyContent: "center" }}>Patron</h1>
        <section
          className="DeanSW"
          style={{
            display: "flex",
            marginBottom: "4.5rem",
            justifyContent: "center",
            flexDirection: isMobile && "column",
          }}
        >
          <MemberCard
            name={"Dr. Rajesh Kumar"}
            post={"Dean - Student Welfare"}
            linkedIn={
              "https://www.linkedin.com/in/rajesh-kumar-0318a820?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            }
            image={photos.DeanSW}
            mail={"rajesh_krs@sliet.ac.in"}
          />
        </section>
        <h1 style={{ display: "flex", justifyContent: "center" }}>Chairman</h1>
        <section
          className="Chairman"
          style={{
            display: "flex",
            marginBottom: "4.5rem",
            justifyContent: "center",
            flexDirection: isMobile && "column",
          }}
        >
          <MemberCard
            name={"Dr. Gulshan Kumar Jawa"}
            post={"Chairman"}
            linkedIn={
              "https://www.linkedin.com/in/gulshan-jawa-597b1126?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            }
            mail={"gulshanjawa@sliet.ac.in"}
            image={photos.Chairman}
          />
        </section>
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          Vice-Chairman
        </h1>
        <section
          className="Vice-Chairman"
          style={{
            display: "flex",
            marginBottom: "4.5rem",
            justifyContent: "center",
            flexDirection: isMobile && "column",
          }}
        >
          <MemberCard
            name={"Dr. Sunil Kumar"}
            post={"Vice-Chairman"}
            linkedIn={
              "https://www.linkedin.com/in/sunil-kumar-40656b158?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            }
            mail={"sunilkumar@sliet.ac.in"}
            image={photos.ViceChairmen1}
          />
          <MemberCard
            name={"Dr. Pankaj Kumar Das"}
            post={"Vice-Chairman"}
            linkedIn={
              "https://www.linkedin.com/in/pankaj-kumar-das-b9256573?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            }
            image={photos.ViceChairmen2}
            mail={"pankajkdas@sliet.ac.in"}
          />
        </section>
        <h1 style={{ display: "flex", justifyContent: "center" }}>Core Team</h1>
        <div
          className="coreTeam"
          style={{
            display: "flex",
            marginBottom: "4.5rem",
            flexDirection: isMobile && "column",
          }}
        >
          <MemberCard
            name={"Rohit Raj"}
            post={"Core Coordinator"}
            linkedIn={"https://www.linkedin.com/in/rohit-raj-13827b243"}
            mail={"2140316@sliet.ac.in"}
            image={photos.Rohit}
          />
          <MemberCard
            name={"Kishan Kashyap"}
            post={"Core Coordinator"}
            image={photos.Kishan}
            linkedIn={
              "https://www.linkedin.com/in/kishan-kashyap-b42544228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            }
            mail={"2236089@sliet.ac.in"}
          />
        </div>
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          Developers
        </h1>
        <section
          className="developers"
          style={{
            display: "flex",
            marginBottom: "4.5rem",
            flexDirection: isMobile && "column",
          }}
        >
          <MemberCard
            name={"Prakhyat Prakhar"}
            post={"Android App Developer"}
            mail={"2244218@sliet.ac.in"}
            linkedIn={
              "https://www.linkedin.com/in/prakhyat-prakhar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            }
            image={photos.Prakhyat}
          />
          <MemberCard
            name={"Sandeep Kumar"}
            post={"Backend & Hosting Expert"}
            mail={"2241028@sliet.ac.in"}
            linkedIn={"https://www.linkedin.com/in/sandeep-kumar-746095257"}
            image={photos.Sandeep}
          />
        </section>
      </div>
    </div>
  );
};

export default OurTeam;
