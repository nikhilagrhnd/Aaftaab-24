import AnimationRevealPage from "helpers/AnimationRevealPage";
import React, { Component } from "react";
import Header from "components/headers/light.js";
import TeamCard from "components/cards/Team-Teams-Card";
import Footer from "components/footers/Home-Footer";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";
function Team() {
  const team1 = {
    heading: "Web Development Team",
    subheading: "lorem ipsum",
    cards: [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80",
        position: "Head",
        name: "John Doe",
        links: [
          {
            url: "https://twitter.com",
            icon: TwitterIcon,
          },
          {
            url: "https://linkedin.com",
            icon: LinkedinIcon,
          },
          {
            url: "https://github.com",
            icon: GithubIcon,
          },
        ],
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80",
        position: "Sr. Designer",
        name: "Charlotte Hale",
        links: [
          {
            url: "https://twitter.com",
            icon: TwitterIcon,
          },
          {
            url: "https://linkedin.com",
            icon: LinkedinIcon,
          },
          {
            url: "https://github.com",
            icon: GithubIcon,
          },
        ],
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80",
        position: "Jr. Designer",
        name: "Silvester Wize",
        links: [
          {
            url: "https://twitter.com",
            icon: TwitterIcon,
          },
          {
            url: "https://linkedin.com",
            icon: LinkedinIcon,
          },
          {
            url: "https://github.com",
            icon: GithubIcon,
          },
        ],
      },
    ],
  };
  const team2 = {
    heading: "PR Team",
    subheading: "Our Team",
    cards: [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80",
        position: "Founder",
        name: "Moe Lesteter",
        links: [
          {
            url: "https://twitter.com",
            icon: TwitterIcon,
          },
          {
            url: "https://linkedin.com",
            icon: LinkedinIcon,
          },
          {
            url: "https://github.com",
            icon: GithubIcon,
          },
        ],
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80",
        position: "Sr. Designer",
        name: "Charlotte Hale",
        links: [
          {
            url: "https://twitter.com",
            icon: TwitterIcon,
          },
          {
            url: "https://linkedin.com",
            icon: LinkedinIcon,
          },
          {
            url: "https://github.com",
            icon: GithubIcon,
          },
        ],
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80",
        position: "Jr. Designer",
        name: "Silvester Wize",
        links: [
          {
            url: "https://twitter.com",
            icon: TwitterIcon,
          },
          {
            url: "https://linkedin.com",
            icon: LinkedinIcon,
          },
          {
            url: "https://github.com",
            icon: GithubIcon,
          },
        ],
      },
    ],
  };
  const team3 = {
    heading: "Marketing Team",
    subheading: "Our Team",
    cards: [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80",
        position: "Head",
        name: "Moe Lesteter",
        links: [
          {
            url: "https://twitter.com",
            icon: TwitterIcon,
          },
          {
            url: "https://linkedin.com",
            icon: LinkedinIcon,
          },
          {
            url: "https://github.com",
            icon: GithubIcon,
          },
        ],
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80",
        position: "Sr. Designer",
        name: "Charlotte Hale",
        links: [
          {
            url: "https://twitter.com",
            icon: TwitterIcon,
          },
          {
            url: "https://linkedin.com",
            icon: LinkedinIcon,
          },
          {
            url: "https://github.com",
            icon: GithubIcon,
          },
        ],
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80",
        position: "Jr. Designer",
        name: "Silvester Wize",
        links: [
          {
            url: "https://twitter.com",
            icon: TwitterIcon,
          },
          {
            url: "https://linkedin.com",
            icon: LinkedinIcon,
          },
          {
            url: "https://github.com",
            icon: GithubIcon,
          },
        ],
      },
    ],
  };
  return (
    <AnimationRevealPage>
      <Header />
      <TeamCard heading={team1.heading}
        subheading={team1.subheading}
        description={team1.description}
        cards={team1.cards} />
      <TeamCard heading={team2.heading}
        subheading={team2.subheading}
        description={team2.description}
        cards={team2.cards} />
     
      <TeamCard heading={team3.heading}
        subheading={team3.subheading}
        description={team3.description}
        cards={team3.cards} />
      <Footer />
    </AnimationRevealPage>
  );
}

export default Team;
