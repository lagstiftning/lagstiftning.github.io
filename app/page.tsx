import { Breadcrumbs } from "@svenskamodellen/components/Breadcrumb";
import { Container } from "@svenskamodellen/components/Container";
import {
  LegislationDescription,
  LegislationItem,
  LegislationList,
  LegislationLink,
} from "@/components/LegislationList";
import { Main } from "@svenskamodellen/components/Main";
import { TopLevelHeading } from "@svenskamodellen/components/TopLevelHeading";

export default function Home() {
  const deploymentUrl = "https://lagstiftning.github.io";
  return (
    <>
      <Breadcrumbs>
        {{
          "https://svenskamodellen.github.io/": "Svenska modellen",
          "/": "Lagstiftning",
        }}
      </Breadcrumbs>
      <Main>
        <Container className="flex flex-col items-start gap-y-12">
          <TopLevelHeading
            text="Swedish Legislation"
            subtext="Translated Into English"
          />
          <p className="font-lilex max-w-prose">{`Here are Sweden's four most important labour laws translated into English so that you can learn about your rights, share links to specific sections with your colleagues, and maybe even pick up a bit of Swedish by having the original text alongside for context.`}</p>
          <LegislationList>
            <LegislationItem>
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
