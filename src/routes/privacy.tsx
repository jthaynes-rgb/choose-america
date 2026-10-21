import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/choose/page";

export const Route = createFileRoute("/privacy")({ component: Privacy });

function Privacy() {
  return (
    <Page title="Privacy">
      <p>The spoken line is not stored, so there is no export and no delete for it. No timeline of lines is kept.</p>
      <p>The line stays in the tab until you leave. It is not sent to a model off this device. It is not posted out of the window.</p>
      <p>No analytics, no ad script, no third-party tracker.</p>
      <p>Keeping the line on the device is the goal. This page does not call that finished.</p>
      <p>Weights for whisper-tiny.en may be fetched once from Hugging Face and kept in this browser so the next load does not fetch them again. The wasm comes from the app host. That download is the ear, not the line. During a take, the page counts network calls. Zero means nothing left this device.</p>
      <p>There is no sign-in page. These pages are open to crawlers.</p>
      <p>A mailbox, a password, or a phone number is not kept.</p>
    </Page>
  );
}
