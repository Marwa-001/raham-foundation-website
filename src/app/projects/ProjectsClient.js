'use client';

import { useState } from 'react';

const activeProjects = [
  {
    tag: 'Uttar Pradesh & Bihar',
    title: 'Roshan Schools',
    desc: 'A network of free primary schools for first-generation learners, running seven days a week with hot meals and learning kits.',
    stats: [
      ['6', 'Schools'],
      ['1,240', 'Students'],
      ['38', 'Teachers'],
    ],
    img: 'https://picsum.photos/seed/roshanschools/1000/800',
  },
  {
    tag: 'Rajasthan & MP',
    title: 'Sehat Mobile Clinics',
    desc: 'Mobile health units reaching villages with no permanent clinic, offering check-ups, maternal care and free medicines.',
    stats: [
      ['14', 'Villages/month'],
      ['3,900', 'Patients seen'],
      ['5', 'Mobile units'],
    ],
    img: 'https://picsum.photos/seed/sehatclinics/1000/800',
  },
  {
    tag: 'Jharkhand',
    title: 'Umeed Livelihood Centers',
    desc: 'Skill-training centers helping women and young adults learn tailoring, computer basics and small-business bookkeeping.',
    stats: [
      ['4', 'Centers'],
      ['560', 'Enrolled'],
      ['71%', 'Now earning'],
    ],
    img: 'https://picsum.photos/seed/umeedcenters/1000/800',
  },
];

const completedProjects = [
  {
    tag: 'Assam',
    title: 'Assam Flood Relief 2024',
    desc: 'Delivered dry rations, water and medical supplies to 4,200 displaced families over eight weeks.',
    stats: [
      ['4,200', 'Families'],
      ['6,800', 'Kits'],
      ['8', 'Weeks'],
    ],
    img: 'https://picsum.photos/seed/assamflood/1000/800',
  },
  {
    tag: 'Rajasthan',
    title: 'Barmer Water Wells',
    desc: 'Dug and handed over 22 community wells, giving reliable clean-water access to villages that once walked hours for water.',
    stats: [
      ['22', 'Wells built'],
      ['9,000+', 'People served'],
      ['100%', 'Handed over'],
    ],
    img: 'https://picsum.photos/seed/barmerwells/1000/800',
  },
];

function ProjectCarousel({ projects, prefix }) {
  const [index, setIndex] = useState(0);
  const currentProject = projects[index];

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
        <p className="desc" id={`${prefix}-desc`}>
          {currentProject.desc}
        </p>
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
          <h1>Projects, in the places they were built for.</h1>
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
