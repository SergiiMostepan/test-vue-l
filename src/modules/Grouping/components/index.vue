<template>
  <div class="page">
    <ul class="author-list">
      <li class="author-list__item" v-for="el in Object.keys(groupedPosts)" :key="el">
        <p class="author-list__item__author-name">{{ el }}</p>
        <ul class="author-list__item__book-list">
          <li
            class="author-list__item__book-list__item"
            v-for="subEl in groupedPosts[el]"
            :key="subEl.id"
          >
            {{ subEl.name }} by {{ subEl.author.name }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import groupBy from "lodash.groupby";
export default {
  name: "grouping",
  data() {
    return {
      postData: [
        {
          id: 1,
          name: "Post 1",
          author: {
            id: "1",
            name: "Author 1"
          }
        },
        {
          id: 4,
          name: "Post 4",
          author: {
            id: "1",
            name: "Author 1"
          }
        },
        {
          id: 2,
          name: "Post 2",
          author: {
            id: "2",
            name: "Author 2"
          }
        },
        {
          id: 3,
          name: "Post 3",
          author: {
            id: "3",
            name: "Author 3"
          }
        }
      ]
    };
  },
  computed: {
    groupedPosts() {
      return groupBy(this.postData, "author.name");
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  justify-content: center;
}
.author-list {
  &__item {
    padding-inline-start: 5px;
    &::marker {
      content: "-";
    }
    &__author-name {
      text-align: left;
      margin: 0;
    }
    &__book-list {
      margin-bottom: 10px;

      &__item {
        padding-left: 5px;
        &::marker {
          content: ">";
        }
      }
    }
  }
}
</style>
