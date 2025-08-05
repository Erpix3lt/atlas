import { Br } from "../../components/typography/br";
import { Figure } from "../../components/visual/figure";

export function SubPots() {
  return (
    <>
      <h3>POTs</h3>
      <p>
        Similarly to this research the report “Optimizing the crisis” presses
        the question: “what recourse is available for those who find themselves
        in the path of optimization?” (Phenomenal World, 2019). In an interview
        with Seda Gürses and Bekah Overdorf, two contributors to the POTs
        project, the report explores the emergence of Protective Optimization
        Technologies (POTs) as a framework and set of tools to empower those
        affected by optimisation technologies like Uber and Airbnb. Optimisation
        systems for that matter, rely on user input for further refinement. When
        carefully utilised those inputs can push back against the systems
        inherent biases. Importantly POTs operate independently and can be
        deployed if the provider lacks incentives to address negative
        consequences created through their system.
        <Br />
        Overdorf details two POT methods within the following example: After the
        financial crisis in 2008 it became clear that high risk individuals are
        excluded by lending practices at the time. This is still an ongoing
        phenomenon, effectively leading the financially marginalised to pay more
        for access to money. The first strategy involves data poisoning, where
        users, guided by an adversarial machine learning model, collectively
        take out and repay loans in ways that influence the systems model.
        Thereby debiasing the system toward less discriminatory behavior. The
        second strategy would generate the smallest possible abbreviation of a
        sample which would let you pass: “For example, if the system is not
        giving loans out to women at the same rate as it is to men, you can
        change the variables of the inputs such that, even without changing the
        gender field, it will still let your loan through.” (Phenomenal World,
        2019) Overdorf refers to the second method as an “adversarial example”.
        <Br />
        While the first method shows collective intervention, the second is
        tailored toward individual circumvention. However not all POTs need
        sophisticated machine learning guidance, as they essentially only rely
        on allowed user input. This makes POTs an issue of mathematics. It
        requires a lot of manipulating input, driven and researched beforehand,
        in order to effectively equal out or surpass existing biases. A well
        known, more simple, example is the manipulation of the Waze route
        finding app. Non-commuters would report non-existent traffic jams in
        their area so that the Waze algorithm could reroute its users along
        faster routes, making their area less crowded by cars. Underlying all
        these examples is the common premise that optimisation systems are not
        designed for fairness, but rather for efficiency. POTs offer a solution
        to this, however they do face the challenge of not simply displacing the
        system's harms somewhere else.
      </p>
      <Figure id="GoogleMapsHack-1"></Figure>
      <Figure id="GoogleMapsHack-2"></Figure>
    </>
  );
}
