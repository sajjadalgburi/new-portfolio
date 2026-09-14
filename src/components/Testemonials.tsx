/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Link from "next/link";

const reviews = [
  {
    name: "Bashiri Smith",
    username: "@bashiri-smith",
    body: "Sajjad is truly a talented and hardworking engineer. I've spent time mentoring him and there was never a single task or concept he even so much as hesitated to figure out. He would be a great asset to any engineering team.",
    img: "/reviews/bashiri.jpeg",
    link: "https://www.linkedin.com/in/bashiri-smith/", // Added link to LinkedIn profile
  },
  {
    name: "Ali Mhaidi",
    username: "@Freelance Client",
    body: "I am incredibly grateful to Sajjad for the fantastic website he created for my company. He was always very polite and accommodating whenever I requested new features. He even went the extra mile by paying for my domain!",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jay Patel",
    username: "@jay-patel-30606a267",
    body: "Thanks to OutreachAI (outreachai.app), I can efficiently apply to numerous jobs with personalized applications. Their cover letter generator perfectly aligns job listings with my resume details, creating tailored cover letters every time. Not to mention, their outreach message feature which has helped me alot as well!. I highly recommend this tool. Special thanks to Sajjad Algburi, the impressive solo developer behind this game-changing app.",
    img: "/reviews/jay.jpeg",
    link: "https://www.linkedin.com/in/jay-patel-30606a267/", // Added link to LinkedIn profile
  },
  {
    name: "Habeed Shad",
    username: "@Freelance Client",
    body: "I appreciate Sajjad Alguir's help and craftsmanship! With the help of his website, I was able to acquire additional customers, many of whom returned because of the custom booking platform he created for me, all at no extra cost!",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Ahmed Choudhry",
    username: "@ahmed-choudhry",
    body: "Sajjad built an incredibly useful tool with Outreach AI that made my job outreach process faster and more effective. His work showed strong technical skill and a clear focus on user experience.",
    img: "/reviews/ahmed.jpeg",
    link: "https://www.linkedin.com/in/ahmed-choudhry/", // Added link to LinkedIn profile
  },
  {
    name: "Ibrahim Dobashi",
    username: "@ibrahim-dobashi",
    body: "Sajjad is one of the best developers I know. I've had the pleasure of working with him on several projects, and he has always impressed me with his skills and dedication. You'd be lucky to have him on your team.",
    img: "/reviews/ibrahim.jpeg",
    link: "https://www.linkedin.com/in/ibrahim-dobashi/", // Added link to LinkedIn profile
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
  link,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  link?: string; // Optional link to LinkedIn profile
}) => {
  const content = (
    <>
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={img}
          loading="lazy"
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </>
  );

  const className = cn(
    "relative h-full w-full overflow-hidden rounded-xl border p-4",
    "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
    "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
  );

  return link ? (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      className={cn("cursor-pointer", className)}
    >
      {content}
    </Link>
  ) : (
    <article className={className}>{content}</article>
  );
};

export function Testemonials() {
  return (
    <div className="relative flex h-[550px] flex-row items-center justify-center overflow-hidden">
      <div className="hidden sm:flex absolute inset-0 z-10 items-center justify-center">
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.name} link={review.link} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.name} link={review.link} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
      </div>

      <div className="flex sm:hidden absolute inset-0 z-10 items-center justify-center">
        <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
          {reviews.map((review) => (
            <ReviewCard key={review.name} link={review.link} {...review} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
      </div>
    </div>
  );
}
