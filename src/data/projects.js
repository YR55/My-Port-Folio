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
    image: "./ecom.png",
    icons: [SiDocker, SiKubernetes, SiArgo, SiTerraform],
    description:
      "End-to-end DevOps workflow for a multi-tier microservices application with GitOps-based delivery and near zero-downtime releases.",
    github: "https://github.com/YR55/retail-store-sample-app.git",
    demo: "#",
  },
  {
    id: "2",
    name: "Wanderlust – DevSecOps Automation Pipeline",
    image: "./ecom.png",
    icons: [SiJenkins, SiGithubactions, SiGitlab, SiDocker],
    description:
      "Jenkins-based CI/CD pipelines with integrated security and quality gates using Trivy, OWASP, and SonarQube.",
    github: "https://github.com/YR55/Wanderlust-Mega-Project.git",
    demo: "#",
  },
  {
    id: "3",
    name: "Node ToDo App – GitLab CI Automation",
    image: "./ecom.png",
    icons: [SiGitlab, SiDocker, SiPrometheus, SiGrafana],
    description:
      "CI/CD automation for a containerized Node.js application using GitLab CI on self-managed cloud VMs.",
    github: "https://github.com/YR55/node-todo-cicd.git",
    demo: "#",
  },
];

export default ProjectsData;



