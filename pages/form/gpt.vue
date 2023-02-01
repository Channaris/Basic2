<template>
    <v-form @submit.prevent="onSubmit">
      <div>
        <h1>กรอกข้อมูล</h1>
      </div>
      <div class="container map-margin">
  
        <MapComponent class="map-size" />
      </div>

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
                    :items="divisionList"
                    label="สำนักงานทางหลวงที่"
                    outlined
                  ></v-select>
                </v-col>

            </label>
        </v-form>

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
                    :items="dis_nameList"
                    label="แขวงทางหลวง"
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
              accept="image/png, image/jpeg, image/bmp"
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
            <div v-for="item in lightList" :key="item" class="div-container my-2 pa-2 center-element">
              <!-- <h1>{{ item.name }}</h1> -->
              <SLPpart/>
            </div>
            <div class="center-element">

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
        <v-btn type="submit" @click="onSubmit" color="info">Submit</v-btn>
    <v-card header="data">
      {{ form }}
    </v-card>
    </v-form>
</template>
  
<script>
import MapComponent from '~/components/MapComponent'
import SLPpart from '~/components/SLPpart'

export default {
    components:{
      SLPpart,
      MapComponent,
    },
data() {
    return {
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
    images: [],
    form: {
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
    divisionList: [ '520', '530', '640','152','510','550','620','155','630','610','430','440','410','420','330','320','156','310','260','90'],
    dis_nameList: [ 'ขท.เชียงใหม่ที่ 1', 'ขท.เชียงใหม่ที่ 2','ขท.ลำปางที่ 1', 'ขท.ลำพูน','ขท.แม่ฮ่องสอน', 'ขท.เชียงใหม่ที่ 3','ขท.ลำปางที่ 2', 'ขท.แพร่','ขท.เชียงรายที่ 1', 'ขท.พะเยา','ขท.น่านที่ 1','ขท.เชียงรายที่ 2', 'ขท.น่านที่ 2','ขท.มุกดาหาร', 'ขท.สกลนครที่ 1','ขท.สกลนครที่ 2 (สว่างแดนดิน)', 'ขท.บึงกาฬ','ขท.นครพนม', 'ขท.หนองคาย','ขท.ตากที่ 1', 'ขท.สุโขทัย','ขท.ตากที่ 2 (แม่สอด)','ขท.กำแพงเพชร', 'ขท.พิษณุโลกที่ 1','ขท.พิษณุโลกที่ 2 (วังทอง)', 'ขท.พิจิตร','ขท.อุตรดิตถ์ที่ 1', 'ขท.อุตรดิตถ์ที่ 2','ขท.เพชรบูรณ์ที่ 1', 'ขท.เพชรบูรณ์ที่ 2 (บึงสามพัน)','ขท.เลยที่ 1', 'ขท.เลยที่ 2 (ด่านซ้าย)','ขท.หนองบัวลำภู', 'ขท.ขอนแก่นที่ 1','ขท.อุดรธานีที่ 1', 'ขท.อุดรธานีที่ 2 (หนองหาน)','ขท.ชัยภูมิ', 'ขท.ขอนแก่นที่ 2 (ชุมแพ)','ขท.ขอนแก่นที่ 3 (บ้านไผ่)', 'ขท.มหาสารคาม','ขท.ยโสธร', 'ขท.ร้อยเอ็ด','ขท.กาฬสินธุ์', 'ขท.สุรินทร์','ขท.อุบลราชธานีที่ 1','ขท.อุบลราชธานีที่ 2', 'ขท.อำนาจเจริญ','ขท.ศรีสะเกษที่ 2', 'ขท.ศรีสะเกษที่ 1','ขท.นครราชสีมาที่ 1', 'ขท.นครราชสีมาที่ 2','ขท.นครราชสีมาที่ 3', 'ขท.บุรีรัมย์','ขท.ปราจีนบุรี', 'ขท.สระแก้ว (วัฒนานคร)','ขท.ลพบุรีที่ 1', 'ขท.สระบุรี','ขท.ลพบุรีที่ 2 (ลำนารายณ์)', 'ขท.นครสวรรค์ที่ 1','ขท.นครสวรรค์ที่ 2 (ตากฟ้า)', 'ขท.สุพรรณบุรีที่ 1','ขท.กาญจนบุรี','ขท.สุพรรณบุรีที่ 2 (อู่ทอง)', 'ขท.ชัยนาท','ขท.อุทัยธานี', 'ขท.อ่างทอง','ขท.กรุงเทพ', 'ขท.อยุธยา','ขท.นครนายก', 'ขท.สมุทรสาคร','ขท.ปทุมธานี', 'ขท.สมุทรปราการ','ขท.นนทบุรี', 'ขท.ธนบุรี','ขท.ฉะเชิงเทรา', 'ขท.ชลบุรีที่ 1','ขท.จันทบุรี', 'ขท.ตราด','ขท.ระยอง','ขท.ชลบุรีที่ 2', 'ขท.ชุมพร','ขท.ประจวบคีรีขันธ์ (หัวหิน)', 'ขท.ราชบุรี','ขท.นครปฐม', 'สำนักงานทางหลวงที่ 16 (นครศรีธรรมราช)', 'สำนักงานทางหลวงที่ 15 (ประจวบคีรีขันธ์)','ขท.สมุทรสงคราม','ขท.เพชรบุรี', 'ขท.พัทลุง', 'ขท.นครศรีธรรมราชที่ 1','ขท.สุราษฎร์ธานีที่ 1','ขท.นครศรีธรรมราชที่ 2 (ทุ่งสง)','ขท.สุราษฎร์ธานีที่ 2 (กาญจนดิษฐ์)','ขท.สุราษฎร์ธานีที่ 3 (เวียงสระ)','ขท.ตรัง','ขท.กระบี่','ขท.ภูเก็ต','ขท.พังงา','ขท.ระนอง','ขท.สงขลาที่ 1','ขท.ยะลา','ขท.ปัตตานี','ขท.นราธิวาส','ขท.สตูล','ขท.พิเศษระหว่างเมือง','ขท.พิเศษระหว่างเมือง','บริษัททางยกระดับดอนเมือง จำกัดมหาชน'],
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
    onSubmit(evt) {
      evt.preventDefault()
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

<style>
.fixed-size-img {
  width: 60px;
  height: 100px;
}

.map-size {
    width: 75%;
    height: 500px;
}
.map-margin {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 40px;
}

.center-element {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>