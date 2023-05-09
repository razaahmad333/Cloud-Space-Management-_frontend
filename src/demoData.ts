import { ICloudService, ICloudServiceCategory } from "@/services/interface";

export const categories: ICloudServiceCategory[] = [
  {
    id: "1",
    name: "Compute",
    description:
      "Compute services provide virtual machines and containers for running applications.",
  },
  {
    id: "2",
    name: "Storage",
    description:
      "Storage services provide persistent storage for applications and data.",
  },
  {
    id: "3",
    name: "Networking",
    description:
      "Networking services provide networking connectivity for applications.",
  },
  {
    id: "4",
    name: "Databases",
    description:
      "Database services provide managed databases for applications.",
  },
  {
    id: "5",
    name: "Migration",
    description:
      "Migration services provide tools for migrating applications and data to the cloud.",
  },
  {
    id: "6",
    name: "Analytics",
    description: "Analytics services provide tools for analyzing data.",
  },
];

export const cloudServices: ICloudService[] = [
  {
    id: "1",
    name: "Amazon Elastic Compute Cloud (EC2)",
    category: categories[0],
    description:
      "Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers.",
    resources: ["AWS EC2", "AWS EC2 Pricing"],
  },
  {
    id: "2",
    name: "Amazon Elastic Container Service (ECS)",
    category: categories[0],
    description:
      "Amazon Elastic Container Service (Amazon ECS) is a fully managed container orchestration service. Customers such as Duolingo, Samsung, GE, and Cookpad use ECS to run their most sensitive and mission critical applications because of its security, reliability, and scalability.",
    resources: ["ECS", "ECS Pricing", "ECS Documentation"],
  },
  {
    id: "3",
    name: "Amazon Elastic Kubernetes Service (EKS)",
    category: categories[0],
    description:
      "Amazon Elastic Kubernetes Service (Amazon EKS) is a fully managed Kubernetes service. Kubernetes is open source software that allows you to deploy and manage containerized applications at scale.",
    resources: ["EKS", "EKS Pricing", "EKS Documentation"],
  },
  {
    id: "4",
    name: "Amazon Lightsail",
    category: categories[0],
    description:
      "Amazon Lightsail is the easiest way to get started with AWS. It offers virtual servers, storage, databases and networking, plus a cost-effective, monthly plan. Lightsail includes everything you need to launch your project quickly – a virtual machine, SSD-based storage, data transfer, DNS management, and a static IP – for a low, predictable price.",
    resources: ["Lightsail", "Lightsail Pricing", "Lightsail Documentation"],
  },
  {
    id: "5",
    name: "Amazon Relational Database Service (RDS)",
    category: categories[3],
    description:
      "Amazon Relational Database Service (Amazon RDS) makes it easy to set up, operate, and scale a relational database in the cloud. It provides cost-efficient and resizable capacity while automating time-consuming administration tasks such as hardware provisioning, database setup, patching and backups. It frees you to focus on your applications so you can give them the fast performance, high availability, security and compatibility they need.",
    resources: ["RDS", "RDS Pricing", "RDS Documentation"],
  },
];
