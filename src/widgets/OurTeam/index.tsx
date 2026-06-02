"use client";

import React from "react";
import SmokeTitle from "@/src/components/UI/SmokeTitle";
import styles from "./OurTeam.module.scss";

interface TeamMember {
  id: string;
  name: string;
  image: string;
}

const TEAM_DATA: TeamMember[] = [
  {
    id: "member-1",
    name: "Dr. Alok Sharma",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "member-2",
    name: "Prof. Clara Vance",
    image: "https://images.unsplash.com/photo-1594824813573-246434de83fb?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "member-3",
    name: "Dr. Rajesh Iyer",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "member-4",
    name: "Dr. Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "member-5",
    name: "Sister Maria De Souza",
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=500&auto=format&fit=crop&q=80"
  }
];

const OurTeam: React.FC = () => {
  return (
    <section id="team" className="relative py-24 bg-white text-neutral-900 overflow-hidden font-sans">
      {/* Light Radial Backdrop glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-50/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
            Clinical Excellence
          </span>
          <SmokeTitle
            tag="h2"
            className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4"
            text="Our Epilepsy [Experts]"
          />
          <p className="text-sm md:text-base text-neutral-500 font-light leading-relaxed">
            Collaborating across disciplines to deliver world-class surgical, medical, dietary, and neuromodulation therapies.
          </p>
        </div>

        {/* Marquee Horizontal Scroll Slider */}
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeTrack}>
            
            {/* Copy 1 */}
            {TEAM_DATA.map((member) => (
              <div key={`c1-${member.id}`} className={styles.marqueeCard}>
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
              </div>
            ))}

            {/* Copy 2 */}
            {TEAM_DATA.map((member) => (
              <div key={`c2-${member.id}`} className={styles.marqueeCard}>
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
              </div>
            ))}

            {/* Copy 3 */}
            {TEAM_DATA.map((member) => (
              <div key={`c3-${member.id}`} className={styles.marqueeCard}>
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default OurTeam;
