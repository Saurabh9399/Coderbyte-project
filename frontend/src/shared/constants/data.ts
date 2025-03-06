import { StatusOption, TechnologyOption } from "@/types/candidate.types";
import { Question } from "../types/app";

export const data = [
  {
    date: "18-Nov-24",
    name: "Darshit",
    email: "rohan@mail.com",
    phone: "9625002500",
    role: "MERN",
    experience: "3+",
    description: "MERN 3 years exp.",
    duration: "40min",
    status: "Not Started",
    score: "80%",
  },
  {
    date: "18-Nov-24",
    name: "Megh Patel",
    email: "viraj@mail.com",
    phone: "9625002500",
    role: "MERN",
    experience: "3+",
    description: "MERN 3 years exp.",
    duration: "40min",
    status: "Not Started",
    score: "40%",
  },
  {
    date: "18-Nov-24",
    name: "Viraj Singh",
    email: "viraj@mail.com",
    phone: "9625002500",
    role: "MERN",
    experience: "3+",
    description: "MERN 3 years exp.",
    duration: "40min",
    status: "Not Started",
    score: "60%",
  },
];

export const monthData = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

export const exams: Exam[] = [
  {
    date: "2024-12-17",
    task: "Frontend interview at 10 AM",
    candidate: "John Doe",
  },
  {
    date: "2024-12-17",
    task: "Backend interview at 4 PM",
    candidate: "Jane Smith",
  },
  {
    date: "2024-12-17",
    task: "Backend interview at 6 PM",
    candidate: "Jane Smith",
  },
  {
    date: "2024-12-20",
    task: "Backend interview at 4 PM",
    candidate: "Jane Smith",
  },
  {
    date: "2024-12-20",
    task: "Backend interview at 9 PM",
    candidate: "Jane Smith",
  },
  {
    date: "2024-12-20",
    task: "Backend interview at 2 PM",
    candidate: "Jane Smith",
  },
  {
    date: "2024-12-25",
    task: "Final interview at 9 AM",
    candidate: "Alice Brown",
  },
];
export const questionsData = [
  { value: 1048, name: "React" },
  { value: 735, name: "Next.js" },
  { value: 580, name: "Typescript" },
  { value: 484, name: "Go" },
  { value: 300, name: "Ruby" },
  { value: 300, name: "Python" },
  { value: 300, name: "C/C++" },
  { value: 300, name: "Java" },
];
export const languages = ["React", "JS", "Go", "Python", "Ruby"];
export const scores = ["10", "20", "30", "40", "50", "60", "70"];
export const categories = [
  { name: "ReactJS", easy: 20, medium: 30, hard: 50 },
  { name: "NodeJS", easy: 20, medium: 30, hard: 50 },
  { name: "Python", easy: 20, medium: 30, hard: 50 },
  { name: "Vue.js", easy: 20, medium: 30, hard: 50 },
  { name: "Laravel", easy: 20, medium: 30, hard: 50 },
  { name: "PHP", easy: 20, medium: 30, hard: 50 },
];


export const technologies = [
  {
    title: "MERN 3 years exp.",
    data: [
      {
        name: "MongoDB",
        easy: "50%",
        medium: "30%",
        hard: "20%",
        questions: 10,
      },
      {
        name: "Express Js",
        easy: "50%",
        medium: "30%",
        hard: "20%",
        questions: 10,
      },
      {
        name: "React JS",
        easy: "50%",
        medium: "30%",
        hard: "20%",
        questions: 10,
      },
      {
        name: "Node Js",
        easy: "50%",
        medium: "30%",
        hard: "20%",
        questions: 10,
      },
    ],
    totalQuestions: 40,
  },
  {
    title: "Laravel 6 years exp.",
    data: [
      {
        name: "Laravel Basics",
        easy: "40%",
        medium: "40%",
        hard: "20%",
        questions: 10,
      },
      {
        name: "Eloquent ORM",
        easy: "50%",
        medium: "30%",
        hard: "20%",
        questions: 10,
      },
      {
        name: "Middleware",
        easy: "50%",
        medium: "30%",
        hard: "20%",
        questions: 10,
      },
      {
        name: "Blade Templates",
        easy: "50%",
        medium: "30%",
        hard: "20%",
        questions: 10,
      },
    ],
    totalQuestions: 40,
  },
  {
    title: "WordPress 3-4 years exp.",
    data: [
      {
        name: "Themes",
        easy: "50%",
        medium: "30%",
        hard: "20%",
        questions: 10,
      },
      {
        name: "Plugins",
        easy: "50%",
        medium: "30%",
        hard: "20%",
        questions: 10,
      },
      {
        name: "Custom Fields",
        easy: "50%",
        medium: "30%",
        hard: "20%",
        questions: 10,
      },
      {
        name: "Gutenberg",
        easy: "50%",
        medium: "30%",
        hard: "20%",
        questions: 10,
      },
    ],
    totalQuestions: 40,
  },
];

