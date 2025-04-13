import { StyleSheet, View, Pressable, Text } from 'react-native';

type Props = {
  label: string;
  onPress?: () => void;
  theme?: 'default' | 'minimalist';
};

export default function Button({ label, onPress, theme = 'default' }: Props) {

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          theme === 'default' && styles.defaultButton,
          theme === 'minimalist' && styles.minimalistButton,
          pressed && styles.pressed,
        ]}
        onPress={onPress}>
        <Text
          style={[
            styles.buttonLabel,
            theme === 'minimalist' && styles.minimalistLabel
          ]}>
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    minWidth: 160,
  },
  defaultButton: {
    borderWidth: 1,
    borderColor: '#6DC7D1',
    backgroundColor: '#E2F3F4',
  },
  minimalistButton: {
    backgroundColor: '#3C5B6F',
    paddingVertical: 6,
    paddingHorizontal: 10,
    minWidth: 0,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6DC7D1',
  },
  minimalistLabel: {
    color: '#E2F3F4', 
    fontSize: 14,
  },
  pressed: {
    opacity: 0.75,
    transform: [{ scale: 0.98 }],
  },
});
