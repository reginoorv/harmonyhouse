import { db } from "./index";
import { projects, services } from "@shared/schema";
import { PROJECTS, SERVICES } from "@/lib/constants";

async function seed() {
  try {
    console.log("Seeding database...");

    // Seed services
    console.log("Seeding services...");
    const existingServices = await db.query.services.findMany();
    
    if (existingServices.length === 0) {
      for (const service of SERVICES) {
        await db.insert(services).values({
          id: service.id,
          title: service.title,
          slug: service.slug,
          description: service.description,
          longDescription: service.longDescription,
          image: service.image
        });
      }
      console.log(`Inserted ${SERVICES.length} services`);
    } else {
      console.log(`Services already exist, skipping...`);
    }

    // Seed projects
    console.log("Seeding projects...");
    const existingProjects = await db.query.projects.findMany();
    
    if (existingProjects.length === 0) {
      for (const project of PROJECTS) {
        await db.insert(projects).values({
          id: project.id,
          title: project.title,
          slug: project.slug,
          image: project.image,
          category: project.category,
          featured: project.featured
        });
      }
      console.log(`Inserted ${PROJECTS.length} projects`);
    } else {
      console.log(`Projects already exist, skipping...`);
    }

    console.log("Seeding completed successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seed();
