# MiniProject2

What was your requirements gathering and design process? Was it useful/successful?
Yes Design Process was searching for api's, Navbar and dashboard Features
Found early in the morning that Coingeckop API was down so needed to find an alternative 
Alternative wasnt good but tried to make the best out of it 

Give a high level overview of your application and its features
1. Background on the Login is TSReactParticle Library.used scss to style the login page only
2. Login MUI is the Template interface. Takes 5 login attempts then makes you try again.
3. The Login is in a Protected Route. The protected route uses the USEContext hook to retrieve a username. If the username is not present it will go to the redirectpath using the navigate component. If the username is present the component renders the children or an outlet component used to render the child routes.
4. The react side bar uses the react-pro-slider library to create a collapsable sidebar with multilevel navigation. Each Icon is from the materialUI library.Its then exported to be used in other parts of the app.
4. Dashboard is used by Bootstrap, uuid(generate Id's to identify each expense) and react-icons.
5. Budget component, remaining and ExpenseTotal are components. Added Bootstrap row and colum to render.
6. Context API is where we store the Global state in APPContext.js. I used the UseReducer Hook which holds the state and allows u to update the state via dispatch. THe reducer then creates the global state object based on the action type and the payload. I used desstructing to get the budget from the context. To add a new Expense we update the reducer. How to calculate we just imported usecontext and appcontext, take expenses from the state, use reduce function to get the total of all the costs and then display the variable. Delete we dispatch in the expenseitem.js, technically adding a new case statemt to handle the delete expense.
7. The next page is the material ui using the x-data-grid'. A form is added to the invoice. react use statehook
8. the Commidity Price is using axios to fetch the data. I had trouble to get the data as it was only taking one symbol at a time. to get around this I had to manually add an array of symbols and display them on the crypto card.

Where does its data come from (external/internal APIs)?
Mock data for the budget.Crypto comes from External API's.

How is this data processed and displayed?
Fetched using axios. passed an array of coins

How can the user interact with your application?
Login, dashboard collapse

Have you used class components or functional components? Why?
Functional components

How have you structured/broken up your components/code?
Each part generally has there own folder linked to a page. 

What kinds of React hooks have you used (eg. state, context, effect, navigate)? How?


What external tools/libraries have you used (eg. bootstrap/axios/MUI)? How? Why?
Bootstrap Axios MUI ReactTSParticles React Pro side bar

How might you extend the features of your application in future?
Currently its a skeleton template to build on.
Fix the css, upgrade the api, improve the functionality of numbers/wallet etc
 
![quickerpay1](https://user-images.githubusercontent.com/56494159/236968826-410dc1fe-1ac2-427e-9e81-ee24df102f21.jpg)
