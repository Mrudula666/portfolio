import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import classes from './Header.module.css';
import resumePdf from '../images/Mrudula-Nimmala.pdf';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.brand}>
        <span className={classes.logo}>MN</span>
        <div>
          <p className={classes.name}>Mrudula Nimmala</p>
          <p className={classes.role}>Senior Java &amp; Full Stack Developer</p>
        </div>
      </div>
      <nav className={classes.nav}>
        <Link smooth to="/#hero" className={classes.link}>Home</Link>
        <Link smooth to="/#about" className={classes.link}>About</Link>
        <Link smooth to="/#experience" className={classes.link}>Experience</Link>
        <Link smooth to="/#interest" className={classes.link}>Skills</Link>
        <Link smooth to="/#education" className={classes.link}>Journey</Link>
        <Link smooth to="/#contact" className={classes.link}>Contact</Link>
      </nav>
      <div className={classes.actions}>
        <a className={classes.resume} 
	          href={resumePdf} 
	          target="_blank" 
	          rel="noreferrer">
              View RESUME
        </a> 
        <div className={classes.socials}>
          <a href="https://www.linkedin.com/in/mrudula-nimmala-97135511b/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/Mrudula666" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://twitter.com/mrudula_nimmala" target="_blank" rel="noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
