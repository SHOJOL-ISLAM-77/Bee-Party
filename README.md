# Bee party 

You can access the live site [here](https://bee-party.web.app/).


Welcome to Bee party Website! This is a unique web application that offers event planning services. Below are some of the key features and possible future improvements for this website.

## Features 

- **User Authentication**: Implemented email and password-based authentication, along with the option to log in using social media accounts (github, Google).

- **Event Services**: The website provides a wide range of event services, each with a detailed description, price, and image. Users can easily explore these services and click on them to view more details.

- **Private Routes**: Certain routes, such as service details and additional site-specific pages, are protected and only accessible to logged-in users. Unauthorized users are redirected to the login page.

- **User Profile**: Once logged in, users can see their profile picture and name in the header. They can also log out from any page.


- **Responsive Design**: The website is designed to be responsive, providing an optimal user experience on desktop and mobile devices. The tablet layout is also optional and can be implemented for further optimization.




<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `{}` 

<i>Here 'let greeting' is a name of variable but there is no value. Then set a empty object as value of greeting so the value greeting is a empty object.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: `"12"`  

<i>Here a function to summation a and b . Then a = number and b = string so string summation number equal string so answer is "12"</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']` 

<i>Here food a array and make a object with food array's first element named info then change the value of info.favoriteFood did not change the value of food array so food = ['🍕', '🍫', '🥑', '🍔'] </i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

<i>Answer is "Hi there, undefined" because SayHi function take a parameter and return  "hi there, parameter" here did not set parameter value so the function provide "Hi there, undefined"</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: `3`

<i>Here throw a loop in the nums array and check if num === true then count += 1 so 0 a false value That's why answer equal 3</i>

</p>
</details>


