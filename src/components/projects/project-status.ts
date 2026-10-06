import type { ProjectStatus } from "@/types";

export function formatProjectStatus(status: ProjectStatus): string {
  if (status === "in-progress") {
    return "In progress";
  }

  return "Completed";
}
