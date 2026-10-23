export type WorkItem = {
  no: string;
  name: string;
  desc: string;
  tag: string;
  year: string;
  stack: string;
  href: string;
  video?: string;
  poster?: string;
  cover?: string;
  github?: string;
  githubPrivate?: boolean;
};

export const work: WorkItem[] = [
  {
    no: "01",
    name: "JobFaster",
    desc: "CAREERS PLATFORM / RESUME + TRACKER",
    tag: "(LIVE APP)",
    year: "2025",
    stack: "NEXT.JS",
    video: "https://portfolio.emmanverse.uk/videos/jobfaster.mp4",
    poster: "/posters/jobfaster.jpg",
    href: "https://jobfaster.org",
    github: "https://github.com/emman-tt/jobfaster",
  },
  {
    no: "02",
    name: "SwapGPA",
    desc: "CAMPUS MARKETPLACE & PAYMENTS",
    tag: "(LIVE APP)",
    year: "2025",
    stack: "NEXT.JS",
    video: "https://portfolio.emmanverse.uk/videos/swaggpa.mp4",
    poster: "/posters/swaggpa.jpg",
    href: "https://swapgpa.com",
    github: "https://github.com/emman-tt/swapgpa",
    githubPrivate: true,
  },
  {
    no: "03",
    name: "CozyHome",
    desc: "SMART HOME CONTROL PWA",
    tag: "(LIVE APP)",
    year: "2026",
    stack: "REACT · MQTT",
    video: "https://portfolio.emmanverse.uk/videos/cozyhome.mp4",
    poster: "/posters/cozyhome.jpg",
    href: "https://cozyhome.emmanverse.uk",
    github: "https://github.com/emman-tt/cozyhome",
  },
  {
    no: "04",
    name: "Rosait",
    desc: "ART GALLERY & COMMISSIONS",
    tag: "(LIVE APP)",
    year: "2026",
    stack: "NEXT.JS · STRIPE",
    video: "https://portfolio.emmanverse.uk/videos/rosait.mp4",
    poster: "/posters/rosait.jpg",
    href: "https://rosait.emmanverse.uk",
    github: "https://github.com/emman-tt/rosait",
  },
  {
    no: "05",
    name: "Vita",
    desc: "HEALTH DATA COMPANION DASHBOARD",
    tag: "(DASHBOARD)",
    year: "2027",
    stack: "NEXT.JS · RECHARTS",
    video: "https://portfolio.emmanverse.uk/videos/vita.mp4",
    poster: "/posters/vita.jpg",
    href: "https://vita.emmanverse.uk",
    github: "https://github.com/emman-tt/vita",
  },
  {
    no: "06",
    name: "Grace Carthage",
    desc: "EPISCOPAL CHURCH SITE / VERSES + ARTS & MEDIA",
    tag: "(LIVE APP)",
    year: "2026",
    stack: "NEXT.JS",
    video: "https://portfolio.emmanverse.uk/videos/episcopal-church.mp4",
    poster: "/posters/episcopal-church.jpg",
    href: "https://episcopal.emmanverse.uk",
    github: "https://github.com/emman-tt/episcopal-church",
  },
  {
    no: "07",
    name: "Instrumento",
    desc: "THE TOOLS OF JAZZ — INSTRUMENTS & AUDIO",
    tag: "(LIVE APP)",
    year: "2026",
    stack: "REACT · GSAP",
    video: "https://portfolio.emmanverse.uk/videos/instrumento.mp4",
    poster: "/posters/instrumento.jpg",
    href: "https://instrumento.emmanverse.uk",
    github: "https://github.com/emman-tt/instruments",
  },
  {
    no: "08",
    name: "Fasho",
    desc: "FASHION OUTFIT STYLE CHOICE / SHOP + CURATED PICKS",
    tag: "(LIVE APP)",
    year: "2026",
    stack: "NEXT.JS",
    video: "https://portfolio.emmanverse.uk/videos/fasho.mp4",
    poster: "/posters/fasho.jpg",
    href: "https://fasho.emmanverse.uk",
    github: "https://github.com/emman-tt/fasho",
  },
];

