<template>   
    <div>
        <longdo-map @load="event" :zoom="10" :lastView="false">         
            <longdo-map-marker             
                v-for="(item, i) in markers"             
                :location="item.location"
                :title="item.title"             
                :detail="item.detail"     
                :key="i"             
            />     
            <button @click="event">ลบ Markers</button>
        </longdo-map> 
        <!-- <button @click="pin1">pin1</button>
        <button @click="pin2">pin2</button> -->
    </div>
</template>

<script>
export default {
  data() {
    return {
        markers: [],
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
  }
}
</script>

<style>

</style>