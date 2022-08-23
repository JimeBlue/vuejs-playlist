<template>
  <!-- EXPLANATION: 
-Now we want to add all the data of our form to a database. To do that, 
we need to make http request. There are several types of http requests, get, post, etc.
The one we need to add the data is "post". 
-There are diffirent way we can make an http request, we can use, for example, jquery or 
the fetch API. But we´re going to use a plug-in called vue resource-->
  <!-- 1) Install the the plug-in. To do that, run the command "npm install vue-resource --save" 
in the terminal of my project. The --save at the end of the command is to save the plug-in
to our dependencies. (plug-in website: https://www.npmjs.com/package/vue-resource) -->
  <!-- 2)Check if the plug-in was installed by going to the package.json file and looking 
for it in the dependencies -->
  <!-- 3)Import the plug-in and tell Vue we want to use it. We´ll import it in main.js, ´cause that´s
the file that kicks off when we first start out application. (import VueResource from "vue-resource";).
Now tell Vue we want to use the plugin with: Vue.use(VueResource); -->
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required />
      <label>Blog Content:</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <p>Blog Categories:</p>
        <label>Ninjas</label>
        <input type="checkbox" value="ninjas" v-model="blog.categories" />
        <label>Wizards</label>
        <input type="checkbox" value="wizards" v-model="blog.categories" />
        <label>Mario</label>
        <input type="checkbox" value="mario" v-model="blog.categories" />
        <label>Cheese</label>
        <input type="checkbox" value="cheese" v-model="blog.categories" />
      </div>
      <label>Author:</label>
      <select v-model="blog.author">
        <option v-for="author in authors">{{ author }}</option>
      </select>
      <hr />
      <!-- 4)Add a button to send the data to the database once the user has filled in the form.
      Add an on-click event to the button and set it to the function "post". Add the prevent
      modifier to the on click event to prevent deafualt behaviour -->
      <button v-on:click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding your post</h3>
    </div>
    <!-- IMPORTANT: don´t pay attention to errors in <li>, it´s just because there is no key binding -->
    <div id="preview">
      <h3>Preview blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content:</p>
      <p style="white-space: pre">{{ blog.content }}</p>
      <p>Blog Categories:</p>
      <ul>
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ["The Net Ninja", "The Angular Avenger", "The Vue Vindicator"],
      submitted: false
    };
  },
  methods: {
    /* 5) Create the post function in order to grab the data filled in in the form and send it 
    to the database */
    post: function() {
      /* 6) To make the request, use "this", to refer to the component, "$http" to
        use the plug-in, and "post" to indicate which type of http request we´re making */
      /* 7)Inside the parenthesis we have to indicate where we´re posting our data, 
        i.e to which database. Eventually, I´m going to use firebase, but for now I´m
        going to use a service called JSON placeholder (https://jsonplaceholder.typicode.com/)
        This service gives us a simple fake rest API to interact with. So between the parenthesis
        I´m going to put the post url as provided v´by the JSON placeholder service.*/
      /* 8) Post is a method. So, between the parenthesis, the url is the first parameter. 
        As a second parameter, we need an object to indicate what we want to post/send to the 
        database. To know the format we need, I go to the JSON placeholder website, click on post
        and I will see the data required (title, body, userId) */
      /* 9)Add the propreties required by  the JSON placeholder website and set it to my data
        (title: this.blog.title, body: this.blog.content, userId: 1). NOTE: for now put 1 in the 
        user id. This will be replaced later on when we use firebase*/
      this.$http
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: this.blog.title,
          body: this.blog.content,
          userId: 1
          /* 10) Now add the then method, because the post method is a promise. This means that
                when the post promise is complete we´re going to fire whatever funtion we pass
                to the then method.  */
          /* 11) Pass a function to the then method and we receive the data. The data that we
                get back is the date we sent in the post requested. To see that I console.log data*/
          /* 12) EXPLANATION: I want to add a message and hide the form when the form is 
                successfully submitted. To do that, I go to my data and add a property called "submited", 
                which I will set to false. This property will keep track of whether the form has been
                submitted. */
          /* 13) In the then method, I set the property submitted to true.
           */
          /* 14) Below the form add a div to show the "thanks for submitting" message. Use the 
          v-if directive to only show this div if submitted is true  */
          /* 14) Now, I want to hide the form when we´ve submitted as well. So, I add the v-if
          directive to the form to show it only if submitted is false  */
        })
        .then(function(data) {
          console.log(data);
          this.submitted = true;
        });
    }
  }
};
</script>

<style>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>
