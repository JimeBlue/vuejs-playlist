<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <!-- PROBLEM: add some checkboxes to the form and output the checked ones in
    the preview area -->
    <form>
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required />
      <label>Blog Content:</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <!-- 1)Add the desired checkboxes within a div -->
      <div id="checkboxes">
        <p>Blog Categories:</p>
        <label>Ninjas</label>
        <!-- 2)Attached a v-model to each checkbox. The property to which the v-model is attached
        doesn´t have to different for each checkbox. On the contrary it has to be the same one.
        In this case, I bind or store the value of the checkboxes in the property "categories" inside
        the object blog. Because I have several checkboxes, i.e they´re a list,
         the property "categories" is going to be equal to an empty array-->
        <!-- 3)What Vue does behind the scenes is, each time a checkbox is clicked,  
         it stores whatever is in "value" of the checkbox to the array categories, which we defined
         in step 2). So now, we add a value to each checkbox (ninjas, wizards, mario, cheese). 
-->
        <input type="checkbox" value="ninjas" v-model="blog.categories" />
        <label>Wizards</label>
        <input type="checkbox" value="wizards" v-model="blog.categories" />
        <label>Mario</label>
        <input type="checkbox" value="mario" v-model="blog.categories" />
        <label>Cheese</label>
        <input type="checkbox" value="cheese" v-model="blog.categories" />
      </div>
    </form>

    <div id="preview">
      <h3>Preview blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content:</p>
      <p style="white-space: pre">{{ blog.content }}</p>
      <p>Blog Categories:</p>
      <ul>
        <!-- 4) Now we have all the values of the checked checkboxes in an array but 
        we can´t see them. So we want to output them. To do that, as they are in an array, 
        I use the v-for directive to loop through the array and display them.-->
        <!-- IMPORTANT: don´t pay attention to the error in <li>, it´s just because
        I don´t have a key for each list item -->
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
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
        categories: []
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
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>