import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import classes from './Experience.module.css';

const experiences = [
  {
    company: 'Infosys',
    role: 'Sr. Java Developer',
    period: 'Apr 2022 — Jan 2023',
    location: 'Hyderabad, India',
    achievements: [
      'Led Apache Camel orchestration between storefront microservices, ensuring consistent omnichannel experiences.',
      'Documented REST contracts in Swagger/OpenAPI and resolved production defects impacting customer journeys.',
      'Maintained 90%+ SonarQube coverage through rigorous JUnit, Mockito, and clean coding practices.',
    ],
    stack:
      'Java 8 · Spring Boot · Apache Camel · Hibernate · REST APIs · Swagger · Maven · Instana · Splunk · Agile/Scrum',
  },
  {
    company: 'Capgemini',
    role: 'Java Developer',
    period: 'Nov 2018 — Mar 2022',
    location: 'Hyderabad, India',
    achievements: [
      'Engineered fraud detection and customer validation APIs integrating AuthenticID, LexisNexis, and NetCracker ICOMS.',
      'Optimised Oracle SQL performance and automated CI/CD pipelines using Jenkins and Docker.',
      'Built SOAP/REST services with secure OAuth2/JWT flows and comprehensive PowerMockito test coverage.',
    ],
    stack:
      'Java 8 · Spring Boot · SOAP/REST · Oracle SQL · Jenkins · Docker · Kafka · OAuth2 · SonarQube · Agile/Scrum',
  },
];

const Experience = () => {
  return (
    <section className={classes.section} id="experience">
      <ScrollAnimation offset={0} animateIn="fadeInUp" duration={1.6} animateOnce>
        <div className={classes.header}>Experience</div>
        <h2 className={classes.title}>Projects &amp; teams I've strengthened</h2>
        <div className={classes.grid}>
          {experiences.map((experience) => (
            <article key={experience.company} className={classes.card}>
              <header className={classes.cardHeader}>
                <div>
                  <p className={classes.role}>{experience.role}</p>
                  <p className={classes.company}>@ {experience.company}</p>
                </div>
                <div className={classes.meta}>
                  <span className={classes.metaItem}>
                    <FaCalendarAlt /> {experience.period}
                  </span>
                  <span className={classes.metaItem}>
                    <FaMapMarkerAlt /> {experience.location}
                  </span>
                </div>
              </header>
              <ul className={classes.achievements}>
                {experience.achievements.map((achievement) => (
                  <li key={achievement}>
                    <FaCheckCircle aria-hidden="true" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
              <footer className={classes.stack}>{experience.stack}</footer>
            </article>
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Experience;