export const AVAILABLE_CATEGORIES = ["MongoDB", "Express.Js", "React.Js", "Node.Js", "Angular.Js",
  "Vue.Js",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Python",
  "Django",
  "Flask",
  "Ruby on Rails",
  "Go",
  "PHP",
  "Laravel",
  "Spring Boot",
  "Kotlin",
  "Swift",
  "C++",
  "C#",
  "Java",
  "Rust",
  "Docker",
  "Kubernetes",
  "CI/CD",
  "GraphQL",
  "PostgreSQL",
  "MySQL",
  "SQLite",
  "Redis",
  "Firebase",
  "AWS",
  "Azure",
  "Google Cloud",
  "SASS",
  "LESS",
  "Webpack",
  "Gulp",
  "Babel",
  "REST API",
  "Socket.IO",
  "Next.Js",
  "Nuxt.Js",
  "Redux",
  "MobX",
  "Jest",
  "Cypress",
  "Mocha",
  "Chai",
  "Tailwind CSS",
  "Material-UI",
  "Bootstrap",
  "Foundation",
  "Ant Design",
  "Electron",
  "Tauri",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "TensorFlow",
  "Keras",
  "PyTorch",
  "OpenCV",
  "Hadoop",
  "Spark",
  "Kafka",
  "Terraform",
  "Ansible",
  "Prometheus",
  "Grafana",
  "Splunk",
  "Elasticsearch",
  "Logstash",
  "Kibana",
  "Jenkins",
  "Travis CI",
  "CircleCI",
  "Bitbucket",
  "GitHub Actions",
  "Heroku",
  "Netlify",
  "Vercel",
  "Webpack",
  "Parcel",
  "Snowpack",
  "SolidJS",
  "Svelte",
  "Alpine.js",
  "Qwik",
  "Lit",
  "Backbone.js",
  "Ember.js",
  "Polymer",
  "Stencil",
  "Three.js",
  "Babylon.js",
  "D3.js",
  "Chart.js",
  "Highcharts",
  "CanvasJS",
  "Plotly",
  "Tableau",
  "Power BI",
  "Qlik",
  "Apache Superset",
  "Metabase",
  "Looker",
];


export const CREATE_QUESTIONS_STATIC_LIST: Question[] = [
  {
    id: 1,
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the primary purpose of the virtual DOM in React?",
    options: ["To store all components", "To directly manipulate the real DOM", "To update only the parts of the DOM that have changed", "To manage component state"],
    correctOptions: []
  },
  {
    id: 2,
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the correct syntax to import React in a JavaScript file?",
    options: ["import React from 'react?'", "import i React from react?", "include React from react?", "requireReact.js"],
    correctOptions: []
  },
  {
    id: 3,
    type: "fill-in-the-blanks",
    difficulty: "easy",
    question: "How do you create context in React?",
    answer: "by using React.createContext.",
  },
  {
    id: 4,
    type: "code-snippet",
    difficulty: "medium",
    question: "Find the issue in it",
    code: `import React from 'react';
function App() {
  const name = ['a', 'b', 'c'];
  int i, new 'name' = ['i', 'b', 'c'];
  int j, new 'name' = ['j', 'c'];
  return i;
  const instance = items.map(item, indent) + ui;
  apply(map(items.map(i+0)));
  return end-list(instance.class);
}
export default App;`,
  },
]

interface CandidateDetails {
  totalPercentage: string;
  categories: {
    [key: string]: string;
  };
  createdBy: string;
  createdOn: string;
}

