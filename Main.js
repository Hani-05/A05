public class MySpecialNumberException extends Exception {
    public MySpecialNumberException(String message) {
        super(message);
    }
}



public class Main {
    public static void myfunc(int x) throws MySpecialNumberException {
        if (x == 10 || x == 20 || x == 30) {
            String message = "MySpecialNumberException: Input " + x + " is not allowed.";
            throw new MySpecialNumberException(message);
        }
    }

    public static void main(String[] args) {
        int[] numbersToTest = {4, 10, 15, 20, 25, 30};

        for (int num : numbersToTest) {
            try {
                myfunc(num);
                System.out.println("No exception for input: " + num);
            } catch (MySpecialNumberException e) {
                System.out.println("Caught exception: " + e.getMessage());
            } finally {
                System.out.println("Finally block executed for input: " + num);
            }
        }
    }
}

