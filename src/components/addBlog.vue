<template>
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
  /* EXPLANATION: Right now I´m using the fake json API to post and get blogs.
  But now I want to post whatever the user enters as blog to firebase. */
  /* 1) Go to firebase (https://firebase.google.com/). Firebase lets us
  store data in collections. */
  /* 2) Use your account jimeblue69@gmail.com and once registered go to
  "go to console" */
  /* 3) Click in create project. Give it a name (Vuejs-playlist).
  For this project I didn´t enable google analytics */
  /* 4) Once the project is create, go inside it, and I will 
  see in the left menu, the option bild, in the dropdown select
  realtime databasen, then click create database and select a location. 
  Click next. */
  /* 5)The window set up database opens. Here I have to enable read and write, 
  so I can get and post data. Choose start in test mode and click enable.
  */
  /* 6) I´ll be redirected to the page where I can copy the url of my database.
  I copy it.  */
  methods: {
    post: function() {
      this.$http
        /* 7) Replace the json fake api url for the url of my
      firebase database */
        /* 8) As I want to post my data in some kind of collection inside my database,
      I add the name of that collection to the url. That collection doesn´t exist yet.
      Firebase it´s going to create it when we post something for the firsttime */
        /* 9) Before we were posting the title, body and userId. Now I don´t want the 
      user Id but I want to add the categories and the autor. In fact, what I want to 
      post is the entire blog object that is in my data. So as a second parameter I pass
      this.blog
       */
        .post(
          "https://vuejs-playlist-a8652-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
          this.blog
        )
        .then(function(data) {
          // console log the data I posted
          console.log(data);
          this.submitted = true;
        });
    }
    /* 10) Now, I can go to my app and make a post. After posting, I inspect and I will see 
    the response object, because I console log the data I posted.
    /* 11) If I go to firebase, I will see that the posts collection has been created.
    when I expand it, I´ll see a name property for the my first post. When I expand that, 
    I will be able to see all the info I post it (author, categories, content, title). If
    I keep posting, I will see all the name properties for all my posts, with the
    data inside. */
  }
};
</script>

<style scoped>
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
  margin-top: 0;
}
</style>
