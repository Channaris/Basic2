<template>
    <form @submit.prevent="onSubmit">
        <h1>กรอกข้อมูล</h1>

        <v-form>
          <label>
                แขวงทางหลวง:
                <v-col
                  class="d-flex"
                  cols="12"
                  sm="6"
                >
                  <v-select
                    v-model="form.district"
                    :items="districts"
                    label="แขวงทางหลวง"
                    outlined
                  ></v-select>
                </v-col>

            </label>
        </v-form>

        <v-form >
          <label>
            สำนักงานทางหลวงที่:
                <v-col
                  class="d-flex"
                  cols="12"
                  sm="6"
                >
                  <v-select
                    v-model="form.highway_office"
                    :items="offices"
                    label="สำนักงานทางหลวงที่"
                    outlined
                  ></v-select>
                </v-col>

            </label>
        </v-form>

        <v-form >
          <label>
            ทางแยก
              <label>
              ชื่อทางแยก:
                <v-text-field v-model="form.crossroads" label="ชื่อทางแยก"></v-text-field>
              </label>

            </label>
        </v-form>

        <v-form >
          <label>
            รายละเอียดถนนที่ตัดกัน<br>
              <label >
                ถนนสายหลัก
                <v-container>
                  <label>
                    หมายเลขทางหลวง:{{ form.main_highway_number }}
                    <v-text-field v-model="form.main_highway_number" label="หมายเลขทางหลวง"></v-text-field>
                  </label>
                  <label>
                    ชื่อทางหลวง:{{ form.main_highway_name }}
                    <v-text-field v-model="form.main_highway_name" label="ชื่อทางหลวง"></v-text-field>
                  </label>
                </v-container>
                
              </label>
              <label>
                ถนนสายรอง
                <v-container>
                  <label>
                    หมายเลขทางหลวง:{{ form.secondary_highway_number }}
                    <v-text-field v-model="form.secondary_highway_number" label="หมายเลขทางหลวง"></v-text-field>
                  </label>
                  <label>
                    ชื่อทางหลวง:{{ form.secondary_highway_name }}
                    <v-text-field v-model="form.secondary_highway_name" label="ชื่อทางหลวง"></v-text-field>
                  </label>
                </v-container>
                
              </label>
            </label>
        </v-form>

        <v-form>
          <label>
            ภาพแผนผังทิศทางจราจรของ 4 แยก
            
            <!-- <v-container v-if="images">
              <v-img
                max-height="150"
                max-width="250"
                :src="images"
              ></v-img>
            </v-container> -->

            <v-file-input
              v-model="images"
              label="File input"
              filled
              prepend-icon="mdi-camera"
            ></v-file-input>
          </label>
        </v-form>

        <v-form class="py-4">
          <label for="">เสาไฟส่องสว่าง</label>
          <v-container>
            <v-radio-group v-model="form.light_pole">
                    <v-radio
                        label="High Mast"
                        value="high_mast">
                    </v-radio>
                    <v-container v-if="form.light_pole === 'high_mast'">
                      <v-text-field v-if="form.light_pole === 'high_mast'" label="">
                      </v-text-field>
                      <label>ม.</label>
                    </v-container>
                    <v-radio
                        label="เสาไฟกิ่งเดี่ยว"
                        value="single_pole_lamp"
                        >
                    </v-radio>
                    <v-container v-if="form.light_pole === 'single_pole_lamp'">
                      <v-text-field v-if="form.light_pole === 'single_pole_lamp'" label="">
                      </v-text-field>
                      <label>ม.</label>
                    </v-container>
                    <v-radio                        
                        label="เสาไฟกิ่งคู่"
                        value="twin_lamp_post"
                        >
                    </v-radio>
                    <v-container v-if="form.light_pole === 'twin_lamp_post'">
                      <v-text-field v-if="form.light_pole === 'twin_lamp_post'" label="">
                      </v-text-field>
                      <label>ม.</label>
                    </v-container>
                </v-radio-group>
          </v-container>
        </v-form>

        <v-form class="py-4">
          <label for="">เสาไฟสัญญาณ</label>
            <div v-for="item in lightList" :key="item" class="div-container my-2 pa-2">
              <!-- <h1>{{ item.name }}</h1> -->
              <SLPpart/>
            </div>
            <div>

              <v-btn
                class="mx-2"
                fab
                dark
                color="green"
                @click="addLightList"
              >
                <v-icon dark>
                  mdi-plus
                </v-icon>
              </v-btn>

            </div>

        </v-form>

        <v-form class="py-4">
            <label for="">ตู้ไฟสัญญาณ</label>
            <v-container>
                <label for="">ประเภทตู้ไฟสัญญาณ</label>
                <v-radio-group v-model="form.light_box">
                    <v-radio
                        label="Adaptive"
                        value="lightBox1">
                    </v-radio>
                    <v-container v-if="form.light_box === 'lightBox1'">
                        <v-radio-group v-model="form.adaptive">

                            <label for="xx">
                                <v-radio
                                label="ขดลวดเหนี่ยวนำ (Inductive loop)"
                                value="IL">
                                ></v-radio>
                                <v-radio
                                    label="ภาพวิดีโอ (Video Image processing)"
                                    value="VIP">
                                ></v-radio>
                                <v-radio
                                    label="อื่น ๆ ระบุ"
                                    value="another">
                                >
                                </v-radio>
                                <v-text-field v-if="form.adaptive === 'another'" label="อื่นๆ"></v-text-field>



                            </label>
                            <v-checkbox
                                v-model="checkbox"
                                :label="`มีการส่งข้อมูลการจราจรกลับไปที่ศูนย์ HTOC`"
                            ></v-checkbox>
                        </v-radio-group>

                        
                    </v-container>
                    <v-radio
                        label="Vehicle Actuated"
                        value="lightBox2"
                        >
                    </v-radio>
                    <v-container v-if="form.light_box === 'lightBox2'">

                        <v-radio-group v-model="form.vehicle_actuated">

                            <label for="xx">
                                <v-radio
                                label="ขดลวดเหนี่ยวนำ (Inductive loop)"
                                value="IL">
                                ></v-radio>
                                <v-radio
                                    label="ภาพวิดีโอ (Video Image processing)"
                                    value="VIP">
                                ></v-radio>
                                <v-radio
                                    label="อื่น ๆ ระบุ"
                                    value="another">
                                >
                                </v-radio>
                                <v-text-field v-if="form.vehicle_actuated === 'another'" label="อื่นๆ"></v-text-field>

                            </label>
                            <v-checkbox
                                v-model="checkbox"
                                :label="`มีการส่งข้อมูลการจราจรกลับไปที่ศูนย์ HTOC`"
                            ></v-checkbox>
                        </v-radio-group>

                    </v-container>
                    <v-radio
                        label="Fixed time"
                        value="lightBox3">
                    </v-radio>
                    <v-container v-if="form.light_box === 'lightBox3'">
                    </v-container>
                </v-radio-group>
            </v-container>
        </v-form>

        <v-radio-group>
            <label for="">ประเภทผิวจราจรเขตทางแยก</label>
                <v-radio
                    label="แอสฟัลต์"
                    value="Asphalt">
                </v-radio>
                <v-radio
                    label="คอนกรีต"
                    value="concrete">
                </v-radio>
        </v-radio-group>

        <v-radio-group>
            <label for="">ทางข้าม (ทางม้าลาย)</label>
            <v-radio-group v-model="form.crosswalkm">

              <label for="">บนสายหลัก</label>
                <v-radio
                    label="มีทางข้าม"
                    value="havecrosswalk">
                </v-radio>
                <v-radio
                    label="ไม่มีทางข้าม"
                    value="nocrosswalk">
                </v-radio>
            </v-radio-group>

            <v-radio-group v-model="form.crosswalks">

              <label for="">บนสายรอง</label>
                <v-radio
                    label="มีทางข้าม"
                    value="havecrosswalk">
                </v-radio>
                <v-radio
                    label="ไม่มีทางข้าม"
                    value="nocrosswalk">
                </v-radio>
            </v-radio-group>            
        </v-radio-group>

        <v-radio-group>
            <label for="">สะพานลอยคนข้าม</label>
            <v-radio-group v-model="form.overpassm">

              <label for="">บนสายหลัก</label>
                <v-radio
                    label="มีสะพานลอย"
                    value="overpass">
                </v-radio>
                <v-radio
                    label="ไม่มีสะพานลอย"
                    value="nooverpass">
                </v-radio>
            </v-radio-group>

            <v-radio-group v-model="form.overpasss">

              <label for="">บนสายรอง</label>
                <v-radio
                    label="มีสะพานลอย"
                    value="overpass">
                </v-radio>
                <v-radio
                    label="ไม่มีสะพานลอย"
                    value="nooverpass">
                </v-radio>
            </v-radio-group>            
        </v-radio-group>

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
    </form>
