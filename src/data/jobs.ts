export interface CareerSettings {
  emptyStateTitle: string;
  emptyStateMessage: string;
}

export const careerSettings: CareerSettings = {
  emptyStateTitle: "No open positions right now",
  emptyStateMessage: "We are not currently hiring, but our team is always growing. As soon as new roles open up, they will be reflected here. In the meantime, feel free to submit a general application."
};

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

export const jobPostings: JobPosting[] = [
    {
    id: "business-development-sales-manager",
    title: "Business Development & Sales Manager",
    department: "Sales & Marketing",
    location: "Remote (US)",
    type: "Full-time",
    description: "We are looking for a driven Business Development & Sales Manager to generate and qualify leads, build client relationships, and convert prospects into long-term customers for our NetSuite, Celigo, and Oracle Integration Cloud consulting services.",
    requirements: [
      "3+ years of experience in B2B sales, business development, or lead generation",
      "Experience selling technical/consulting services (SaaS, IT consulting, or enterprise software preferred)",
      "Proven track record of meeting or exceeding sales targets",
      "Strong skills in outbound prospecting, CRM management, and pipeline tracking",
      "Excellent communication, negotiation, and client-facing presentation skills",
      "Familiarity with marketing channels (LinkedIn, email campaigns, content marketing) is a plus"
    ]
  },
//   {
//     id: "associate-integration-engineer",
//     title: "Associate Integration Engineer",
//     department: "Engineering",
//     location: "Remote (US)",
//     type: "Full-time",
//     description: "We are looking for an experienced Integration Engineer to lead complex Celigo and NetSuite implementation projects for our enterprise clients.",
//     requirements: [
//       "5+ years of experience with Celigo integrator.io",
//       "Strong understanding of NetSuite architecture and APIs",
//       "Proficiency in JavaScript/SuiteScript",
//       "Excellent client-facing communication skills"
//     ]
//   },
  // To hide a job from the Careers page, simply comment out the object like the example below:
  /*
  {
    id: "solutions-architect",
    title: "Solutions Architect",
    department: "Architecture",
    location: "Hybrid / Remote",
    type: "Full-time",
    description: "Lead the design of scalable enterprise integration architectures connecting major ERPs with marketplaces and 3PLs.",
    requirements: [
      "7+ years in enterprise system architecture",
      "Deep expertise in Oracle Integration Cloud and NetSuite",
      "Experience leading technical discovery sessions",
      "Strong background in API design and microservices"
    ]
  },
  */
//   {
//     id: "project-manager",
//     title: "Integration Project Manager",
//     department: "Delivery",
//     location: "Remote",
//     type: "Contract",
//     description: "Seeking a highly organized Project Manager to oversee multiple concurrent integration deployments, ensuring on-time delivery and client satisfaction.",
//     requirements: [
//       "PMP or Agile certification preferred",
//       "3+ years managing software or integration projects",
//       "Familiarity with Jira and modern project management tools",
//       "Experience in eCommerce or ERP implementations"
//     ]
//   }
];
