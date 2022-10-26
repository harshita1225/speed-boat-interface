# A boat with useReducer

I want you to create a boat interface using `useReducer`.
You don't need to make many different components.
Your reducer function should be able to do the following actions:

- start the boat engine
    - has 50% chance to fail
- stop the boat engine
    - also resets gear to 0
    - does not change the boat speed
- change engine gear up
    - only works if boat is started
    - max gear 5
- change engine gear down
    - only works if boat is started
    - min gear -2
- increase boat speed
    - only works if boat is started
    - if gear is 0, has no effect
    - changes boat speed so that is further away from 0
    - gear 5 increases speed faster than gear 1
    - gear -2 increases speed faster than gear -1
- decrease boat speed
    - only works if boat is started
    - if gear is 0, has no effect
    - changes boat speed so that is closer to 0

Show the current speed of the boat to the user
Show also buttons for the different actions

**BONUS CHALLENGE** Show distance travelled