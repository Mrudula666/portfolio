import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import classes from './About.module.css';

const About = () => {
  return (
    <section className={classes.section} id="about">
      <ScrollAnimation offset={0} animateIn="fadeInUp" duration={1.6} animateOnce>
        <div className={classes.header}>About me</div>
        <h2 className={classes.title}>Senior Java Developer focused on impact</h2>
        <div className={classes.layout}>
          <div className={classes.summary}>
            <p>
              I'm <strong>Mrudula Nimmala</strong>, a Hayward, CA-based engineer with 6 years of
              experience delivering enterprise-grade platforms across telecom, e-commerce, and sports
              technology domains. I specialise in modernising Java/Spring ecosystems, orchestrating
              microservices, and scaling products with automation-first practices.
            </p>
            <p>
              My work spans architecting secure REST &amp; SOAP integrations with Apache Camel and Kafka,
              designing resilient AWS deployments with Docker and Kubernetes, and leading initiatives
              that uplift SonarQube quality, observability, and release cadences.
            </p>
            <p>
              Beyond project delivery, I enjoy mentoring teams, documenting architecture in Confluence,
              and experimenting with new technologies that push customer experiences forward.
            </p>
          </div>
          <div className={classes.cards}>
            <div className={classes.card}>
              <span className={classes.cardLabel}>Core strengths</span>
              <ul>
                <li>Java, Kotlin, Spring Boot &amp; microservices architecture</li>
                <li>Event-driven design with Kafka, JMS &amp; resilient APIs</li>
                <li>Agile leadership, TDD, and secure coding practices</li>
              </ul>
            </div>
            <div className={classes.card}>
              <span className={classes.cardLabel}>What motivates me</span>
              <ul>
                <li>Modernising legacy stacks into observable, cloud-ready services</li>
                <li>Empowering teams with CI/CD, automation &amp; quality insights</li>
                <li>Creating inclusive products that earn user trust</li>
              </ul>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default About;
