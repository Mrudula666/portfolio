import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { FaCloud, FaServer, FaLaptopCode } from 'react-icons/fa';
import classes from './Interest.module.css';

const Interest = () => {
  return (
    <section className={classes.section} id="interest">
      <ScrollAnimation offset={0} animateIn="fadeInUp" duration={1.6} animateOnce>
        <div className={classes.header}>Key skills</div>
        <h2 className={classes.title}>End-to-end delivery across platforms, cloud &amp; UX</h2>
        <div className={classes.grid}>
          <article className={classes.card}>
            <div className={classes.icon}>
              <FaServer />
            </div>
            <h3>Enterprise Backend Engineering</h3>
            <p>
              Craft resilient Java/Spring and Kotlin microservices, API gateways, and messaging flows
              leveraging Apache Camel, Kafka, and secure integration patterns.
            </p>
          </article>
          <article className={classes.card}>
            <div className={classes.icon}>
              <FaCloud />
            </div>
            <h3>Cloud &amp; DevOps Automation</h3>
            <p>
              Deploy containerised workloads on AWS with Docker, Kubernetes, Jenkins, and GitHub
              Actions while enforcing SonarQube quality gates and observability baselines.
            </p>
          </article>
          <article className={classes.card}>
            <div className={classes.icon}>
              <FaLaptopCode />
            </div>
            <h3>Front-end Experience &amp; Collaboration</h3>
            <p>
              Deliver responsive React and Angular interfaces, optimise SPA performance, and partner
              with cross-functional teams through Agile ceremonies and code reviews.
            </p>
          </article>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Interest;
