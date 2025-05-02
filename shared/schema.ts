import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

// Users table (keeping this from the template for session management)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Projects table
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  image: text("image").notNull(),
  description: text("description"),
  category: text("category").notNull(),
  featured: boolean("featured").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export const projectsInsertSchema = createInsertSchema(projects, {
  title: (schema) => schema.min(3, "Title must be at least 3 characters"),
  slug: (schema) => schema.min(3, "Slug must be at least 3 characters"),
  image: (schema) => schema.url("Must provide a valid URL for the image")
});

export type InsertProject = z.infer<typeof projectsInsertSchema>;
export type Project = typeof projects.$inferSelect;

// Services table
export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  longDescription: text("long_description"),
  image: text("image").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export const servicesInsertSchema = createInsertSchema(services, {
  title: (schema) => schema.min(3, "Title must be at least 3 characters"),
  slug: (schema) => schema.min(3, "Slug must be at least 3 characters"),
  description: (schema) => schema.min(10, "Description must be at least 10 characters"),
  image: (schema) => schema.url("Must provide a valid URL for the image")
});

export type InsertService = z.infer<typeof servicesInsertSchema>;
export type Service = typeof services.$inferSelect;

// Contact form submissions
export const contact = pgTable("contact", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  project: text("project").notNull(),
  status: text("status").default("new"),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export const contactInsertSchema = createInsertSchema(contact, {
  name: (schema) => schema.min(2, "Name must be at least 2 characters"),
  email: (schema) => schema.email("Must provide a valid email"),
  project: (schema) => schema.min(5, "Project description must be at least 5 characters")
});

export type InsertContact = z.infer<typeof contactInsertSchema>;
export type Contact = typeof contact.$inferSelect;
