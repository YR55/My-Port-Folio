import { 
  SiDocker, 
  SiKubernetes, 
  SiJenkins, 
  SiGithubactions, 
  SiGitlab, 
  SiArgo, 
  SiTerraform, 
  SiPrometheus, 
  SiGrafana 
} from "react-icons/si";

const ProjectsData = [
  {
    id: "1",
    name: "Retail Store App – GitOps Microservices Deployment",
    image: "./Retail.png",
    icons: [SiDocker, SiKubernetes, SiArgo, SiTerraform],
    description:
      "End-to-end DevOps workflow for a multi-tier microservices application with GitOps-based delivery and near zero-downtime releases.",
    github: "https://github.com/YR55/Retail-store-app.git",
    demo: "https://retail.yogdev.tech/",
  },
  {
    id: "2",
    name: "Wanderlust – DevSecOps Automation Pipeline",
    image: "./Wanderlust.png",
    icons: [SiJenkins, SiGithubactions, SiGitlab, SiDocker],
    description:
      "Jenkins-based CI/CD pipelines with integrated security and quality gates using Trivy, OWASP, and SonarQube.",
    github: "https://github.com/YR55/Wanderlust-Project.git",
    demo: "https://wanderlust.yogdev.tech/",
  },
  {
    id: "3",
    name: "Node ToDo App – GitLab CI Automation",
    image: "./Todo.png",
    icons: [SiGitlab, SiDocker, SiPrometheus, SiGrafana],
    description:
      "CI/CD automation for a containerized Node.js application using GitLab CI on self-managed cloud VMs.",
    github: "https://github.com/YR55/Node-todo-app.git",
    demo: "https://todo.yogdev.tech/",
  },
];

export default ProjectsData;



