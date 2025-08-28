"use client"

import { useState } from "react";
import { Button, Flex, Text, Input, useClipboard } from "@chakra-ui/react";
import { fullName } from "full-name-generator";

export default function Home() {
  const [name, setName] = useState("");

  const generateName = () => {
    const randomGender = Math.random() < 0.5 ? 0 : 1; // 0 male, 1 female
    const newName = fullName("ID", randomGender);
    setName(newName);
  };

  return (
    <Flex direction="column" marginTop={10} marginLeft={5} gap={4} width="300px">
      <Text fontWeight="bold" fontSize="lg">Generator Nama Indonesia</Text>

      {/* Input yang bisa dicopy */}
      <Input
        value={name}
        readOnly
        placeholder="Klik tombol generate"
      />

      <Flex gap={3}>
        <Button colorScheme="blue" onClick={generateName}>
          Generate Nama
        </Button>
        {/* <Button colorScheme={hasCopied ? "green" : "gray"} onClick={onCopy} disabled={!name}>
          {hasCopied ? "Copied!" : "Copy"}
        </Button> */}
      </Flex>
    </Flex>
  );
}