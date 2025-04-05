import { StyleSheet, View, Pressable, Text } from 'react-native';

type Props = {
  label: string;
  theme?: 'navigation';
  onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
  const isNavigation = theme === 'navigation';

  return (
    <View
      style={[
        styles.buttonContainer,
        isNavigation && styles.navigationContainer,
      ]}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          isNavigation ? styles.navigationButton : styles.defaultButton,
          pressed && styles.pressed,
        ]}
        onPress={onPress}>
        <Text
          style={[
            styles.buttonLabel,
            isNavigation ? styles.navigationLabel : {},
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
  navigationContainer: {
    borderWidth: 4,
    borderColor: '#000',
    borderRadius: 18,
    padding: 3,
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
    backgroundColor: '#25292e',
  },
  navigationButton: {
    backgroundColor: '#fff',
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
  navigationLabel: {
    color: '#25292e',
  },
  pressed: {
    opacity: 0.75,
    transform: [{ scale: 0.98 }],
  },
});
