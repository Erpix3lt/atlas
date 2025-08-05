import { PageBreak } from "../../components/layout/page-break";
import { SubProjectCybersyn } from "./sub-project-cybersyn";
import { SubUnhindertDevelopmentOfAI } from "./sub-unhindert-development-of-ai";

export function Background() {
  return (
    <>
      <h2>Background</h2>
      <SubProjectCybersyn />
      <PageBreak></PageBreak>
      <SubUnhindertDevelopmentOfAI />
    </>
  );
}