interface Candidate {
  id: number;
  testDate: string;
  testStartTime: string;
  testEndTime: string;
  name: string;
  email: string;
  technology: string;
  experience: string;
  assessment: string;
  result: string;
  created: string;
  details: CandidateDetails;
}

export const candidatesList: Candidate[] = [
  {
    id: 1,
    testDate: "2023-01-15",
    testStartTime: "2023-01-15T09:00:00",
    testEndTime: "2023-01-15T10:00:00",
    name: "John Doe",
    email: "john@example.com",
    technology: "React",
    experience: "2 years",
    assessment: "React Assessment",
    result: "Pass",
    created: "Admin",
    details: {
      totalPercentage: "80%",
      categories: {
        React: "80%",
        JavaScript: "75%",
      },
      createdBy: "Admin",
      createdOn: "2023-01-01",
    },
  },
  {
    id: 2,
    testDate: "2024-11-18",
    testStartTime: "2024-11-18T09:00:00",
    testEndTime: "2024-11-18T10:00:00",
    name: "Karan Doshi",
    email: "karan@example.com",
    technology: "MERN",
    experience: "3+",
    assessment: "MERN 3 years exp.",
    result: "Fail",
    created: "Mihirbhai",
    details: {
      totalPercentage: "60%",
      categories: {
        mongodb: "15%",
        expressJs: "15%",
        reactJs: "15%",
        nodeJs: "15%",
      },
      createdBy: "Mihirbhai",
      createdOn: "17-Nov-2024 03:00PM",
    },
  },
  {
    id: 3,
    testDate: "2024-11-20",
    testStartTime: "2024-11-20T09:00:00",
    testEndTime: "2024-11-20T10:00:00",
    name: "John Doe",
    email: "john@example.com",
    technology: "Python",
    experience: "5+",
    assessment: "Python 5 years exp.",
    result: "Pass",
    created: "Mihirbhai",
    details: {
      totalPercentage: "85%",
      categories: {
        python: "30%",
        django: "25%",
        flask: "20%",
        sql: "10%",
      },
      createdBy: "Mihirbhai",
      createdOn: "19-Nov-2024 10:00AM",
    },
  },
  {
    id: 4,
    testDate: "2024-11-20",
    testStartTime: "2024-11-20T09:00:00",
    testEndTime: "2024-11-20T10:00:00",
    name: "Jane Smith",
    email: "jane@example.com",
    technology: "Java",
    experience: "4+",
    assessment: "Java 4 years exp.",
    result: "Fail",
    created: "Mihirbhai",
    details: {
      totalPercentage: "55%",
      categories: {
        java: "20%",
        spring: "15%",
        hibernate: "10%",
        sql: "10%",
      },
      createdBy: "Mihirbhai",
      createdOn: "19-Nov-2024 11:00AM",
    },
  },
  {
    id: 5,
    testDate: "2024-11-22",
    testStartTime: "2024-11-22T09:00:00",
    testEndTime: "2024-11-22T10:00:00",
    name: "Alice Johnson",
    email: "alice@example.com",
    technology: "MEAN",
    experience: "2+",
    assessment: "MEAN 2 years exp.",
    result: "Pass",
    created: "Mihirbhai",
    details: {
      totalPercentage: "80%",
      categories: {
        mongodb: "20%",
        expressJs: "20%",
        angular: "20%",
        nodeJs: "20%",
      },
      createdBy: "Mihirbhai",
      createdOn: "21-Nov-2024 02:00PM",
    },
  },
  {
    id: 6,
    testDate: "2024-11-22",
    testStartTime: "2024-11-22T09:00:00",
    testEndTime: "2024-11-22T10:00:00",
    name: "Bob Brown",
    email: "bob@example.com",
    technology: "MEAN",
    experience: "2+",
    assessment: "MEAN 2 years exp.",
    result: "Fail",
    created: "Mihirbhai",
    details: {
      totalPercentage: "50%",
      categories: {
        mongodb: "10%",
        expressJs: "10%",
        angular: "10%",
        nodeJs: "20%",
      },
      createdBy: "Mihirbhai",
      createdOn: "21-Nov-2024 03:00PM",
    },
  },
  {
    id: 7,
    testDate: "2024-11-24",
    testStartTime: "2024-11-24T09:00:00",
    testEndTime: "2024-11-24T10:00:00",
    name: "Charlie Davis",
    email: "charlie@example.com",
    technology: "React Native",
    experience: "3+",
    assessment: "React Native 3 years exp.",
    result: "Pass",
    created: "Mihirbhai",
    details: {
      totalPercentage: "88%",
      categories: {
        javascript: "30%",
        reactNative: "30%",
        redux: "20%",
        firebase: "8%",
      },
      createdBy: "Mihirbhai",
      createdOn: "23-Nov-2024 09:00AM",
    },
  },
  {
    id: 8,
    testDate: "2024-11-24",
    testStartTime: "2024-11-24T09:00:00",
    testEndTime: "2024-11-24T10:00:00",
    name: "Eva Green",
    email: "eva@example.com",
    technology: "React Native",
    experience: "3+",
    assessment: "React Native 3 years exp.",
    result: "Fail",
    created: "Mihirbhai",
    details: {
      totalPercentage: "45%",
      categories: {
        javascript: "15%",
        reactNative: "15%",
        redux: "10%",
        firebase: "5%",
      },
      createdBy: "Mihirbhai",
      createdOn: "23-Nov-2024 10:00AM",
    },
  },
  {
    id: 9,
    testDate: "2024-11-26",
    testStartTime: "2024-11-26T09:00:00",
    testEndTime: "2024-11-26T10:00:00",
    name: "Frank White",
    email: "frank@example.com",
    technology: "MERN",
    experience: "3+",
    assessment: "MERN 3 years exp.",
    result: "Pass",
    created: "Mihirbhai",
    details: {
      totalPercentage: "92%",
      categories: {
        mongodb: "25%",
        expressJs: "25%",
        reactJs: "25%",
        nodeJs: "17%",
      },
      createdBy: "Mihirbhai",
      createdOn: "25-Nov-2024 09:00AM",
    },
  },
  {
    id: 10,
    testDate: "2024-11-26",
    testStartTime: "2024-11-26T09:00:00",
    testEndTime: "2024-11-26T10:00:00",
    name: "Grace Lee",
    email: "grace@example.com",
    technology: "Python",
    experience: "5+",
    assessment: "Python 5 years exp.",
    result: "Fail",
    created: "Mihirbhai",
    details: {
      totalPercentage: "58%",
      categories: {
        python: "20%",
        django: "15%",
        flask: "15%",
        sql: "8%",
      },
      createdBy: "Mihirbhai",
      createdOn: "25-Nov-2024 10:00AM",
    },
  },
  {
    id: 11,
    testDate: "2024-11-28",
    testStartTime: "2024-11-28T09:00:00",
    testEndTime: "2024-11-28T10:00:00",
    name: "Henry Brown",
    email: "henry@example.com",
    technology: "Java",
    experience: "4+",
    assessment: "Java 4 years exp.",
    result: "Pass",
    created: "Mihirbhai",
    details: {
      totalPercentage: "87%",
      categories: {
        java: "30%",
        spring: "25%",
        hibernate: "20%",
        sql: "12%",
      },
      createdBy: "Mihirbhai",
      createdOn: "27-Nov-2024 09:00AM",
    },
  },
  {
    id: 12,
    testDate: "2024-11-28",
    testStartTime: "2024-11-28T09:00:00",
    testEndTime: "2024-11-28T10:00:00",
    name: "Ivy Taylor",
    email: "ivy@example.com",
    technology: "MEAN",
    experience: "2+",
    assessment: "MEAN 2 years exp.",
    result: "Fail",
    created: "Mihirbhai",
    details: {
      totalPercentage: "52%",
      categories: {
        mongodb: "15%",
        expressJs: "15%",
        angular: "15%",
        nodeJs: "7%",
      },
      createdBy: "Mihirbhai",
      createdOn: "27-Nov-2024 10:00AM",
    },
  },
  {
    id: 13,
    testDate: "2024-11-30",
    testStartTime: "2024-11-30T09:00:00",
    testEndTime: "2024-11-30T10:00:00",
    name: "Jack Wilson",
    email: "jack@example.com",
    technology: "React Native",
    experience: "3+",
    assessment: "React Native 3 years exp.",
    result: "Pass",
    created: "Mihirbhai",
    details: {
      totalPercentage: "89%",
      categories: {
        javascript: "30%",
        reactNative: "30%",
        redux: "20%",
        firebase: "9%",
      },
      createdBy: "Mihirbhai",
      createdOn: "29-Nov-2024 09:00AM",
    },
  },
  {
    id: 14,
    testDate: "2024-11-30",
    testStartTime: "2024-11-30T09:00:00",
    testEndTime: "2024-11-30T10:00:00",
    name: "Karen Harris",
    email: "karen@example.com",
    technology: "MERN",
    experience: "3+",
    assessment: "MERN 3 years exp.",
    result: "Fail",
    created: "Mihirbhai",
    details: {
      totalPercentage: "48%",
      categories: {
        mongodb: "10%",
        expressJs: "10%",
        reactJs: "10%",
        nodeJs: "18%",
      },
      createdBy: "Mihirbhai",
      createdOn: "29-Nov-2024 10:00AM",
    },
  },
  {
    id: 15,
    testDate: "2024-12-02",
    testStartTime: "2024-12-02T09:00:00",
    testEndTime: "2024-12-02T10:00:00",
    name: "Leo Martinez",
    email: "leo@example.com",
    technology: "Python",
    experience: "5+",
    assessment: "Python 5 years exp.",
    result: "Pass",
    created: "Mihirbhai",
    details: {
      totalPercentage: "91%",
      categories: {
        python: "35%",
        django: "25%",
        flask: "20%",
        sql: "11%",
      },
      createdBy: "Mihirbhai",
      createdOn: "1-Dec-2024 09:00AM",
    },
  },
  {
    id: 16,
    testDate: "2024-12-02",
    testStartTime: "2024-12-02T09:00:00",
    testEndTime: "2024-12-02T10:00:00",
    name: "Mia Clark",
    email: "mia@example.com",
    technology: "Java",
    experience: "4+",
    assessment: "Java 4 years exp.",
    result: "Fail",
    created: "Mihirbhai",
    details: {
      totalPercentage: "53%",
      categories: {
        java: "20%",
        spring: "15%",
        hibernate: "10%",
        sql: "8%",
      },
      createdBy: "Mihirbhai",
      createdOn: "1-Dec-2024 10:00AM",
    },
  },
  {
    id: 17,
    testDate: "2024-12-04",
    testStartTime: "2024-12-04T09:00:00",
    testEndTime: "2024-12-04T10:00:00",
    name: "Noah Lewis",
    email: "noah@example.com",
    technology: "MEAN",
    experience: "2+",
    assessment: "MEAN 2 years exp.",
    result: "Pass",
    created: "Mihirbhai",
    details: {
      totalPercentage: "84%",
      categories: {
        mongodb: "25%",
        expressJs: "25%",
        angular: "20%",
        nodeJs: "14%",
      },
      createdBy: "Mihirbhai",
      createdOn: "3-Dec-2024 09:00AM",
    },
  },
  {
    id: 18,
    testDate: "2024-12-04",
    testStartTime: "2024-12-04T09:00:00",
    testEndTime: "2024-12-04T10:00:00",
    name: "Olivia Walker",
    email: "olivia@example.com",
    technology: "React Native",
    experience: "3+",
    assessment: "React Native 3 years exp.",
    result: "Fail",
    created: "Mihirbhai",
    details: {
      totalPercentage: "47%",
      categories: {
        javascript: "15%",
        reactNative: "15%",
        redux: "10%",
        firebase: "7%",
      },
      createdBy: "Mihirbhai",
      createdOn: "3-Dec-2024 10:00AM",
    },
  },
  {
    id: 19,
    testDate: "2024-12-06",
    testStartTime: "2024-12-06T09:00:00",
    testEndTime: "2024-12-06T10:00:00",
    name: "Paul Hall",
    email: "paul@example.com",
    technology: "MERN",
    experience: "3+",
    assessment: "MERN 3 years exp.",
    result: "Pass",
    created: "Mihirbhai",
    details: {
      totalPercentage: "93%",
      categories: {
        mongodb: "30%",
        expressJs: "25%",
        reactJs: "25%",
        nodeJs: "13%",
      },
      createdBy: "Mihirbhai",
      createdOn: "5-Dec-2024 09:00AM",
    },
  },
  {
    id: 20,
    testDate: "2024-12-06",
    testStartTime: "2024-12-06T09:00:00",
    testEndTime: "2024-12-06T10:00:00",
    name: "Quinn Young",
    email: "quinn@example.com",
    technology: "Python",
    experience: "5+",
    assessment: "Python 5 years exp.",
    result: "Fail",
    created: "Mihirbhai",
    details: {
      totalPercentage: "57%",
      categories: {
        python: "20%",
        django: "15%",
        flask: "15%",
        sql: "7%",
      },
      createdBy: "Mihirbhai",
      createdOn: "5-Dec-2024 10:00AM",
    },
  },
  {
    id: 21,
    testDate: "2024-12-08",
    testStartTime: "2024-12-08T09:00:00",
    testEndTime: "2024-12-08T10:00:00",
    name: "Ryan Allen",
    email: "ryan@example.com",
    technology: "Java",
    experience: "4+",
    assessment: "Java 4 years exp.",
    result: "Pass",
    created: "Mihirbhai",
    details: {
      totalPercentage: "88%",
      categories: {
        java: "30%",
        spring: "25%",
        hibernate: "20%",
        sql: "13%",
      },
      createdBy: "Mihirbhai",
      createdOn: "7-Dec-2024 09:00AM",
    },
  },
  {
    id: 22,
    testDate: "2024-12-08",
    testStartTime: "2024-12-08T09:00:00",
    testEndTime: "2024-12-08T10:00:00",
    name: "Sara King",
    email: "sara@example.com",
    technology: "MEAN",
    experience: "2+",
    assessment: "MEAN 2 years exp.",
    result: "Fail",
    created: "Mihirbhai",
    details: {
      totalPercentage: "49%",
      categories: {
        mongodb: "15%",
        expressJs: "15%",
        angular: "15%",
        nodeJs: "4%",
      },
      createdBy: "Mihirbhai",
      createdOn: "7-Dec-2024 10:00AM",
    },
  },
  {
    id: 23,
    testDate: "2024-12-10",
    testStartTime: "2024-12-10T09:00:00",
    testEndTime: "2024-12-10T10:00:00",
    name: "Tom Wright",
    email: "tom@example.com",
    technology: "React Native",
    experience: "3+",
    assessment: "React Native 3 years exp.",
    result: "Pass",
    created: "Mihirbhai",
    details: {
      totalPercentage: "90%",
      categories: {
        javascript: "30%",
        reactNative: "30%",
        redux: "20%",
        firebase: "10%",
      },
      createdBy: "Mihirbhai",
      createdOn: "9-Dec-2024 09:00AM",
    },
  },

];

