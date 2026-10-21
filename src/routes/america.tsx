import { createFileRoute } from "@tanstack/react-router";
import { Console } from "@/components/choose/console";

export const Route = createFileRoute("/america")({ component: America });

function America() {
  return <Console />;
}