export const projects = [
  {
    no: "(01)",
    name: "YouBloom",
    kind: "Ticketing platform",
    year: "2026",
    stack: "React / Stripe / QR check-in",
    cover: "/covers/01.jpg",
    wide: true,
  },
  {
    no: "(02)",
    name: "JobFaster",
    kind: "Resume + tracker",
    year: "2025",
    stack: "Next.js / Postgres / jobfaster.org",
    cover: "/covers/03.jpg",
  },
  {
    no: "(03)",
    name: "SwapGPA",
    kind: "Campus market",
    year: "2025",
    stack: "Next.js / Stripe / swapgpa.com/ug",
    cover: "/covers/06.jpg",
  },
  {
    no: "(04)",
    name: "XAVS Labs",
    kind: "AI dashboards",
    year: "2026",
    stack: "D3 / Recharts / ECharts",
    cover: "/covers/02.jpg",
  },
];

export const marqueeTech = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Postgres",
  "Docker",
  "Tailwind CSS",
  "GSAP",
  "Redis",
  "Prisma",
  "GraphQL",
  "Express",
  "Playwright",
  "Jest",
  "Framer Motion",
  "Stripe",
  "AWS",
  "EC2",
  "S3",
  "Lambda",
  "VPS",
  "VPC",
  "Terraform",
  "CI/CD",
  "GitHub Actions",
  "Nginx",
  "Supabase",
  "MongoDB",
  "tRPC",
  "Zustand",
  "Python",
];

export const covers = [
  { src: "/covers/01.jpg", caption: "(01) YouBloom — Mobile" },
  { src: "/covers/02.jpg", caption: "(01) YouBloom — Detail" },
  { src: "/covers/03.jpg", caption: "(02) JobFaster — Mobile" },
  { src: "/covers/04.jpg", caption: "(02) JobFaster — Detail" },
  { src: "/covers/06.jpg", caption: "(04) SwapGPA — Mobile" },
];

/* about statement — [text, blurAmount, animationDelay] grouped per line */
export const statementLines: [string, number, number][][] = [
  [
    ["I'm", 1.6, 0],
    ["Emmanuel.", 0.2, 1.2],
    ["I design", 1.4, 2.4],
    ["and", 2.6, 3.1],
    ["build", 0.8, 0.6],
  ],
  [
    ["full-stack", 2.2, 4.2],
    ["apps", 0.3, 1],
    ["that", 2.8, 2.2],
    ["move,", 1.2, 3.4],
    ["respond", 0.2, 5.5],
  ],
  [
    ["and", 2, 0.4],
    ["feel", 3, 2],
    ["good", 0.7, 4.8],
    ["to", 2.6, 1.6],
    ["use.", 0.9, 3],
  ],
  [
    ["Any", 1.3, 2.6],
    ["stack,", 2.8, 0.2],
    ["any", 0.8, 4.4],
    ["scale,", 3, 1.8],
  ],
  [
    ["made", 0.4, 3.6],
    ["in", 1.9, 5.1],
    ["Ghana.", 1.1, 1],
  ],
];

export const tickets = [
  {
    no: "№ 01",
    title: "Frontend",
    tag: "React · TSX · Motion",
    stamp: "Ship",
    accent: "#C9F26A",
    rot: -2.2,
    dx: -18,
  },
  {
    no: "№ 02",
    title: "Backend",
    tag: "Cron · Workers · Jobs",
    stamp: "Scale",
    accent: "#9DB4FF",
    rot: 1.6,
    dx: 26,
  },
  {
    no: "№ 03",
    title: "Data & Cloud",
    tag: "Postgres · Redis · AWS",
    stamp: "Deploy",
    accent: "#F4A9C5",
    rot: -1.6,
    dx: -6,
  },
  {
    no: "№ 04",
    title: "Quality",
    tag: "Jest · Playwright · E2E",
    stamp: "Pass",
    accent: "#C9F26A",
    rot: 2.4,
    dx: 34,
  },
];

/* ---------- backend writings (own route, no videos) ---------- */
export type WritingBlock =
  | { kind: "p"; text: string }
  | { kind: "h"; text: string }
  | { kind: "bullets"; items: string[] }
  | { kind: "quote"; text: string }
  | { kind: "code"; lang: string; lines: string[] }
  | { kind: "table"; headers: string[]; rows: string[][] };

export type Writing = {
  no: string;
  kicker: string;
  title: string;
  date: string;
  read: string;
  tags: string[];
  lede: string;
  /** simple prose entries */
  body: string[];
  /** structured entries (headings, bullets, code, tables) */
  blocks?: WritingBlock[];
};

