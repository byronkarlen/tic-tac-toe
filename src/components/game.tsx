import Board from "@/src/components/board";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Game() {
    const [history, setHistory] = useState<string[][]>([Array(9).fill(null)]);
    const [xIsNext, setXIsNext] = useState(true);

    const currentSquares = history[history.length - 1];

    const winner = calculateWinner(currentSquares);
    const isDraw = !winner && currentSquares.every(square => square !== null);
    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    } else if (isDraw) {
        status = "It's a draw!";
    } else {
        status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    function handleSquarePress(index: number) {
        if (calculateWinner(currentSquares) || currentSquares[index]) {
            return;
        }
        const nextSquares = currentSquares.slice();
        if (xIsNext) {
            nextSquares[index] = 'X';
        } else {
            nextSquares[index] = 'O';
        }
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
    }

    function handleRestart() {
        setHistory([Array(9).fill(null)]);
        setXIsNext(true);
    }

    function handleUndo() {
        if (history.length === 1) {
            return;
        }
        setHistory(history.slice(0, -1));
        setXIsNext(!xIsNext);
    }

    return (
        <View style={styles.container}>
            <View style={styles.statusContainer}>
                <Text style={[
                    styles.statusText,
                    winner && styles.winnerText,
                    isDraw && styles.drawText
                ]}>
                    {status}
                </Text>
            </View>
            <Board squares={currentSquares} onSquarePress={handleSquarePress} />
            <View style={styles.buttonContainer}>
                <Pressable 
                    style={({ pressed }) => [
                        styles.button,
                        winner ? styles.newGameButton : styles.restartButton,
                        pressed && styles.buttonPressed,
                        history.length === 1 && styles.buttonDisabled
                    ]}
                    onPress={handleRestart}
                    disabled={history.length === 1}
                >
                    <Text style={[
                        styles.buttonText,
                        history.length === 1 && styles.buttonTextDisabled
                    ]}>
                        {winner ? 'New Game' : 'Restart'}
                    </Text>
                </Pressable>
                <Pressable 
                    style={({ pressed }) => [
                        styles.button,
                        styles.undoButton,
                        pressed && styles.buttonPressed,
                        history.length === 1 && styles.buttonDisabled
                    ]}
                    onPress={handleUndo}
                    disabled={history.length === 1}
                >
                    <Text style={[
                        styles.buttonText,
                        history.length === 1 && styles.buttonTextDisabled
                    ]}>Undo</Text>
                </Pressable>
            </View>
        </View>
    )
}

function calculateWinner(squares: (string | null)[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    statusContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 25,
        marginBottom: 30,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    statusText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#ffffff',
        textAlign: 'center',
    },
    winnerText: {
        color: '#4ade80',
        fontWeight: '700',
    },
    drawText: {
        color: '#fbbf24',
        fontWeight: '700',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16,
        marginTop: 30,
    },
    button: {
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 12,
        minWidth: 100,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    restartButton: {
        backgroundColor: '#ef4444',
    },
    undoButton: {
        backgroundColor: '#3b82f6',
    },
    buttonPressed: {
        transform: [{ scale: 0.95 }],
        shadowOpacity: 0.15,
    },
    buttonDisabled: {
        backgroundColor: '#6b7280',
        opacity: 0.6,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    buttonTextDisabled: {
        color: '#d1d5db',
    },
    newGameButton: {
        backgroundColor: '#4ade80',
    },
});

