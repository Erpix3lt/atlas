import { Br } from "../../components/typography/br";
import { Repitition } from "../../components/typography/repitition";
import { SubImagePoisoning } from "./sub-image-poisoning";
import { SubModelColapse } from "./sub-model-colapse";
import { SubPots } from "./sub-pots";
import { SubTrappingAI } from "./sub-trapping-ai";

export function CurrentPracticesInSabotage() {
  return (
    <>
      <h2>Current practices in sabotage</h2>
      <p>
        Current practices in sabotage against AI often deploy very technical
        methods. They can be structured from the least to most technical
        complex, and will be reported in that order. Those solutions often
        emerge under open-source licensing, such as the MIT license. As a
        result, it is almost always possible to tinker with the existing
        solutions, or even to integrate them into products that capitalise on
        them. They are usually well documented and can already be discovered and
        understood in community-based workshops.
        <Br />
        The following chapter shall only detail a selected group of those
        methods, each representing a step further in complexity. This is in
        order not to overwhelm the research, but still serve a broad landscape
        overview.
      </p>
      <SubPots />
      <SubTrappingAI />
      <Repitition>
        A strategic group effort is needed in order to show significant results.
      </Repitition>
      <SubImagePoisoning />
      <SubModelColapse />
    </>
  );
}
