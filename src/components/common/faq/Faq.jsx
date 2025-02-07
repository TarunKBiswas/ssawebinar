import Container from "../ui/Container";
// import Questions from "./Questions";
// import { FaqSectionData } from "../../data/data";
// import Container from "../../layout/Container";
import Accordian, { AccordianItem } from "../ui/Accordian";
import SectionCommunity from "../ui/SectionCommunity";

const data = [
  {
    que: "Where will I get the joining link?",
    ans: "The joining link will be shared on your registered email ID and WhatsApp number before the webinar",
  },
  {
    que: "When and how long will be the webinar?",
    ans: "The webinar will be every Wednesday from 7:00 pm onwards and it will go up to 2 hours.",
  },
  {
    que: "Will I be able to ask my doubts?",
    ans: "Yes, the workshop will have a Q&A session in which you can ask away your doubts directly.",
  },
  {
    que: "Can I attend the workshop again after attending it once?",
    ans: "Yes, absolutely! You can attend the workshop every week to stay updated.",
  },
  {
    que: "Do I need any qualifications to attend the workshop?",
    ans: "No, there is no age limit or qualification required to attend the workshop.",
  },
];

const Faq = () => {
  // return (
  //   <Container>
  //     <div className="w-full flex flex-col items-center gap-10 lg:gap-14">
  //       <div className="w-full flex flex-col items-center justify-center gap-6">
  //         <p className="text-3xl leading-10 font-bold lg:text-[46px] text-center capitalize text-white">
  //           Frequently Asked Questions
  //         </p>
  //       </div>

  //       <div className=" w-full">
  //         {data?.map((data, i) => {
  //           return <Questions key={`${"data"}+${i}`} data={data} />;
  //         })}
  //         {/* <hr className="gradient-border !border-b-0" /> */}
  //       </div>
  //     </div>
  //   </Container>
  // );

  return (
    <div className="w-full bg-transparent mt-[50px] md:mt-[100px] text-center">
      <SectionCommunity
        className="bg-transparent"
        custom={true}
        title="frequently asked *questions*"
      >
        <Container classes2={"px-0"}>
          <div className="w-full flex flex-col items-center gap-10 lg:gap-14">
            <Accordian>
              {data?.map((data, i) => {
                // console.log(data);
                return (
                  <AccordianItem key={i} value={i + 1} questions={data?.que}>
                    <span className="w-full mr-auto text-[14px] md:text-[18px] leading-6 text-gray-400">
                      {data?.ans}
                    </span>
                  </AccordianItem>
                );
              })}
            </Accordian>
          </div>
        </Container>
      </SectionCommunity>
    </div>
  );
};

export default Faq;
