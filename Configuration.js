function getConfiguration(config)
{
  // Esta función permite indicar valores de configuración generales para 
  // todos los dispositivos de este modelo.
  
  // Dependiendo del significado de la "dirección del dispositivo" en este 
  // dispositivo, es posible que desee cambiar la etiqueta que se utiliza 
  // para hacer referencia a la dirección en la interfaz de usuario.
  // Por ejemplo, si la dirección del dispositivo es en realidad una dirección 
  // MAC, es posible que desee utilizar el código siguiente.
  
  config.addressLabel = {en: "MAC", es: "MAC"};
}

function getEndpoints(deviceAddress, endpoints) {
var e1 = endpoints.addEndpoint("1", "Hora 1", endpointType.genericSensor);
e1.variableTypeId = 1396;
var e2 = endpoints.addEndpoint("2", "Hora 2", endpointType.genericSensor);
e2.variableTypeId = 1396;
var e3 = endpoints.addEndpoint("3", "Hora 3", endpointType.genericSensor);
e3.variableTypeId = 1396;
var e4 = endpoints.addEndpoint("4", "Hora 4", endpointType.genericSensor);
e4.variableTypeId = 1396;
var e5 = endpoints.addEndpoint("5", "Hora 5", endpointType.genericSensor);
e5.variableTypeId = 1396;
var e6 = endpoints.addEndpoint("6", "Hora 6", endpointType.genericSensor);
e6.variableTypeId = 1396;
var e7 = endpoints.addEndpoint("7", "Hora 7", endpointType.genericSensor);
e7.variableTypeId = 1396;
var e8 = endpoints.addEndpoint("8", "Hora 8", endpointType.genericSensor);
e8.variableTypeId = 1396;
var e9 = endpoints.addEndpoint("9", "Hora 9", endpointType.genericSensor);
e9.variableTypeId = 1396;
var e10 = endpoints.addEndpoint("10", "Hora 10", endpointType.genericSensor);
e10.variableTypeId = 1396;
var e11 = endpoints.addEndpoint("11", "Hora 11", endpointType.genericSensor);
e11.variableTypeId = 1396;
var e12 = endpoints.addEndpoint("12", "Hora 12", endpointType.genericSensor);
e12.variableTypeId = 1396;
var e13 = endpoints.addEndpoint("13", "Hora 13", endpointType.genericSensor);
e13.variableTypeId = 1396;
var e14 = endpoints.addEndpoint("14", "Hora 14", endpointType.genericSensor);
e14.variableTypeId = 1396;
var e15 = endpoints.addEndpoint("15", "Hora 15", endpointType.genericSensor);
e15.variableTypeId = 1396;
var e16 = endpoints.addEndpoint("16", "Hora 16", endpointType.genericSensor);
e16.variableTypeId = 1396;
var e17 = endpoints.addEndpoint("17", "Hora 17", endpointType.genericSensor);
e17.variableTypeId = 1396;
var e18 = endpoints.addEndpoint("18", "Hora 18", endpointType.genericSensor);
e18.variableTypeId = 1396;
var e19 = endpoints.addEndpoint("19", "Hora 19", endpointType.genericSensor);
e19.variableTypeId = 1396;
var e20 = endpoints.addEndpoint("20", "Hora 20", endpointType.genericSensor);
e20.variableTypeId = 1396;
var e21 = endpoints.addEndpoint("21", "Hora 21", endpointType.genericSensor);
e21.variableTypeId = 1396;
var e22 = endpoints.addEndpoint("22", "Hora 22", endpointType.genericSensor);
e22.variableTypeId = 1396;
var e23 = endpoints.addEndpoint("23", "Hora 23", endpointType.genericSensor);
e23.variableTypeId = 1396;
var e24 = endpoints.addEndpoint("24", "Hora 24", endpointType.genericSensor);
e24.variableTypeId = 1396;
//EndpointTemp1
var e25 = endpoints.addEndpoint("25", "Temperatura 25", endpointType.genericSensor);
e25.variableTypeId = 1397;
var e26 = endpoints.addEndpoint("26", "Temperatura 26", endpointType.genericSensor);
e26.variableTypeId = 1397;
var e27 = endpoints.addEndpoint("27", "Temperatura 27", endpointType.genericSensor);
e27.variableTypeId = 1397;
var e28 = endpoints.addEndpoint("28", "Temperatura 28", endpointType.genericSensor);
e28.variableTypeId = 1397;
var e29 = endpoints.addEndpoint("29", "Temperatura 29", endpointType.genericSensor);
e29.variableTypeId = 1397;
var e30 = endpoints.addEndpoint("30", "Temperatura 30", endpointType.genericSensor);
e30.variableTypeId = 1397;
var e31 = endpoints.addEndpoint("31", "Temperatura 31", endpointType.genericSensor);
e31.variableTypeId = 1397;
var e32 = endpoints.addEndpoint("32", "Temperatura 32", endpointType.genericSensor);
e32.variableTypeId = 1397;
var e33 = endpoints.addEndpoint("33", "Temperatura 33", endpointType.genericSensor);
e33.variableTypeId = 1397;
var e34 = endpoints.addEndpoint("34", "Temperatura 34", endpointType.genericSensor);
e34.variableTypeId = 1397;
var e35 = endpoints.addEndpoint("35", "Temperatura 35", endpointType.genericSensor);
e35.variableTypeId = 1397;
var e36 = endpoints.addEndpoint("36", "Temperatura 36", endpointType.genericSensor);
e36.variableTypeId = 1397;
var e37 = endpoints.addEndpoint("37", "Temperatura 37", endpointType.genericSensor);
e37.variableTypeId = 1397;
var e38 = endpoints.addEndpoint("38", "Temperatura 38", endpointType.genericSensor);
e38.variableTypeId = 1397;
var e39 = endpoints.addEndpoint("39", "Temperatura 39", endpointType.genericSensor);
e39.variableTypeId = 1397;
var e40 = endpoints.addEndpoint("40", "Temperatura 40", endpointType.genericSensor);
e40.variableTypeId = 1397;
var e41 = endpoints.addEndpoint("41", "Temperatura 41", endpointType.genericSensor);
e41.variableTypeId = 1397;
var e42 = endpoints.addEndpoint("42", "Temperatura 42", endpointType.genericSensor);
e42.variableTypeId = 1397;
var e43 = endpoints.addEndpoint("43", "Temperatura 43", endpointType.genericSensor);
e43.variableTypeId = 1397;
var e44 = endpoints.addEndpoint("44", "Temperatura 44", endpointType.genericSensor);
e44.variableTypeId = 1397;
var e45 = endpoints.addEndpoint("45", "Temperatura 45", endpointType.genericSensor);
e45.variableTypeId = 1397;
var e46 = endpoints.addEndpoint("46", "Temperatura 46", endpointType.genericSensor);
e46.variableTypeId = 1397;
var e47 = endpoints.addEndpoint("47", "Temperatura 47", endpointType.genericSensor);
e47.variableTypeId = 1397;
var e48 = endpoints.addEndpoint("48", "Temperatura 48", endpointType.genericSensor);
e48.variableTypeId = 1397;
//EndpointTemp2
var e49 = endpoints.addEndpoint("49", "Temperatura 49", endpointType.genericSensor);
e49.variableTypeId = 1397;
var e50 = endpoints.addEndpoint("50", "Temperatura 50", endpointType.genericSensor);
e50.variableTypeId = 1397;
var e51 = endpoints.addEndpoint("51", "Temperatura 51", endpointType.genericSensor);
e51.variableTypeId = 1397;
var e52 = endpoints.addEndpoint("52", "Temperatura 52", endpointType.genericSensor);
e52.variableTypeId = 1397;
var e53 = endpoints.addEndpoint("53", "Temperatura 53", endpointType.genericSensor);
e53.variableTypeId = 1397;
var e54 = endpoints.addEndpoint("54", "Temperatura 54", endpointType.genericSensor);
e54.variableTypeId = 1397;
var e55 = endpoints.addEndpoint("55", "Temperatura 55", endpointType.genericSensor);
e55.variableTypeId = 1397;
var e56 = endpoints.addEndpoint("56", "Temperatura 56", endpointType.genericSensor);
e56.variableTypeId = 1397;
var e57 = endpoints.addEndpoint("57", "Temperatura 57", endpointType.genericSensor);
e57.variableTypeId = 1397;
var e58 = endpoints.addEndpoint("58", "Temperatura 58", endpointType.genericSensor);
e58.variableTypeId = 1397;
var e59 = endpoints.addEndpoint("59", "Temperatura 59", endpointType.genericSensor);
e59.variableTypeId = 1397;
var e60 = endpoints.addEndpoint("60", "Temperatura 60", endpointType.genericSensor);
e60.variableTypeId = 1397;
var e61 = endpoints.addEndpoint("61", "Temperatura 61", endpointType.genericSensor);
e61.variableTypeId = 1397;
var e62 = endpoints.addEndpoint("62", "Temperatura 62", endpointType.genericSensor);
e62.variableTypeId = 1397;
var e63 = endpoints.addEndpoint("63", "Temperatura 63", endpointType.genericSensor);
e63.variableTypeId = 1397;
var e64 = endpoints.addEndpoint("64", "Temperatura 64", endpointType.genericSensor);
e64.variableTypeId = 1397;
var e65 = endpoints.addEndpoint("65", "Temperatura 65", endpointType.genericSensor);
e65.variableTypeId = 1397;
var e66 = endpoints.addEndpoint("66", "Temperatura 66", endpointType.genericSensor);
e66.variableTypeId = 1397;
var e67 = endpoints.addEndpoint("67", "Temperatura 67", endpointType.genericSensor);
e67.variableTypeId = 1397;
var e68 = endpoints.addEndpoint("68", "Temperatura 68", endpointType.genericSensor);
e68.variableTypeId = 1397;
var e69 = endpoints.addEndpoint("69", "Temperatura 69", endpointType.genericSensor);
e69.variableTypeId = 1397;
var e70 = endpoints.addEndpoint("70", "Temperatura 70", endpointType.genericSensor);
e70.variableTypeId = 1397;
var e71 = endpoints.addEndpoint("71", "Temperatura 71", endpointType.genericSensor);
e71.variableTypeId = 1397;
var e72 = endpoints.addEndpoint("72", "Temperatura 72", endpointType.genericSensor);
e72.variableTypeId = 1397;
//EndpointTemp3
var e73 = endpoints.addEndpoint("73", "Temperatura 73", endpointType.genericSensor);
e73.variableTypeId = 1397;
var e74 = endpoints.addEndpoint("74", "Temperatura 74", endpointType.genericSensor);
e74.variableTypeId = 1397;
var e75 = endpoints.addEndpoint("75", "Temperatura 75", endpointType.genericSensor);
e75.variableTypeId = 1397;
var e76 = endpoints.addEndpoint("76", "Temperatura 76", endpointType.genericSensor);
e76.variableTypeId = 1397;
var e77 = endpoints.addEndpoint("77", "Temperatura 77", endpointType.genericSensor);
e77.variableTypeId = 1397;
var e78 = endpoints.addEndpoint("78", "Temperatura 78", endpointType.genericSensor);
e78.variableTypeId = 1397;
var e79 = endpoints.addEndpoint("79", "Temperatura 79", endpointType.genericSensor);
e79.variableTypeId = 1397;
var e80 = endpoints.addEndpoint("80", "Temperatura 80", endpointType.genericSensor);
e80.variableTypeId = 1397;
var e81 = endpoints.addEndpoint("81", "Temperatura 81", endpointType.genericSensor);
e81.variableTypeId = 1397;
var e82 = endpoints.addEndpoint("82", "Temperatura 82", endpointType.genericSensor);
e82.variableTypeId = 1397;
var e83 = endpoints.addEndpoint("83", "Temperatura 83", endpointType.genericSensor);
e83.variableTypeId = 1397;
var e84 = endpoints.addEndpoint("84", "Temperatura 84", endpointType.genericSensor);
e84.variableTypeId = 1397;
var e85 = endpoints.addEndpoint("85", "Temperatura 85", endpointType.genericSensor);
e85.variableTypeId = 1397;
var e86 = endpoints.addEndpoint("86", "Temperatura 86", endpointType.genericSensor);
e86.variableTypeId = 1397;
var e87 = endpoints.addEndpoint("87", "Temperatura 87", endpointType.genericSensor);
e87.variableTypeId = 1397;
var e88 = endpoints.addEndpoint("88", "Temperatura 88", endpointType.genericSensor);
e88.variableTypeId = 1397;
var e89 = endpoints.addEndpoint("89", "Temperatura 89", endpointType.genericSensor);
e89.variableTypeId = 1397;
var e90 = endpoints.addEndpoint("90", "Temperatura 90", endpointType.genericSensor);
e90.variableTypeId = 1397;
var e91 = endpoints.addEndpoint("91", "Temperatura 91", endpointType.genericSensor);
e91.variableTypeId = 1397;
var e92 = endpoints.addEndpoint("92", "Temperatura 92", endpointType.genericSensor);
e92.variableTypeId = 1397;
var e93 = endpoints.addEndpoint("93", "Temperatura 93", endpointType.genericSensor);
e93.variableTypeId = 1397;
var e94 = endpoints.addEndpoint("94", "Temperatura 94", endpointType.genericSensor);
e94.variableTypeId = 1397;
var e95 = endpoints.addEndpoint("95", "Temperatura 95", endpointType.genericSensor);
e95.variableTypeId = 1397;
var e96 = endpoints.addEndpoint("96", "Temperatura 96", endpointType.genericSensor);
e96.variableTypeId = 1397;
//EndpointTemp4
var e97 = endpoints.addEndpoint("97", "Temperatura 97", endpointType.genericSensor);
e97.variableTypeId = 1397;
var e98 = endpoints.addEndpoint("98", "Temperatura 98", endpointType.genericSensor);
e98.variableTypeId = 1397;
var e99 = endpoints.addEndpoint("99", "Temperatura 99", endpointType.genericSensor);
e99.variableTypeId = 1397;
var e100 = endpoints.addEndpoint("100", "Temperatura 100", endpointType.genericSensor);
e100.variableTypeId = 1397;
var e101 = endpoints.addEndpoint("101", "Temperatura 101", endpointType.genericSensor);
e101.variableTypeId = 1397;
var e102 = endpoints.addEndpoint("102", "Temperatura 102", endpointType.genericSensor);
e102.variableTypeId = 1397;
var e103 = endpoints.addEndpoint("103", "Temperatura 103", endpointType.genericSensor);
e103.variableTypeId = 1397;
var e104 = endpoints.addEndpoint("104", "Temperatura 104", endpointType.genericSensor);
e104.variableTypeId = 1397;
var e105 = endpoints.addEndpoint("105", "Temperatura 105", endpointType.genericSensor);
e105.variableTypeId = 1397;
var e106 = endpoints.addEndpoint("106", "Temperatura 106", endpointType.genericSensor);
e106.variableTypeId = 1397;
var e107 = endpoints.addEndpoint("107", "Temperatura 107", endpointType.genericSensor);
e107.variableTypeId = 1397;
var e108 = endpoints.addEndpoint("108", "Temperatura 108", endpointType.genericSensor);
e108.variableTypeId = 1397;
var e109 = endpoints.addEndpoint("109", "Temperatura 109", endpointType.genericSensor);
e109.variableTypeId = 1397;
var e110 = endpoints.addEndpoint("110", "Temperatura 110", endpointType.genericSensor);
e110.variableTypeId = 1397;
var e111 = endpoints.addEndpoint("111", "Temperatura 111", endpointType.genericSensor);
e111.variableTypeId = 1397;
var e112 = endpoints.addEndpoint("112", "Temperatura 112", endpointType.genericSensor);
e112.variableTypeId = 1397;
var e113 = endpoints.addEndpoint("113", "Temperatura 113", endpointType.genericSensor);
e113.variableTypeId = 1397;
var e114 = endpoints.addEndpoint("114", "Temperatura 114", endpointType.genericSensor);
e114.variableTypeId = 1397;
var e115 = endpoints.addEndpoint("115", "Temperatura 115", endpointType.genericSensor);
e115.variableTypeId = 1397;
var e116 = endpoints.addEndpoint("116", "Temperatura 116", endpointType.genericSensor);
e116.variableTypeId = 1397;
var e117 = endpoints.addEndpoint("117", "Temperatura 117", endpointType.genericSensor);
e117.variableTypeId = 1397;
var e118 = endpoints.addEndpoint("118", "Temperatura 118", endpointType.genericSensor);
e118.variableTypeId = 1397;
var e119 = endpoints.addEndpoint("119", "Temperatura 119", endpointType.genericSensor);
e119.variableTypeId = 1397;
var e120 = endpoints.addEndpoint("120", "Temperatura 120", endpointType.genericSensor);
e120.variableTypeId = 1397;
//EndpointTemp5
var e121 = endpoints.addEndpoint("121", "Temperatura 121", endpointType.genericSensor);
e121.variableTypeId = 1397;
var e122 = endpoints.addEndpoint("122", "Temperatura 122", endpointType.genericSensor);
e122.variableTypeId = 1397;
var e123 = endpoints.addEndpoint("123", "Temperatura 123", endpointType.genericSensor);
e123.variableTypeId = 1397;
var e124 = endpoints.addEndpoint("124", "Temperatura 124", endpointType.genericSensor);
e124.variableTypeId = 1397;
var e125 = endpoints.addEndpoint("125", "Temperatura 125", endpointType.genericSensor);
e125.variableTypeId = 1397;
var e126 = endpoints.addEndpoint("126", "Temperatura 126", endpointType.genericSensor);
e126.variableTypeId = 1397;
var e127 = endpoints.addEndpoint("127", "Temperatura 127", endpointType.genericSensor);
e127.variableTypeId = 1397;
var e128 = endpoints.addEndpoint("128", "Temperatura 128", endpointType.genericSensor);
e128.variableTypeId = 1397;
var e129 = endpoints.addEndpoint("129", "Temperatura 129", endpointType.genericSensor);
e129.variableTypeId = 1397;
var e130 = endpoints.addEndpoint("130", "Temperatura 130", endpointType.genericSensor);
e130.variableTypeId = 1397;
var e132 = endpoints.addEndpoint("131", "Temperatura 131", endpointType.genericSensor);
e132.variableTypeId = 1397;
var e133 = endpoints.addEndpoint("132", "Temperatura 132", endpointType.genericSensor);
e133.variableTypeId = 1397;
var e134 = endpoints.addEndpoint("133", "Temperatura 133", endpointType.genericSensor);
e134.variableTypeId = 1397;
var e135 = endpoints.addEndpoint("134", "Temperatura 134", endpointType.genericSensor);
e135.variableTypeId = 1397;
var e136 = endpoints.addEndpoint("135", "Temperatura 135", endpointType.genericSensor);
e136.variableTypeId = 1397;
var e137 = endpoints.addEndpoint("136", "Temperatura 136", endpointType.genericSensor);
e137.variableTypeId = 1397;
var e138 = endpoints.addEndpoint("137", "Temperatura 137", endpointType.genericSensor);
e138.variableTypeId = 1397;
var e139 = endpoints.addEndpoint("138", "Temperatura 138", endpointType.genericSensor);
e139.variableTypeId = 1397;
var e140 = endpoints.addEndpoint("139", "Temperatura 139", endpointType.genericSensor);
e140.variableTypeId = 1397;
var e142 = endpoints.addEndpoint("140", "Temperatura 140", endpointType.genericSensor);
e142.variableTypeId = 1397;
var e143 = endpoints.addEndpoint("141", "Temperatura 141", endpointType.genericSensor);
e143.variableTypeId = 1397;
var e144 = endpoints.addEndpoint("142", "Temperatura 142", endpointType.genericSensor);
e144.variableTypeId = 1397;
var e145 = endpoints.addEndpoint("143", "Temperatura 143", endpointType.genericSensor);
e145.variableTypeId = 1397;
var e146 = endpoints.addEndpoint("144", "Temperatura 144", endpointType.genericSensor);
e146.variableTypeId = 1397;
//EndpointTemp6
var e147 = endpoints.addEndpoint("145", "Temperatura 145", endpointType.genericSensor);
e147.variableTypeId = 1397;
var e148 = endpoints.addEndpoint("146", "Temperatura 146", endpointType.genericSensor);
e148.variableTypeId = 1397;
var e149 = endpoints.addEndpoint("147", "Temperatura 147", endpointType.genericSensor);
e149.variableTypeId = 1397;
var e150 = endpoints.addEndpoint("148", "Temperatura 148", endpointType.genericSensor);
e150.variableTypeId = 1397;
var e151 = endpoints.addEndpoint("149", "Temperatura 149", endpointType.genericSensor);
e151.variableTypeId = 1397;
var e152 = endpoints.addEndpoint("150", "Temperatura 150", endpointType.genericSensor);
e152.variableTypeId = 1397;
var e153 = endpoints.addEndpoint("151", "Temperatura 151", endpointType.genericSensor);
e153.variableTypeId = 1397;
var e154 = endpoints.addEndpoint("152", "Temperatura 152", endpointType.genericSensor);
e154.variableTypeId = 1397;
var e155 = endpoints.addEndpoint("153", "Temperatura 153", endpointType.genericSensor);
e155.variableTypeId = 1397;
var e156 = endpoints.addEndpoint("154", "Temperatura 154", endpointType.genericSensor);
e156.variableTypeId = 1397;
var e157 = endpoints.addEndpoint("155", "Temperatura 155", endpointType.genericSensor);
e157.variableTypeId = 1397;
var e158 = endpoints.addEndpoint("156", "Temperatura 156", endpointType.genericSensor);
e158.variableTypeId = 1397;
var e159 = endpoints.addEndpoint("157", "Temperatura 157", endpointType.genericSensor);
e159.variableTypeId = 1397;
var e160 = endpoints.addEndpoint("158", "Temperatura 158", endpointType.genericSensor);
e160.variableTypeId = 1397;
var e161 = endpoints.addEndpoint("159", "Temperatura 159", endpointType.genericSensor);
e161.variableTypeId = 1397;
var e162 = endpoints.addEndpoint("160", "Temperatura 160", endpointType.genericSensor);
e162.variableTypeId = 1397;
var e163 = endpoints.addEndpoint("161", "Temperatura 161", endpointType.genericSensor);
e163.variableTypeId = 1397;
var e164 = endpoints.addEndpoint("162", "Temperatura 162", endpointType.genericSensor);
e164.variableTypeId = 1397;
var e165 = endpoints.addEndpoint("163", "Temperatura 163", endpointType.genericSensor);
e165.variableTypeId = 1397;
var e166 = endpoints.addEndpoint("164", "Temperatura 164", endpointType.genericSensor);
e166.variableTypeId = 1397;
var e167 = endpoints.addEndpoint("165", "Temperatura 165", endpointType.genericSensor);
e167.variableTypeId = 1397;
var e168 = endpoints.addEndpoint("166", "Temperatura 166", endpointType.genericSensor);
e168.variableTypeId = 1397;
var e169 = endpoints.addEndpoint("167", "Temperatura 167", endpointType.genericSensor);
e169.variableTypeId = 1397;
var e170 = endpoints.addEndpoint("168", "Temperatura 168", endpointType.genericSensor);
e170.variableTypeId = 1397;
//EndpointTemp7
var e171 = endpoints.addEndpoint("169", "Temperatura 169", endpointType.genericSensor);
e171.variableTypeId = 1397;
var e172 = endpoints.addEndpoint("170", "Temperatura 170", endpointType.genericSensor);
e172.variableTypeId = 1397;
var e173 = endpoints.addEndpoint("171", "Temperatura 171", endpointType.genericSensor);
e173.variableTypeId = 1397;
var e174 = endpoints.addEndpoint("172", "Temperatura 172", endpointType.genericSensor);
e174.variableTypeId = 1397;
var e175 = endpoints.addEndpoint("173", "Temperatura 173", endpointType.genericSensor);
e175.variableTypeId = 1397;
var e176 = endpoints.addEndpoint("174", "Temperatura 174", endpointType.genericSensor);
e176.variableTypeId = 1397;
var e177 = endpoints.addEndpoint("175", "Temperatura 175", endpointType.genericSensor);
e177.variableTypeId = 1397;
var e178 = endpoints.addEndpoint("176", "Temperatura 176", endpointType.genericSensor);
e178.variableTypeId = 1397;
var e179 = endpoints.addEndpoint("177", "Temperatura 177", endpointType.genericSensor);
e179.variableTypeId = 1397;
var e180 = endpoints.addEndpoint("178", "Temperatura 178", endpointType.genericSensor);
e180.variableTypeId = 1397;
var e181 = endpoints.addEndpoint("179", "Temperatura 179", endpointType.genericSensor);
e181.variableTypeId = 1397;
var e182 = endpoints.addEndpoint("180", "Temperatura 180", endpointType.genericSensor);
e182.variableTypeId = 1397;
var e183 = endpoints.addEndpoint("181", "Temperatura 181", endpointType.genericSensor);
e183.variableTypeId = 1397;
var e184 = endpoints.addEndpoint("182", "Temperatura 182", endpointType.genericSensor);
e184.variableTypeId = 1397;
var e185 = endpoints.addEndpoint("183", "Temperatura 183", endpointType.genericSensor);
e185.variableTypeId = 1397;
var e186 = endpoints.addEndpoint("184", "Temperatura 184", endpointType.genericSensor);
e186.variableTypeId = 1397;
var e187 = endpoints.addEndpoint("185", "Temperatura 185", endpointType.genericSensor);
e187.variableTypeId = 1397;
var e188 = endpoints.addEndpoint("186", "Temperatura 186", endpointType.genericSensor);
e188.variableTypeId = 1397;
var e189 = endpoints.addEndpoint("187", "Temperatura 187", endpointType.genericSensor);
e189.variableTypeId = 1397;
var e190 = endpoints.addEndpoint("188", "Temperatura 188", endpointType.genericSensor);
e190.variableTypeId = 1397;
var e191 = endpoints.addEndpoint("189", "Temperatura 189", endpointType.genericSensor);
e191.variableTypeId = 1397;
var e192 = endpoints.addEndpoint("190", "Temperatura 190", endpointType.genericSensor);
e192.variableTypeId = 1397;
var e193 = endpoints.addEndpoint("191", "Temperatura 191", endpointType.genericSensor);
e193.variableTypeId = 1397;
var e194 = endpoints.addEndpoint("192", "Temperatura 192", endpointType.genericSensor);
e194.variableTypeId = 1397;
//EndpointTemp8
var e171a = endpoints.addEndpoint("193", "Temperatura 193", endpointType.genericSensor);
e171a.variableTypeId = 1397;
var e172a = endpoints.addEndpoint("194", "Temperatura 194", endpointType.genericSensor);
e172a.variableTypeId = 1397;
var e173a = endpoints.addEndpoint("195", "Temperatura 195", endpointType.genericSensor);
e173a.variableTypeId = 1397;
var e174a = endpoints.addEndpoint("196", "Temperatura 196", endpointType.genericSensor);
e174a.variableTypeId = 1397;
var e175a = endpoints.addEndpoint("197", "Temperatura 197", endpointType.genericSensor);
e175a.variableTypeId = 1397;
var e176a = endpoints.addEndpoint("198", "Temperatura 198", endpointType.genericSensor);
e176a.variableTypeId = 1397;
var e177a = endpoints.addEndpoint("199", "Temperatura 199", endpointType.genericSensor);
e177a.variableTypeId = 1397;
var e178a = endpoints.addEndpoint("200", "Temperatura 200", endpointType.genericSensor);
e178a.variableTypeId = 1397;
var e179a = endpoints.addEndpoint("201", "Temperatura 201", endpointType.genericSensor);
e179a.variableTypeId = 1397;
var e180a = endpoints.addEndpoint("202", "Temperatura 202", endpointType.genericSensor);
e180a.variableTypeId = 1397;
var e181a = endpoints.addEndpoint("203", "Temperatura 203", endpointType.genericSensor);
e181a.variableTypeId = 1397;
var e182a = endpoints.addEndpoint("204", "Temperatura 204", endpointType.genericSensor);
e182a.variableTypeId = 1397;
var e183a = endpoints.addEndpoint("205", "Temperatura 205", endpointType.genericSensor);
e183a.variableTypeId = 1397;
var e184a = endpoints.addEndpoint("206", "Temperatura 206", endpointType.genericSensor);
e184a.variableTypeId = 1397;
var e185a = endpoints.addEndpoint("207", "Temperatura 207", endpointType.genericSensor);
e185a.variableTypeId = 1397;
var e186a = endpoints.addEndpoint("208", "Temperatura 208", endpointType.genericSensor);
e186a.variableTypeId = 1397;
var e187a = endpoints.addEndpoint("209", "Temperatura 209", endpointType.genericSensor);
e187a.variableTypeId = 1397;
var e188a = endpoints.addEndpoint("210", "Temperatura 210", endpointType.genericSensor);
e188a.variableTypeId = 1397;
var e189a = endpoints.addEndpoint("211", "Temperatura 211", endpointType.genericSensor);
e189a.variableTypeId = 1397;
var e190a = endpoints.addEndpoint("212", "Temperatura 212", endpointType.genericSensor);
e190a.variableTypeId = 1397;
var e191a = endpoints.addEndpoint("213", "Temperatura 213", endpointType.genericSensor);
e191a.variableTypeId = 1397;
var e192a = endpoints.addEndpoint("214", "Temperatura 214", endpointType.genericSensor);
e192a.variableTypeId = 1397;
var e193a = endpoints.addEndpoint("215", "Temperatura 215", endpointType.genericSensor);
e193a.variableTypeId = 1397;
var e194a = endpoints.addEndpoint("216", "Temperatura 216", endpointType.genericSensor);
e194a.variableTypeId = 1397;
}

