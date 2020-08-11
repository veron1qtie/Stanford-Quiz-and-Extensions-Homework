# Stanford-Quiz-and-Extensions-Homework
To run open index.html file in any browser. 

## Task description : 
This web page contains a 3-question personality quiz. 

**Part 1: Personality quiz index.html**
For Part 1, you will create a personality quiz called “Adopt A Dog And We’ll Reveal A Deep Truth About You.”

**Part 2: Changing an answer**
If the user has not completed the quiz (i.e. there is at least one unanswered question), they should be able to change their answer to a question by clicking a different answer.
After the user has answered every question, the answer choices should lock and it should no longer be possible to change an answer, until the user clicks “Restart quiz” or refreshes the page.

**Part 3: Completing the quiz**
After the user has answered all three questions, the quiz is complete.
It should not be possible to select another answer after you’ve completed the quiz.
i.e. you click another dog after the quiz is complete, nothing on the page should change.
The page should remain in this “completed” state until the user refreshes the page or clicks “Restart quiz”.
The personality results should appear at the bottom of the page, with the personality data that corresponds to the dog, as defined by constants.js.

**Scoring the quiz**
The data-choice-id for each answer choice maps to the key name for each possible result in RESULTS_MAP, stored in constants.js. You can access RESULTS_MAP in script.js because constants.js is included before script.js in index.html.

When the quiz is complete, you can score the quiz by tallying the data-choice-ids from each answer. For example, if a user chooses blepdog.jpg, sleepybed.jpg, and bleptoy.jpg, you should show the title and contents from RESULTS_MAP['blep'].

If there is a tie, i.e. if someone chooses all unique data-choice-ids, the answer to the first question should win. For example, if a user chooses burgerdog.jpg, nerdbed.jpg, and shydog.jpg, you should show the title and contents from RESULTS_MAP['burger'].

If the user clicks the **“Restart quiz”** button, the page should reset to its original state.

The answer choices should return to their original appearance before the quiz was complete
The personality results should disappear.
The answer choices should be selectable again, and clicking on a different set of answers should result in showing an updated personality type.
The page should look and behave the same as if you had refreshed the page (but you should not actually refresh the page).

**constants.js**
This file contains the definition of the object RESULTS_MAP, which maps the dog type to its result title and description.
Because this variable is declared in the global scope, you can access this variable in script.js.
You should not have to modify this file to solve the homework.
