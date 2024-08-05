import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";

import {
  SparklesIcon,
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../../components/Categories";
import FeaturedRow from "../../components/FeaturedRow";
export default function home() {
  return (
    <SafeAreaView className="bg-white mt-12 pt-3 px-4">
      <View className="flex flex-row justify-between mx-4">
        <View className=" flex-row items-center pb-3 space-x-2 ">
          <Image
            source={require("../../assets/images/01.jpg")}
            className="w-9 h-9 rounded-full "
          />

          <View>
            <Text className="font-bold text-gray-400 text-xs">Deliver now</Text>
            <Text className="font-bold text-xl">
              Current Now <ChevronDownIcon size={20} color="#00CC88" />
            </Text>
          </View>
        </View>
        <UserIcon size={24} color="#00CC88" />
      </View>
      {/* searchbar */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row  flex-1 space-x-2 bg-gray-200 p-3 items-center ">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurant and cuisine"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon size={20} color="#06cfb4" />
      </View>
      {/* body */}
      <ScrollView style={{ paddingTop: 10 }}>
        <Categories />
        {/* featured */}
        <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placements from our partners"
        />
        {/*Testy Discounts  */}
        <FeaturedRow
          id="1234"
          title="Testy Discount"
          description="EveryOne's been enjoing these juicy discounts!"
        />

        {/* Offers near you */}
        <FeaturedRow
          id="1235"
          title="Offer near you"
          description="Why not support your local restaurant tonight!"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
