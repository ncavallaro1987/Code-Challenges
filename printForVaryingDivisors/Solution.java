import java.util.ArrayList;
class Main {
	public static void main(String[] args) {
		// for ints 1-100 
        // print "A" if divisible by 3, 
        // "B" if divisible by 5, 
        // "AB" if divisible by 3 and 5, 
        // and just the int if none of the above. 
        // Format as "1, 2, A, 4, B, A, 7, 8, A, B, 11, A, 13, 14, AB, 16, 17, ..."

        //initialize variables to use for readability
        boolean div3 = false;
        boolean div5 = false;
        
        //using a string concat
        //initialize string
        String strMessage = "";
        for (int i = 1; i < 101; i++)
        {

            //add a comma to everything after the first item.
            //this could also be accomplished by checking if (i > 1), 
            //but since we're manipulating the string strMessage 
            // rather than the variable i, I thought it best to check the string
            if (strMessage.length() != 0)
            {
                strMessage = strMessage + ", ";
            }

            //assign variables to simplify switch
            div3 = (i % 3 == 0);
            div5 = (i % 5 == 0);
            

            //java switches are not as friendly as javascript switches and can't switch on true then use bools for cases, so here's a hack for you.
            //reset combinedValue
            int combinedValue = 0;
            //combinedValue now becomes 
            // 1 if the number is divisble by only 3, 
            // 2 if divisible by only 5, 
            // 3 if divisible by both, 
            // and remains 0 if not divisible by either.
            combinedValue = combinedValue + (div3 ? 1 : 0) + (div5 ? 2 : 0);

            //use a switch to avoid nested if statements
            switch (combinedValue)
            {
                case 3:
                    strMessage = strMessage + "AB";
                    break;
                case 2:
                    strMessage = strMessage + "B";
                    break;
                case 1:
                    strMessage = strMessage + "A";
                    break;
                default:
                    strMessage = strMessage + i;
                    break;
            }
        }


        //using a container
        //initialize list
        ArrayList<String> lstMessage = new ArrayList<String>();
        for (int i = 1; i < 101; i++)
        {

            //assign variables to simplify switch
            div3 = (i % 3 == 0);
            div5 = (i % 5 == 0);

            //c# switches are not as friendly as javascript switches, so here's a hack for you.
            //reset combinedValue
            int combinedValue = 0;
            //combinedValue now becomes 
            // 1 if the number is divisble by only 3, 
            // 2 if divisible by only 5, 
            // 3 if divisible by both, 
            // and remains 0 if not divisible by either.
            combinedValue = combinedValue + (div3 ? 1 : 0) + (div5 ? 2 : 0);

            //use a switch to avoid nested if statements
            switch (combinedValue)
            {
                case 3:
                    lstMessage.add("AB");
                    break;
                case 2:
                    lstMessage.add("B");
                    break;
                case 1:
                    lstMessage.add("A");
                    break;
                default:
                    lstMessage.add(Integer.toString(i));
                    break;
            }
        }

        
        //print the message
        System.out.println("The output of System.out.println(strMessage) is:");
        System.out.println(strMessage);

        System.out.println("");
        System.out.println("");

        System.out.println("The output of System.out.println(String.join(\", \", lstMessage)) is:");
        System.out.println(String.join(", ", lstMessage));
	}
}
