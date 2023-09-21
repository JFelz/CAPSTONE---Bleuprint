# Bleuprint
[Link to LIVE site](https://bleuprint.netlify.app/)
(Only for Desktop Mode)
## Overview
This application was designed to provide digital artists in the game, film, and vfx industry with the means to take control of their financial journey by discovering alternative revenue streams beyond the traditional studio dependency.

Within the 3 weeks of creation, the goal was to incorporate CRUD functionality in an exciting way while staying relevant to the consumer market. In addition, gaining more experience and deeper understanding of React, API's, databases, and UI/UX were also of top priority. 
## Features
+ Users can browse and filter other users products on the marketplace.
+ Users can create/edit/update/delete/view their own products.
+ Users can view info details for each public product.
+ Users can add products to their own cart for purchase.
+ Cart feature calculates total costs of products currently in Cart.
+ Users can delete products in Cart.
+ Users can buy and view their purchased products in their own library.
+ Users acquire every customer order of their product.
+ Users can refund customer orders.
+ Users can receive income and monitor their cashflow within their Financial Analytics feature.

![How Our Platform Works]

[How Our Platform Works]: https://i.pinimg.com/originals/57/51/98/575198f6a93c1c382825591a8293f6c3.jpg

## Install Bleuprint For Yourself

1. Set up a Firebase project.
2. Clone Bleuprint to your local machine.

        git@github.com:JFelz/CAPSTONE---Bleuprint.git

3. Move into your directory

        cd CAPSTONE---Bleuprint

4. When VSCode has opened the application, create a .env file at the root of the project and paste the following keys into the .env file:

        NEXT_PUBLIC_FIREBASE_API_KEY=""
        NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=""
        NEXT_PUBLIC_FIREBASE_DATABASE_URL=""
        NEXT_PUBLIC_FIREBASE_PROJECT_ID=""
        NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=""
        NEXT_PUBLIC_FIREBASE_APP_ID=""

5. Insert your firebase config values to the corresponding keys in the previous step.

6. You will have to create four database folders in Firebase to hold different user requests.
    + Cart
    + Library
    + Seller Expenses
    + Main Marketplace

7. In the root directory of the CLI, run

        npm install or npm i

8. After the install, in the CLI, run

        npm run prepare

9. To start Bleuprint, run

        npm run dev

10. Click [http://localhost:3000](http://localhost:3000) in the terminal to open the DOM.

11. Enjoy freedom through Bleuprint! 

## Planning for Bleuprint
### ERD

![ERD Chart]

[ERD Chart]: https://i.pinimg.com/originals/8c/f1/b6/8cf1b6ceb4cb4582a642dde14933ca37.png

### Wireframe/Prototype
[Figma Wireframe Link](https://i.pinimg.com/originals/6b/c0/c9/6bc0c9270a721712e38df163162c6da1.png)

![Wire]

[Wire]: https://i.pinimg.com/originals/da/c3/32/dac332227266fe040bbad7caed6e680e.jpg

## Project Board

[Bleuprint Project Board](https://github.com/users/JFelz/projects/7)

## Walkthrough Video

[Walkthrough Video Link](https://www.loom.com/share/53906886cb2c4106b8f4a34b68cb646f?sid=f97768b1-1a4c-43da-9c79-b09b277440fc)

## Created by Jovanni Feliz
[View LinkedIn Page](https://www.linkedin.com/in/felizk/)

[View Instagram Page](https://www.instagram.com/overscopingdev/)



## Screenshots of Bleuprint
Sign-In Page

![1a]

Bleuprint public marketplace.

![1]

View Product Details / Cart feature with multiple orders and total cost.

![2]

Purchase Confirmation Page / My Library

![3]

Financial Analytics / My Store feature (MVP)

![4]

[1a]: https://i.pinimg.com/originals/13/26/e8/1326e86b098d70421f6a378d07f4e9b8.png
[1]: https://i.pinimg.com/originals/26/88/d8/2688d803cc1cd63644d9ed212a68a924.png
[2]: https://i.pinimg.com/originals/80/73/18/807318f3b52c06dc82dd5a6752e7528c.png
[3]: https://i.pinimg.com/originals/87/9f/d8/879fd8ffb8966e519a21a5468fa2717b.png
[4]: https://i.pinimg.com/originals/ad/6f/ba/ad6fba8acb858723f38678946d5455dc.png

## Tech Stack
![TechStack]

[TechStack]: ./public/TeckStack.png
