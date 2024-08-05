import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <ScrollView
      style={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard
        imgUrl={require("../assets/images/01.jpg")}
        title="Title 1"
      />
      <CategoryCard
        imgUrl={require("../assets/images/01.jpg")}
        title="Title 1"
      />
      <CategoryCard
        imgUrl={require("../assets/images/01.jpg")}
        title="Title 1"
      />
      <CategoryCard
        imgUrl={require("../assets/images/pizza1.png")}
        title="Title 1"
      />
      <CategoryCard
        imgUrl={require("../assets/images/pizza1.png")}
        title="Title 1"
      />
      <CategoryCard
        imgUrl={require("../assets/images/pizza1.png")}
        title="Title 1"
      />
      <CategoryCard
        imgUrl={require("../assets/images/ga.png")}
        title="Title 1"
      />
    </ScrollView>
  );
}
