1. What problem does the context API help solve?

ContextAPI allows the programmer to access state data in context without the need for prop drilling through components.
 
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions handle user interaction and are sent to reducers. Reducers receive actions and organize operations of an application. The store is where Redux stores the state data. It is the true location in the application where data is stored and manipulated.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is the state of a part of the application and is used for managing parts of the application pieces in an organized chunk. The application state manages what the application status for the whole application.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?'

Thunk allows for actions that are asynchrnous such as server calling.  

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux is the most useful for different level applications and is the straightforward way to manage and manipulate state application data.