import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardRating = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

const CardReview = tw.div`font-medium text-xs text-gray-600`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  heading = "Event Schedule",
  tabs = {
    Flagship: [
      {
        imageSrc:
        "https://kavisammelanlive.com/wp-content/uploads/2020/05/new-logo.png",
        title: "Kavi Sammelan",
        timing: "XX:XX AM - XX:XX PM",
        // price: "₹50",
        url: "#"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1569315618680-3d673b5e1514?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Stand up Comedy",
        timing: "XX:XX AM - XX:XX PM",
        // price: "₹50",
        url: "#",
        description: "Come and join us for an evening glimmered with sarcasm and humour, brought to you by one of the finest comics in the country and fill the evening with giggles and hootings. A comedic performance to a live audience, saturated with jokes and sarcasm with one of the best standup comics out there to entertain you.",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1610659606489-77967e40fa35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        title: "Folk Music + Puppet Show",
        timing: "XX:XX AM - XX:XX PM",
        // price: "₹50",
        url: "#"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1520483691742-bada60a1edd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "DJ Night",
        timing: "XX:XX AM - XX:XX PM ",
        // price: "₹50",
        url: "#"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1520483691742-bada60a1edd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Book Signings",
        timing: "XX:XX AM - XX:XX PM ",
        // price: "₹50",
        url: "#"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1520483691742-bada60a1edd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Interview with Director",
        timing: "XX:XX AM - XX:XX PM ",
        // price: "₹50",
        url: "#"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1520483691742-bada60a1edd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Treasure Hunt",
        timing: "XX:XX AM - XX:XX PM ",
        // price: "₹50",
        url: "#"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1520483691742-bada60a1edd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Workshops",
        timing: "XX:XX AM - XX:XX PM ",
        // price: "₹50",
        url: "#"
      }
    ],
    Day1: getDay1Cards(),
    Day2: getDay2Cards(),
    Day3: getDay3Cards()
  }
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its timing (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);
   

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale:1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale:0.8,
                display: "none",
              }
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
                <CardContainer key={index}>
                 {/* <Link to="/eventDetails" state={card}> */}
                 <Link to={{
                  pathname: "/eventDetails",
                  search: `?name=${card.title}`,
                  state: card
                 }}>
                  <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
                    <CardImageContainer imageSrc={card.imageSrc}>
                      {/* <CardRatingContainer>
                        <CardRating>
                          <StarIcon />
                          {card.rating}
                        </CardRating>
                        <CardReview>({card.reviews})</CardReview>
                      </CardRatingContainer> */}
                      {
                        card.price ?
                        <CardHoverOverlay
                          variants={{
                            hover: {
                              opacity: 1,
                              height: "auto"
                            },
                            rest: {
                              opacity: 0,
                              height: 0
                            }
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <CardButton>Register Now!</CardButton>
                        </CardHoverOverlay>
                        : null
                      }
                    </CardImageContainer>
                    <CardText>
                      <CardTitle>{card.title}</CardTitle>
                      <CardContent>{card.timing}</CardContent>
                      {card.price ? <CardPrice>{card.price}</CardPrice> : null}
                    </CardText>
                  </Card>
                 </Link>
                </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

const getDay1Cards = () => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1598594661945-d7e693e4522c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "Lamp Lighting and Kick Off",
      timing: "5 PM - 6 PM",
      price: "₹50",
      description: `With each passing minute we are getting closer to the magical world of literature. Join us and witness the grand fire start. Ready to roll?? Lets go...."Aagaz!" As the wick of the lamp catches a spark and unflurs it into a luminous flame that's when we mark the onset of Aaftaab 2022 and its Fame.   -- A formal start of the fest "Aaftaab" with a lamp lighting ceremony.`,
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=441&q=80",
      title: "Folk Music",
      timing: "6 PM - 7 PM",
      price: "₹50",
      description: `The term folk music and its equivalents in other languages denote many different kinds of music; the meaning of the term varies according to the part of the world, social class, and period of history. Doing justice to this year’s theme, Kaleidoscopes, Aaftaab will organise a Folk Music and Puppet Show, that will host regional folk musicians to celebrate the beauty and soulfulness of Rajasthani Folk Music. Join us as we immerse ourselves in resonating sounds of traditional instruments and the stories told by these musical storytellers.`,
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1432639020363-5632f7f04e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1236&q=80",
      title: "Puppet Show",
      timing: "6 PM - 7 PM",
      price: "₹50",
      description: `The term folk music and its equivalents in other languages denote many different kinds of music; the meaning of the term varies according to the part of the world, social class, and period of history. Doing justice to this year’s theme, Kaleidoscopes, Aaftaab will organise a Folk Music and Puppet Show, that will host regional folk musicians to celebrate the beauty and soulfulness of Rajasthani Folk Music. Join us as we immerse ourselves in resonating sounds of traditional instruments and the stories told by these musical storytellers.`,
      url: "#"
    },
    {
      imageSrc:
        "https://kavisammelanlive.com/wp-content/uploads/2020/05/new-logo.png",
      title: "Kavi Sammelan",
      timing: "8 PM - 10 PM",
      price: "₹100",
      description: `‘Kavyamaye ho uthega dil, jab sajegi kaviyon ki mehfil’. A poetic event (Kavi Sammelan) is being organized on this Aaftaab. The event will be presenting young and talented poets who will recite their poems and mushairas in front of the audience. Here the participants will get a topic on which they have to present their poetry. also, participants could get a chance to interact with upcoming faces of poetry.`,
      url: "#"
    }
  ];

  // Shuffle array
  return cards;
};

