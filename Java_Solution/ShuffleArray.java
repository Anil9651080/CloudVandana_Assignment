package Java_Solution;

import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

public class ShuffleArray {
    public static void main(String[] args) {

        int[] arr = { 1, 2, 3, 4, 5, 6, 7 };

        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a seed value for shuffling: ");
        long seed = scanner.nextLong();

        shuffleArray(arr, seed);

        System.out.println("Shuffled arr: " + Arrays.toString(arr));

        scanner.close();
    }

    public static void shuffleArray(int[] arr, long seed) {
        Random rand = new Random(seed);
        for (int i = arr.length - 1; i > 0; i--) {
            int index = rand.nextInt(i + 1);

            int temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
        }
    }
}
