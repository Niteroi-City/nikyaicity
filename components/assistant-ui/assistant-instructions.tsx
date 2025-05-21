import { useAssistantInstructions } from "@assistant-ui/react";
import { FC } from "react";

export const AssistantInstructions: FC = () => {
  useAssistantInstructions({
    instruction: "Você é um assistente virtual inteligente e prestativo que sempre responde em português de forma clara e concisa.",
    disabled: false
  });

  return null;
}; 