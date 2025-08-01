import Square from "@/src/components/square";
import { StyleSheet, View } from "react-native";

interface BoardProps {
    squares: (string | null)[];
    onSquarePress: (index: number) => void;
}

export default function Board({ squares, onSquarePress }: BoardProps) {
    return (
        <View style={styles.container}>
            <View style={styles.board}>
                <View style={styles.row}>
                    <Square value={squares[0]} onSquarePress={() => onSquarePress(0)} />
                    <Square value={squares[1]} onSquarePress={() => onSquarePress(1)} />
                    <Square value={squares[2]} onSquarePress={() => onSquarePress(2)} />
                </View>
                <View style={styles.row}>
                    <Square value={squares[3]} onSquarePress={() => onSquarePress(3)} />
                    <Square value={squares[4]} onSquarePress={() => onSquarePress(4)} />
                    <Square value={squares[5]} onSquarePress={() => onSquarePress(5)} />
                </View>
                <View style={styles.row}>
                    <Square value={squares[6]} onSquarePress={() => onSquarePress(6)} />
                    <Square value={squares[7]} onSquarePress={() => onSquarePress(7)} />
                    <Square value={squares[8]} onSquarePress={() => onSquarePress(8)} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  board: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  row: {
    flexDirection: 'row',
  },
});