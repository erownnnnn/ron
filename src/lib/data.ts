export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "3+", label: "Years Learning Programming" },
  { value: "20+", label: "Projects Completed" },
  { value: "10+", label: "Technologies Mastered" },
];

export type Project = {
  number: string;
  title: string;
  category: string;
  pattern: "grid" | "circuit" | "court" | "neural" | "chip" | "pixel";
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Portfolio Website",
    category: "Personal Branding · Web",
    pattern: "grid",
  },
  {
    number: "02",
    title: "Attendance Monitoring System",
    category: "Full Stack · RFID",
    pattern: "circuit",
  },
  {
    number: "03",
    title: "Pickleball Scoreboard System",
    category: "Embedded · Real-Time UI",
    pattern: "court",
  },
  {
    number: "04",
    title: "Cat Breed Classification AI",
    category: "Machine Learning · CV",
    pattern: "neural",
  },
  {
    number: "05",
    title: "Embedded Systems Projects",
    category: "Arduino · ESP32 · IoT",
    pattern: "chip",
  },
  {
    number: "06",
    title: "Image Processing Application",
    category: "Python · OpenCV",
    pattern: "pixel",
  },
];

export const education = {
  school: "University of Bohol",
  degree: "Bachelor of Science in Computer Engineering",
  period: "2023 – Present",
};

export const skillCategories = [
  {
    category: "Languages & Web",
    icon: "Code2",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js", "Python", "Java", "C++"],
  },
  {
    category: "Embedded & IoT",
    icon: "CircuitBoard",
    items: ["Arduino", "ESP32", "Embedded Systems", "IoT"],
  },
  {
    category: "Databases & Tools",
    icon: "Database",
    items: ["MySQL", "MongoDB", "Git", "GitHub"],
  },
  {
    category: "Design & AI",
    icon: "BrainCircuit",
    items: ["UI Design", "Figma", "Machine Learning"],
  },
];

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Java",
  "C++",
  "Arduino",
  "ESP32",
  "MySQL",
  "MongoDB",
  "Git",
  "GitHub",
  "UI Design",
  "Figma",
  "Machine Learning",
  "Embedded Systems",
  "IoT",
];

export const process = [
  {
    number: "01",
    title: "Research",
    description: "Understanding requirements and planning the solution.",
  },
  {
    number: "02",
    title: "Design",
    description: "Creating UI, system architecture, and prototypes.",
  },
  {
    number: "03",
    title: "Development",
    description: "Building responsive websites and embedded systems.",
  },
  {
    number: "04",
    title: "Testing",
    description: "Debugging, optimization, and quality assurance.",
  },
  {
    number: "05",
    title: "Deployment",
    description: "Publishing and maintaining scalable applications.",
  },
];

export const contactCards = [
  {
    label: "Email",
    value: "aaron.rollorata.2004@gmail.com",
    href: "mailto:aaron.rollorata.2004@gmail.com",
  },
  {
    label: "Phone",
    value: "+63 997 675 7742",
    href: "tel:+639976757742",
  },
  {
    label: "GitHub",
    value: "github.com/erownnnnn",
    href: "https://github.com/rollorata",
  },
  {
    label: "Instagram",
    value: "instagram.com/erownnnn/",
    href: "https://www.instagram.com/erownnnn/",
  },
  {
    label: "Facebook",
    value: "facebook.com/aaronrollorata14?mibextid=ZbWKwL",
    href: "https://www.facebook.com/aaronrollorata14?mibextid=ZbWKwL",
  },
  {
    label: "Location",
    value: "Dauis, Bohol, Philippines",
    href: "#",
  },
];
