class Calculator {
    public int add() {
        System.out.println("In add");
        return 0;
    }
}

public class Demo {
    public static void main(String args[]) {
        int a = 10;
        System.out.println("Hello World");
        System.out.println(a);
        Calculator ob = new Calculator();
        ob.add();
    }
}