export const backendWritings: Writing[] = [
  {
    no: "001",
    kicker: "CASE FILE",
    title:
      "Building Freecron: Architecture Behind a Cron-as-a-Service Platform.",
    date: "OCT 2025",
    read: "6 MIN READ",
    tags: ["NODE", "TYPESCRIPT", "BULLMQ", "POSTGRES", "REDIS", "DOCKER"],
    lede: "Running scheduled HTTP jobs reliably, without maintaining cron infrastructure. No servers to keep awake, no timezone math, no silent failures.",
    body: [],
    blocks: [
      {
        kind: "p",
        text: `When I started building Freecron, I had one goal which was to run scheduled HTTP jobs reliably without maintaining cron infrastructure. I acknowledge the previous 
         cron jobs that i used but they all fell short of somethings i needed the most including deep logs and metrics,
          not paying for infrastructure just to ping my server, poor user journey, silent failures and many more`,
      },
      { kind: "p", text: "Here is the architecture that made it work." },

      { kind: "h", text: "The three layers" },
      {
        kind: "p",
        text: `Freecron splits into three layers, each 
        knowing only about the layer below it like an inward pattern where authority trancends from top to down.`,
      },
      {
        kind: "bullets",
        items: [
          "Presentation — HTTP routes, validation, controllers/Http handlers .These layers dont know about data modelling operations nor businnes logic .",
          "Application — Five main modules holding the business logic: Jobs, Scheduler, Executions, Notifications, User.",
          "Infrastructure — Repositories, Postgres, Redis, BullMQ, Slack, email, node-cron, logging.  There's no business logic here.",
        ],
      },
      {
        kind: "quote",
        text: "Routes call services, services call repositories, repositories talk to the database and external services. Nobody skips a layer.",
      },

      { kind: "h", text: "The five modules" },
      {
        kind: "bullets",
        items: [
          "Jobs owns the lifecycle , create, read, update, delete, toggle, run now. It handles defaults, ownership checks, and DTO mapping.",
          "Scheduler owns when jobs run. Two workers, one service.",
          "Executions owns the history , every run recorded with status, duration, response, error.",
          "Notifications owns outbound alerts , email and Slack, enqueued and delivered separately.",
          "User owns user's operations. ",
        ],
      },
      {
        kind: "quote",
        text: `NB: Each module is self-contained: routes, service, repository, types, and tests together.
        The project uses  OOP approach where there's less to no shallow modules , low cognitive load for interfaces and modules,
        more information hiding and deep modules hence reducing code complexity, encourages code maintainance
         just like John Ousterhout always wanted .`,
      },

      { kind: "h", text: "The two  workers for a job lifecycle" },
      {
        kind: "bullets",
        items: [
          `The Watchman is a node-cron worker. Every minute it finds due jobs, updates nextRunAt, and  hands over the job 
          to Schedular service who enqueues the job and pushes to BullMQ , the message broker.`,
          `The Executor is a BullMQ worker. It works in the background 24/7 and  picks up queued jobs, makes the HTTP call,
           calls Execution service to record the execution, and fires the lifecycle listeners.`,
        ],
      },
      // {
      //   kind: "p",
      //   text: "They are deliberately separate. The Watchman finds. The Executor runs. Neither blocks the other.",
      // },

      { kind: "h", text: "Five decisions that mattered" },
      {
        kind: "bullets",
        items: [
          `Update nextRunAt before queueing. If the update happens after, a long-running job gets 
          queued again on the next tick. Duplicate execution. Updating first makes the job 
          invisible to the next tick immediately.`,
          `The queue carries IDs, not entities making it lightweight and fast. The data payload 
          includes { jobId, userId }. Each service called during the job lifecycle can easily fetch entities 
          as a result without having to pass huge data around in the worker.The data is mostly always fresh and acid compliant .`,
          `Lifecycle lives in the processor, not the listeners. The processor runs inside the job's lock,
           so database writes are atomic with the run. Listeners run after the worker processor marks the job complete 
           and Execution service records the result , it's purposely designed as such to avoid async work in the 
           event listeners, a fire and forget pattern`,
          `Notifications are decoupled through a queue. The Executor does not send emails just as it dont know about jobs logic.
           It dequeues jobs from the background running broker and makes the http call.The Executor stays fast, and a
          failing provider does not fail the job.`,
          `The repository handles views, not just entities. Joins are a data concern. Keeping SQL in the 
          repository keeps the database shape out of the services.`,
        ],
      },

      { kind: "h", text: "The failure model" },
      {
        kind: "p",
        text: "Freecron is designed to fail in specific, observable and predictable ways.",
      },
      {
        kind: "table",
        headers: ["WHEN", "WHAT HAPPENS"],
        rows: [
          [
            "External API fails or falls within 4xx/5xx",
            "Execution recorded as failed",
          ],

          ["Network error", "Execution recorded as failed"],
          ["DB down during write", "Processor throws, BullMQ retries"],
          [
            "Notification provider down",
            "Notification retries, execution unaffected",
          ],
          ["Worker crash", "BullMQ requeues the stalled job"],
          ["OOM", "The container logs it, not the app"],
        ],
      },
      // {
      //   kind: "p",
      //   text: "The rule: the execution is the source of truth for a run. Notifications are best-effort. Infrastructure failures are isolated.",
      // },

      { kind: "h", text: "Observability from day one" },
      {
        kind: "p",
        text: `Pino, JSON to stdout to Grafana. One base logger per process: freecron-api, freecron-worker, 
        freecron-scheduler. Child loggers carry jobId, executionId, userId. Log the important events, not every read.`,
      },
      {
        kind: "p",
        text: "Metrics and tracing come later. Logs tell you what happened; metrics tell you how often.",
      },

      { kind: "h", text: "The testing model" },
      {
        kind: "table",
        headers: ["LAYER", "REAL", "MOCKED"],
        rows: [
          ["Unit", "Nothing", "Repositories, cache, scheduler"],
          ["Route", "The route", "The service"],
          ["Integration", "Real DB, real Redis", "Nothing"],
          ["Worker", "Real BullMQ, real DB", "External fetch"],
          ["E2E", "Everything", "External fetch, providers"],
        ],
      },
      // {
      //   kind: "quote",
      //   text: "Mock at the boundary of your system. Keep everything inside real.",
      // },

      { kind: "h", text: "The takeaway" },
      {
        kind: "p",
        text: `The strongest part of this architecture is not the diagram.
          It is the decisions and the trade-offs behind them. Anyone can list modules.
          What matters is knowing why each choice was made, and what it cost.`,
      },
      {
        kind: "p",
        text: "Freecron is not perfect. But it runs jobs reliably, records every run, and tells you when something breaks. That is the point.",
      },
    ],
  },
  {
    no: "002",
    kicker: "REFLECTION",
    title: "Cloud without the crutch: how I think about building on AWS.",
    date: "OCT 2026",
    read: "12 MIN READ",
    tags: ["AWS", "DOCKER", "CI/CD", "NETWORKING", "DEVOPS", "BACKEND"],
    lede: "A reflection on broken deployments, silent timeouts, and the slow realization that the cloud rewards discipline over cleverness.",
    body: [],
    blocks: [
      {
        kind: "bullets",
        items: [
          "The bug is almost never where you are staring. Walk the layers one at a time and prove the cause before you fix the symptom.",
          "A timeout and a refusal are different problems. A timeout points at the network. A refusal points at the service.",
          "Choose boring, portable tools. If I cannot move a stack to a VPS in one day, it is too complex for what I am building.",
          "A pipeline is a written promise. Every deploy happens the same way, and a rollback is one docker pull away.",
        ],
      },
      {
        kind: "h",
        text: "Recalling my very first bug that cost me some hours",
      },
      {
        kind: "p",
        text: "I still remember the first time I broke a production server with a single dropdown. It was a NAT Gateway, one of those AWS services you create once and then forget about, until it stops working.",
      },
      {
        kind: "p",
        text: `I had spent an entire morning setting up a private subnet, a route table, a Security Group,
         and an Internet Gateway. Everything was carefully configured. Everything looked correct.`,
      },
      {
        kind: "p",
        text: "Then I tried to curl Google from inside a private instance, and nothing happened.",
      },
      {
        kind: "code",
        lang: "bash",
        lines: [
          "ubuntu@ip-10-0-0-56:~$ curl https://google.com",
          "^C",
          "ubuntu@ip-10-0-0-56:~$ ping google.com",
          "PING google.com (142.251.142.238) 56(84) bytes of data.",
          "^C",
          "--- google.com ping statistics ---",
          "5 packets transmitted, 0 received, 100% packet loss",
        ],
      },
      {
        kind: "p",
        text: "Not an error. Not a refusal. Just a long, silent pause that ended in a timeout.",
      },
      {
        kind: "p",
        text: `I spent hours staring at the console. The Security Group allowed outbounds to 0.0.0.0. The NACL was very open.
         The route table pointed 0.0.0.0/0 at the NAT Gateway. The NAT Gateway was marked Available. 
         The Internet Gateway was attached to the VPC. Everything, by every visible measure, was fine.`,
      },
      {
        kind: "p",
        text: `The problem was one field I forgot to look at. The NAT Gateway was sitting in a private subnet,
         i take full accountability and feel a bit ashamed  now when i look back .
         A NAT Gateway has to live in a public one which is a basic. Otherwise it has no route to the internet, and nothing behind 
         it can reach the outside world.`,
      },
      {
        kind: "code",
        lang: "bash",
        lines: [
          "# On the EC2, the route looked correct:",
          "$ ip route",
          "default via 10.0.0.49 dev ens5",
          "10.0.0.0/24 dev ens5",
          "10.0.0.2 via 10.0.0.49 dev ens5",
          "",
          "# But on the console, the NAT Gateway was in:",
          "Subnet: astroverse-api  (10.0.0.48/28)   <- private",
          "# It should have been in:",
          "Subnet: astroverse-web  (10.0.0.32/28)   <- public",
        ],
      },
      {
        kind: "p",
        text: "One wrong click in a dropdown. Three hours of debugging. A lesson I have never forgotten.",
      },
      { kind: "p", text: "The fix was small:" },
      {
        kind: "bullets",
        items: [
          "Delete the NAT Gateway in the private subnet.",
          "Create a new NAT Gateway in the public subnet.",
          "Attach an Elastic IP.",
          "Update the private route table's target to point to the new NAT Gateway.",
        ],
      },
      { kind: "p", text: "Two minutes of work, once I found the bug." },
      {
        kind: "p",
        text: "That experience is the foundation of how I think about cloud today. Not as a platform to master, but as a set of layers to understand. Every layer has a job. Every layer can fail. And the bug is almost never in the place you are staring at.",
      },

      // {
      //   kind: "h",
      //   text: "The cloud is a stack of decisions, not a stack of services",
      // },
      // {
      //   kind: "p",
      //   text: 'When people say "I\'m using AWS," they usually mean one of two things. Either they are using a few managed services and trusting the platform to handle the rest, or they are building a system out of primitives (VPCs, subnets, route tables, Security Groups) and owning every decision along the way.',
      // },
      // {
      //   kind: "p",
      //   text: "I belong to the second camp. Not because it is better in some absolute sense, but because it is the only way I can debug what I have built.",
      // },
      // {
      //   kind: "p",
      //   text: 'Every time you launch an EC2 instance, you are not "using AWS." You are making a dozen decisions at once:',
      // },
      // {
      //   kind: "code",
      //   lang: "text",
      //   lines: [
      //     "VPC                -> 10.0.0.0/16",
      //     "Subnet             -> 10.0.0.48/28  (private)",
      //     "Availability Zone  -> eu-north-1a",
      //     "Security Group     -> sg-xxxxxxxxxxxxxxxxx",
      //     "Route Table        -> rtb-xxxxxxxxxxxxxxxxx",
      //     "SSH key          -> <key-pair-name>.pem",
      //     "Volume             -> 20 GB gp3",
      //     "IAM Role           -> (none)",
      //   ],
      // },
      // {
      //   kind: "p",
      //   text: "Each one is a decision someone has to own, and each one can be wrong. When the system fails, the failure does not happen in the console. It happens in the interaction between the decisions.",
      // },
      // {
      //   kind: "p",
      //   text: "The discipline that came out of this is simple: I do not guess. I walk down the layers. Instance, network, service, app, data. I test each one, and I prove the cause before I fix the symptom.",
      // },
      // {
      //   kind: "code",
      //   lang: "bash",
      //   lines: [
      //     "# Layer 1 (Instance): is it running?",
      //     "aws ec2 describe-instances --instance-ids i-xxxxxxxxxxxxxxxxx",
      //     "",
      //     "# Layer 2 (Network): is it reachable?",
      //     "nc -vz -w 5 <ip> 22",
      //     "nc -vz -w 5 <ip> 80",
      //     "",
      //     "# Layer 3 (Service): is something listening and responding?",
      //     "docker ps",
      //     "sudo netstat -tulpn | grep :80",
      //     "curl http://localhost:80",
      //     "",
      //     "# Layer 4 (App): what is the application saying?",
      //     "docker logs <container>",
      //     "sudo journalctl -u nginx -n 50",
      //     "",
      //     "# Layer 5 (Data): is the data correct?",
      //     "psql -h <db-host> -U <user> -d <db>",
      //     "SELECT * FROM users LIMIT 5;",
      //   ],
      // },
      // {
      //   kind: "p",
      //   text: "In theory that sounds obvious. In practice, it is the difference between ten minutes and three hours. The NAT Gateway bug was the first time this clicked. It has not stopped clicking since.",
      // },

      // { kind: "h", text: "The two errors that teach you everything" },
      // {
      //   kind: "p",
      //   text: "There are two failure modes in cloud networking, and they mean completely different things. Learning to tell them apart is, in my opinion, the single most useful skill in cloud debugging.",
      // },
      // {
      //   kind: "table",
      //   headers: ["", "CONNECTION REFUSED", "CONNECTION TIMED OUT"],
      //   rows: [
      //     [
      //       "What happened",
      //       "The packet arrived, and nothing was listening",
      //       "The packet was dropped somewhere along the way",
      //     ],
      //     [
      //       "What it means",
      //       "The network did its job. The service did not",
      //       "The machine may be fine. You just cannot reach it",
      //     ],
      //     ["Where to look", "Inside the machine", "Between the machines"],
      //     [
      //       "Check",
      //       "docker logs, systemctl status, netstat",
      //       "Security Groups, NACLs, route tables, Internet Gateways",
      //     ],
      //   ],
      // },
      // {
      //   kind: "p",
      //   text: '"Connection refused" means the network is fine and the service is dead. The problem is inside the machine: a service that is not running, a port that is not open, a process that crashed.',
      // },
      // {
      //   kind: "code",
      //   lang: "bash",
      //   lines: [
      //     "$ nc -vz 10.0.0.56 22",
      //     "nc: connect to 10.0.0.56 port 22 (tcp) failed: Connection refused",
      //   ],
      // },
      // {
      //   kind: "p",
      //   text: '"Connection timed out" means the machine might be running perfectly, but you cannot reach it. The problem is between the machines.',
      // },
      // {
      //   kind: "code",
      //   lang: "bash",
      //   lines: [
      //     "$ nc -vz 10.0.0.56 22",
      //     "nc: connect to 10.0.0.56 port 22 (tcp) timed out: Operation now in progress",
      //   ],
      // },
      // {
      //   kind: "p",
      //   text: "These two errors look similar on the surface, since both end in a failure, but they send you to completely different places:",
      // },
      // {
      //   kind: "code",
      //   lang: "bash",
      //   lines: [
      //     "# For a timeout: check the network.",
      //     "ip route",
      //     "sudo ufw status",
      //     "sudo iptables -L -n -v",
      //     "nslookup google.com",
      //     "curl -v https://google.com",
      //     "",
      //     "# For a refusal: check the service.",
      //     "docker ps",
      //     "docker logs <container>",
      //     "sudo systemctl status nginx",
      //     "sudo netstat -tulpn | grep :3001",
      //     "curl http://localhost:3001",
      //   ],
      // },
      // {
      //   kind: "p",
      //   text: "Once I learned to distinguish them, debugging became a process of elimination instead of a guessing game. A timeout meant the network was not set up correctly. A refusal meant the service was not. Mixing them up wastes hours.",
      // },
      // {
      //   kind: "p",
      //   text: "I wish someone had told me this on day one. Instead, I learned it the hard way, by staring at timeouts that should have been refusals and refusals that should have been timeouts.",
      // },

      { kind: "h", text: "Why I do not trust managed services by default" },
      {
        kind: "p",
        text: "AWS is very good at selling convenience. RDS is easier than running Postgres. Lambda is easier than running a server. Secrets Manager is easier than a .env file. Elastic Beanstalk is easier than Docker. The marketing is persuasive, and the documentation is excellent.",
      },
      {
        kind: "p",
        text: "But every managed service is a decision to trust someone else's abstraction, and a decision to accept a certain kind of lock-in. When you use Lambda, you are tying your application to AWS's runtime. When you use RDS, you are accepting that migration will be painful. When you use DynamoDB, you are adopting a data model that does not translate. The convenience is real, but so is the cost.",
      },
      {
        kind: "p",
        text: "I do not reject managed services. I just choose them carefully. For most of my projects, I do not need what they offer. Docker on EC2, PostgreSQL in a container, Nginx on the host: these are boring, portable, and cheap. They also work on Hetzner, DigitalOcean, or a Raspberry Pi. That matters more to me than the polish of a managed service.",
      },
      {
        kind: "p",
        text: "There is a second reason, and it is less philosophical: I can see them. When a container fails, I read docker logs. When Nginx returns a 502, I read the error log. When Postgres is slow, I run EXPLAIN ANALYZE. I do not need a console to tell me what is wrong, because the system tells me itself. That kind of visibility is worth more than the convenience of a managed service.",
      },

      { kind: "h", text: "Portability is a design goal, not a nice-to-have" },
      {
        kind: "p",
        text: "The first time I migrated a project from AWS to a VPS, it took an afternoon. Not because I am clever, but because I had made portability a design goal from the start.",
      },
      {
        kind: "p",
        text: "Here is what I use instead of the AWS-native option:",
      },
      {
        kind: "table",
        headers: ["NEED", "WHAT I USE", "INSTEAD OF"],
        rows: [
          ["Runtime", "Docker", "Lambda, platform-specific runtimes"],
          ["Database", "PostgreSQL in Docker", "RDS, DynamoDB"],
          ["API front door", "Nginx", "API Gateway"],
          ["Scheduler", "cron in a container", "EventBridge"],
          ["Queue", "RabbitMQ in Docker", "SQS"],
          ["Secrets", ".env + SOPS", "Secrets Manager"],
          ["Logs", "Grafana + Loki", "CloudWatch"],
          ["Container registry", "GitHub Container Registry (GHCR)", "ECR"],
          ["CI/CD", "GitHub Actions", "CodePipeline"],
          ["DNS", "Cloudflare", "Route 53"],
          ["SSL", "Let's Encrypt", "ACM"],
        ],
      },
      {
        kind: "p",
        text: "Every choice points toward the exit. And the exit is what makes the entry safe. If you know you can leave, you are not trapped. If you are not trapped, you can negotiate. If you can negotiate, you are not paying too much.",
      },
      {
        kind: "p",
        text: "This is not just a technical preference. It is a business decision. Startups die from lock-in. So do side projects. So do portfolios, sometimes.",
      },
      {
        kind: "p",
        text: "The standard I hold every architecture decision to is simple: if I cannot port this to a VPS in one day, it is too complex for what I am building.",
      },
      {
        kind: "p",
        text: "Here is the Dockerfile that works on AWS, Hetzner, DigitalOcean, or a Raspberry Pi:",
      },
      {
        kind: "code",
        lang: "dockerfile",
        lines: [
          "FROM node:lts AS builder",
          "WORKDIR /app",
          "RUN corepack enable",
          "COPY package.json pnpm-lock.yaml ./",
          "RUN pnpm install --frozen-lockfile",
          "COPY . .",
          "RUN pnpm build",
          "",
          "FROM node:lts-alpine AS runner",
          "WORKDIR /app",
          "ENV NODE_ENV production",
          "COPY --from=builder /app/public ./public",
          "COPY --from=builder /app/.next/standalone ./",
          "COPY --from=builder /app/.next/static ./.next/static",
          "EXPOSE 3005",
          "ENV PORT 3005",
          'CMD ["node", "server.js"]',
        ],
      },
      {
        kind: "p",
        text: "No platform-specific code. No AWS SDK in the app. No environment variables that only exist in one console. The app does not know where it is running. It only knows it has a port and a filesystem. That is the portability test I hold every decision to.",
      },

      { kind: "h", text: "The pipeline taught me the rest" },
      {
        kind: "p",
        text: "The NAT Gateway bug taught me to walk the layers. The CI/CD pipeline taught me what comes after: reproducibility.",
      },
      {
        kind: "p",
        text: 'Before I had a pipeline, every deployment was a small adventure. SSH in, pull the code, install dependencies, build, copy files, restart the service. Five commands, and five places to make a mistake. I once shipped a broken build because I forgot to run pnpm build after a rebase. The site was down for forty minutes because I was "just doing a quick deploy."',
      },
      {
        kind: "p",
        text: "A CI/CD pipeline is not just automation. It is a written promise that every deployment will happen the same way. Same build. Same image. Same environment. Same commands. The container that runs on my Mac is the container that runs on the EC2 is the container that runs in production. That guarantee is worth more than the time it saves.",
      },
      {
        kind: "p",
        text: "The pipeline takes a git push and turns it into a live deployment in under three minutes. It builds the image on GitHub's runners, pushes it to GHCR, SSHes into the EC2, pulls the new image, and restarts the container. Here is the full workflow:",
      },
      {
        kind: "code",
        lang: "yaml",
        lines: [
          "name: Build and Deploy",
          "",
          "on:",
          "  push:",
          "    branches: [main]",
          "",
          "jobs:",
          "  build-and-deploy:",
          "    runs-on: ubuntu-latest",
          "",
          "    permissions:",
          "      contents: read",
          "      packages: write",
          "",
          "    steps:",
          "      - name: Checkout",
          "        uses: actions/checkout@v4",
          "",
          "      - name: Login to GHCR",
          "        uses: docker/login-action@v3",
          "        with:",
          "          registry: ghcr.io",
          "          username: ${{ github.actor }}",
          "          password: ${{ secrets.GITHUB_TOKEN }}",
          "",
          "      - name: Build and push",
          "        uses: docker/build-push-action@v5",
          "        with:",
          "          context: .",
          "          push: true",
          "          tags: |",
          "            ghcr.io/${{ github.repository }}:latest",
          "            ghcr.io/${{ github.repository }}:${{ github.sha }}",
          "",
          "      - name: Deploy to EC2",
          "        uses: appleboy/ssh-action@v1",
          "        with:",
          "          host: ${{ secrets.EC2_HOST }}",
          "          username: ${{ secrets.EC2_USER }}",
          "          key: ${{ secrets.EC2_SSH_KEY }}",
          "          script: |",
          "            docker pull ghcr.io/${{ github.repository }}:latest",
          "            docker stop rosait || true",
          "            docker rm rosait || true",
          "            docker run -d \\",
          "              --name rosait \\",
          "              -p 127.0.0.1:3005:3005 \\",
          "              --restart unless-stopped \\",
          "            ghcr.io/${{ github.repository }}:latest",
        ],
      },
      { kind: "p", text: "Two details here are intentional:" },
      {
        kind: "bullets",
        items: [
          "|| true on stop and rm. On the first deploy there is nothing to stop. On later deploys there is. The pipeline does not fail because of the difference.",
          "-p 127.0.0.1:3005:3005. The container is only reachable from the host. Nginx on the host handles the public side, so the port is never exposed to the internet.",
        ],
      },
      {
        kind: "p",
        text: "Every step is visible. Every failure is documented. And every rollback is a docker pull away, because every build is also tagged with the Git SHA:",
      },
      {
        kind: "code",
        lang: "bash",
        lines: [
          "# Rollback: pull the previous SHA tag and restart the container.",
          "docker pull ghcr.io/emman-tt/rosait:a1b2c3d4",
          "docker stop rosait",
          "docker rm rosait",
          "docker run -d --name rosait -p 127.0.0.1:3005:3005 \\",
          "  ghcr.io/emman-tt/rosait:a1b2c3d4",
        ],
      },
      {
        kind: "p",
        text: "If latest breaks, a1b2c3d4 still works. The old image stays in the registry until I delete it. The pipeline gives me a way back.",
      },
      {
        kind: "p",
        text: "I still feel the same satisfaction watching the green checkmarks appear as I did the first time. Not because automation is magic, but because it is the closest thing to a guarantee I can build.",
      },

      { kind: "h", text: "The philosophy, in one sentence" },
      {
        kind: "quote",
        text: "Cloud should make you faster, not more dependent.",
      },
      {
        kind: "p",
        text: "When the credits run out, and they always do, I want to move my stack in an afternoon, not rewrite it in a quarter. That is the standard I hold every architecture decision to. That is why I use Docker instead of Lambda. That is why I use Postgres instead of DynamoDB. That is why I use GitHub Actions instead of CodePipeline. That is why the NAT Gateway bug mattered so much: because it forced me to understand the system instead of trusting it.",
      },
      {
        kind: "p",
        text: "I do not think everyone should work this way. Some teams need what managed services offer, and that is fine. But for the things I build (portfolios, side projects, small products), the quiet discipline of portability is worth more than the noisy convenience of the cloud.",
      },
      {
        kind: "p",
        text: "The bug that cost me three hours taught me more than any tutorial ever did. It taught me to trust the layers, not the platform. To verify the assumption, not the configuration. To ask, always: where would I go if this stopped working tomorrow?",
      },
      {
        kind: "p",
        text: "That is how I think about cloud. Not as a service to master, but as a set of decisions to own.",
      },

      { kind: "h", text: "Quick reference" },
      {
        kind: "p",
        text: "Every lesson above has code attached. If you just want the pieces:",
      },
      {
        kind: "bullets",
        items: [
          "The Dockerfile: portable, multi-stage, framework-agnostic. See Portability.",
          "The CI/CD pipeline: GitHub Actions, GHCR, SSH deploy. See The pipeline.",
          "The debugging commands: nc, curl, ip route, docker logs. See The two errors and The layers.",
          "The rollback pattern: pull the previous SHA, restart the container. See The pipeline.",
        ],
      },
    ],
  },
];
