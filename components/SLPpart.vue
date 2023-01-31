<template>
    <form>
        <v-radio-group v-model="form.tunnelBridge">{{ form.tunnelBridge }}
            <label for="">อุโมงค์หรือสะพานข้ามแยก</label>
                <v-radio
                    label="บนสายหลัก"
                    value="main">
                </v-radio>
                <v-radio
                    label="บนสายรอง"
                    value="secondary">
                </v-radio>
        </v-radio-group>

        <v-container>
            <label>
                ชุดดวงโคมชุดที่ 1 (ถ้ามีหลายชุดให้นับจากช่องจราจรช่องซ้ายสุด)
                <v-row>{{ form.lampType }}
                    <!-- <v-radio-group v-model="form.lampType"> -->
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
                            <v-radio v-model="form.lampType"
                                value="RL">
                            </v-radio>
                        </v-col>
                        <v-col>
                            <v-img 
                                contain
                                class="fixed-size-img"
                                v-bind:src="img4" 
                                alt="Your Image">
                            </v-img>
                            <v-radio v-model="form.lampType"
                                value="tr">
                            </v-radio>
                        </v-col>
                    <!-- </v-radio-group> -->

                    <v-col> {{ form.lightType }}
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
                    </v-col>
                    <v-col> 
                        <v-radio-group v-model="form.crossLight">
                            <!-- <v-checkbox
                                v-model="checkbox"
                                :label="`มีสัญญาณไฟสําหรับคนเดินข้ามถนน`"
                            ></v-checkbox>
                            <v-checkbox
                                v-model="checkbox"
                                :label="`มีปุ่มกดสําหรับคนเดินข้ามถนน`"
                            ></v-checkbox> -->
                        </v-radio-group>
                    </v-col>
                </v-row>
            </label>
        </v-container>
    </form>
</template>

<script>

export default {
data() {
    return {
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
</style>