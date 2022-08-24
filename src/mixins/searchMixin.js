/* EXPLANATION: Mixins are used to externalize reasuable blocks of code so that we dot have to 
repeat them. For example, if I have a filter functionality and I want to use it
in two different pages in my app, instead of repeating the same code in both
component, what I do is I put the functionylity in an external file and import it
in the dedired components. Watch the net nijna tutorial video #38
(https://www.youtube.com/watch?v=YZuml1Y9BmQ&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=39) */

export default {
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  }
};
