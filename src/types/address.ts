export interface Address {
  address: string
  id: string
  url: string
}

export interface Suggestions {
  suggestions: Address[]
}

export interface AddressData {
  postcode: string
  latitude: number
  longitude: number
  formatted_address: string[]
  thoroughfare: string
  building_name: string
  sub_building_name: string
  sub_building_number: string
  building_number: string
  line_1: string
  line_2: string
  line_3: string
  line_4: string
  locality: string
  town_or_city: string
  county: string
  district: string
  country: string
  residential: boolean
}
