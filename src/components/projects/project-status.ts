import type { ProjectStatus } from "@/types";

export function formatProjectStatus(status: ProjectStatus): string {
  switch (status) {
    case "completed":
      return "Completed";
    case "in-progress":
      return "In progress";
    case "private":
      return "Private";
  }
}