</template>
  
<script>
import SLPpart from '~/components/SLPpart'

export default {
    components:{
      SLPpart,
    },
data() {
    return {
    images: [],
    SLPlist: [
      {

      }
    ],
    lightList: [
      {
        lightBox: 1,
        type: 'full',
        hasLightHuman: true,
        hasButton: false
      }
    ],
    form: {
        name: '',
        email: '',
        schoolType: '',
        grade: '',
        district:'',
        highway_office:'',
        crossroads:'',
        junction_name:'',
        main_highway_number:'',
        main_highway_name:'',
        secondary_highway_number:'',
        secondary_highway_name:'',
        img4way:'',
        light_pole:'',
        light_box:'',
        adaptive:'',
        vehicle_actuated:'',
        crosswalkm:'',
        crosswalks:'',
        overpassm:'',
        overpasss:'',
        tunnelBridge:'',

    },
    middleSchoolGrades: ['6', '7', '8'],
    highSchoolGrades: ['9', '10', '11', '12'],
    imgSrc: null,
    districts: [ '1', '2', '3'],
    offices: [ '1', '2', '3'],
    countingTypesys: ['ขดลวดเหนี่ยวนำ (Inductive loop)', 'ภาพวิดีโอ (Video Image processing)', 'อื่น ๆ ระบุ{" "}']
    }
},
methods: {
    addSLP(){
      console.log('addSLP')
    },   
    addLightList(){
      const lightData = {
        name: 'test'
      }
      this.lightList.push(lightData)
    },
    onSubmit() {
    // Submit form data to the server
    console.log(this.form)
    },
    openFileInput() {
      this.$refs.fileInput.click()
    },
    handleImageChange(e) {
      const reader = new FileReader()
      reader.onload = (event) => {
        this.imgSrc = event.target.result
      }
      reader.readAsDataURL(e.target.files[0])
    },
    addImage() {
      // Get the image URL
      const image = "IMAGE_URL";

      // Add the image URL to the images array
      this.images.push(image);
    },
    removeImage(index) {
    this.images.splice(index, 1)
  }
}
}
</script>


<!-- <template>
    <input type="file" ref="fileInput" style="display: none;" />
</template> -->