function validateDeviceAddress(address, result)
{
  // Esta función permite validar la dirección de un dispositivo, cuando el usuario 
  // lo está creando. Si el dispositivo tiene reglas de validación especiales para 
  // la dirección, pueden verificarse aquí y devolver un mensaje de error en 
  // caso de que el formato de la dirección sea incorrecto.
  
  // En el código siguiente, se realiza una validación para asegurarse de que la 
  // dirección tiene exactamente 10 caracteres.
  
  // if (address.length != 10) {
  //   result.ok = false;
  //   result.errorMessage = {
  //     en: "The address must be 10 characters long", 
  //     es: "La dirección debe tener exactamente 10 caracteres"
  //   };
  // }
}

function updateDeviceUIRules(device, rules)
{
  // Esta función permite especificar reglas de interfaz de usuario en el nivel de 
  // dispositivo. Por ejemplo, es posible habilitar o deshabilitar la creación 
  // de endpoints manualmente al dispositivo después de que se creó.

  // En el código siguiente, el agregado manual de endpoints está deshabilitada 
  // en la interfaz de usuario. Esto significa que el dispositivo se limitará a los 
  // endpoints definidos por la función getEndpoints() anterior.
  
  // rules.canCreateEndpoints = false;
}

function updateEndpointUIRules(endpoint, rules)
{
  // Esta función permite especificar reglas de interfaz de usuario para cada
  // endpoint del dispositivo. Por ejemplo, es posible habilitar o inhabilitar la
  // eliminación de endpoints, o la edición de subtipo de endpoint.

  // En el código siguiente, se definen las siguientes reglas:
  // - Los endpoints no se pueden eliminar.
  // - El subtipo de endpoint se puede cambiar, pero solo para el segundo endpoint.
  
  // rules.canDelete = false;
  // rules.canEditSubType = (endpoint.address == "2");
}
