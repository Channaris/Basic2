<template>
  <div className="App container">
    <h1>กรอกข้อมูล</h1>
    <div className="information">
        <div className="map" id="map">

        </div>
          <div className="mb-3">

          </div>
          <div className="form" id="form">
            <div className="step1" id="step1">
              <div className="district" id="district">
                <label for="district">แขวงทางหลวง:</label>
                <select name="district" id="district">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
              <div className="highway_office" id="highway_office">
                <label for="highway_office">สำนักงานทางหลวงที่:</label>
                <select name="highway_office" id="highway_office">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </div>

              <div id="crossroads" name="crossroads">
                <label>ทางแยก</label>
                <br/>
                <label>
                  ชื่อทางแยก:
                  <input type="text" name="junction_name" />
                </label>
                <div
                  id="intersecting road details"
                  name="intersecting road details"
                >
                  รายละเอียดถนนที่ตัดกัน
                  <div id="main road" name="main road">
                    ถนนสายหลัก
                    <label>
                      หมายเลขทางหลวง:
                      <input type="text" name="highway_number" />
                    </label>
                    <label>
                      ชื่อทางหลวง:
                      <input type="text" name="highway_name" />
                    </label>
                  </div>
                  <div id="secondary road" name="secondary road">
                    ถนนสายรอง
                    <label>
                      หมายเลขทางหลวง:
                      <input type="text" name="highway_number" />
                    </label>
                    <label>
                      ชื่อทางหลวง:
                      <input type="text" name="highway_name" />
                    </label>
                  </div>
                  <div id="img4way" name="img4way">
                    ภาพแผนผังทิศทางการจราจรของ 4 แยก
                    {/* <input type="file" id="fileInput" style="display: none;" onchange="loadFile(event)"/> */}
                    <input
                      type="file"
                      id="fileInput"
                      onchange="loadFile(event)"
                    />
                    <button onclick="document.getElementById('fileInput').click()">
                      Select Image
                    </button>
                    {/* <img src=''id="output" style="max-width: 100%" alt=""/> */}
                    {/* <img src="" id="output" alt="" /> */}
                  </div>
                  {/* <script>
                        var loadFile = function(event) {
                            var output = document.getElementById('output');
                            output.src = URL.createObjectURL(event.target.files[0]);
                        };
                    </script> */}
                </div>
              </div>
            </div>

            <div className="step2" id="step2">
              <div className="light_pole" id="light_pole">
                <label for="light_pole">เสาไฟส่องสว่าง:</label>
                <div id="lighting pole options" name="lighting pole options">
                  <input
                    type="radio"
                    id="High_Mast"
                    name="light_pole"
                    value="High_Mast"
                  />
                  <label for="High_Mast">High Mast</label>
                  <input
                    type="text"
                    id="High_Mast_text"
                    name="High_Mast_text"
                  />
                  <br/>

                  <input
                    type="radio"
                    id="single_pole_lamp"
                    name="light_pole"
                    value="single_pole_lamp"
                  />
                  <label for="single_pole_lamp">Single Pole Lamp</label>
                  <input
                    type="text"
                    id="single_pole_lamp"
                    name="single_pole_lamp"
                  />
                  <br/>

                  <input
                    type="radio"
                    id="twin_lamp_post"
                    name="light_pole"
                    value="twin_lamp_post"
                  />
                  <label for="twin_lamp_post">Twin Lamp Post</label>
                  <input
                    type="text"
                    id="twin_lamp_post"
                    name="twin_lamp_post"
                  />
                  <br/>
                </div>
              </div>

              <div className="signal_light_pole" id="signal_light_pole">
                <label for="signal_light_pole">เสาไฟสัญญาณ</label>

                <div id="simple_lamp_post" className="simple_lamp_post">
                  <div className="number_simple_lamp_post" id="number_simple_lamp_post">
                    <label for="simple_lamp_post">เสาไฟธรรมดา</label>
                    <br/>
                    <label for="nearpole">เสาใกล้:</label>
                    <input
                      type="text"
                      id="simple_lamp_post_nearpole"
                      name="simple_lamp_post_nearpole"
                    />
                    <label>ต้น</label>
                    <br/>
                    <label for="simple_lamp_post_farpole">เสาไกล:</label>
                    <input
                      type="text"
                      id="simple_lamp_post_farpole"
                      name="simple_lamp_post_farpole"
                    />
                    <label>ต้น</label>
                    <br/>
                    <label for="simple_lamp_post_road_island">เกาะกลาง:</label>
                    <input
                      type="text"
                      id="simple_lamp_post_road_island"
                      name="simple_lamp_post_road_island"
                    />
                    <label>ต้น</label>
                    <br/>
                  </div>

                  <div className="type_simple_lamp_post" id="type_simple_lamp_post">
                    <label for="type_simple_lamp_post">
                      ประเภทของชุดดวงโคมภายในแยกจราจร
                    </label>
                    <br/>

                    <div id="type_simple_lamp_post_choice" name="type_simple_lamp_post_choice">

                      <div id="simple_lamp_one_row" name="simple_lamp_one_row">
                        <div>
                          {/* <img
                            src="your-image-source"
                            alt="your-image-description"
                          /> */}
                        </div>

                        <div id="simple_lamp_one_row_choice" name="simple_lamp_one_row_choice">
                          <div>
                            ชุดเต็มดวง จำนวน <input type="text" />
                            ชุด
                          </div>
                          <div>
                            ชุดลูกศร จำนวน <input type="text" />
                            ชุด
                          </div>
                          <div>
                            ทั้งสองแบบ จำนวน <input type="text" />
                            ชุด
                          </div>
                          <input
                            type="checkbox"
                            name="lfpctr_simple_lamp_one_row"
                            value="lfpctr_simple_lamp_one_row"
                            id="lfpctr_simple_lamp_one_row"
                          />
                          <label for="lfpctr_simple_lamp_one_row">
                            {" "}
                            มีสัญญาณไฟสำหรับคนเดินข้ามถนน
                          </label>
                          <br/>
                        </div>
                      </div><!-- id simple_lamp_one_row -->


                      <div id="simple_lamp_plus_r" name="simple_lamp_plus_r">
                        <div>
                          {/* <img src="your-image-source" alt="your-image-description"/> */}
                        </div>

                        <div id="simple_lamp_plus_r_choice" name="simple_lamp_plus_r_choice">
                          <div>
                            ชุดเต็มดวง จำนวน <input type="text" />
                            ชุด
                          </div>
                          <div>
                            ชุดลูกศร จำนวน <input type="text" />
                            ชุด
                          </div>
                          <div>
                            ทั้งสองแบบ จำนวน <input type="text" />
                            ชุด
                          </div>
                          <input
                            type="checkbox"
                            name="lfpctr_simple_lamp_plus_r"
                            value="lfpctr_simple_lamp_plus_r"
                            id="lfpctr_simple_lamp_plus_r"
                          />
                          <label for="lfpctr_simple_lamp_plus_r">
                            {" "}
                            มีสัญญาณไฟสำหรับคนเดินข้ามถนน
                          </label>
                          <br/>
                        </div>
                      </div>

                      <div id="simple_lamp_plus_l" name="simple_lamp_plus_l">
                        <div>
                          {/* <img
                            src="your-image-source"
                            alt="your-image-description"
                          /> */}
                        </div>

                        <div id="simple_lamp_plus_l_choice" name="simple_lamp_plus_l_choice">
                          <div>
                            ชุดเต็มดวง จำนวน <input type="text" />
                            ชุด
                          </div>
                          <div>
                            ชุดลูกศร จำนวน <input type="text" />
                            ชุด
                          </div>
                          <div>
                            ทั้งสองแบบ จำนวน <input type="text" />
                            ชุด
                          </div>
                          <input
                            type="checkbox"
                            name="lfpctr_simple_lamp_plus_l"
                            value="lfpctr_simple_lamp_plus_l"
                            id="lfpclfpctr_simple_lamp_plus_ltr"
                          />
                          <label for="lfpctr_simple_lamp_plus_l">
                            {" "}
                            มีสัญญาณไฟสำหรับคนเดินข้ามถนน
                          </label>
                          <br/>
                        </div>
                      </div>

                      <div id="simple_lamp_two_row" name="simple_lamp_two_row">
                        <div>
                          {/* <img
                            src="your-image-source"
                            alt="your-image-description"
                          /> */}
                        </div>

                        <div id="simple_lamp_two_row_choice" name="simple_lamp_two_row_choice">
                          <div>
                            ชุดเต็มดวง จำนวน <input type="text" />
                            ชุด
                          </div>
                          <div>
                            ชุดลูกศร จำนวน <input type="text" />
                            ชุด
                          </div>
                          <div>
                            ทั้งสองแบบ จำนวน <input type="text" />
                            ชุด
                          </div>
                          <input
                            type="checkbox"
                            name="lfpctr_simple_lamp_two_row"
                            value="lfpctr_simple_lamp_two_row"
                            id="lfpctr_simple_lamp_two_row"
                          />
                          <label for="vehilfpctr_simple_lamp_two_rowcle1">
                            {" "}
                            มีสัญญาณไฟสำหรับคนเดินข้ามถนน
                          </label>
                          <br/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="high_hanging_lamp_post" className="high_hanging_lamp_post">
                  <label for="simple_lamp_post">เสาไฟแบบแขวนสูง</label>
                  <br/>

                  <div className="number_high_hanging_lamp_post" id="number_high_hanging_lamp_post">
                    <label for="high_hanging_lamp_post">เสาไฟแขวนสูง</label>
                    <br/>
                    <label for="high_hanging_nearpole">เสาใกล้:</label>
                    <input
                      type="text"
                      id="high_hanging_nearpole"
                      name="high_hanging_nearpole"
                    />
                    <label>ต้น</label>
                    <br/>
                    <label for="high_hanging_farpole">เสาไกล:</label>
                    <input
                      type="text"
                      id="high_hanging_farpole"
                      name="high_hanging_farpole"
                    />
                    <label>ต้น</label>
                    <br/>
                    <label for="high_hanging_road_island">เกาะกลาง:</label>
                    <input
                      type="text"
                      id="high_hanging_road_island"
                      name="high_hanging_road_island"
                    />
                    <label>ต้น</label>
                    <br/>
                  </div>

                  <div className="type_high_hanging_lamp_post" id="type_high_hanging_lamp_post">
                    <label for="type_high_hanging_lamp_post">
                      ประเภทของชุดดวงโคมภายในแยกจราจร
                    </label>
                    <br/>

                    <div id="type_high_hanging_lamp_post_choice" name="type_high_hanging_lamp_post_choice">

                      <div id="high_hanging_lamp_one_row" name="high_hanging_lamp_one_row">
                        <div>
                          {/* <img
                            src="your-image-source"
                            alt="your-image-description"
                          /> */}
                        </div>
                        <div id="high_hanging_lamp_one_row_choice" name="high_hanging_lamp_one_row_choice">
                          <div>
                            ชุดเต็มดวง จำนวน <input type="text" />
                            ชุด
                          </div>
                          <div>
                            ชุดลูกศร จำนวน <input type="text" />
                            ชุด
                          </div>
                          <div>
                            ทั้งสองแบบ จำนวน <input type="text" />
                            ชุด
                          </div>
                          <input
                            type="checkbox"
                            name="lfpctr_high_hanging_lamp_one_row"
                            value="lfpctr_high_hanging_lamp_one_row"
                            id="lfpctr_high_hanging_lamp_one_row"
                          />
                          <label for="lfpctr_high_hanging_lamp_one_row">
                            {" "}
                            มีสัญญาณไฟสำหรับคนเดินข้ามถนน
                          </label>
                          <br/>
                        </div>
                      </div>

                      <div id="high_hanging_lamp_plus_r" name="high_hanging_lamp_plus_r">
                        <div>
                          {/* <img
                            src="your-image-source"
                            alt="your-image-description"
                          /> */}
                        </div>

                        <div id="high_hanging_lamp_plus_r_choice" name="high_hanging_lamp_plus_r_choice">
                          <div>
                            ชุดเต็มดวง จำนวน <input type="text" />
                            ชุด
                          </div>
                          <div>
                            ชุดลูกศร จำนวน <input type="text" />
                            ชุด
                          </div>
                          <div>
                            ทั้งสองแบบ จำนวน <input type="text" />
                            ชุด
                          </div>
                          <input
                            type="checkbox"
                            name="lfpctr_high_hanging_lamp_plus_r"
                            value="lfpctr_high_hanging_lamp_plus_r"
                            id="lfpctr_high_hanging_lamp_plus_r"
                          />
                          <label for="lfpctr_high_hanging_lamp_plus_r">
                            {" "}
                            มีสัญญาณไฟสำหรับคนเดินข้ามถนน
                          </label>
                          <br/>
                        </div>
                      </div>

                      <div id="high_hanging_lamp_plus_l" name="high_hanging_lamp_plus_l">
                        <div>
                          {/* <img
                            src="your-image-source"
                            alt="your-image-description"
                          /> */}
                        </div>

                        <div id="high_hanging_lamp_plus_l_choice" name="high_hanging_lamp_plus_l_choice">
                          <div>
                            ชุดเต็มดวง จำนวน <input type="text" />
                            ชุด
                          </div>
                          <div>
                            ชุดลูกศร จำนวน <input type="text" />
                            ชุด
                          </div>
                          <div>
                            ทั้งสองแบบ จำนวน <input type="text" />
                            ชุด
                          </div>
                          <input
                            type="checkbox"
                            name="lfpctr_high_hanging_lamp_plus_l"
                            value="lfpctr_high_hanging_lamp_plus_l"
                            id="lfpctr_high_hanging_lamp_plus_l"
                          />
                          <label for="lfpctr_high_hanging_lamp_plus_l">
                            {" "}
                            มีสัญญาณไฟสำหรับคนเดินข้ามถนน
                          </label>
                          <br/>
                        </div>
                      </div>

                      <div id="high_hanging_lamp_two_row" name="high_hanging_lamp_two_row">
                        <div>
                          {/* <img
                            src="your-image-source"
                            alt="your-image-description"
                          /> */}
                        </div>

                        <div id="high_hanging_lamp_two_row_choice" name="high_hanging_lamp_two_row_choice">
                          <div>
                            ชุดเต็มดวง จำนวน <input type="text" />
                            ชุด
                          </div>
                          <div>
                            ชุดลูกศร จำนวน <input type="text" />
                            ชุด
                          </div>
                          <div>
                            ทั้งสองแบบ จำนวน <input type="text" />
                            ชุด
                          </div>
                          <input
                            type="checkbox"
                            name="lfpctr_high_hanging_lamp_two_row"
                            value="lfpctr_high_hanging_lamp_two_row"
                            id="lfpctr_high_hanging_lamp_two_row"
                          />
                          <label for="lfpctr_high_hanging_lamp_two_row">
                            {" "}
                            มีสัญญาณไฟสำหรับคนเดินข้ามถนน
                          </label>
                          <br/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="street_light_pole" className="street_light_pole">
                  <label for="simple_lamp_post">เสาไฟแบบคร่อมถนน</label>
                  <br/>

                  <div className="number_street_light_pole" id="number_street_light_pole">
                    <label for="street_light_pole">เสาไฟแขวนสูง</label>
                    <br/>
                    <label for="street_light_nearpole">เสาใกล้:</label>
                    <input
                      type="text"
                      id="street_light_nearpole"
                      name="street_light_nearpole"
                    />
                    <label>ต้น</label>
                    <br/>
                    <label for="street_light_farpole">เสาไกล:</label>
                    <input
                      type="text"
                      id="street_light_farpole"
                      name="street_light_farpole"
                    />
                    <label>ต้น</label>
                    <br/>
                    <label for="street_light_road_island">เกาะกลาง:</label>
                    <input
                      type="text"
                      id="street_light_road_island"
                      name="street_light_road_island"
                    />
                    <label>ต้น</label>
                    <br/>
                  </div>

                  <div className="type_street_light_pole" id="type_street_light_pole">
                    <label for="type_street_light_pole">
                      ประเภทของชุดดวงโคมภายในแยกจราจร
                    </label>
                    <br/>

                    <div id="type_street_light_pole_choice" name="type_street_light_pole_choice">

                      <div id="street_light_pole_choice_one_row" name="street_light_pole_choice_one_row">
                        <div>
                          {/* <img
                            src="your-image-source"
                            alt="your-image-description"
                          /> */}
                        </div>

                        <div id="street_light_pole_one_row_choice" name="street_light_pole_one_row_choice">
                          <div>
                            ชุดเต็มดวง จำนวน <input type="text" />
                            ชุด
                          </div>
                          <div>
                            ชุดลูกศร จำนวน <input type="text" />
                            ชุด
                          </div>
                          <div>
                            ทั้งสองแบบ จำนวน <input type="text" />
                            ชุด
                          </div>
                          <input
                            type="checkbox"
                            name="lfpctr_street_light_pole_one_row"
                            value="lfpctr_street_light_pole_one_row"
                            id="lfpctr_street_light_pole_one_row"
                          />
                          <label for="lfpctr_street_light_pole_one_row">
                            {" "}
                            มีสัญญาณไฟสำหรับคนเดินข้ามถนน
                          </label>
                          <br/>
                        </div>
                      </div>

                      <div id="street_light_pole_plus_r" name="street_light_pole_plus_r">
                        <div>
                          {/* <img
                            src="your-image-source"
                            alt="your-image-description"
                          /> */}
                        </div>

                        <div id="street_light_pole_plus_r_choice" name="street_light_pole_plus_r_choice">
                          <div>
                            ชุดเต็มดวง จำนวน <input type="text" />
                            ชุด
                          </div>
                          <div>
                            ชุดลูกศร จำนวน <input type="text" />
                            ชุด
                          </div>
                          <div>
                            ทั้งสองแบบ จำนวน <input type="text" />
                            ชุด
                          </div>
                          <input
                            type="checkbox"
                            name="lfpctr_street_light_pole_plus_r"
                            value="lfpctr_street_light_pole_plus_r"
                            id="lfpctr_street_light_pole_plus_r"
                          />
                          <label for="lfpctr_street_light_pole_plus_r">
                            {" "}
                            มีสัญญาณไฟสำหรับคนเดินข้ามถนน
                          </label>
                          <br/>
                        </div>
                      </div>

                      <div id="street_light_pole_plus_l" name="street_light_pole_plus_l">
                        <div>
                          {/* <img
                            src="your-image-source"
                            alt="your-image-description"
                          /> */}
                        </div>

                        <div id="street_light_pole_plus_l_choice" name="street_light_pole_plus_l_choice">
                          <div>
                            ชุดเต็มดวง จำนวน <input type="text" />
                            ชุด
                          </div>
                          <div>
                            ชุดลูกศร จำนวน <input type="text" />
                            ชุด
                          </div>
                          <div>
                            ทั้งสองแบบ จำนวน <input type="text" />
                            ชุด
                          </div>
                          <input
                            type="checkbox"
                            name="lfpctr_street_light_pole_plus_l"
                            value="lfpctr_street_light_pole_plus_l"
                            id="lfpctr_street_light_pole_plus_l"
                          />
                          <label for="lfpctr_street_light_pole_plus_l">
                            {" "}
                            มีสัญญาณไฟสำหรับคนเดินข้ามถนน
                          </label>
                          <br/>
                        </div>
                      </div>

                      <div id="street_light_pole_two_row" name="street_light_pole_two_row">
                        <div>
                          {/* <img
                            src="your-image-source"
                            alt="your-image-description"
                          /> */}
                        </div>

                        <div id="street_light_pole_two_row_choice" name="street_light_pole_two_row_choice">
                          <div>
                            ชุดเต็มดวง จำนวน <input type="text" />
                            ชุด
                          </div>
                          <div>
                            ชุดลูกศร จำนวน <input type="text" />
                            ชุด
                          </div>
                          <div>
                            ทั้งสองแบบ จำนวน <input type="text" />
                            ชุด
                          </div>
                          <input
                            type="checkbox"
                            name="lfpctr_street_light_pole_two_row"
                            value="lfpctr_street_light_pole_two_row"
                            id="lfpctr_street_light_pole_two_row"
                          />
                          <label for="lfpctr_street_light_pole_two_row">
                            {" "}
                            มีสัญญาณไฟสำหรับคนเดินข้ามถนน
                          </label>
                          <br/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="other_struct_pole" className="other_struct_pole">
                  <label for="simple_lamp_post">
                    เติดตั้งเสาไฟบนโครงสร้างอื่น
                  </label>
                  <br/>

                  <div className="number_other_struct_pole" id="number_other_struct_pole">
                    <label for="number_other_struct_pole">เสาไฟแขวนสูง</label>
                    <br/>
                    <label for="other_struct_nearpole">เสาใกล้:</label>
                    <input
                      type="text"
                      id="other_struct_nearpole"
                      name="other_struct_nearpole"
                    />
                    <label>ต้น</label>
                    <br/>
                    <label for="other_struct_farpole">เสาไกล:</label>
                    <input
                      type="text"
                      id="other_struct_farpole"
                      name="other_struct_farpole"
                    />
                    <label>ต้น</label>
                    <br/>
                    <label for="other_struct_road_island">เกาะกลาง:</label>
                    <input
                      type="text"
                      id="other_struct_road_island"
                      name="other_struct_road_island"
                    />
                    <label>ต้น</label>
                    <br/>
                  </div>

                  <div className="type_number_other_struct_pole" id="type_number_other_struct_pole">
                    <label for="type_other_struct_pole">
                      ประเภทของชุดดวงโคมภายในแยกจราจร
                    </label>
                    <br/>

                    <div id="type_other_struct_pole_choice" name="type_other_struct_pole_choice">

                      <div id="other_struct_pole_choice_one_row" name="other_struct_pole_choice_one_row">
                        <div>
                          {/* <img
                            src="your-image-source"
                            alt="your-image-description"
                          /> */}
                        </div>

                        <div id="other_struct_pole_one_row_choice" name="other_struct_pole_one_row_choice">
                          <div>
                            ชุดเต็มดวง จำนวน <input type="text" />
                            ชุด
                          </div>
                          <div>
                            ชุดลูกศร จำนวน <input type="text" />
                            ชุด
                          </div>
                          <div>
                            ทั้งสองแบบ จำนวน <input type="text" />
                            ชุด
                          </div>
                          <input
                            type="checkbox"
                            name="lfpctr_other_struct_pole_one_row"
                            value="lfpctr_other_struct_pole_one_row"
                            id="lfpctr_other_struct_pole_one_row"
                          />
                          <label for="lfpctr_other_struct_pole_one_row">
                            {" "}
                            มีสัญญาณไฟสำหรับคนเดินข้ามถนน
                          </label>
                          <br/>
                        </div>
                      </div>

                      <div id="other_struct_pole_plus_r" name="other_struct_pole_plus_r">
                        <div>
                          {/* <img
                            src="your-image-source"
                            alt="your-image-description"
                          /> */}
                        </div>

                        <div id="other_struct_pole_plus_r_choice" name="other_struct_pole_plus_r_choice">
                          <div>
                            ชุดเต็มดวง จำนวน <input type="text" />
                            ชุด
                          </div>
                          <div>
                            ชุดลูกศร จำนวน <input type="text" />
                            ชุด
                          </div>
                          <div>
                            ทั้งสองแบบ จำนวน <input type="text" />
                            ชุด
                          </div>
                          <input
                            type="checkbox"
                            name="lfpctr_other_struct_pole_plus_r"
                            value="lfpctr_other_struct_pole_plus_r"
                            id="lfpctr_other_struct_pole_plus_r"
                          />
                          <label for="lfpctr_other_struct_pole_plus_r">
                            {" "}
                            มีสัญญาณไฟสำหรับคนเดินข้ามถนน
                          </label>
                          <br/>
                        </div>
                      </div>

                      <div id="other_struct_pole_plus_l" name="other_struct_pole_plus_l">
                        <div>
                          {/* <img
                            src="your-image-source"
                            alt="your-image-description"
                          /> */}
                        </div>

                        <div id="other_struct_pole_plus_l_choice" name="other_struct_pole_plus_l_choice">
                          <div>
                            ชุดเต็มดวง จำนวน <input type="text" />
                            ชุด
                          </div>
                          <div>
                            ชุดลูกศร จำนวน <input type="text" />
                            ชุด
                          </div>
                          <div>
                            ทั้งสองแบบ จำนวน <input type="text" />
                            ชุด
                          </div>
                          <input
                            type="checkbox"
                            name="lfpctr_other_struct_pole_plus_l"
                            value="lfpctr_other_struct_pole_plus_l"
                            id="lfpctr_other_struct_pole_plus_l"
                          />
                          <label for="lfpctr_other_struct_pole_plus_l">
                            {" "}
                            มีสัญญาณไฟสำหรับคนเดินข้ามถนน
                          </label>
                          <br/>
                        </div>
                      </div>

                      <div id="other_struct_pole_two_row" name="other_struct_pole_two_row">
                        <div>
                          {/* <img
                            src="your-image-source"
                            alt="your-image-description"
                          /> */}
                        </div>

                        <div id="other_struct_pole_two_row_choice" name="other_struct_pole_two_row_choice">
                          <div>
                            ชุดเต็มดวง จำนวน <input type="text" />
                            ชุด
                          </div>
                          <div>
                            ชุดลูกศร จำนวน <input type="text" />
                            ชุด
                          </div>
                          <div>
                            ทั้งสองแบบ จำนวน <input type="text" />
                            ชุด
                          </div>
                          <input
                            type="checkbox"
                            name="lfpctr_other_struct_pole_two_row"
                            value="lfpctr_other_struct_pole_two_row"
                            id="lfpctr_other_struct_pole_two_row"
                          />
                          <label for="lfpctr_other_struct_pole_two_row">
                            {" "}
                            มีสัญญาณไฟสำหรับคนเดินข้ามถนน
                          </label>
                          <br/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="light_box" id="light_box">
                <div className="type_light_box" id="type_light_box">
                  <label for="light_box">ประเภทตู้ไฟสัญญาณ</label>
                  <br/>

                  <div id="light_box_type_choice" name="light_box_type_choice">
                    <div className="adaptive" id="adaptive">
                      <input
                        type="radio"
                        id="Adaptive_radio"
                        name="light_box"
                        value="Adaptive_radio"
                      />
                      <label for="Adaptive">Adaptive</label>
                      <div id="Adaptive_choice" name="Adaptive_choice">
                        <input
                          type="radio"
                          id="Adaptive_Inductive_loop"
                          name="Adaptive_choice"
                          value="Adaptive_Inductive_loop"
                        />
                        <label for="Adaptive_Inductive_loop">
                          Inductive loop
                        </label>
                        <br/>
                        <input
                          type="radio"
                          id="Adaptive_VIP"
                          name="Adaptive_choice"
                          value="Adaptive_VIP"
                        />
                        <label for="Adaptive_VIP">Video Image processing</label>
                        <br/>
                        <input
                          type="radio"
                          id="Adaptive_other"
                          name="Adaptive_choice"
                          value="Adaptive_other"
                        />
                        <label for="Adaptive_other">อื่น ๆ ระบุ</label>{" "}
                        <input
                          type="text"
                          id="Adaptive_other_text"
                          name="Adaptive_other_text"
                        />
                        <br/>
                        <input
                          type="checkbox"
                          name="Adaptive"
                          value="Adaptive"
                        />
                        <label for="Adaptive_HTOC">
                          มีการส่งข้อมูลกลับไปที่ศูนย์ HTOC
                        </label>
                        <br/>
                      </div>
                    </div>

                    <div className="Vehucle_Actuated" id="Vehucle_Actuated">
                      <input
                        type="radio"
                        id="Vehucle_Actuated_radio"
                        name="light_box"
                        value="Vehucle_Actuated_radio"
                      />
                      <label for="Vehucle_Actuated">Vehucle Actuated</label>
                      <div id="Vehucle_Actuated_choice" name="Vehucle_Actuated_choice">
                        <input
                          type="radio"
                          id="Vehucle_Actuated_Inductive_loop"
                          name="Vehucle_Actuated_choice"
                          value="Vehucle_Actuated_Inductive_loop"
                        />
                        <label for="Vehucle_Actuated_Inductive_loop">
                          Inductive loop
                        </label>
                        <br/>
                        <input
                          type="radio"
                          id="Vehucle_Actuated_VIP"
                          name="Vehucle_Actuated_choice"
                          value="Vehucle_Actuated_VIP"
                        />
                        <label for="Vehucle_Actuated_VIP">
                          Video Image processing
                        </label>
                        <br/>
                        <input
                          type="radio"
                          id="Vehucle_Actuated_other"
                          name="Vehucle_Actuated_choice"
                          value="Vehucle_Actuated_other"
                        />
                        <label for="Vehucle_Actuated_other">อื่น ๆ ระบุ</label>{" "}
                        <input
                          type="text"
                          id="Vehucle_Actuated_other_text"
                          name="Vehucle_Actuated_other_text"
                        />
                        <br/>
                        <input
                          type="checkbox"
                          name="Vehucle_Actuated_HTOC"
                          value="Vehucle_Actuated_HTOC"
                        />
                        <label for="Vehucle_Actuated_HTOC">
                          มีการส่งข้อมูลกลับไปที่ศูนย์ HTOC
                        </label>
                        <br/>
                      </div>
                    </div>

                    <div className="fixed_time" id="fixed_time">
                      <input
                        type="radio"
                        id="fixed_time_radio"
                        name="light_box"
                        value="fixed_time_radio"
                      />
                      <label for="fixed_time">Fixed time</label>
                      <div id="fixed_time_choice" name="fixed_time_choice">
                        <input
                          type="radio"
                          id="fixed_time_Inductive_loop"
                          name="fixed_time_choice"
                          value="fixed_time_Inductive_loop"
                        />
                        <label for="fixed_time_Inductive_loop">
                          Inductive loop
                        </label>
                        <br/>
                        <input
                          type="radio"
                          id="fixed_time_VIP"
                          name="fixed_time_choice"
                          value="fixed_time_VIP"
                        />
                        <label for="fixed_time_VIP">
                          Video Image processing
                        </label>
                        <br/>
                        <input
                          type="radio"
                          id="fixed_time_other"
                          name="fixed_time_choice"
                          value="fixed_time_other"
                        />
                        <label for="fixed_time_other">อื่น ๆ ระบุ</label>{" "}
                        <input
                          type="text"
                          id="fixed_time_other_text"
                          name="fixed_time_other_text"
                        />
                        <br/>
                        <input
                          type="checkbox"
                          id="fixed_time_HTOC"
                          name="fixed_time_HTOC"
                          value="fixed_time_HTOC"
                        />
                        <label for="fixed_time_HTOC">
                          มีการส่งข้อมูลกลับไปที่ศูนย์ HTOC
                        </label>
                        <br/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="surface" name="surface">
                <label for="surface">ประเภทผิวจราจรทางแยก</label>
                <br/>
                <div className="surface_choice" id="fixed_time_choice">
                  <input
                    type="radio"
                    id="asphalt_radio"
                    name="asphalt_radio"
                    value="asphalt_radio"
                  />
                  <label for="asphalt">แอสฟัลต์</label>
                  <input
                    type="radio"
                    id="concrete_radio"
                    name="concrete_radio"
                    value="concrete_radio"
                  />
                  <label for="concrete">คอนกรีต</label>
                </div>
              </div>

              <div id="crosswalk" name="crosswalk">
                <label for="crosswalk">ทางข้าม (ทางม้าลาย)</label>
                <br/>
                <div className="crosswalk_choice" id="crosswalk_choice">
                  <input
                    type="radio"
                    id="have_crosswalk_radio_radio"
                    name="have_crosswalk_radio"
                    value="have_crosswalk_radio"
                  />
                  <label for="have_crosswalk">มีทางม้าลาย</label>
                  <input
                    type="radio"
                    id="no_crosswalk_radio"
                    name="no_crosswalk_radio"
                    value="no_crosswalk_radio"
                  />
                  <label for="no_crosswalk">ไม่มีทางม้าลาย</label>
                </div>
              </div>

              <div id="overpass" name="overpass">
                <label for="overpass">สะพานลอยคนข้าม</label>
                <br/>
                <div className="overpass_choice" id="overpass_choice">
                  <input
                    type="radio"
                    id="have_overpass_radio_radio"
                    name="have_overpass_radio"
                    value="have_overpass_radio"
                  />
                  <label for="have_overpass">มีสะพานลอย</label>
                  <input
                    type="radio"
                    id="no_overpass_radio"
                    name="no_overpass_radio"
                    value="no_overpass_radio"
                  />
                  <label for="no_overpass">ไม่มีสะพานลอย</label>
                </div>
              </div>

              <div id="tunnel_cross_bridge" name="tunnel_cross_bridge">
                <label for="tunnel_cross_bridge">อุโมงค์หรือสะพานข้ามแยก</label>
                <br/>
                <div
                  className="tunnel_cross_bridge_choice"
                  id="tunnel_cross_bridge_choice"
                >
                  <input
                    type="radio"
                    id="main_line_radio"
                    name="main_line_radio"
                    value="main_line_radio"
                  />
                  <label for="main_line">บนสายหลัก</label>
                  <input
                    type="radio"
                    id="secondary_line_radio"
                    name="secondary_line_radio"
                    value="secondary_line_radio"
                  />
                  <label for="secondary_line">บนสายรอง</label>
                </div>
              </div>
            </div>
          </div>
        <button className = "btn btn-primary">เพิ่ม</button>

        <div className = "employee">
          
          <button @click="log_console">View Message</button>
          <button class="btn btn-primary" @click="console.log('onclick console.log')">onclick</button>
          <button class="btn btn-primary" @click="() => console.log('() => console.log')">onClick</button>
          <button class="btn btn-primary" @click="console.log('onClick')">console</button>
          <button class="btn btn-primary" @click="getEmployees">getEmployees</button>
          <button class="btn btn-primary" @click="() => console.log('1111111111111111111111111111111')">getEmployees</button>
          <div v-for="(val, key) in employeeList" :key="val.id">
            <p>asfdsahfsjf</p>
            <div class="employee card">
              <div class="card-body text-left">
                <p class="card-text">Name: {{ val.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    <button @click="getEmployees">Get Employees</button>
    <ul>
      <li v-for="employee in employeeList" :key="employee.id">{{ employee.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      employeeList: []
    }
  },
  methods: {
    async getEmployees() {
      const { data } = await axios.get('http://localhost:3001/employees')
      this.employeeList = data
    },
    log_console(){
      console.log("log_console")
    }
  }
}
</script>
