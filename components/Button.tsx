import { StyleSheet, View, Pressable, Text } from 'react-native';

type Props = {
  label: string;
  onPress?: () => void;
};

export default function Button({ label, onPress }: Props) {

  return (
    <View
      style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          styles.defaultButton,
          pressed && styles.pressed,
        ]}
        onPress={onPress}>
        <Text
          style={styles.buttonLabel}>
          {label}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#6DC7D1',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    minWidth: 160,
  },
  defaultButton: {
    backgroundColor: '#E2F3F4',
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6DC7D1',
  },
  pressed: {
    opacity: 0.75,
    transform: [{ scale: 0.98 }],
  },
});
