import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import CardBlog from "@/components/CardBlog";
import RadiusInverted from "@/components/RadiusInverted";

export default function BlogContentPage(props: any) {
  // Variables
  const { slug } = props?.params || {};
  const radiusSize = "2rem";

  // Temp variables
  const blogs = Array.from({ length: 3 }, (_, index) => index);

  return (
    <div className="ri-container py-10">
      <div className="mb-16">
        <h1 className="h2 mb-8">Job interview tips</h1>
        <div
          className="relative flex flex-col overflow-hidden shadow-lg"
          style={{ borderRadius: radiusSize }}
        >
          {/* Image */}
          <div
            className="relative block w-full h-0"
            style={{ paddingTop: `calc(30% + ${radiusSize})` }}
          >
            <Image
              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full object-cover transition-all duration-300 group-hover/container:scale-105"
              src="/images/blogs/interview.jpg"
              width={1090}
              height={818}
              alt="Image"
            />
          </div>

          {/* Content */}
          <div
            className="relative bg-secondary-light px-8 lg:px-12 py-6 lg:py-8 *:mb-4"
            style={{ borderTopLeftRadius: radiusSize }}
          >
            <p className="text-md font-bold">15 Nov 2023</p>

            <p className="font-medium">
              So you’ve landed yourself a job interview - well done! While
              you’re one step closer to a chance at a new job, a job interview
              can also be very nerve-racking. The aim is to come prepared so
              you’re confident with every question that’s thrown at you.
            </p>

            <h2 className="text-primary text-base font-semibold">
              What to expect
            </h2>

            <p className="font-medium">
              So you’ve landed yourself a job interview - well done! While
              you’re one step closer to a chance at a new job, a job interview
              can also be very nerve-racking. The aim is to come prepared so
              you’re confident with every question that’s thrown at you. Job
              interview questions can vary greatly, and the interviewers asking
              the questions can have a manner that ranges from distant and
              diligent to more relaxed and casual. Here are some sample
              interview questions and answers that could help you know what to
              expect.
            </p>

            <h2 className="text-primary text-base font-semibold">
              Behavioural questions
            </h2>

            <p className="font-medium">
              <b>Example:</b> “Describe a time when you showed initiative in the
              workplace.”
            </p>

            <p className="font-medium">
              <b>How to answer:</b> These questions ask you to reach back into
              your own history to relay a time where you behaved in a certain
              way. They’re designed to give the interviewer an idea of how you
              could act in the future, based on your past, so make sure you’ve
              memorised some vital positive moments in your career that you are
              proud to bring up.
            </p>

            <h2 className="text-primary text-base font-semibold">
              Situational questions
            </h2>

            <p className="font-medium">
              <b>Example:</b> “Describe a time when you showed initiative in the
              workplace.”
            </p>

            <p className="font-medium">
              <b>How to answer:</b> These questions ask you to reach back into
              your own history to relay a time where you behaved in a certain
              way. They’re designed to give the interviewer an idea of how you
              could act in the future.
            </p>

            {/* Top inverted radius */}
            <RadiusInverted color="secondary-light" size={radiusSize} />
          </div>

          {/* Favorite */}
          <Link
            className="absolute top-2"
            style={{ right: radiusSize }}
            href="#"
            title="Mark as Favorite"
          >
            <FontAwesomeIcon
              className="fa-xl transition-all text-secondary"
              icon={faHeart}
            />
          </Link>
        </div>
      </div>

      {/* More articles */}
      <h2 className="h2">Popular articles on Ready Interview</h2>

      {/* List of Blog */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-8">
        {blogs.map((index) => (
          <CardBlog key={index} />
        ))}
      </div>
    </div>
  );
}
