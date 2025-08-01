import { Pressable, StyleSheet, Text } from 'react-native';

interface SquareProps {
  value: string | null;
  onSquarePress: () => void;
}

export default function Square({ value, onSquarePress }: SquareProps) {
  return (
    <Pressable 
      style={styles.square} 
      onPress={onSquarePress}
    >
      <Text style={[
        styles.text,
        value === 'X' && styles.xText,
        value === 'O' && styles.oText
      ]}>
        {value}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  square: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    margin: 2,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  xText: {
    color: '#ef4444',
    textShadowColor: 'rgba(239, 68, 68, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  oText: {
    color: '#3b82f6',
    textShadowColor: 'rgba(59, 130, 246, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
});
