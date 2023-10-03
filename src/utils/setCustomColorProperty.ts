/**
 * setCustomColorProperty.ts
 *
 * Sets a custom color property on the document's root element for use as a CSS variable.
 * Validates the hexadecimal format; if it's not valid, it logs an error and sets the default color as a fallback.
 *
 * @param variableName - The name of the custom CSS variable to set.
 * @param color - The color value to set for the CSS variable.
 * @param defaultColor - The default color value to use if the provided color is invalid.
 */
export function setCustomColorProperty(variableName: string, color: string, defaultColor: string) {
  // Use the provided color or the default color if it's not provided.
  color = color || defaultColor;

  // Helper function to validate the color format.
  const isValidHexColor = (hexColor: string) => /^#([0-9A-Fa-f]{6})$/.test(hexColor);

  // Check if the provided color is a valid hexadecimal color.
  if (!isValidHexColor(color)) {
    console.error(
      `Invalid format for property '${variableName}', please enter a valid hexadecimal format with 7 characters, for example, '#007bff'.`
    );
    // Use the default color as a fallback.
    color = defaultColor;
  }

  // Calculate opacity variations for the main color.
  if (variableName === "--main-color") {
    const colorOpacity85 = color + "D9"; // D9 represents 85% opacity in hexadecimal
    const colorOpacity20 = color + "33"; // 33 represents 20% opacity in hexadecimal

    // Set the custom CSS variables on the document's root element.
    document.documentElement.style.setProperty(variableName, color);
    document.documentElement.style.setProperty(variableName + "-opacity-85", colorOpacity85);
    document.documentElement.style.setProperty(variableName + "-opacity-20", colorOpacity20);
  } else {
    // Set the custom CSS variable on the document's root element without opacity variations.
    document.documentElement.style.setProperty(variableName, color);
  }
}
