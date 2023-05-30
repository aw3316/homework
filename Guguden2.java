package chap04;

/* 
   2단 부터 9단 까지의 전체 구구단 결과를 출력하는 코드를 작성하세요. 
 * 단, 하나의 for 반복문을 사용합니다. 
 * 
 * 실행 예] 
 * [ 2 단 ] 
 * 2 * 1 = 2 
 * 2 * 2 = 4 
 * 2 * 3 = 6 
 * ....
 * 3 * 1 = 3 
 *...
 * 4 * 9 = 36
 * ...
 * 9 * 9 = 81
 */
// 72번 반복하면 가능하다.

public class Guguden2 {

	public static void main(String[] args) {
		int dan = 2, num = 1;
	
		for(int i = 0; i < 72; i++) {
			System.out.printf("%d * %d = %2d\n", dan, num, dan * num);
			num++;
			
			if(num == 10) {
				dan++;
				num = 1; 
			}
		}
	}
}