const getDay2Cards = () => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Script to Video (Video Making Workshop)",
      timing: "10:00 AM - 11:30 AM",
      // price: "₹50",
      description:`Christian Bale – or Batman once said: “I only sound intelligent when there’s a good script writer around." Always wanted to visualize your words? This is your chance. IIT Jodhpur will be organizing a video-making workshop this Aaftaab. Here we will be hosting a ‘Script to Video’ event where you will be guided by highly experienced mentors on how to convert your own script to videos. Join us to learn the nuances of video production and gain exclusive, behind the scenes information from some of the biggest names in the film and video industry.`,
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Spill the Ink (Creative Writing Workshop)",
      timing: "10:00 AM - 11:30 AM",
      description: `Have you always had a “Creative Knack” but felt like you were unable to express yourself? This is your chance! Welcome to “Spill the Ink”: A creative writing workshop where you will be guided to pen down your thoughts in a lucrative way, to help do justice to the author within. `,
      // price: "₹50",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Public Speaking Workshop",
      timing: "10:00 AM - 11:30 AM",
      price: "₹50",
      description: `Are you someone who prepares the entire night for hosting the next day, and then BAM!: You forget everything when you perform? Well fear not, for we will be hosting a “Public Speaking” workshop where you will be carefully instructed on the subtle art of speaking in front of an audience. Just like how the mirrors of kaleidoscopes mimic the spectrum, we will help you carve all aspects from body language, to speech articulation to persuasive speaking.So, let’s not waste this opportunity because "Good fortune is what happens when opportunity meets planning!!"`,
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Verse Come Verse Serve (Prompt Poetry)",
      timing: "11:30 AM - 01:00 PM",
      description: `Poems! The most beautiful way to write your hearts down on a piece of paper. Slow and steady, isn’t it?
      But! But! But! Aaftaab is here with “Verse Come Verse Serve”, an on-the-spot poem writing competition.
      Come and showcase your creativity and poetic skills but this time with less time.`,
      // price: "₹50",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Noob Quiz",
      timing: "11:30 AM - 01:00 PM",
      description: `QUIZ? Meh, I'll skip the "nerdy" stuff. 
      Well, NOOB QUIZ is here to break that myth. Show off your quizzing skills by cracking the questions with the most basic knowledge and bag flashy prizes. A proper quiz with teams that'll face each other off in a fierce battle of questions and answers.`,
      // price: "₹50",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Are Your Words-Worth?(Word Games)",
      timing: "02:30 PM - 04:00 PM",
      description: `Are you someone who boasts about your literary and vocabulary skills? Do you think you're witty with your puns? Come and be a part of “Are Your Words-Worth” where your wordplay skills will be pushed to the limits! 

      Be a part of a series of word games which will test your quick thinking skills, vocabulary and imagination.`,
      // price: "₹50",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Regional Author Book Signing",
      timing: "02:30 PM - 04:00 PM",
      description: `Want to know how an idea is turned into a novel ?
      We bring to you the joy of hearing an author tell the biography of their book.
      Join us and get the chance to interact with a big name of the literaly world and get your own signed copy of the book.`,
      // price: "₹50",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Interview with Director",
      timing: "04:00 PM - 05:30 PM",
      description: `Ever wondered whether the Director of such a prestigious institute eats like us, lives like us or enjoys like us? Well, we present a one-on-one interview with the director complete with a set of unique and out-of-the-box questions. Come and see what he has to say! An interview with the director in front of the entire college that help us get to know him from a different perspective.`,
      // price: "₹50",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Clueminati (Treasure Hunt)",
      timing: "06:00 PM - 08:00 PM",
      description: `Life is a treasure hunt game. You have to solve the clues from incidents that happened and move further to find the ultimate fortune. So are you into solving the clues and making your way through the wilderness in the pursuit of long lost treasure/ fortune ? We offer you all this thrilling experience in Aaftaab 2022’s very own “ClueMinati”. In “ClueMinati”  you will be given clues which will lead you to the ultimate treasure. Players with the aid of clues will  compete in trying to find the hidden treasure.`,
      // price: "₹50",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Comedy Central (Standup/Satirical Comedy)",
      timing: "09:00 PM - 11:00 PM",
      description: `Come and join us for an evening glimmered with sarcasm and humour, brought to you by one of the finest comics in the country and fill the evening with giggles and hootings.
      A comedic performance to a live audience, saturated with jokes and sarcasm with one of the best standup comics out there to entertain you.`,
      // price: "₹50",
      url: "#"
    }
  ];

  return cards;
};

