import type { Express } from "express";
import { createServer, type Server } from "http";
import { db } from "@db";
import { contact, contactInsertSchema, projects, services } from "@shared/schema";
import { PROJECTS, SERVICES } from "@/lib/constants";
import { eq } from "drizzle-orm";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get('/api/projects', async (req, res) => {
    try {
      const projectsData = await db.query.projects.findMany();
      return res.json(projectsData);
    } catch (error) {
      console.error('Error fetching projects:', error);
      return res.status(500).json({ error: 'Failed to fetch projects' });
    }
  });

  app.get('/api/projects/featured', async (req, res) => {
    try {
      const featuredProjects = await db.query.projects.findMany({
        where: eq(projects.featured, true)
      });
      return res.json(featuredProjects);
    } catch (error) {
      console.error('Error fetching featured projects:', error);
      return res.status(500).json({ error: 'Failed to fetch featured projects' });
    }
  });

  app.get('/api/services', async (req, res) => {
    try {
      const servicesData = await db.query.services.findMany();
      return res.json(servicesData);
    } catch (error) {
      console.error('Error fetching services:', error);
      return res.status(500).json({ error: 'Failed to fetch services' });
    }
  });

  app.get('/api/studio', async (req, res) => {
    // This is a static response as we don't have a studio info table
    return res.json({
      history: "Harmony House didirikan pada tahun 2015 dengan visi untuk menciptakan ruang interior yang tidak hanya indah secara visual, tetapi juga fungsional dan mencerminkan kepribadian penghuninya. Kami percaya bahwa desain yang baik harus menggabungkan estetika dengan fungsi, menciptakan keseimbangan sempurna antara keindahan dan kenyamanan.",
      approach: "Pendekatan desain kami berpusat pada kebutuhan klien. Kami bekerja sama dengan setiap klien untuk memahami preferensi, gaya hidup, dan kebutuhan fungsional mereka. Tim desainer berpengalaman kami kemudian menerjemahkan visi ini menjadi rencana desain yang terperinci, memperhatikan setiap detail untuk menciptakan ruang yang benar-benar mencerminkan kepribadian dan kebutuhan klien kami.",
      team: "Tim kami terdiri dari desainer interior berpengalaman, arsitek, dan spesialis teknis yang bekerja sama untuk memberikan hasil terbaik. Dengan kombinasi kreativitas, keahlian teknis, dan perhatian terhadap detail, kami berkomitmen untuk mewujudkan visi klien kami dan menciptakan ruang yang tidak hanya indah tetapi juga fungsional dan nyaman untuk dihuni."
    });
  });

  app.post('/api/contact', async (req, res) => {
    try {
      const validatedData = contactInsertSchema.parse(req.body);
      const [newContact] = await db.insert(contact).values(validatedData).returning();
      
      // Here you would typically send an email notification to the staff
      // using Nodemailer or another email service

      return res.status(201).json({ success: true, data: newContact });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      return res.status(500).json({ error: 'Failed to submit contact form' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
