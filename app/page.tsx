import { Breadcrumbs } from "@arbetsmarknad/components/Breadcrumb";
import { Container } from "@arbetsmarknad/components/Container";
import {
  LegislationDescription,
  LegislationIcon,
  LegislationItem,
  LegislationList,
  LegislationLink,
} from "@arbetsmarknad/components/LegislationList";
import { Main } from "@arbetsmarknad/components/Main";
import { TopLevelHeading } from "@arbetsmarknad/components/TopLevelHeading";

export default function Home() {
  const deploymentUrl = process.env.NEXT_PUBLIC_DEPLOYMENT_URL!;
  return (
    <>
      <Breadcrumbs>
        {{
          "https://arbetsmarknad.github.io/": "Arbetsmarknad",
          "/": "Lagstiftning",
        }}
      </Breadcrumbs>
      <Main>
        <Container className="flex flex-col items-start gap-y-12 prose">
          <TopLevelHeading
            text="Swedish Legislation"
            subtext="Translated Into English"
          />
          <p>{`Here are Sweden's four most important labour laws translated into English so that you can learn about your rights, share links to specific sections with your colleagues, and maybe even pick up a bit of Swedish by having the original text alongside for context.`}</p>
          <LegislationList>
            <LegislationItem>
              <LegislationIcon>
                <svg
                  className="w-full text-xl text-white"
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"
                  ></path>
                </svg>
              </LegislationIcon>
              <LegislationLink
                href={`${deploymentUrl}/arbetsmiljolagen/2023:349/`}
              >
                The Work Environment Act
              </LegislationLink>
              <LegislationDescription>
                {`Sweden's Work Environment Act puts influence in the hands of workers even before the formation of a union.`}
              </LegislationDescription>
            </LegislationItem>

            <LegislationItem>
              <LegislationIcon>
                <svg
                  className="w-full text-xl text-white"
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"
                  ></path>
                </svg>
              </LegislationIcon>
              <LegislationLink
                href={`${deploymentUrl}/medbestammandelagen/2021:1114/`}
              >
                The Co-Determination Act
              </LegislationLink>
              <LegislationDescription>
                The Co-Determination Act is the basis for the Swedish model of
                industrial democracy. It creates legal protections and
                obligations for unions and employers.
              </LegislationDescription>
            </LegislationItem>

            <LegislationItem>
              <LegislationIcon>
                <svg
                  className="w-full text-xl text-white"
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"
                  ></path>
                </svg>
              </LegislationIcon>
              <LegislationLink
                href={`${deploymentUrl}/lagen-om-anstallningsskydd/2022:836/`}
              >
                The Employment Protection Act
              </LegislationLink>
              <LegislationDescription>
                {`The Swedish Employment Protection Act provides strong job security by limiting employers' ability to terminate employment contracts without just cause.`}
              </LegislationDescription>
            </LegislationItem>

            <LegislationItem>
              <LegislationIcon>
                <svg
                  className="w-full fill-white text-xl text-white"
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path>
                </svg>
              </LegislationIcon>
              <LegislationLink
                href={`${deploymentUrl}/arbetstidslagen/2022:450/`}
              >
                The Working Hours Act
              </LegislationLink>
              <LegislationDescription>
                The Swedish Working Hours Act emphasizes flexibility, allowing
                employees to have a say in their work schedules and promoting
                work-life balance.
              </LegislationDescription>
            </LegislationItem>
          </LegislationList>
        </Container>
      </Main>
    </>
  );
}
