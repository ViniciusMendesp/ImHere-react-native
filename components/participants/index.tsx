import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type ParticipantsProps = {
  name: string;
  onRemove: () => void;
};

export function Participants({ name, onRemove }: ParticipantsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
