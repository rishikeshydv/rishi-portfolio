import poppins from "@/font/font";
import Link from "next/link"
import Image from 'next/image'
import styles from "@/styles/Image.module.css";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { SiTypescript } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { FaRust } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiKeras } from "react-icons/si";
import { SiApachekafka } from "react-icons/si";

import { IoLogoFirebase } from "react-icons/io5";
import { FaAws } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoMongodb } from "react-icons/bi";
import { GrHadoop } from "react-icons/gr";
import { DiRedis } from "react-icons/di";

import { FaGithubSquare } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { SiAwsamplify } from "react-icons/si";

export default function Home() {
  return (
    <div className={`${poppins.className}`}>
          <div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
      <main className="flex-1 container mx-auto px-4 lg:px-6 py-12 md:py-16 lg:py-20">
        <section className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Rishikesh Yadav</h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">Software, AI & Web3 Engineer</h2>
            <p className="text-muted-foreground">
            My name is Rishikesh, and I am a Junior at Caldwell for a Bachelor of Science (BS) in Computer Science and Mathematics. 
            I love doing Deep RL, Backend, and Web3 Dev. 
            I&apos;m most passionate about the use of tech to solve problems that really matters (not leetcode ofc). 
            I like to spend my free time reading and listening to podcasts, with some of my favorite topics being startups and AI. 
            If you&apos;d like to connect, please reach out to <strong>rishikeshadh4 at gmail dot com</strong>.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center md:items-end md:justify-end">
                    <Image
            src="/linkedin.jpg"
            width={200}
            height={200}
            alt="Rishi's profile picture"
            className={`${styles.circular}`} // Add a new class
          />
           <nav className="flex items-center gap-4 md:mr-10 mt-4">
          <Link href="https://www.linkedin.com/in/rishikesh-y-0194b0336/" className="text-xs hover:underline underline-offset-4" prefetch={false}>
          <FaLinkedin className="md:w-6 md:h-6"/>
          </Link>
          <Link href="https://github.com/rishikeshydv" className="text-xs hover:underline underline-offset-4" prefetch={false}>
          <FaGithub className="md:w-6 md:h-6"/>
          </Link>
          <Link href="mailto:rishikeshadh4@gmail.com" className="text-xs hover:underline underline-offset-4" prefetch={false}>
          <MdEmail className="md:w-7 md:h-7"/>
          </Link>
        </nav>
          </div>
        </section>
        <section className="mt-12 md:mt-16 lg:mt-20 space-y-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Work Experience</h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-[1fr_3fr] gap-4">
                <div className="text-muted-foreground">
                  <Link href={'https://www.nextbrick.com/'} className="font-medium underline">NexBrick</Link>
                  <div className="text-sm">2024 Feb - Present</div>
                </div>
                <div>
                  <div className="font-medium">CEO & CTO</div>
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                    <li>Revolutionizing real estate decisions with AI-driven data intelligence.</li>
                  </ul>
                </div>
              </div>
              <div className="grid md:grid-cols-[1fr_3fr] gap-4">
                <div className="text-muted-foreground">
                  <Link href={'https://tapdroprb.com/'} className="font-medium underline">Tapdrop Inc.</Link>
                  <div className="text-sm">2022 August - 2025 Feb</div>
                </div>
                <div>
                  <div className="font-medium">Senior AI & Software Engineer</div>
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                    <li>Created adaptive NPCs and real-time difficulty scaling using reinforcement learning and neural networks, enhancing player immersion through AI-driven responses.</li>
                    <li> Implemented deep learning models for procedural content generation, enabling dynamic environments and unpredictable challenges.</li>
                    <li>Optimized game engine performance with GPU-accelerated neural networks for real-time AI processing, delivering smooth and responsive AI interactions.</li>
                    <li>Collaborated on AI-based predictive player modeling to refine game balancing, tailoring experiences based on player behavior and preferences.</li>
                  </ul>
                </div>
              </div>
              {/* <div className="grid md:grid-cols-[1fr_3fr] gap-4">
                <div className="text-muted-foreground">
                  <div className="font-medium underline">STEM Advance Summer Research Program</div>
                  <div className="text-sm">2023 May - 2023 August</div>
                </div>
                <div>
                  <div className="font-medium">AI/ML Research Intern</div>
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                    <li>Initialized and constructed 32 of 3x3 filter matrices for each Conv2D layers, generated the updated filter matrices for each Conv2D layer after each training.</li>
                    <li>Consistently removed filters with least activations and kept maximum of 32 filters with most activations maintaining strict uniformity in the shapes of training data and labels.</li>
                    <li>Crafted a highly efficient CNN model with a 5.67% boost in accuracy and reduction in the training time by 30.5 seconds.</li>
                  </ul>
                </div>
              </div>
              <div className="grid md:grid-cols-[1fr_3fr] gap-4">
                <div className="text-muted-foreground">
                  <div className="font-medium underline">Caldwell University</div>
                  <div className="text-sm">2023 Jan - 2023 May</div>
                </div>
                <div>
                  <div className="font-medium">Software Engineering Intern</div>
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                    <li>Devised backend solutions and software components, enforced the detailed documentation, and contributed to the development of legacy applications in C# and .NET Core</li>
                    <li>Incorporated 20+ complex test cases, performed unit tests, integration tests, and end-to-end tests to evaluate the solution efficiency.</li>
                    <li>Designed and customized responsive web based database management system software to help 8k+ university users manage personal and public data and process using Firebase and REST APIs</li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Education</h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-[1fr_3fr] gap-4">
                <div className="text-muted-foreground">
                  <div className="font-medium">Caldwell University</div>
                  <div className="font-sm">Junior Year</div>
                  <div className="text-sm">2022 August - Present</div>
                </div>
                <div>
                  <div className="font-medium">Bachelor of Science in Computer Science & Mathematics</div>
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                    <li><strong>GPA:</strong> 3.93/4.00</li>
                    <li><strong>Courseworks:</strong> SWE Capstone, Data Structures & Algorithms, Database Management System, Operating Systems, Full Stack Web Dev, Intro to Machine Learning, Linear Algebra, Probability & Statistics I & II, Programming Languages</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="text-lg font-semibold">Programming Languages</h3>
              <ul className="mt-2 space-y-1 text-muted-foreground">
                <li className="flex gap-2">Typescript <SiTypescript className="mt-1"/></li>
                <li className="flex gap-2">Golang <FaGolang className="mt-1"/></li>
                <li className="flex gap-2">Rust <FaRust className="mt-1"/></li>
                <li className="flex gap-2">Python <FaPython className="mt-1"/></li>
              </ul>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="text-lg font-semibold">Frameworks and Tools</h3>
              <ul className="mt-2 space-y-1 text-muted-foreground">
                <li className="flex gap-2">React < FaReact className="mt-1"/></li>
                <li className="flex gap-2">Node.js < FaNodeJs className="mt-1"/></li>
                <li className="flex gap-2">Express < SiExpress className="mt-1"/></li>
                <li className="flex gap-2">Nextjs < RiNextjsFill className="mt-1"/></li>
                <li className="flex gap-2">Vite < SiVite className="mt-1"/></li>
                <li className="flex gap-2">Tensorflow < SiTensorflow className="mt-1"/></li>
                <li className="flex gap-2">Keras < SiKeras className="mt-1"/></li>
                <li className="flex gap-2">Kafka < SiApachekafka className="mt-1"/></li>
              </ul>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="text-lg font-semibold">Databases</h3>
              <ul className="mt-2 space-y-1 text-muted-foreground">
                <li className="flex gap-2">Firebase < IoLogoFirebase className="mt-1"/></li>
                <li className="flex gap-2">AWS S3 & DynamoDB < FaAws className="mt-1"/></li>
                <li className="flex gap-2">Postgresl < BiLogoPostgresql className="mt-1"/></li>
                <li className="flex gap-2">MongoDB < BiLogoMongodb className="mt-1"/></li>
                <li className="flex gap-2">Apache Hadoop < GrHadoop className="mt-1"/></li>
                <li className="flex gap-2">Redis < DiRedis className="mt-1"/></li>
              </ul>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="text-lg font-semibold">Devops</h3>
              <ul className="mt-2 space-y-1 text-muted-foreground">
                <li className="flex gap-2">Git < FaGithubSquare className="mt-1"/></li>
                <li className="flex gap-2">Docker < FaDocker className="mt-1"/></li>
                <li className="flex gap-2">Kubernetes < SiKubernetes className="mt-1"/></li>
                <li className="flex gap-2">AWS ECR,ECS, & EC2 < FaAws className="mt-1"/></li>
                <li className="flex gap-2">AWS Amplify < SiAwsamplify className="mt-1"/></li>
              </ul>
            </div>
          </div>
        </div>
        </section>
      </main>
    </div>
    </div>
  );
}


function MountainIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function XIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
