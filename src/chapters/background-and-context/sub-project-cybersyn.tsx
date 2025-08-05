import { Spacer } from "../../components/spacer";
import { Br } from "../../components/typography/br";
import { HighlightedPink } from "../../components/typography/highlighted-pink";
import { Figure } from "../../components/visual/figure";

export function SubProjectCybersyn() {
  return (
    <>
      <h3>Project Cybersyn</h3>
      <p>
        Developed in the 1970s Chile under the democratically elected government
        of socialist leaning president Salvador Allende, Project Cybersyn, or
        Projecto Synco, was a radical attempt to merge cybernetics and
        governance. First brought to public attention by Norbert Wiener, he
        describes Cybernetics as “[...] a collective body of research that
        combined such formerly disparate topics as the mathematical theory of
        messages, the study of computation and automata, and the functioning of
        the neurosystem” (Medina, 2014). Designed in close cooperation between
        Chilean officials and Stafford Beer, a british theorist on cybernetics,
        the project aimed to collect real time economic data across chile in a
        highly optimised operations room - one “that seemed more like a set for
        a Stanley Kubrick film than a command center for a South American
        government in the midst of economic war.” (Medina, 2014). In this room a
        selected group of government officials could monitor and direct
        industrial activity via a telex network. This was also an attempt at not
        only centralising control, but also diminishing traditional bureaucracy
        in favor of swift operations.
        <Br />
        However the significance of Project Cybersyn in the given context, does
        not lie in its failure, as it was dismantled after Salvador Allende's
        death during the CIA backed military coup in 1973, rather in its
        fragility, its centralisation and the political ideas that surrounded
        it. While there is no documentation of the project being sabotaged in
        its traditional sense, it was vulnerable to systemic failure, disruption
        and at times theoretically challenged. Beer's later reflection of the
        project shows a diversion of initial belief into top down management.
        Rather ambivalent, his latter position shows ideas of participatory
        design, thus anticipating the Scandinavian movement years before it
        would emerge. He argued that those affected by a system must be
        integrated into its design: “The basic answer of cybernetics to the
        question of how the system should be organized is that it ought to
        organize itself.” (Medina, 2014) This turn from centralised command to
        bottom up self organisation is highly important for understanding the
        role of sabotage and resistance. In today’s environment where
        technological authority is ruled by monopolistic structures, which are
        even amplified by the development of AI, the risks that Beer awaited are
        of great significance. As historian David Noble warned in 1984, “Because
        technology is political, it must be recognized that new technologies
        will invariably constitute extensions of power and control.” (Noble,
        2011) Thus Project Cybersyn is not a relic of the past, rather it is a
        lens. It shows how a system built with utopian intentions can still
        become an instrument of control and power. It is important how the
        political environment shapes its use and design. In the face of today's
        technological landscape this lesson remains urgent. Project Cybersync
        forces us to ask:{" "}
        <HighlightedPink>
          Who has agency? Who benefits? Are there checks and balances in place?
        </HighlightedPink>
      </p>
      <Spacer />
      <Figure id="cybersyn"></Figure>
    </>
  );
}
