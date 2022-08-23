<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form>
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
      <!-- EXPLANATION: problem: add a dropdown with authors to seclect and
      display them in the preview section -->
       <label>Author:</label>
       <!-- 1)Attached the v-model to the select tag itself because when an option
       is select it is the select tag which gets the selected value. So, I attached the
       v-model to the property author inside the object blog. Whatever option is selected it
       will be stored in author. -->
       <!-- 2)Add the author property to the blog object in data and set it to an empty string -->
            <select v-model="blog.author">
            <!-- 3)Populate the options dynamically. The option are in the array authors in data.
            Using the v-for directive I can populate all the options -->
            <option v-for="author in authors">{{ author }}</option>
        </select>
    </form>
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
       <!-- 4) Show the selected option to the user here in the preview section by
        using the selected value stored in blog.author  -->
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
        author:""
      },
      authors: ['The Net Ninja', 'The Angular Avenger', 'The Vue Vindicator']
    };
  },
  methods: {}
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