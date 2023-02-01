<template>   
    <div>
        <longdo-map @load="event" :zoom="10" :lastView="false" padding="mb-10">         
            <longdo-map-marker             
                v-for="(item, i) in markers"             
                :location="item.location"
                :title="item.title"             
                :detail="item.detail"     
                :key="i"             
            />
            <v-btn class="pa-20 space-button" @click="pin1">pin1</v-btn>
            <v-btn class="pa-20 space-button" @click="pin2">pin2</v-btn>
            <v-btn @click="rm" class="pa-20 space-button" depressed color="error"  >ลบ Markers</v-btn>

        </longdo-map> 

    </div>
</template>

<script>
export default {
  data() {
    return {
        markers: [],
        map: null
    }
  },
  methods: {
    event(map) {
        console.log('Map ->', map)
        console.log('Map Loaded')

        // click
        map.Event.bind('click', () => {
            let latLon = map.location(longdo.LocationMode.Pointer)

            const addMarker = {
                location: {
                    lat: String(latLon.lat),
                    lon: String(latLon.lon),
                }
            }
            this.markers.push(addMarker)

            let newMarker = new longdo.Marker({
                lat: latLon.lat,
                lon: latLon.lon,
            })
            map.Overlays.add(newMarker)
        })

        // zoom
        map.Event.bind('zoom', () => {
            console.log('Map Zoom')
        })

    },
    pin1(map){
        // click
        map.Event.bind('click', () => {
            let latLon = map.location(longdo.LocationMode.Pointer)

            const addMarker = {
                location: {
                    lat: String(latLon.lat),
                    lon: String(latLon.lon),
                }
            }
            this.markers.push(addMarker)

            let newMarker = new longdo.Marker({
                lat: latLon.lat,
                lon: latLon.lon,
            })
            map.Overlays.add(newMarker)
        })
        
    },
    pin2(map){
        // click
        map.Event.bind('click', () => {
            let latLon = map.location(longdo.LocationMode.Pointer)

            const addMarker = {
                location: {
                    lat: String(latLon.lat),
                    lon: String(latLon.lon),
                }
            }
            this.markers.push(addMarker)

            let newMarker = new longdo.Marker({
                lat: latLon.lat,
                lon: latLon.lon,
            })
            map.Overlays.add(newMarker)
        })
        
    },
    rm(map) {
        try {
            map.Overlays.clear()
        }catch{
            console.log('nopin')
        }
    }
  }
}
</script>

<style>
.space-button{
  margin:5px;
}
</style>