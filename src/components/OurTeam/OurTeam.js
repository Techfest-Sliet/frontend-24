import React from "react";
import MemberCard from "./MemberCard";

const OurTeam = () => {
  return (
    <div>
      <div className="ourTeam" style={{marginTop:"5rem"}}>
          <h1 style={{display:"flex", justifyContent:"center"}}>Chairmen</h1>
        <section className="Chairmen" style={{ display: "flex", marginBottom:"4.5rem" }}>
          <MemberCard />
          <MemberCard />
          <MemberCard />
        </section>
        <h1 style={{display:"flex", justifyContent:"center"}}>Core Team</h1>
        <div className="coreTeam" style={{ display: "flex", marginBottom:"4.5rem" }}>
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
        </div>
        <div className="coreTeam" style={{ display: "flex", marginBottom:"4.5rem" }}>
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
        </div>
        <h1 style={{display:"flex", justifyContent:"center"}}>Developers</h1>
        <section className="developers" style={{ display: "flex", marginBottom:"4.5rem" }}>
        <MemberCard name={"Naman Kulshresth"} post={"Web Coordinator"}/>
        <MemberCard name={"Chitresh Gupta"} post={"Frontend Developer"}/>
        <MemberCard name={"Ravi Ranjan"} post={"Backend Developer"}/>
        <MemberCard name={"Shudhanshu Arya"} post={"Frontend Developer"}/>
        </section>
      </div>
    </div>
  );
};

export default OurTeam;
