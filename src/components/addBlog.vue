<template>
  <!-- EXPLANATION: input binding is like data/attribue binding in that it is use with the v-model
directive. It is used to bind the value of an input file to a variable -->
  <!-- PROBLEM: I want to bind the values in the input fields of the form to show them
in the preview div -->
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form>
      <label>Blog Title:</label>
      <!-- 1) bind the value of the input to title and the value of the textarea to content. 
      (v-model.="title"), (v-model.="content") -->
      <!-- 2)Add the variables  "title" and "content" to the data object and set them to an
      empty string-->
      <!-- 3) Output the  "title" and "content" variables in the preview div -->
      <!-- 4) Now, if I start typing somemithing in the inputs, in the preview div I will also see
      the content of whatever I type in the input fields -->
      <!-- 5)It is good practice to save related inputs in the same object. To that end,
      create the object "blog" in data and put inside it the variables  "title" and "content".
      Then, change the v-models to v-model="blog.title" and v-model="blog.content", and also update
      in the preview div the Blog title to {{ blog.title }} and theBlog content to  {{ blog.content }}-->
      <!-- 6)Whenever I type something in my inputs, it appears automatically in the preview div.
      But I this is not the behaviour I want. What I want is that what I type in the input field
      to appear in the Blog title: only after I press tab or after I put the mouse in the textarea.
      And I want the same behaviour for the text are. To achive that I add the input modifier "lazy"
      to the v-direct, like this (v-model.lazy)-->
      <input type="text" v-model.lazy="blog.title" required />
      <label>Blog Content:</label>
      <textarea v-model.lazy="blog.content"></textarea>
    </form>

    <div id="preview">
      <h3>Preview blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content:</p>
      <p style="white-space: pre">{{ blog.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: "",
        content: ""
      }
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
</style>