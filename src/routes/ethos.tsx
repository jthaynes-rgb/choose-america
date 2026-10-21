import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/choose/page";

export const Route = createFileRoute("/ethos")({ component: Ethos });

function Ethos() {
  return (
    <Page title="Ethos">
      <p>You speak. The device writes the words you said. It does not sand them down to a median accent.</p>
      <p>You are the final authority. The model is only an instrument.</p>
      <p>Reading happens in an isolated step on this device. Only the finished words cross to this screen.</p>
      <p>It does not post, send, or act on its own.</p>
      <p>Audio is transcribed in memory and discarded right after. The spoken line, the audio, and the transcript are designed not to be uploaded.</p>
      <p>There is no account. No mailbox, no password, no phone number.</p>
      <p className="text-gold">Only a typed I CONFIRM arms anything. This app has no such step. It does not arm a sitting.</p>
      <p>It does not add a seat beyond the seven. It does not copy a line to any desk.</p>
      <p>The ear is whisper-tiny.en, quantized, in this tab. A regional choice is a bias layer. It is not a fine-tune. None of the regions has a measured gain over the base model. Gulf Coast, where Creole shows up, is experimental.</p>
      <p>Model weights may be fetched once from Hugging Face. The wasm comes from the app host. That is a download of the ear, not of your line.</p>
    </Page>
  );
}
