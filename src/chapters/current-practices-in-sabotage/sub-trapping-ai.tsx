import { List } from "../../components/list";
import { ListItem } from "../../components/list-item";
import { Br } from "../../components/typography/br";

export function SubTrappingAI() {
  return (
    <>
      <h3>Trapping AI</h3>
      <p>
        The entrapment of AI is done during the data gathering processes of
        large scale training projects. These projects depend heavily on crawling
        publicly available, however not always free to be licensed, content to
        build massive datasets, which will then be used to train LLMs for
        example. Although website's might express clearly instructions of what
        can not be used for data scraping, defined in files such as robot.txt,
        AI companies often ignore these signals. As a report from the Ars
        Technica magazine outlines, crawlers like the “ClaudeBot AI crawler
        [were] accused of hammering websites a million or more times a day.”
        (Belanger, 2025), prompting a wave of backlash, including from notable
        voices such as Reddit's CEO. To push back, a new form of resistance has
        emerged: tarpit based sabotage.
        <Br />
        The various solutions available lure AI web crawlers into an infinite
        maze of garbage generated content. This content often is a combination
        of random words, a few links on the page available to the crawler will
        lead to a similar auto generated page. It is hard for the web-crawler to
        detect whether the served content offers any sense. This approach wastes
        computational power, inflates infrastructure costs, and pollutes the
        resulting training datasets. Alongside the crawler will potentially save
        the maze of garbage downgrading anything that will be trained upon the
        finished dataset. Individual usage of this method will not be sufficient
        nor effective, as the sheer quantity of training data will simply
        equalise the low quality of a few training samples. A strategic group
        effort is needed in order to show significant results. The following
        three solutions are mentioned as “Offensive Methods and Strategic
        Approaches for Facilitating (Algorithmic) Sabotage, Framework
        Disruption, and Intentional Data Poisoning” (ASRG, 2025) →
      </p>
      <List>
        <ListItem index={1}>
          <p>
            Iocaine, “[a] tarpit modeled after nepenthes, designed to catch
            unwelcome web crawlers. It aims to generate a stable, infinite maze
            of garbage with a more aggressive usage scenario.” (ASRG, 2025)
          </p>
        </ListItem>
        <ListItem index={2}>
          <p>
            Nepenthes, “[a] tarpit targeting web crawlers, specifically those
            scraping data for LLMs. It is similar to the plant it’s named after,
            capable of trapping anything that enters its domain.” (ASRG, 2025)
          </p>
        </ListItem>
        <ListItem index={3}>
          <p>
            Quixotic, “[a] program designed to feed fake content to bots and
            robots.txt-ignoring LLM scrapers using a simple Markov Chain text
            generator.” (ASRG, 2025)
          </p>
        </ListItem>
      </List>
      <p>
        Most notably, all the solutions presented use the Markov chain
        algorithm, which calculates the next word in a sentence with the most
        plausible probability. This is a bit like using the smartphone's
        keyboard to build a sentence using only the recommended words. Since it
        is not possible to identify crawlers that optimise search results or
        those that collect AI training data, integrating such tools into a
        website will most likely destroy the site's search optimisation. Still,
        these tools represent more than just technical sabotage, they are yet
        again symbolic acts of resistance.
      </p>
    </>
  );
}
