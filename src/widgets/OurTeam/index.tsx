"use client";

import React from "react";
import SmokeTitle from "@/src/components/UI/SmokeTitle";
import styles from "./OurTeam.module.scss";

interface TeamMember {
  id: string;
  name: string;
  image: string;
  position: string[];
}

const TEAM_DATA: TeamMember[] = [
  { 
    id: "member-1", 
    name: "Dr. Sachin Sureshbabu", 
    image: "/team/01.png",
    position: [
      "HOD & Senior Consultant - Neurology",
      "Program Director - Meitra Advanced Epilepsy Centtre",
      "Director - Research and Innovations",
      "Centre for Neurosciences",
      "Meitra Hospital"
    ]
  },
  { 
    id: "member-2", 
    name: "Dr. Tushar V P", 
    image: "/team/02.png",
    position: [
      "Senior Consultant - Neurologist and Epileptologist",
      "Centre for neurosciences",
      "Meitra Hospital"
    ]
  },
  { 
    id: "member-3", 
    name: "Dr. Krishnadas NC", 
    image: "/team/03.png",
    position: [
      "Senior Consultant",
      "Centre for neurosciences",
      "Meitra Hospital"
    ]
  },
  { 
    id: "member-4", 
    name: "Dr. Deep P Pillai", 
    image: "/team/04.png",
    position: [
      "Senior Consultant - Stroke and Interventional Neurology",
      "Centre for neurosciences",
      "Meitra Hospital"
    ]
  },
  { 
    id: "member-5", 
    name: "Dr Anchu Cherian", 
    image: "/team/05.png",
    position: [
      "Pediatric Neurologist"
    ]
  },
  { 
    id: "member-6", 
    name: "Dr Amrutha", 
    image: "/team/06.png",
    position: [
      "Epilepsy Fellow"
    ]
  },
  { 
    id: "member-7", 
    name: "Dr. Nilesh Shaligram Kurwale", 
    image: "/team/07.png",
    position: [
      "Senior consultant - Epilepsy Surgery",
      "Centre for neurosciences",
      "Meitra Hospital"
    ]
  },
  { 
    id: "member-8", 
    name: "Dr. Rajeev MP", 
    image: "/team/08.png",
    position: [
      "HOD & Senior Consultant",
      "Centre for neurosciences",
      "Meitra Hospital"
    ]
  },
  { 
    id: "member-9", 
    name: "Dr. RAJESH KRISHNA P", 
    image: "/team/09.png",
    position: [
      "Senior Consultant - Brain, Spine & Peripheral Nerve Surgery",
      "Centre for neurosciences",
      "Meitra Hospital"
    ]
  },
  { 
    id: "member-10", 
    name: "Dr. Akhil Mohandas", 
    image: "/team/10.png",
    position: [
      "Senior Consultant – Brain & Spine Surgery",
      "Centre for neurosciences",
      "Meitra Hospital"
    ]
  },
  { 
    id: "member-11", 
    name: "Dr. Sunil V. Nair", 
    image: "/team/11.png",
    position: [
      "HOD & Senior Consultant",
      "Advanced diagnostic and interventional radiology",
      "Meitra Hospital"
    ]
  },
  { 
    id: "member-12", 
    name: "Ms Evi Dirks", 
    image: "/team/13.png",
    position: [
      "Research Lead"
    ]
  },
  { 
    id: "member-13", 
    name: "Ms Gilna P", 
    image: "/team/14.png",
    position: [
      "Head of Neurophysiology"
    ]
  },
  { 
    id: "member-14", 
    name: "Ms Sruthi", 
    image: "/team/12.png",
    position: [
      "Neuropsychologist"
    ]
  },
  { 
    id: "member-15", 
    name: "Dr. Noushif M", 
    image: "/team/16.png",
    position: [
      "Senior Consultant",
      "Centre for gastrosciences, Centre for organ transplantation, Gi oncology, Oncology",
      "Meitra Hospital"
    ]
  },
  { 
    id: "member-16", 
    name: "Dr. Mahesh BS", 
    image: "/team/15.png",
    position: [
      "Director",
      "Centre for critical care medicine and ecmo services",
      "Meitra Hospital"
    ]
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
                <div className={styles.flipCardInner}>
                  <div className={styles.flipCardFront}>
                    <img src={member.image} alt={member.name} />
                    <h3>{member.name}</h3>
                  </div>
                  <div className={styles.flipCardBack}>
                    <h3>{member.name}</h3>
                    <div className={styles.positions}>
                      {member.position.map((pos, idx) => (
                        <p key={idx}>{pos}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Copy 2 */}
            {TEAM_DATA.map((member) => (
              <div key={`c2-${member.id}`} className={styles.marqueeCard}>
                <div className={styles.flipCardInner}>
                  <div className={styles.flipCardFront}>
                    <img src={member.image} alt={member.name} />
                    <h3>{member.name}</h3>
                  </div>
                  <div className={styles.flipCardBack}>
                    <h3>{member.name}</h3>
                    <div className={styles.positions}>
                      {member.position.map((pos, idx) => (
                        <p key={idx}>{pos}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Copy 3 */}
            {TEAM_DATA.map((member) => (
              <div key={`c3-${member.id}`} className={styles.marqueeCard}>
                <div className={styles.flipCardInner}>
                  <div className={styles.flipCardFront}>
                    <img src={member.image} alt={member.name} />
                    <h3>{member.name}</h3>
                  </div>
                  <div className={styles.flipCardBack}>
                    <h3>{member.name}</h3>
                    <div className={styles.positions}>
                      {member.position.map((pos, idx) => (
                        <p key={idx}>{pos}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default OurTeam;
