import ProjectsClient from './ProjectsClient';

export const metadata = {
  title: 'Projects',
  description: 'Explore active and completed humanitarian projects by Raham Foundation, including Roshan Schools, Sehat Mobile Clinics, and rural development programs.',
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
