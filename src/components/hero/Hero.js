import React from 'react';
import { FaLocationArrow, FaEnvelope } from 'react-icons/fa';
import classes from './Hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero} id="hero">
      <div className={classes.inner}>
        <div className={classes.copy}>
          <span className={classes.overline}>Java Full Stack Developer</span>
          <h1 className={classes.title}>Mrudula Nimmala</h1>
          <p className={classes.subtitle}>
            Results-driven engineer with 6 years of experience building secure microservices,
            modernising enterprise Java platforms, and delivering cloud-native solutions on AWS that
            scale with confidence.
          </p>
          <ul className={classes.highlights}>
            <li>Architected RESTful and SOAP APIs with Apache Camel, Kafka, and secure integrations.</li>
            <li>Modernised legacy Spring Boot services into containerised deployments on AWS &amp; Kubernetes.</li>
            <li>Champion TDD, SonarQube governance, and CI/CD automation for reliable delivery.</li>
          </ul>
          <div className={classes.ctaGroup}>
            <a
              className={classes.primaryCta}
              href="https://github.com/Mrudula666"
              target="_blank"
              rel="noreferrer"
            >
              View Projects
            </a>
            <a className={classes.secondaryCta} href="mailto:nmrchandra3@gmail.com">
              Let's collaborate
            </a>
          </div>
          <div className={classes.meta}>
            <span><FaLocationArrow /> Hayward, CA</span>
            <span><FaEnvelope /> nmrchandra3@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
