import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";

import imgLogo from "../../images/old-logo.png"

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default () => {
  const cards = [
    {
      imageSrc: 
        "https://scontent-del1-2.xx.fbcdn.net/v/t39.30808-6/300373576_385935390367338_7562714050720498645_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tcTXreyb4xcAX9Cvrqa&_nc_ht=scontent-del1-2.xx&oh=00_AT-66hu-ve4uCKKW6GRV2WE8CHGYApXSeNQ8x2Da5TtSog&oe=631B7F11",
      subtitle: "Basic Intro",
      title: "Brief Introduction",
      description:
      "Aaftaab, the annual literary festival conducted by IIT Jodhpur, is back, after two long years. It is a celebration of the splendour, diversity, and inclusiveness of literature. It provides for a melting pot of students from different colleges, cultures, and backgrounds and ensures that they will be left spellbound by the mesmerising poets, inspiring authors, enthralling literary discussions, and fun-filled activities, including open mics, book launches, quizzes, and live music performances.",
      url: "https://timerse.com"
    },

    {
      imageSrc:
        "https://scontent-del1-2.xx.fbcdn.net/v/t39.30808-6/300373576_385935390367338_7562714050720498645_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tcTXreyb4xcAX9Cvrqa&_nc_ht=scontent-del1-2.xx&oh=00_AT-66hu-ve4uCKKW6GRV2WE8CHGYApXSeNQ8x2Da5TtSog&oe=631B7F11",
      subtitle: "what it's all about?",
      title: "Theme",
      description:
      "The theme of this year’s Aaftaab is Kaleidoscopes: Limitless Iridescence Telestic.It is a marvellous representation of the limitless reach of the festival, which brings together brilliant minds from all around the country and allows them to express themselves, explore the diverse genres and partake in the magnificent celebration of literature.", 
      
      url: "https://timerse.com"
    },

    {
      imageSrc:
        "https://scontent-del1-2.xx.fbcdn.net/v/t39.30808-6/300373576_385935390367338_7562714050720498645_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tcTXreyb4xcAX9Cvrqa&_nc_ht=scontent-del1-2.xx&oh=00_AT-66hu-ve4uCKKW6GRV2WE8CHGYApXSeNQ8x2Da5TtSog&oe=631B7F11",
      subtitle: "Lit is Hit",
      title: "Why Lit?",
      description:
      "Margaret Atwood once said, “ In the end, we’ll all become stories.”, therefore the team at Aaftaab invites you to be a co-writer for the story of Aaftaab 2022. The enthusiasm and passion you bring, akin to a glorious sunrise, will help radiate our love for literature throughout the country.",
      url: "https://timerse.com"
    }
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>About Aaftaab</HeadingTitle>
          <HeadingDescription>
            Let's dive into the details of aaftaab 2022.
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                <Subtitle>{card.subtitle}</Subtitle>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
                <Link href={card.url}>See Event Details</Link>
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
