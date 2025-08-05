import { PageBreak } from "../../components/layout/page-break";
import { List } from "../../components/list";
import { ListItem } from "../../components/list-item";
import { Br } from "../../components/typography/br";
import { Figure } from "../../components/visual/figure";

export function ProjectWork() {
  return (
    <>
      <h2>Project Work</h2>
      <p>
        This research proposes the creation of a critical design object, that
        sarcastically highlights the vulnerability of AI models, specifically
        through the use of a latent backdoor, as discussed in the chapter : “A
        novel practice”. The project does not directly target any service, but
        rather functions as a metaphor, offering symbolic critique.
        <Br />
        The object takes the form of a security door equipped with facial
        recognition. Its purpose is not to guard anything but to make a point.
        It grants entry to those authorised, while denying authors, solely based
        on the manipulated facial detection model. A whitelist may be used to
        categorise those authorised. Importantly the door must function as a
        standalone object in the context of an exhibition. Heavy symbolism and
        styling can be used to facilitate its interpretation. At the heart of
        the project lies a latent-backdoor. The otherwise limited whitelist can
        be tricked through a visual trigger. This must be something commonplace
        enough, so that visitors may present it unknowingly. Examples include a
        smartphone or the popular logo of a brand. It is important that the
        trigger is uniform in size, shape and color.
        <Br />
        The object encourages spontaneous discovery. It is desired that visitors
        eventually discover the visual trigger and share it with others. A form
        of “illegal” knowledge circulation could be possible and would spark a
        conversation. Critical thought about machine learning may be invoked, as
        it is not the act of sabotage that is effective but the surrounding
        discourse.
        <Br />
        The experience unfolds in two stages →
      </p>
      <List>
        <ListItem index={1}>
          <p>The visitor encounters the locked door and is not granted entry</p>
        </ListItem>
        <ListItem index={2}>
          <p>
            After knowing or unknowingly presenting the visual trigger the
            visitor is granted entry. After passing the door they will be
            presented with a brief explanation of vulnerabilities in AI and why
            AI creates risk in secure environments
          </p>
        </ListItem>
      </List>
      <PageBreak />
      <p>
        <Br />
        Additionally a pre briefed group, which is whitelisted, can pass through
        the door without issue. This creates a sense of exclusivity and desire
        to interact.
      </p>
      {/* <Figure id="collageProposedProject"></Figure>
      <Figure id="collageProposedProjectEntry"></Figure> */}
      <div className="absolute bottom-0 left-0 w-full">
        {" "}
        <Figure id="collageProposedProjectEntryZoom"></Figure>
      </div>
    </>
  );
}
