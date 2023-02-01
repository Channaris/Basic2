<template>
    <v-form :SLPposts="form" >

        <v-card elevation="20" outlined >
            <v-container class="center-element"></v-container>
            <label>
                ชุดดวงโคมชุดที่ {{  }} (ถ้ามีหลายชุดให้นับจากช่องจราจรช่องซ้ายสุด)
                <v-container>{{ form.lampType }}
                    <!-- <v-radio-group v-model="form.lampType"> -->
                    <v-row class="center-element">
                        <v-col>
                            <v-img 
                                contain
                                class="fixed-size-img"
                                v-bind:src="img1" 
                                alt="Your Image">
                            </v-img>
                            <v-radio-group v-model="form.lampType">
                                <v-radio 
                                    value="oneRow">
                                </v-radio>
                            </v-radio-group>
                        </v-col>
                        <v-col>
                            <v-img 
                                contain
                                class="fixed-size-img"
                                v-bind:src="img2" 
                                alt="Your Image">
                            </v-img>
                            <v-radio-group v-model="form.lampType">
                                <v-radio 
                                    value="L">
                                </v-radio>
                            </v-radio-group>
                        </v-col>
                        <v-col>
                            <v-img 
                                contain
                                class="fixed-size-img"
                                v-bind:src="img3" 
                                alt="Your Image">
                            </v-img>
                            <v-radio-group v-model="form.lampType">
                                <v-radio
                                    value="RL">
                                </v-radio>
                            </v-radio-group>
                        </v-col>
                        <v-col>
                            <v-img 
                                contain
                                class="fixed-size-img"
                                v-bind:src="img4" 
                                alt="Your Image">
                            </v-img>
                            <v-radio-group v-model="form.lampType">
                                <v-radio
                                    value="tr">
                                </v-radio>
                            </v-radio-group>

                        </v-col>
                    <!-- </v-radio-group> -->
                    </v-row>
                    
                    <v-container fluid> {{ form.lightType }}
                        <v-radio-group v-model="form.lightType">
                            <v-radio
                                label="แบบเต็มดวง"
                                value="full">
                            </v-radio>
                            <v-radio
                                label="แบบลูกศร"
                                value="arrows">
                            </v-radio>
                        </v-radio-group>
                            <v-checkbox
                                v-model="checkbox"
                                :label="`มีสัญญาณไฟสําหรับคนเดินข้ามถนน`"
                            ></v-checkbox>
                            <v-checkbox
                                v-model="checkbox"
                                :label="`มีปุ่มกดสําหรับคนเดินข้ามถนน`"
                            ></v-checkbox>
                    </v-container>
                    <!-- <v-container> 
                        <v-radio-group v-model="form.crossLight">
                            <v-checkbox
                                v-model="checkbox"
                                :label="`มีสัญญาณไฟสําหรับคนเดินข้ามถนน`"
                            ></v-checkbox>
                            <v-checkbox
                                v-model="checkbox"
                                :label="`มีปุ่มกดสําหรับคนเดินข้ามถนน`"
                            ></v-checkbox>
                        </v-radio-group>
                    </v-container> -->
                </v-container>
            </label>
        </v-card>
    </v-form>
</template>

<script>
import MapComponent from '~/components/MapComponent'


export default {
    components:{
      MapComponent,
    },
data() {
    return {
        // SLPdata:[

        // ],
        img1: require('@/static/light_signal/oner.png'),
        img2: require('@/static/light_signal/L.png'),
        img3: require('@/static/light_signal/RL.png'),
        img4: require('@/static/light_signal/tr.png'),
        form: {
            lampType:'',
            lightType:'',
            crossLight:'',
            tunnelBridge:'',

        },
    }
},
methods: {

}
}
</script>

<style>
.fixed-size-img {
  width: 60px;
  height: 100px;
}

.map-size {
    width: 75%;
    height: 500px;
}
.center-element {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding-top: 20;
}
</style>