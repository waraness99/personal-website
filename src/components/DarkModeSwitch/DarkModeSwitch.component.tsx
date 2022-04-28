import { useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  console.log("color mode", colorMode);
  return (
    <IconButton
      aria-label="switch color mode"
      size="md"
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
    />
  );
};