export const steps = [
  { number: 1, label: "Basic Info" },
  { number: 2, label: "Questions" },
  { number: 3, label: "Summary" }
];

export const technologyOptions: TechnologyOption[] = [
  { value: 'react', label: 'React' },
  { value: 'angular', label: 'Angular' },
  { value: 'vue', label: 'Vue' },
  { value: 'node', label: 'Node.js' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'mongodb', label: 'MongoDB' },
];

export const assessmentOptions: StatusOption[] = [
  { value: 'completed', label: 'Completed' },
  { value: 'pending', label: 'Pending' },
  { value: 'not-started', label: 'Not Started' },
  { value: 'expired', label: 'Expired' },
  { value: 'in-progress', label: 'In Progress' },
];

export const questionsDataStatic: Question[] = [
  {
    type: "multiple-choice",
    id: 1,
    question: "What is React?",
    options: [
      "A JavaScript library for building user interfaces",
      "A programming language",
      "A backend framework",
      "A database management system",
    ],
    correctOptions: ["A JavaScript library for building user interfaces"],
    difficulty: "easy",
  },
  {
    type: "multiple-choice",
    id: 2,
    question: "What is the correct syntax to import React in a JavaScript file?",
    options: [
      "import React from 'react';",
      "import { React } from 'react';",
      "include React from 'react';",
      "require('React');",
    ],
    correctOptions: ["import React from 'react';"],
    difficulty: "easy",
  },
  {
    type: "fill-in-the-blanks",
    id: 3,
    question: "How do you create context in React?",
    answer: "by using React.createContext.",
    difficulty: "easy",
  },
  {
    type: "code-snippet",
    id: 4,
    question: "Find the issue in it",
    code: `import React from 'react';
function App() {
  const name = ['a', 'b', 'c'];
  int i, new 'name' = ['i', 'b', 'c'];
  int j, new 'name' = ['j', 'c'];
  return i;
  const instance = items.map(item, indent) + ui;
  apply(map(items.map(i+0)));
  return end-list(instance.class);
}
export default App;`,
    difficulty: "medium",
  },
  {
    type: "multiple-choice",
    id: 5,
    question: "What is the default port number for a React development server?",
    options: ["3000", "8000", "8080", "5000"],
    correctOptions: ["3000"],
    difficulty: "easy",
  },
  {
    type: "multiple-choice",
    id: 6,
    question: "Which lifecycle method is deprecated in React?",
    options: [
      "componentDidMount",
      "componentWillReceiveProps",
      "componentDidUpdate",
      "componentWillUnmount",
    ],
    correctOptions: ["componentWillReceiveProps"],
    difficulty: "medium",
  },
  {
    type: "multiple-choice",
    id: 7,
    question: "What is a controlled component in React?",
    options: [
      "A component that controls its own state internally",
      "A component that takes its state from props",
      "A component whose form data is controlled by React state",
      "A component that is connected to a Redux store",
    ],
    correctOptions: ["A component whose form data is controlled by React state"],
    difficulty: "medium",
  },
  {
    type: "multiple-choice",
    id: 8,
    question: "How can you improve the performance of a React application?",
    options: [
      "Avoid using hooks",
      "Use memoization techniques like React.memo",
      "Use only class components",
      "Avoid using keys in lists",
    ],
    correctOptions: ["Use memoization techniques like React.memo"],
    difficulty: "medium",
  },
  {
    type: "multiple-choice",
    id: 9,
    question: "What is the difference between state and props in React?",
    options: [
      "State is used to manage data inside a component, props are used to pass data to other components",
      "Props can change within a component, state is immutable",
      "Both are immutable and cannot be modified",
      "State is used in class components only, props are used in functional components",
    ],
    correctOptions: ["State is used to manage data inside a component, props are used to pass data to other components"],
    difficulty: "easy",
  },
  {
    type: "multiple-choice",
    id: 10,
    question: "What is the purpose of the React.Fragment component?",
    options: [
      "To add CSS styles to React components",
      "To group multiple children elements without adding an extra node to the DOM",
      "To manage state for components",
      "To create context in React",
    ],
    correctOptions: ["To group multiple children elements without adding an extra node to the DOM"],
    difficulty: "easy",
  },
  {
    type: "multiple-choice",
    id: 11,
    question: "How does React's key prop help with rendering lists?",
    options: [
      "It helps React identify which items have changed, are added, or removed",
      "It automatically sorts the list",
      "It makes the list immutable",
      "It improves the visual appearance of the list",
    ],
    correctOptions: ["It helps React identify which items have changed, are added, or removed"],
    difficulty: "easy",
  },
  {
    type: "multiple-choice",
    id: 12,
    question: "What is React.StrictMode used for?",
    options: [
      "To enable additional checks and warnings for components",
      "To disable prop types validation",
      "To create strict component hierarchies",
      "To enforce specific coding standards",
    ],
    correctOptions: ["To enable additional checks and warnings for components"],
    difficulty: "medium",
  },
  {
    type: "multiple-choice",
    id: 13,
    question: "Which hook is used to access the DOM in functional components?",
    options: ["useState", "useEffect", "useRef", "useContext"],
    correctOptions: ["useRef"],
    difficulty: "medium",
  },
  {
    type: "multiple-choice",
    id: 14,
    question: "What is the purpose of the React.PureComponent?",
    options: [
      "To always render the component when its state changes",
      "To avoid unnecessary renders by doing a shallow comparison of props and state",
      "To create complex components",
      "To define reusable UI components",
    ],
    correctOptions: ["To avoid unnecessary renders by doing a shallow comparison of props and state"],
    difficulty: "hard",
  },
  {
    type: "multiple-choice",
    id: 15,
    question: "What does lifting state up in React mean?",
    options: [
      "Moving the state from a child component to a parent component to make it shared",
      "Creating state in a Redux store",
      "Sharing state between sibling components directly",
      "Converting state into props",
    ],
    correctOptions: ["Moving the state from a child component to a parent component to make it shared"],
    difficulty: "medium",
  },
];

interface Exam {
  date: string;
  task: string;
  candidate: string;
}