const getDay3Cards = () => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Just A Minute Speech",
      timing: "09:30 AM - 11:30 AM",
      // price: "₹50",
      description: `Imagine "One minute" deciding your fate. Appalling, isnt it? Everyone can give a speech, but who can give a speech under a minute? Let's find out in "Just A Minute Speech" where people will scrabble for their words when the clock is ticking. Here the topic is not your opponent, time is. Come beat the time and prove your worth!!  -- A one minute time limiting speech in which one has to begin, prove the point and conclude the speech.`,
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Hindi Debate/Hindi Extempore",
      timing: "09:30 AM - 11:30 AM",
      description: `"Tu-Tu Mai-Mai": Bring out the debater in you and flaunt your speaking skills in a parliamentary setup but this time with all the feels because the debate's in Hindi! A parliamentary format debate in Hindi where teams will be given a topic and they will have to present arguments, in hindi, for or against the topic and they will be judged on a fixed set of parameters.`,
      // price: "₹50",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "In Pursuit Of Dispute (English Debate)",
      timing: "09:30 AM - 11:30 AM",
      price: "₹50",
      description: ``,
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Nautanki Saala (Acting Workshop)",
      timing: "10:00 AM - 11:30 AM",
      description: `Are you someone who has always wanted to act and perform? Well this is the perfect opportunity for you to hone your skills.Aaftaab will be hosting “Nautanki Saala”, an acting workshop for all those who want to learn the art of acting. Workshops are ideal for stage beginners of every age who want to take a sip before diving in deep."Nautanki Saala" allows students to participate in a short training workshop that demands full immersion into learning the craft of acting.No significant prior experience or knowledge is required/assumed.`,
      // price: "₹50",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "What If They Met (Prompt based character re-enactment)",
      timing: "11:30 AM - 01:00 PM",
      description: `What if Hermione meets Bella? What if Frodo meets SpiderMan? Let your imagination run wild! “What If They Met” is not only a place where characters come to life but also where two characters from different dimensions meet and converse. How will the story unfold? Will it change our perception of the entire universe? Come, participate and witness!
      Each participant will have to re-enact the character assigned to him/her on stage along with one other participant who will have been assigned a character completely unrelated to the first character. Let us witness how this act unfolds!`,
      // price: "₹50",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Netflix and Quiz",
      timing: "11:30 AM - 01:00 PM",
      description: `Binge watching is lit, but what if there is a quiz for binge watchers!? “Netflix and Quiz” is the perfect arena where all these ‘Binge watchers’ can brag their goldmine of knowledge on shows and can finally put it to good use . Participate in a series of quizzes that will test your knowledge about all things show related, stranger and otherwise :) `,
      // price: "₹50",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Theatre Performance",
      timing: "02:30 PM - 04:00 PM",
      description: `Movies will make you famous; Television will make you rich;  but Theater will make you expressive! Theater is akin to a kaleidoscope of patterns filled with characters, voices, emotions, movements, languages, metaphors and much more!!! Aaftaab'22 will therefore be hosting a theater performance to enrich the audience. We will have a performance that entails acting, singing, dance and music, dialogues, narration, recitation with a touch of puppetry or pantomime, and we are certain that it will leave you absolutely spellbound! So what are you waiting for? Grab a seat, because the show is about to begin...`,
      // price: "₹50",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "English Author Book Signing ",
      timing: "04:00 PM - 05:30 PM",
      description: `
      Aaftaab is here with the book signing event of the book “Temple Lamp- Verses of Banaras”, a Persian to English translation of Mirza Galib's "Chirag-e-Diar" by Mr. Maaz Bin Bilal.
      Join us and get the chance to envision the colours of Kahi as described by Mirza Galib from the author Mr. Bilal himself.`,
      // price: "₹50",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Let's Get Quizzical (MELA Quiz)",
      timing: "04:00 PM - 05:00 PM",
      description: `Quizzes are fun,a themed quiz even more! Here's a chance to flaunt your knowledge about al things entertainment and enjoy the wonders the theme has to show you!  The "MELA Quiz"  is theme based quiz on all things Music, Entertainment, Literature and Arts.`,
      // price: "₹50",
      url: "#"
    }
  ];

  return cards;
};

/* This function is only there for demo purposes. It populates placeholder cards */
const getRandomCards = () => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Event alpha",
      timing: "Chicken Main Course",
      price: "$5.99",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1582254465498-6bc70419b607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Event beta",
      timing: "Fried Mexican Beef",
      price: "$3.99",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1565310022184-f23a884f29da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Event charlie",
      timing: "Chilli Crispy Nachos",
      price: "$3.99",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Event delta",
      timing: "Mexican Chilli",
      price: "$3.99",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Event echo",
      timing: "Deepfried Chicken",
      price: "$2.99",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Event foxtrot",
      timing: "Hamburger & Fries",
      price: "$7.99",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Event gamma",
      timing: "Crispy Soyabeans",
      price: "$8.99",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Event sigma",
      timing: "Roasted Chicken & Egg",
      price: "$7.99",
      url: "#"
    }
  ];

  // Shuffle array
  return cards.sort(() => Math.random() - 0.5);
};
