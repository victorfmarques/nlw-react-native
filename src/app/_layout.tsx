import { StatusBar } from 'expo-status-bar'
import '../styles/global.css'

import { Slot } from 'expo-router'

export default function Layout() {
  return <>
    <StatusBar style='light' />
    <Slot />
  </>
}