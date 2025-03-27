import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient'; // ✅ For Expo

export default function Button({ text, type = "fill", onPress, loading }) {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      activeOpacity={0.9} 
      style={{ width: '90%', marginTop: 15, borderRadius: 25 }} disabled= { loading }
    >
      <LinearGradient
        colors={type === 'fill' ? ['#026257', '#02a17a', '#70e1c8'] : ['#ffffff', '#f0f0f0']}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 1, y: 1 }}
        style={{
          paddingVertical: 14,
          borderRadius: 25,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1.5,
          borderColor: type === 'fill' ? 'rgba(2, 161, 122, 0.5)' : 'white',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 5, // For Android shadow
        }}
      >
        {!loading ? (
          <Text 
            style={{
              textAlign: 'center',
              fontSize: 18,
              letterSpacing: 0.5,
              color: type === 'fill' ? 'white' : '#026257'
            }}
          >
            {text}
          </Text>
        ) : (
          // Loader with fixed color
          <ActivityIndicator size="small" color={type === 'fill' ? 'white' : 'rgba(1, 109, 82, 0.96)'} />
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}
