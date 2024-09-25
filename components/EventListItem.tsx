import Feather from '@expo/vector-icons/Feather';
import dayjs from 'dayjs';
import { View, Text, Image } from 'react-native';

export default function EventListItem({ event }) {
  return (
    <View className="m-3 gap-3 border-b border-gray-200 pb-3">
      <View className="flex-row">
        <View className="flex-1 gap-2">
          <Text className="text-lg font-semibold uppercase text-amber-700">
            {dayjs(event.datetime).format('ddd, D MMM')} · {dayjs(event.datetime).format('h:mm A')}
          </Text>
          <Text className="text-2xl font-bold" numberOfLines={2}>
            {event.title}
          </Text>
          <Text className="text-gray-700">{event.location}</Text>
        </View>
        {/* Event Image */}
        <Image source={{ uri: event.image }} className="aspect-video w-2/5 rounded-xl" />
      </View>

      {/* Footer*/}
      <View className="flex-row gap-3">
        <Text className="mr-auto text-gray-700">16 Going</Text>
        <Feather name="share" size={20} color="gray" />
        <Feather name="bookmark" size={24} color="gray" />
      </View>
    </View>
  );
}
