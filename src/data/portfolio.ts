export const profile = {
  name: "Roland Lazaro Muro",
  title: "Computer Science Engineer",
  location: "Mwanza, Tanzania",
  tagline:
    "Diploma holder in Computer Science Engineering with hands-on experience in telecommunications infrastructure.",
  email: "rolandmuro2548@gmail.com",
  whatsapp: "0616293713",
  whatsappLink: "https://wa.me/255616293713",
};

export const education = [
  {
    level: "Primary School",
    institution: "Joseph and Mary Primary School",
    description: "Foundation in core academics and personal development.",
  },
  {
    level: "O Level Secondary",
    institution: "Sunrise Secondary School",
    description: "Ordinary level secondary education.",
  },
  {
    level: "A Level Secondary",
    institution: "Kaizerege & Kemebos Schools",
    description: "Advanced level secondary education.",
  },
  {
    level: "Diploma",
    institution: "St. Joseph University of Engineering & Technology",
    field: "Computer Science Engineering",
    description:
      "Specialized training in computer systems, engineering principles, and applied technology.",
    highlight: true,
  },
] as const;

export const skills = [
  {
    name: "Fiber Optic Transmission",
    description:
      "Installation, testing, and maintenance of fiber optic networks for high-speed data delivery.",
    icon: "fiber",
  },
  {
    name: "Data & Switch",
    description:
      "Configuration and management of network switches and data infrastructure for reliable connectivity.",
    icon: "switch",
  },
  {
    name: "Radio Transmission",
    description:
      "Practical experience in radio transmission systems through training at TTCL Kibaha–Pwani.",
    icon: "radio",
  },
] as const;

export const experience = {
  organization: "TTCL Kibaha–Pwani",
  role: "Telecommunications Training",
  summary:
    "Gained practical industry experience in fiber optic transmission, data switching, and radio transmission technologies.",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;
