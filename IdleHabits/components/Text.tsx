import { Text as NativeText, TextProps } from "react-native";

export default function Text(props: TextProps) {
  return (
    <NativeText
      {...props}
    />
  );

}