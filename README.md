# Flashcards

Flash card is a JavaScript quiz on the key terms and definitions about the exciting dynamic and fun language.  
Extensive test were written for this game to control functionality. 

You can fork and clone the flash cards for your own use. 


![Alt Text](https://github.com/jpweist/flashcards/blob/master/images/flash-cards-gif.gif)


# feeback from Khalid
Flashcards feedback
Notes:
- Give some more detailed instructions on how to clone down and run the game
- Also add in a gif of the game running, not the testing suite
- Make sure your tests all stay in the /test directory
- Solid test coverage of Card
- Make sure you remove all commented out logic / pseudocode / code from master before submission
- You’re repeating yourself with your logic in Turn.giveFeedback. Think about how you can leverage the functionality you wrote in Turn.evaluateGuess in .giveFeedback
- You don’t need to test that every method is a function
- Make sure to test that your methods return the right things for right and wrong guesses (when appropriate, aka in Turn.giveFeedback and .evaluateGuess )
- (Deck-test line 25) When you’re testing that an object holds a complex property (like an array), don’t test that the peroperty equals itself. Make sure it deeply equals an array / object literal (or something similar) with the same values
- Make sure your commit messages are ative and have a capitalized first letter
- Nice use of the beforeEach hook!!
- Don’t test implementation from the Turn file in Round-test -- the method in Round should be calling and __returning__ something from`turn.evaluateGuess`
 - same thing with giveFeedback
- You never instantiated turn in Turn-test, which is why most of these are failing
- In order to get the game running, think about what file you need to call game.start() from (hint: which file do we run when starting the game?)
- I think you’re on a good track with regards to coverage, but there are still some gaps. I think you should focus in on formatting your tests in the right way (ie what to test against, what kind of things to be testing about your methods)
 - Also, pay attention to what the expressions in your code evaluate to. This will allow you to keep your logic DRYer
