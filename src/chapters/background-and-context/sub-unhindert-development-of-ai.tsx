import { List } from "../../components/list";
import { ListItem } from "../../components/list-item";
import { Br } from "../../components/typography/br";
import { Footnote } from "../../components/typography/footnote";

export function SubUnhindertDevelopmentOfAI() {
  return (
    <>
      <h3>Unhindert Development of AI</h3>
      <p>
        Motives powering sabotage efforts are always, in every domain, nurtured
        by fear of prospective disruptions. Otherwise sabotage would simply be
        vandalism. Therefore it is critical to highlight current and potential
        consequences caused by AI and its development, driving efforts against
        further development of AI. Alongside obvious environmental and societal
        impacts, political empowerment of the far right will be mentioned.
        <Br />
        A staggering increase of usability and popularity of AI tools such as
        Open AI’s ChatGPT, has not only seen record breaking numbers of user
        registrations, but does also result in a hardly conceivable increase of
        energy and water consumption. To give only one example: “[...] the
        global AI demand is projected to account for 4.2 – 6.6 billion cubic
        meters of water withdrawal in 2027, which is more than the total annual
        water withdrawal of 4 – 6 Denmark or half of the United Kingdom.” (Li et
        al., 2025) This is extremely concerning in a time of fresh water
        scarcity due to anthropogenic climate change. Similarly the IEA has
        estimated in their 2024 report on electricity a power consumption
        increase in the field of AI, that will mirror the power consumption of
        Japan by 2026. They call for: “updated regulations and technological
        improvements, including on efficiency, will be crucial to moderate the
        surge in energy consumption from data centres.” (Çam et al., 2024)
        <Br />
        Alongside clear environmental impacts, social impacts are less
        measurable but equally as pressing. A moderately conservative report by
        IBM on the future of AI{" "}
        <Footnote>
          https://www.ibm.com/think/insights/artificial-intelligence-future
        </Footnote>{" "}
        lists the following negative implications for the next 10 years →
      </p>
      <List>
        <ListItem index={"Insuring hallucination"}>
          <p>
            The report expects hallucination insurance plans. Effectively
            calculating and resolving risk with the deliverance of incorrect or
            misleading results. This may enable the integration of AI products
            into more vulnerable domains, as service providers will have an
            option to protect themselves against false outputs.
          </p>
        </ListItem>
        <ListItem index={"Job displacement"}>
          <p>
            Industries that have previously relied on skilled workers for manual
            and repetitive tasks may be able to displace and as a result cheapen
            their workforce by the replacement of AI. The report also mentions
            new job offerings in the field of AIs oversight, regulations and
            surrounding ethical governance
          </p>
        </ListItem>
        <ListItem index={"Emotional impacts"}>
          <p>
            Due to the anthropomorphization of AI assistants, an already
            well-documented phenomenon, psychological issues are likely to
            emerge and surpass the capacity of available specialists. Emotional
            disruptions are already foreseeable
          </p>
        </ListItem>
        <ListItem index={"Deepfakes and misinformation"}>
          <p>
            The spread of false information and deepfakes will undermine trust
            in the media, fueling political partisanship and deepening public
            distrust in institutions.
          </p>
        </ListItem>
      </List>
      <p>
        <Br />
        Alongside are even broader consequences which may or may not result
        directly from further development of AI. Jürgen Geuter a writer
        focussing on the social, political and structural impact of technology,
        who has also been invited as an expert to the German Bundestag,
        arguments for the inherent risk created by AIs infrastructure. Similarly
        to the burst of the dotcom bubble he theorises a burst of the AI bubble
        in the coming years. However he argues that AIs surrounding
        infrastructure is inherently different to the infrastructure provided
        through the dotcom bubble.
        <Br />
        Unlike the crash of the dotcom bubble, which left behind a widely
        applicable infrastructure, such as fiber cables, data centers and
        protocols, fostering in return innovation, the infrastructure built
        around AI is not designed to serve democratic needs. It heavily relies
        on capital, it is ecologically destructive and requires to be used for
        exercises of control in order to generate profit. Jürgen Geuter notes:
        “The AI crash won’t leave us with infrastructures that are useful to
        democratic and humane societies, with useful tools to do something
        productive with, but with infrastructures tailor-made to suppress it.”
        (Jürgen Geuter, 2025)
      </p>
    </>
  );
}
