<template>
  <div class="components-list">
    <component
      class="card"
      v-for="el in currentComponentsData"
      :is="el.component_name"
      :data="el"
      :key="el.component_name"
    >
      <div class="card__subcard_list" v-if="el.sub_cards">
        <component
          class="card__subcard"
          v-for="subEl in el.sub_cards"
          :is="subEl.component_name"
          :data="subEl"
          :key="subEl.component_name"
        ></component>
      </div>
    </component>
  </div>
</template>

<script>
import ContainerCard from "@/components/ContainerCard";
import ImageCard from "@/components/ImageCard";
import TextCard from "@/components/TextCard";
export default {
  name: "Dynamic-component",
  data() {
    return {
      APIData: {
        cards: [
          {
            id: 1,
            name: "Card 1",
            type: "CONTAINER_CARD",
            title: "Card 1 content",
            sub_cards: [
              {
                id: 1,
                name: "Image Card",
                type: "IMAGE_CARD",
                source:
                  "https://images.unsplash.com/photo-1618421770676-356cce7a9c9d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
              },
              { id: 2, name: "Card 2", type: "TEXT_CARD", source: "Text card Content" }
            ]
          },
          {
            id: 2,
            name: "Card 2",
            type: "IMAGE_CARD",
            source:
              "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
          },
          { id: 3, name: "Card 3", type: "TEXT_CARD", content: "Card 3 Content" }
        ]
      }
    };
  },
  components: {
    ContainerCard,
    ImageCard,
    TextCard
  },
  methods: {
    formatName(value) {
      return value
        .toLowerCase()
        .split("_")
        .map(el => el.charAt(0).toUpperCase() + el.slice(1))
        .join("");
    }
  },
  computed: {
    currentComponentsData() {
      return this.APIData.cards.map(el => {
        const formatData = { component_name: this.formatName(el.type), ...el };

        if (formatData.sub_cards) {
          formatData.sub_cards = formatData.sub_cards.map(subEl => ({
            component_name: this.formatName(subEl.type),
            ...subEl
          }));
        }
        return formatData;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.components-list {
  display: flex;
  justify-content: space-between;
}
.card {
  width: 30%;
  border: 1px solid black;
  padding: 10px;
  &__subcard_list {
    display: flex;
    justify-content: space-between;
  }
  &__subcard {
    width: 40%;
    padding: 10px;
    border: 1px solid black;
  }
}
</style>
