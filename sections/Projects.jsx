import quillionzLandingPage from "@/assets/images/quillionz.webp";
import raptivityLandingPage from "@/assets/images/raptivity.webp";
import adobeCaptivateLandingPage from "@/assets/images/AdobeCaptivate.webp";
import eQuestLandingPage from "@/assets/images/eQuest.webp";
import trajecutiveLandingPage from "@/assets/images/Trajecutive.webp";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg"
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import Link from "next/link";

const portfolioProjects = [
  {
    company: "Product",
    year: "2020",
    title: "Quillionz - AI-Powered Question Generation Platform",
    results: [
      { title: "Reduced content creation time by 5+ hours per project through AI automation" },
      { title: "Implemented support for 10+ languages enabling global content delivery" },
      { title: "Achieved 95% question accuracy rate through fine-tuned AI models" },
      { title: "Served 50K+ educators and trainers across 30+ countries" },
      { title: "Integrated SCORM 1.2/2004 compliance for LMS compatibility" },
    ],
    link: "https://quillionz.com/",
    image: quillionzLandingPage,
  },
  {
    company: "Product",
    year: "2020",
    title: "Raptivity - Interactive Content Authoring Tool",
    results: [
      { title: "Engineered 30+ interactive templates (games, quizzes, simulations)" },
      { title: "Implemented SCORM 1.2/2004 and xAPI (Tin Can) compliance" },
      { title: "Built multilingual content delivery supporting 10+ languages" },
      { title: "Optimized rendering performance by 60% for mobile devices" },
      { title: "Enabled offline content playback for remote learners" },
    ],
    link: "https://raptivity.com/",
    image: raptivityLandingPage,
  },
  {
    company: "Product",
    year: "2024",
    title: "Adobe Captivate - E-Learning Platform",
    results: [
      { title: "Built 2+ custom widgets used by 5K+ course developers" },
      { title: "Integrated ALM reporting providing real-time learning analytics" },
      { title: "Created accordion widget improving content organization and navigation" },
      { title: "Reduced widget development time by 50% through reusable framework" },
      { title: "Supported custom design option for accordion widget" },
    ],
    link: "https://www.adobe.com/in/products/captivate.html",
    image: adobeCaptivateLandingPage,
  },
  {
    company: "Client",
    year: "2020",
    title: "eQuest Integration - Recruitment Platform",
    results: [
      { title: "Automated resume parsing and distribution to 100+ job boards" },
      { title: "Built recruiter dashboard with real-time candidate tracking" },
      { title: "Reduced manual posting time by 80% through automation" },
      { title: "Created multiple roles and permissions for different departments" },
      { title: "Integerated the Resume Parser API for accurate candidate data extraction" },
    ],
    link: "https://www.equest.com/",
    image: eQuestLandingPage,
  },
  {
    company: "Client",
    year: "2021",
    title: "Trajecutive - Career Development Platform",
    results: [
      { title: "Built comprehensive assessment engine delivering detailed reports tailored to individual profiles" },
      { title: "Developed personalized strategy generator providing actionable plans to overcome career challenges" },
      { title: "Integrated payment gateways (Stripe, PayPal) processing $200K+ in premium subscriptions and assessments" },
      { title: "Implemented secure user authentication and profile management for 5K+ registered users" },
      { title: "Achieved 85% user satisfaction rating for assessment accuracy and actionability" },
    ],
    link: "https://www.trajecutive.com/login",
    image: trajecutiveLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader eyebrow="Real-world Results" title="Featured Projects" description="See how I tranformed concepts into engaging digital experiences."/>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project,projectIndex) => (
            <Card key={project.projectIndex} className="  px-8 pt-8 md:pt-12 pb-0  md:px-10  lg:pt-16 lg:px-20 sticky" 
            style={{
              top:`calc(64px + ${projectIndex * 40}px)`
            }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text " >
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif md:text-4xl md:mt-5  text-2xl mt-2 ">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 md:mt-5 mt-4" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result,index) => (
                      <li key={index}  className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={project.link} target="blank">
                    <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex gap-2 items-center justify-center mt-8 md:w-auto md:px-6">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4  " />
                    </button>
                  </Link>
                </div>
                <div className="relative">
                  <Image src={project.image} alt={project.title} width={500} height={500} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
};

