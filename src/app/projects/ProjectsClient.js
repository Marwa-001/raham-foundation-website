'use client';

import { useEffect, useState } from 'react';
import silaiImage from '../../assets/silai.jpg';
import bykea3Image from '../../assets/bykea3.jpg';

const activeProjects = [
  {
    tag: 'Women Empowerment',
    title: 'Silai Se Kamai',
    desc: 'Many women want to support their families but lack the necessary resources. Silai Se Kamai is Raham Foundation’s initiative to bridge this gap and empower deserving women. We provide women with sewing machines, materials, and training so they can earn a sustainable, honest livelihood with dignity. What begins with a simple sewing machine turns into financial independence because empowering one woman means empowering an entire family. Together, we\'re breaking the cycle of poverty, one step at a time.',
    stats: [
      ['1', 'Initiative'],
      ['Skills', 'Provided'],
      ['Families', 'Supported'],
    ],
    img: silaiImage.src,
  },
];

const completedProjects = [
  {
    tag: 'Bykea Rider',
    title: 'Bykea Rider Support',
    desc: 'By the grace of Allah, we successfully completed another project. We helped a brother leave a scam call center. The income from that job was not halal, so we decided to help him find an honest way to support his family. Thanks to your donations, we repaired his bike so he could start working as a Bykea rider. A small act of support can completely change a life.',
    stats: [
      ['1', 'Person helped'],
      ['1', 'Bike repaired'],
      ['Halal', 'Livelihood restored'],
    ],
    img: bykea3Image.src,
  },
];

function ProjectCarousel({ projects, prefix }) {
  const [index, setIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const currentProject = projects[index];
  const shouldTruncate = currentProject.desc.length > 220;

  useEffect(() => {
    setIsExpanded(false);
  }, [index, prefix]);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className="project-card" id={`${prefix}-card`}>
      <div className="project-image" id={`${prefix}-image-wrap`}>
        <span className="project-tag" id={`${prefix}-tag`}>
          {currentProject.tag}
        </span>
        {projects.map((proj, i) => (
          <img
            key={i}
            src={proj.img}
            alt={proj.title}
            className={i === index ? 'is-active' : ''}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>
      <div className="project-content">
        <span className="eyebrow" id={`${prefix}-counter`}>
          Project {index + 1} of {projects.length}
        </span>
        <h3 id={`${prefix}-title`}>{currentProject.title}</h3>
        <p className={`desc ${shouldTruncate && !isExpanded ? 'is-collapsed' : ''}`} id={`${prefix}-desc`}>
          {currentProject.desc}
        </p>
        {shouldTruncate && (
          <button
            type="button"
            className="read-more"
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-expanded={isExpanded}
            aria-controls={`${prefix}-desc`}
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        )}
        <div className="project-divider"></div>
        <div className="project-stats" id={`${prefix}-stats`}>
          {currentProject.stats.map(([num, lbl], i) => (
            <div key={i}>
              <div className="stat-num">{num}</div>
              <div className="stat-lbl">{lbl}</div>
            </div>
          ))}
        </div>
        <div className="project-footer">
          <div className="dots" id={`${prefix}-dots`}>
            {projects.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === index ? 'is-active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to project ${i + 1}`}
              ></button>
            ))}
          </div>
          <div className="arrows">
            <button
              className="arrow-btn prev"
              id={`${prefix}-prev`}
              onClick={handlePrev}
              aria-label="Previous project"
            >
              ←
            </button>
            <button
              className="arrow-btn next"
              id={`${prefix}-next`}
              onClick={handleNext}
              aria-label="Next project"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsClient() {
  return (
    <>
      {/* ---------- PAGE HERO ---------- */}
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Our work</span>
          <h1>Projects placed where they belong.</h1>
          <p>
            Every project starts with a conversation and ends with a community that no longer needs us. Here is what is running now, and what we have finished.
          </p>
        </div>
      </section>

      {/* ---------- ACTIVE PROJECTS ---------- */}
      <section className="projects-section bg-cream">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Active</span>
            <h2>What we are running now</h2>
          </div>
          <ProjectCarousel projects={activeProjects} prefix="active" />
        </div>
      </section>

      {/* ---------- COMPLETED PROJECTS ---------- */}
      <section className="projects-section bg-beige">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Completed</span>
            <h2>Delivered, handed over, standing on its own</h2>
          </div>
          <ProjectCarousel projects={completedProjects} prefix="completed" />
        </div>
      </section>
    </>
  );
}
