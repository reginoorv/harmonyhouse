import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import ArrowIcon from '@/components/ui/ArrowIcon';

interface Project {
  id: number;
  title: string;
  image: string;
  slug: string;
  category: string;
}

const ProjectsPage = () => {
  const { data: projects = [], isLoading } = useQuery<Project[]>({
    queryKey: ['/api/projects'],
  });

  return (
    <div className="container-custom py-16">
      <h1 className="text-4xl font-light mb-10">Proyek Kami</h1>
      
      {isLoading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-muted h-64 w-full"></div>
              <div className="mt-3 flex justify-between items-center">
                <div className="bg-muted h-4 w-40"></div>
                <div className="bg-muted h-5 w-5 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id}>
              <Link href={`/proyek/${project.slug}`}>
                <a className="block">
                  <div className="overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-muted-foreground">{project.title}</span>
                    <ArrowIcon />
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
