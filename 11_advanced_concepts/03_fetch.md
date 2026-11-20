## Q. What is fetch() ?

fetch() is used to fetch resources  over the network through an url.

#### But behind the scenes fetch() works how?

It has  a priority queue and it always executes before other tasks.

![image1](<Screenshot 2026-11-20 172742.png>)

When fetch gets the response it has two things its split one part goes for resevr memory for data and another part to manage network request.

![alt text](<Screenshot 2.png>)

And an important thing the data is the two array , on fullfilled and onr rejection are the resolve and reject which we handle in syntax . this are private and  behind our reach.

#### !NOTE :  In case of server response when we get 404 error (file not found) etc are also fall in  resolve on fullfilled - as because data sent to server we got response then we are getting . Rejection only happens when request to server never reached  before that something happened. 