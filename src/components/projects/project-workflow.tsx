type ProjectWorkflowProps = {
  workflow: string;
};

export function ProjectWorkflow({ workflow }: ProjectWorkflowProps) {
  return (
    <pre className="max-w-full overflow-x-auto rounded-md border border-border bg-background p-4 font-mono text-sm leading-6 whitespace-pre text-foreground">
      {workflow}
    </pre>
  );
}
