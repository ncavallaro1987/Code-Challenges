<?php
    // Enter your code here, enjoy!
    // for ints 1-100 
    // print "A" if divisible by 3, 
    // "B" if divisible by 5, 
    // "AB" if divisible by 3 and 5, 
    // and just the int if none of the above. 
    // Format as "1, 2, A, 4, B, A, 7, 8, A, B, 11, A, 13, 14, AB, 16, 17, ..."

    //initialize variables to use for readability
    $div3 = false;
    $div5 = false;
    $div15 = false;

    //using a string concat
    //initialize string
    $strMessage = "";
    for ($i = 1; $i < 101; $i++) {

        //add a comma to everything after the first item.
        //this could also be accomplished by checking if (i > 1), 
        //but since we're manipulating the string strMessage 
        // rather than the variable i, I thought it best to check the string
        if (strlen($strMessage) != 0) {
            $strMessage = $strMessage . ", ";
        }

        //assign variables to simplify switch
        $div3 = ($i % 3 == 0);
        $div5 = ($i % 5 == 0);
        $div15 = ($div3 && $div5); //php can also just use "and"


        //use a switch to avoid nested if statements
        switch (true) {
            case $div15:
                $strMessage = $strMessage . "AB";
                break;
            case $div5:
                $strMessage = $strMessage . "B";
                break;
            case $div3:
                $strMessage = $strMessage . "A";
                break;
            default:
                $strMessage = $strMessage . $i;
                break;
        }
    }

    echo "The output of echo \$strMessage is: \n";
    echo $strMessage;
    echo "\n\n";

    //using a collection
    //initialize array
    $arrMessage = array();
    for ($i = 1; $i < 101; $i++) {

        //assign variables to simplify switch
        $div3 = ($i % 3 == 0);
        $div5 = ($i % 5 == 0);
        $div15 = ($div3 and $div5); //demo that "and" works just like "&&"

        //use a switch to avoid nested if statements
        switch (true) {
            case $div15:
                array_push($arrMessage, "AB");
                break;
            case $div5:
                array_push($arrMessage, "B");
                break;
            case $div3:
                array_push($arrMessage, "A");
                break;
            default:
                array_push($arrMessage, $i);
                break;
        }

    }
    //print the message
    echo "The output of echo implode(', ', \$arrMessage) is: \n";
    echo implode(', ', $arrMessage);
