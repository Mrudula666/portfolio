import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import classes from './Contact.module.css';
import portrait from '../images/Me.jpg';


const contactItems = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'mrudulanimmala8@gmail.com',
    link: 'mailto:mrudulanimmala8@gmail.com',
  },
  {
    icon: <FaPhoneAlt />,
    label: 'Phone',
    value: '(510)-432-4937',
    link: 'tel:+15104324937',
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Location',
    value: 'Hayward, California',
  },
];

const Contact = () => {
  return (
    <section className={classes.section} id="contact">
      <div className={classes.overlay}>
        <div className={classes.layout}>
          <ScrollAnimation offset={0} animateIn="fadeInUp" duration={1.2} animateOnce>
  <div className={classes.collabContainer}>
    {/* TEXT SECTION */}
    <div className={classes.content}>
      <div className={classes.badge}>Let's collaborate</div>
      <h2 className={classes.title}>Ready to build your next reliable experience?</h2>
      <p className={classes.subtitle}>
        Whether it's modernising microservices, crafting a performant front end, or scaling cloud
        infrastructure, I'm excited to partner on impactful work.
      </p>
      <div className={classes.details}>
        {contactItems.map((item) => {
  const Wrapper = item.link ? 'a' : 'div';
  const wrapperProps = item.link
    ? { href: item.link, target: "_blank", rel: "noreferrer" }
    : {};

  const displayValue =
    item.label === 'Phone' ? item.value.replace(/-/g, '\u2011') : item.value;

  const isLocation = item.label === 'Location';

  return (
    <Wrapper
      key={item.label}
      className={classes.detail}
      data-multiline={isLocation ? 'true' : 'false'}
      {...wrapperProps}
    >
      <span className={classes.detailIcon}>{item.icon}</span>
      <span className={classes.detailCopy}>
        <span className={classes.detailValue}>{displayValue}</span>
      </span>
    </Wrapper>
  );
})}

      </div>
      <div className={classes.ctas}>
        <a className={classes.primaryCta} href="mailto:mrudulanimmala8@gmail.com">
          Start a conversation
        </a>
        <div className={classes.socials}>
          <a
            href="https://www.linkedin.com/in/mrudula-nimmala-97135511b/"
            target="_blank"
            rel="noreferrer"
            className={classes.socialLink}
          >
            <FaLinkedinIn />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/Mrudula666"
            target="_blank"
            rel="noreferrer"
            className={classes.socialLink}
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>

    {/* IMAGE SECTION */}
    <div className={classes.portraitWrapper}>
      <img className={classes.portrait} src={portrait} alt="Mrudula Nimmala" />
    </div>
  </div>
</ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Contact;
