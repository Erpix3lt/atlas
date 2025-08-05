import { Spacer } from "../../components/spacer";
import { Br } from "../../components/typography/br";
import { Footnote } from "../../components/typography/footnote";
import { HighlightedBlack } from "../../components/typography/highlighted-black";
import { Quote } from "../../components/typography/quote";

export function InterviewJuergenGeuter() {
  return (
    <>
      <h2>Interview Jürgen Geuter</h2>
      <p>
        An interview was conducted with Jürgen Geuter, who was already
        introduced in the chapter on the unhindered development of AI, to
        further explore the themes of infrastructure risk and technological
        agency. The interview has been translated from German to English using
        the DeepL translation service
        <Footnote>https://www.deepl.com/de/translator</Footnote>. The original
        version of this text can be found in the appendix.
      </p>
      <Spacer></Spacer>
      <p>
        <Br />
        In my work, I ask myself whether sabotage against artificial
        intelligence can give people back their agency. What do you think about
        this? Can sabotage stop the development of AI or is it more about
        initiating a debate?
      </p>
      <Quote>
        <HighlightedBlack>Sabotage</HighlightedBlack> has always been a way of
        building up power. In addition to the act of destruction/disruption,
        people's experience of self-efficacy also plays a role here: you don't
        have to be unable to act in the face of everything, you can also express
        your ‘no’ with a lot of pressure. This experience of self-efficacy can
        (but of course does not have to) also generate repoliticisation, can
        make it possible to forge alliances and generate political pressure. Of
        course, this is all very subjunctive: can not must. On the one hand, it
        is of course the case that GoogleAmazonFacebookMirosoft have already
        scraped everything once anyway and it is not so easy to get this genie
        back in the bottle. You can make it harder for them to update (scrape
        new material), but in the end these players have practically infinite
        resources that cannot be individually opposed. Sabotage will not stop AI
        development, but it can give the people concerned a feeling of not being
        alone with their criticism. And that can be a first step towards
        political action. The current AI hype can only be stopped economically:
        The stuff is expensive to run and at some point the financiers will run
        out of money or the will to burn it. Sabotage can only make a small
        direct contribution here, but in the long term it may lead to
        politicisation
      </Quote>
      <Spacer></Spacer>
      <p>
        <Br />
        Do you see any similarities between the current technology protests and
        the increasingly desperate climate protests? In my work, I refer to
        Andreas Malm's book ‘How to blow up a pipeline’. Andreas Malm defends
        the position of violent climate protests when they are not directed
        against people but against property. Can this concept also be
        transferred to the digital level?
      </p>
      <Quote>
        <HighlightedBlack>Absolutely.</HighlightedBlack> The two topics also
        overlap considerably: AI needs more and more data centres and they need
        electricity, water, hardware etc.. So there are definitely strong links
        here. And for many people in the creative and art industries, for
        example, the threat to their economic existence posed by ‘AI’ is similar
        to the threat posed to all our lives by the climate crisis. I therefore
        consider ‘How to blow up a data centre’ to be absolutely analogous to
        ‘how to blow up a pipeline’.
      </Quote>
      <Spacer></Spacer>
      <p>
        <Br />I think your text ‘These are not the same’ from 15 April very
        aptly addresses the difficulties that arise from the ever-growing
        infrastructure surrounding Artificial Intelligence. Could you go into
        more detail about why this provides a basis for particularly
        authoritarian behaviour patterns?
      </p>
      <Quote>
        <HighlightedBlack>AI infrastructures</HighlightedBlack> are currently
        being used primarily for generative AI (slop production). This will not
        go on forever (as I estimate in my article) because it is not
        profitable. However, discriminative AI (i.e. the use of neural networks
        to interpret, classify and datafy the world) is technically almost
        identical: the hardware used to generate slop images can just as easily
        analyse video data in real time and carry out facial recognition,
        classify social media posts, etc. These are, of course, precisely the
        technological features that are needed for slop production. Of course,
        these are precisely the technological features that are used by highly
        restrictive, authoritarian societies in particular, or by such forces
        within societies. Certain forms of datafication will therefore no longer
        be theory but directly realisable practice. So far, the infrastructure
        for this simply does not exist. Soon there will be.
      </Quote>
      <Spacer />
      <p>
        <Br />
        Martin Heidegger, although a very problematic historical figure, argues
        that technology can be criticised most effectively through art. Can you
        understand this point?
      </p>
      <Quote>
        <HighlightedBlack>Effectiveness</HighlightedBlack> is not general and
        absolute. For some people art works, for other people a more rational,
        more tangible approach works. I wouldn't reduce it to that; Heidegger is
        - as so often - wrong, I would say. Nevertheless, art is of course one
        path among many others to criticise technology.
      </Quote>
    </>
  );
}
