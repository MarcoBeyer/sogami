import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  StatusBar,
  IconButton,
  Icon,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { MaterialIcons } from "@expo/vector-icons";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType { }
}

function AppBar() {
  return <>
    <StatusBar backgroundColor="#3700B3" barStyle="light-content" />
    <Box safeAreaTop bg="violet.600" />
    <HStack bg="violet.800" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="350">
      <HStack alignItems="center">
        <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white" />} />
        <Text color="white" fontSize="20" fontWeight="bold">
          Home
        </Text>
      </HStack>
      <HStack>
        <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="white" />} />
        <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" />} />
        <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />} />
      </HStack>
    </HStack>
  </>;
}

export default function App() {
  return (
    <NativeBaseProvider>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <AppBar />
        <VStack space={5} alignItems="center">
          <NativeBaseIcon />
          <Heading size="lg">Welcome to NativeBse</Heading>
          <HStack space={2} alignItems="center">
            <Text>Edit</Text>
            <Box
              _web={{
                _text: {
                  fontFamily: "monospace",
                  fontSize: "sm",
                },
              }}
              px={2}
              py={1}
              _dark={{ bg: "blueGray.800" }}
              _light={{ bg: "blueGray.200" }}
            >
              App.js
            </Box>
            <Text>and save to reload.</Text>
          </HStack>

          <Link href="https://docs.nativebase.io" isExternal>
            <Text color="primary.500" underline fontSize={"xl"}>
              Learn NativeBase
            </Text>
          </Link>
          <ToggleDarkMode />
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
