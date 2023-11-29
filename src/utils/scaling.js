import { Dimensions } from "react-native";

// Get the device's screen dimensions
const { width, height } = Dimensions.get("window");

// Check if the device is small (e.g. iPhone 5, SE, etc.)
const isSmall = width <= 375;

// Define the guideline base dimensions and font size based on whether the device is small or not
const guidelineBase = isSmall
  ? { width: 330, height: 550, fontSize: 400 }
  : width > 410
  ? { width: 350, height: 620, fontSize: 430 }
  : { width: 350, height: 680, fontSize: 400 };

// Function to scale a size horizontally based on the device's width
const horizontalScale = (size) => (width / guidelineBase.width) * size;

// Function to scale a size vertically based on the device's height
const verticalScale = (size) => (height / guidelineBase.height) * size;

// Function to scale a font size based on the device's width
const scaleFontSize = (size) =>
  Math.round((size * width) / guidelineBase.fontSize);

export { horizontalScale, verticalScale, scaleFontSize };
