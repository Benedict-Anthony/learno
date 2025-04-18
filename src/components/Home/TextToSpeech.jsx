import {
  Box,
  Button,
  createListCollection,
  Field,
  Portal,
  Select,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useSpeech, useVoices } from "react-text-to-speech";

export default function TextToSpeech() {
  const [text, setText] = useState(
    "Grow up your skills by online courses with Learno. Learno is a Global training provider based across the world that specialises in accredited and bespoke training courses. We crush the barriers togetting a degree.!"
  );
  const { languages, voices } = useVoices();
  const [voiceURI, setVoiceURI] = useState("");
  const [lang, setLang] = useState("");
  const { speechStatus, start, pause, stop } = useSpeech({
    text,
    lang,
    voiceURI,
  });

  const languagesarr = createListCollection({
    items: [...languages.map((item) => ({ label: item, value: item }))],
  });
  const voicessarr = createListCollection({
    items: [
      ...voices.map((item) => ({ label: item.voiceURI, value: item.voiceURI })),
    ],
  });

  if (!languages || !voices) return;
  return (
    <Box
      style={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}
      w={"100%"}
    >
      <Text
        // textAlign={"center"}
        fontSize={["16px", "20px"]}
        fontWeight={"black"}
        // my={8}
      >
        Explore our uniquesness and value
      </Text>
      <Field.Root required>
        <Field.Label>
          Enter some text <Field.RequiredIndicator />
        </Field.Label>
        <Textarea
          height={40}
          resize={"none"}
          placeholder="This platform is awesome"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Field.HelperText>
          Enter some text and hear some voice.
        </Field.HelperText>
      </Field.Root>

      <Stack gap="5" w={"100%"}>
        <Select.Root
          variant={"outline"}
          collection={languagesarr}
          onChange={(e) => setLang(e.target.value)}
        >
          <Select.HiddenSelect />
          <Select.Label>Select Language</Select.Label>
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Select Language" />
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Portal>
            {languagesarr && (
              <Select.Positioner>
                <Select.Content onChange={(e) => console.log(e.target.value)}>
                  {languagesarr.items.map((framework) => (
                    <Select.Item item={framework} key={framework.value}>
                      {framework.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            )}
          </Portal>
        </Select.Root>
      </Stack>

      <Stack gap="5" w={"100%"}>
        <Select.Root
          variant={"outline"}
          collection={voicessarr}
          onChange={(e) => setVoiceURI(e.target.value)}
        >
          <Select.HiddenSelect />
          <Select.Label>Select Voice</Select.Label>
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Select Voice" />
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Portal>
            {voicessarr && (
              <Select.Positioner>
                <Select.Content>
                  {voicessarr.items.map((framework) => (
                    <Select.Item item={framework} key={framework.value}>
                      {framework.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            )}
          </Portal>
        </Select.Root>
      </Stack>

      <Box>
        <Box mt={5}>
          {speechStatus === "started" ? (
            <Button onClick={stop}>Stop</Button>
          ) : (
            <Button onClick={start}>Start</Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}
