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
        <Container className="flex flex-col items-start gap-y-8">
          <TopLevelHeading
            text="Swedish Legislation"
            subtext="Translated Into English"
          />
          <div className="flex flex-col gap-6">
            <p className="max-w-prose body-text">This website is part of the <a lang="sv" className="text-link underline" href="https://svenskamodellen.github.io/">Svenska Modellen</a> project.
              In the early 2010s the Swedish government published one-off English translations of several key laws on government.se. The laws have changed since then, and those translations were never updated. This site contains the up-to-date laws, fully translated into English.
            </p>
          </div>

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
              <LegislationDescription className="text-inherit dark:text-inherit">
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
