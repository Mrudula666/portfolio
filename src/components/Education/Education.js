import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { MdWork, MdSchool } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';
import classes from './Education.module.css';

const timeline = [
  {
    icon: <MdWork />,
    title: 'Sr. Java Developer · Infosys',
    period: 'Apr 2022 — Jan 2023',
    description:
      'Orchestrated Apache Camel integrations, resolved production issues, and upheld 90%+ SonarQube quality across e-commerce services.',
  },
  {
    icon: <MdWork />,
    title: 'Java Developer · Capgemini',
    period: 'Nov 2018 — Mar 2022',
    description:
      'Built fraud detection APIs, integrated third-party platforms, and automated CI/CD pipelines for telecom modernisation.',
  },
  {
    icon: <MdWork />,
    title: 'Java & Cloud Intern · Capgemini',
    period: 'Aug 2017 — Oct 2018',
    description:
      'Supported Spring MVC modules, REST integrations, and SQL optimisation while learning enterprise SDLC practices.',
  },
  {
    icon: <MdSchool />,
    title: "Master's in Data Science · California State University, East Bay",
    period: 'Aug 2023 — May 2025',
    description:
      'Graduate coursework focused on machine learning, analytics engineering, and data-driven decision making.',
  },
  {
    icon: <FaSchool />,
    title: 'B.Tech in Computer Science & Technology · JNTUK',
    period: 'Sept 2014 — Aug 2018',
    description:
      'Completed foundational studies in software engineering, algorithms, and distributed computing.',
  },
];

const Education = () => {
  return (
    <section className={classes.section} id="education">
      <ScrollAnimation offset={0} animateIn="fadeInUp" duration={1.6} animateOnce>
        <div className={classes.header}>My journey</div>
        <h2 className={classes.title}>Experience &amp; education timeline</h2>
        <div className={classes.timeline}>
          {timeline.map((item, index) => (
            <div key={item.title} className={classes.milestone}>
              <div className={classes.marker}>
                <div className={classes.icon}>{item.icon}</div>
                <span className={classes.line} aria-hidden="true"></span>
              </div>
              <div className={classes.content}>
                <div className={classes.period}>{item.period}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Education;
