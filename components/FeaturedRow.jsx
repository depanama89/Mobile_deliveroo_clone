import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

export default function FeaturedRow({ id, title, description }) {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon size={20} color="#00CC88" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingTop: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant card */}
        <RestaurantCard
          id="123"
          imgUrl={require("../assets/images/01.jpg")}
          title="YO!Sushi"
          rating={4.5}
          genre="Japanese"
          address="12 main avenue"
          short_description="Thisi"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id="123"
          imgUrl={require("../assets/images/01.jpg")}
          title="YO!Sushi"
          rating={4.5}
          genre="Japanese"
          address="12 main avenue"
          short_description="Thisi"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id="123"
          imgUrl={require("../assets/images/01.jpg")}
          title="YO!Sushi"
          rating={4.5}
          genre="Japanese"
          address="12 main avenue"
          short_description="Thisi"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id="123"
          imgUrl={require("../assets/images/01.jpg")}
          title="YO!Sushi"
          rating={4.5}
          genre="Japanese"
          address="12 main avenue"
          short_description="Thisi"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id="123"
          imgUrl={require("../assets/images/01.jpg")}
          title="YO!Sushi"
          rating={4.5}
          genre="Japanese"
          address="12 main avenue"
          short_description="Thisi"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id="123"
          imgUrl={require("../assets/images/01.jpg")}
          title="YO!Sushi"
          rating={4.5}
          genre="Japanese"
          address="12 main avenue"
          short_description="Thisi"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
}
