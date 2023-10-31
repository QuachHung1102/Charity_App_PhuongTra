import {
  Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions, Pressable, ImageBackground, FlatList, RefreshControl, ActivityIndicator
} from "react-native";
import React, { useState, useCallback, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, EvilIcons, Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

let progressNumberColor = "#000";
let progressColor = '#D9D9D9';
const followerList = [
  { id: '1', name: 'Nguyễn Minh Thảo', followYear: '03/04/2021', isFiend: true, avatarURI: 'https://s3-alpha-sig.figma.com/img/bb9a/c965/60ee06ab42b36e66007cfe3c6b06e222?Expires=1699833600&Signature=Z8R7cTvZi1RdTPE4CcEur-bQXLMCKFl8lrzmSoSaRzueDgBKYcTidSZN5jkyJtk6Ic8Gq6P5QO8MfsZvqRk-LNUjOFH2KU75KcyMcPmWJa119TSg18jfl9-hVEicP2OiqUyakvKOvXi8ANtljhAOnIqtvIG3-9mGDASUVsMNHTBI8svLUrhNpsdElMOj8xe~G2FjrXav3KHr5UgXkZuXxLchPif5cWme44ruP7OI9Ihhbi1OrtR5xOC-Fd4ptWmbI1yq9-raBLEfyEvBwmeR6ANjf5SD~HKczRw-S-30x7Y4ra2VDUfw2~mmBbsNBCuqmhaEhyxI0LLdggl~KgRB4A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
  { id: '2', name: 'Đặng Nhật Nam', followYear: '07/06/2021', isFiend: true, avatarURI: 'https://s3-alpha-sig.figma.com/img/18a4/68da/0ecb8c01864548fbe0321a76a86b85e6?Expires=1699833600&Signature=OS0lD7StggYEBKlxP9V8twHBzb2-R7u5Yyo8sDy8bY9fhjaAAswnjNaVnjUxq3S8kOyi9VoRB0qhM9jWm-DLq1IJ9c0YGRhgxYelv6w017hQ3Fam0-vEyaT8Tk7Xw~B6TIfmGxRtuokJcpX2HnLKtkh2y-YZORNIG~rT-da1moLU5gttxuf-w1lVQufL1rPwQQVrmRDuDGytOBJZbUUsCWtUpCUKOZMJmCnAzWk13~-hwQfJXIrDmltUKkTYvH0XQ9Ttxy2uM63Mn0xgeyWeZ8qlpsToWnJb3fcNCBbuOhi9HzfMWyX3GoidG86-6qbrwMFQOnr-RTwalxlpk7CvEA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' },
  { id: '3', name: 'Nguyễn Minh Kiên', followYear: '22/12/2021', isFiend: false, avatarURI: 'https://s3-alpha-sig.figma.com/img/49df/5d86/5aa389d4533ecf6806503b5a218cae51?Expires=1699833600&Signature=Pbf0YocdpPWOi4-Up2n8NfoVftTeJa8sL27LdV9WPKj3aDpIlAcBOfI~Uil7zOQCeBmB3C8O04iEGk8yps4eBFBsTANURBTrfCtAKrnoK2HtRocq~pWNVtlpP4ur~ndxrw2TWP5Bm4ZMQlEoBycubKVOlni5BAE-KzlU1YyCg-T3xcv-PW5PN1lr619v9mdkvy5FUdpcu1s0XMlDJXGMgXsvhMVq3-vr-KjHs4M3Pv0hB0Aij320Gq4UD-wBognoeoc~QbSK7QaKI9XCHssgH7SQlUtBQRahxzUj9rbCnKlHyFVlRjB4cxDKf6cWW53vzuSamS6zQEQuzS9VNxo27A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' },
  { id: '4', name: 'Trần Văn Tuấn', followYear: '01/01/2022', isFiend: true, avatarURI: 'https://s3-alpha-sig.figma.com/img/3ded/8f85/cfb18168a1700d02198306783fb17610?Expires=1699833600&Signature=XQ6oeaXMNDkUAeTegZkjsQ-N~JjeifRxeyY7iLwPfSXPG0JfyZtPbgv2GRvFzN1JB28WqKp8mL3xH8JhrS~oNqhFCaFiNraqk2oAo3WkklQo-1NBZBwmTB5yIaUfhV9z-crsuXRU7pY~xiXZAJP08pB546P2fmmYABCiQyjoDMPss21EmUvZcBdTxXtO5AYKG8k4qFY4b-3Olp8Z43fGwXcHEhX1A5UylEFGp7f8NVlptl3hY~jrRip9hZtEup0nZvdd6x~PfLKFEs26RzhqGhEfHlxl1bb21lqYXl6qNz6NsXs8vWmCyG7Gu1f4MjrIJiI41fHqWzJgbhR4Rtr8Dw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' },
  { id: '5', name: 'Trịnh Hương Nhung', followYear: '12/03/2022', isFiend: false, avatarURI: 'https://s3-alpha-sig.figma.com/img/7cd3/a9a0/a62f88ac8f8d8dd921b12aa4ffa4fc5b?Expires=1699833600&Signature=ARmUqAsXoPWh9AiROEpGCJ1KLcP2EzfdWyrwm3hmq5ztIWE4O~OBkHvX0fLEtdCwyF~gJ8--goh1mFTvTpML1t1AyPpD7BhV691VoL6xUaV5r8pQ5WUd4uIQ~CdP-jldhptZxKZjJhTJ4n74UPCL154mFESch1TFdv8klZzOFAGxRXBJgEHunJKCs90lcA0IA45i0tXpM5OcLlNhgx3k9NH2~BbNWHjeUatghMppTJuV3pwbxuVu8Juff4Q-yT1f6jxGb4w9xo84TMmeetUIJ0wThCdc7CmY-h-a6taMG0OR~B3GNtdkFZpH9EkiwQgJ45L8O~eWK5dKezrGMdqwoQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' },
  { id: '6', name: 'Lê Thu Hà', followYear: '17/05/2022', isFiend: true, avatarURI: 'https://s3-alpha-sig.figma.com/img/cead/3b6f/542211e5466e67364740e38e3c0f6b1b?Expires=1699833600&Signature=mbbaxgGQbKLg1DgNdZGOyDCzMbGhnJ5gtm4rteRMI5-MsfIWxCZ6u6uxAS3velSP20LZtUh09Hit-6DynhEsfW7zaddnRshHXuZ3~HuuzWm99iokL-qdHNzZtwR8oGjRIT4p1zRbpiUe4b7b645Cxv~zvvNHh13BcExISd4Xb1r7vzKUu~jelVHOyCtQgo8jxbbn~gSd~4Jd4uIHjvxfqtxAtiuqGWQJm~jY3HjmM5c7-kd98yKkdGxNxV60I4~cigaPMFiyi~nM-PqS4weCgsljlWhwJcIWY3OVNWdEsxCmJGzmvk33auMOIyvAgQnx7p96DQ3kqvE2TR5xtnac9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' },
  { id: '7', name: 'Khương Anh Kiệt', followYear: '22/06/2022', isFiend: true, avatarURI: 'https://s3-alpha-sig.figma.com/img/7b50/5edd/2e1468de430b925a2eea4bcfb4380bde?Expires=1699833600&Signature=WLrA7ekseEwiksow9lKuDLyuNgrri9w93Ct4k9iiM0Xsg7sMBFPLhfUe771AyXJhSpnk4D9hv2tsBNXrQo2OYR02EmWtPK81~w9qNhTJIl064o29BpJIP74j4I1nQoflDxbqeKjWPt6ZCzJZ9B22MjVLIgKKvj3kfdmbpRHvFedpPD3Z6NNdBsDrb26v7HzVZ3jgpn9onA1xLfxlAFzGju77jcR9hVLMLgvUfuIQH7khNAcvWlbTpXWhxK3hPxcvFX0APPuUI1BKsWnu6TX4DzpPTtuXwssld30KGUMiSpQF9td9RPK5nQPTNBLjkviNEuxfXfoQy4bHGEg1BZW9Lg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' },
  { id: '8', name: 'Nguyễn Minh Huyền', followYear: '29/08/2022', isFiend: true, avatarURI: 'https://i.pinimg.com/564x/55/4f/3b/554f3b287e85124910d4c4ff448f3d20.jpg' },
  { id: '9', name: 'Lê Việt Hà', followYear: '16/10/2022', isFiend: false, avatarURI: 'https://i.pinimg.com/564x/8f/78/ed/8f78edaf16ad2f3e0115ed3c94096f4d.jpg' },
  { id: '10', name: 'Nguyễn Minh Huy', followYear: '07/03/2023', isFiend: false, avatarURI: 'https://i.pinimg.com/564x/8c/29/5a/8c295a263778e023d4fb5474cb5fb17c.jpg' },
  { id: '11', name: 'Quách Ngọc Hưng', followYear: '17/10/2023', isFiend: false, avatarURI: 'https://i.pinimg.com/564x/27/05/63/270563b54216fe9967359962520decba.jpg' },
];
const followedList = [
  { id: '1', name: 'Helpage International', followYear: '13/04/2021', isFiend: true, avatarURI: 'https://s3-alpha-sig.figma.com/img/9f69/8692/deb997014997d5c39ce270aa298e3afd?Expires=1699833600&Signature=MzBY~HEPr5umqdjTFPrPnW8DELR2cxYnKd~IKQV5AOWZJyR9ZqpMqYghuh8qWLDg0HvWTSdRiYd2doFVJlCAxQrbLFwiACQ5Jfzs36wPU8LP2fQhgpNniRzcNdMLMvNt59e3i~bZyOah-R6UaYsRXNDKeHeN~okQoar0H9hC3rD7iMrOOUwGBVelv9h5AnAu6txcQaOwcYA6KQYbNp6~E8j8Ca-~Ei1TA3NQ-tah9gyAWnNOUBS9ol-epOXoU7qjolMd76vJ0Z1wBYjgdEawFiXHzhrme~EqyhdfkX8wGwY9m~bbEntm9PsTzjOorMGhKJP3TC-5KZkyIQ3Ps7CDYA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
  { id: '2', name: 'Báo điện tử Dân Trí', followYear: '17/06/2021', isFiend: true, avatarURI: 'https://s3-alpha-sig.figma.com/img/af32/5084/55fc0d98974d8c381d4a0b6c533bf9f7?Expires=1699833600&Signature=oTDOpzNhlwIz7ugUmKitVCRIzuQC5JLYHt3vuLIr0RsDHJWzvlDLOkWdSEYsl3g0bNdCv0xlOjF34ZPd-FdKNp4GRRtyfIGDqdJD6PE4Ud6DHlcPfFLbJKGIDnCCzzarCOuet167eoizdKUo9EF2vNrGMd0uzcYzuNzAtQLGplwbIjp2IpPKg7x6E8TSiROoQprAE4DKpagUBpZYNOGf2R8jvnu9UFtVShPV9u8EniRb8noM6HECELhZIzCSCZgDWhtvZ0YoPcvsfJNH6iVqw7anlq4Bn0DfybPorUUPqhWY9HGz5qICkaJfjpeQ5oSZNF8Rp1xfyuoN6UrvXfPbQg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' },
  { id: '3', name: 'Unicef Viet Nam', followYear: '28/12/2021', isFiend: false, avatarURI: 'https://s3-alpha-sig.figma.com/img/6fb7/0706/1e7e73c76c45c064749fbdd3e20fd824?Expires=1699833600&Signature=ef-bffThYOWo8VAWZ1O96N7aIDkTopuJoKQsxASn73yKJGxsGlrdbIx59KYkKF18qE0Ixi8CpmcdBVMW5sWUaKWDWyEDgfXJzfHouWmBjbQ-j0enrYAH-QsgDxr1uyqD0boBpKhDdJlgd7SVT4wtYbUUTTm3H34s0Vmq3wNj-UpcgRwkbxlrmYhds3w4nBTpix8xRk~JH8otbBbVjp5TSEPDZv0kqvR9np1F5OLV22FVhPe~-mqAXkyME6xvc4Sl3RGzb6b6SiqhpMGgB9mI-N2ylfwvO53NhmsvCwyXfiC800SBx1RYBhGcX15fMiy3WuyfHf9DMLJhQ8zPZtgYLQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' },
  { id: '4', name: 'Save the Children', followYear: '11/01/2022', isFiend: true, avatarURI: 'https://s3-alpha-sig.figma.com/img/1d5b/1a0a/cc0d0857de557a7d63a53f2ae285da08?Expires=1699833600&Signature=qweEZ9Mn6YdxR55CosbwYFlY9wNbMlTNthCVHqGJYKCWRu4MXF7gZ87qKtCd0PQwLXT7P2oMzX~Tii-IZU6gpccUsyhP96KfzRtAXKxfZ4k9sNo3XvdXU8e-3yytBmrye0KwLoW0IdulMYpC1e6eWp2Hfx5gF3lbtWacNSECHPIqKaUAyz3p8pd0XpGwxdxXCjn3yIUg79atTPnk-f7upTycnp8iK5Kl9oCNAvTleqxsksXQfXFwbKTsMPOU~~vxX3hkc18LdTA~xLMyIeS0jIqyEauzNz2eRzd52pPmrdb6TNdafwoj4YrDDlfC7jc2kzQj6KqCibGygCz6BdOj-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' },
  { id: '5', name: 'Action On Proverty Viet Nam', followYear: '30/03/2022', isFiend: false, avatarURI: 'https://s3-alpha-sig.figma.com/img/3cc1/a110/88b26ad58c153323e119f6e046fe65c0?Expires=1699833600&Signature=UCwK58~yWVKV5Cr~pncu~m7s9iBzvsfmSPMHnn46DqtN6CP2paiyoZkm8N88JmOZamB2o9Jw2~Pi3HSGPdOPCcl90xCDwP4YR9UFSuRqeIJWFgLYnMyypkUyItsoQ2IzylsUz9-n9dGwImNWJWf4VW-cJmFSGudqwZt37apXCR-~pZ2mq2vuMNVHtcl-r8XiJSAbrSS3c6g0JPQEs3MVGc9VMSZ4CFoi4-gtHYnIQPPGXxMiEfVXM9~vOKyCVaBG5q2iYfz9IctEWvmtEALWqQiFTiSuAypzvVHoL7BGub9qX5cuEszlWdpjOIj9nmweqZPKUVjJW5d6Nlf7CpOghQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' },
  { id: '6', name: 'Nguyễn Minh Thảo', followYear: '03/04/2021', isFiend: true, avatarURI: 'https://s3-alpha-sig.figma.com/img/bb9a/c965/60ee06ab42b36e66007cfe3c6b06e222?Expires=1699833600&Signature=Z8R7cTvZi1RdTPE4CcEur-bQXLMCKFl8lrzmSoSaRzueDgBKYcTidSZN5jkyJtk6Ic8Gq6P5QO8MfsZvqRk-LNUjOFH2KU75KcyMcPmWJa119TSg18jfl9-hVEicP2OiqUyakvKOvXi8ANtljhAOnIqtvIG3-9mGDASUVsMNHTBI8svLUrhNpsdElMOj8xe~G2FjrXav3KHr5UgXkZuXxLchPif5cWme44ruP7OI9Ihhbi1OrtR5xOC-Fd4ptWmbI1yq9-raBLEfyEvBwmeR6ANjf5SD~HKczRw-S-30x7Y4ra2VDUfw2~mmBbsNBCuqmhaEhyxI0LLdggl~KgRB4A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
  { id: '7', name: 'Đặng Nhật Nam', followYear: '07/06/2021', isFiend: true, avatarURI: 'https://s3-alpha-sig.figma.com/img/18a4/68da/0ecb8c01864548fbe0321a76a86b85e6?Expires=1699833600&Signature=OS0lD7StggYEBKlxP9V8twHBzb2-R7u5Yyo8sDy8bY9fhjaAAswnjNaVnjUxq3S8kOyi9VoRB0qhM9jWm-DLq1IJ9c0YGRhgxYelv6w017hQ3Fam0-vEyaT8Tk7Xw~B6TIfmGxRtuokJcpX2HnLKtkh2y-YZORNIG~rT-da1moLU5gttxuf-w1lVQufL1rPwQQVrmRDuDGytOBJZbUUsCWtUpCUKOZMJmCnAzWk13~-hwQfJXIrDmltUKkTYvH0XQ9Ttxy2uM63Mn0xgeyWeZ8qlpsToWnJb3fcNCBbuOhi9HzfMWyX3GoidG86-6qbrwMFQOnr-RTwalxlpk7CvEA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' },
  { id: '8', name: 'Nguyễn Minh Kiên', followYear: '22/12/2021', isFiend: false, avatarURI: 'https://s3-alpha-sig.figma.com/img/49df/5d86/5aa389d4533ecf6806503b5a218cae51?Expires=1699833600&Signature=Pbf0YocdpPWOi4-Up2n8NfoVftTeJa8sL27LdV9WPKj3aDpIlAcBOfI~Uil7zOQCeBmB3C8O04iEGk8yps4eBFBsTANURBTrfCtAKrnoK2HtRocq~pWNVtlpP4ur~ndxrw2TWP5Bm4ZMQlEoBycubKVOlni5BAE-KzlU1YyCg-T3xcv-PW5PN1lr619v9mdkvy5FUdpcu1s0XMlDJXGMgXsvhMVq3-vr-KjHs4M3Pv0hB0Aij320Gq4UD-wBognoeoc~QbSK7QaKI9XCHssgH7SQlUtBQRahxzUj9rbCnKlHyFVlRjB4cxDKf6cWW53vzuSamS6zQEQuzS9VNxo27A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' },
  { id: '9', name: 'Trần Văn Tuấn', followYear: '01/01/2022', isFiend: true, avatarURI: 'https://s3-alpha-sig.figma.com/img/3ded/8f85/cfb18168a1700d02198306783fb17610?Expires=1699833600&Signature=XQ6oeaXMNDkUAeTegZkjsQ-N~JjeifRxeyY7iLwPfSXPG0JfyZtPbgv2GRvFzN1JB28WqKp8mL3xH8JhrS~oNqhFCaFiNraqk2oAo3WkklQo-1NBZBwmTB5yIaUfhV9z-crsuXRU7pY~xiXZAJP08pB546P2fmmYABCiQyjoDMPss21EmUvZcBdTxXtO5AYKG8k4qFY4b-3Olp8Z43fGwXcHEhX1A5UylEFGp7f8NVlptl3hY~jrRip9hZtEup0nZvdd6x~PfLKFEs26RzhqGhEfHlxl1bb21lqYXl6qNz6NsXs8vWmCyG7Gu1f4MjrIJiI41fHqWzJgbhR4Rtr8Dw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' },
];


function CampItem({ item }) {
  let image = { uri: 'https://cdnphoto.dantri.com.vn/R96UV8RILpgk057FBZ3n90_B8Ow=/thumb_w/1360/2023/08/24/z4632592106399c54c87a7cac066b5cee00a798667cf7b-crop-1692873287748.jpeg?watermark=true' }
  // Màu chữ của progress
  let progress = 85;
  if (progress >= 80) {
    progressColor = '#3CD24B';
  } else if (20 <= progress && progress < 80) {
    progressColor = '#FC7900';
  } else {
    progressColor = '#EB0000';
  }
  // Màu nền của remainingDays
  let remainingDays = 32;
  if (remainingDays > 60) {
    progressNumberColor = "#76df81";
  } else if (remainingDays > 15 && remainingDays <= 60) {
    progressNumberColor = "#fca14c";
  } else if (remainingDays > 0 && remainingDays <= 15) {
    progressNumberColor = "#f14c4c";
  } else {
    progressNumberColor = '#EAEAEA';
  }

  return (
    <View style={styles.itemContainer}>
      <View style={[styles.centered, {
        margin: Dimensions.get('window').width * 0.03,
        width: Dimensions.get('window').width * 0.39,
      }]}>
        <Image source={image} style={styles.image} resizeMode="contain" />
        <View style={[styles.flexRow, {
          justifyContent: 'space-between', width: Dimensions.get('window').width * 0.39, marginTop: Dimensions.get('window').height * 0.01,
        }]}>
          <View style={[styles.flexRow, { alignItems: 'center' }]}>
            <Text style={[styles.progressText, { color: progressColor, }]}>Đang thực hiện{ }</Text>
          </View>
          <View style={{
            backgroundColor: progressNumberColor, borderRadius: 3,
          }}>
            <Text style={[styles.progressNumber, { paddingHorizontal: Dimensions.get('window').width * 0.01 }]}>
              { }32 ngày
            </Text>
          </View>
        </View>
        <Text style={styles.camTitle}>
          { }
          Không bố, mẹ khuyết tật, nữ sinh có thể phải bỏ học vì nghèo.
        </Text>
        <View style={{ backgroundColor: "#D9D9D9", borderRadius: 10, height: 7, width: Dimensions.get('window').width * 0.39, marginVertical: Dimensions.get('window').height * 0.01, }}>
          <View style={{ width: '80%', height: 7, backgroundColor: progressColor, borderRadius: 10 }}></View>
        </View>
      </View>
    </View>
  )
}

const MyCampAndSupport = ({ renderItems }) => {
  return (
    <View style={[styles.contentContainer, { backgroundColor: '#000000', }]}>
      <View style={styles.myCamp}>
        <Text style={styles.titleText}>Chiến dịch của bạn:</Text>
        <FlatList
          horizontal={true}
          data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
          renderItem={renderItems}
          keyExtractor={(item, index) => item.id}
          showsHorizontalScrollIndicator={false}
          alwaysBounceHorizontal={true}
          ItemSeparatorComponent={() => <View style={{ width: Dimensions.get('window').width * 0.05, height: Dimensions.get('window').height * 0.01 }}></View>}
        />
      </View>
      <View style={styles.myCamp}>
        <Text style={styles.titleText}>Chiến dịch bạn đã ủng hộ:</Text>
        <FlatList
          horizontal={true}
          data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
          renderItem={renderItems}
          keyExtractor={(item, index) => item.id}
          showsHorizontalScrollIndicator={false}
          alwaysBounceHorizontal={true}
          ItemSeparatorComponent={() => <View style={{ width: Dimensions.get('window').width * 0.05, height: Dimensions.get('window').height * 0.01 }}></View>}
        />
      </View>
    </View>
  )
}

function FollowItem({ item }) {
  let userIcon = <AntDesign name="user" size={32} color="#000" />
  if (item.avatarURI) {
    userIcon = <Image source={{ uri: item.avatarURI }} style={styles.imageFollowAvatar} resizeMode="contain" />
  }

  return (
    <View style={[styles.flexRow, { alignItems: 'center', justifyContent: 'space-between' }]}>
      <View style={[styles.flexRow, { alignItems: 'center', justifyContent: 'space-between', columnGap: Dimensions.get('window').width * 0.025 }]}>
        <View style={{
          backgroundColor: "#b2b2b2",
          borderRadius: 100,
          height: Dimensions.get('window').width * 0.125,
          width: Dimensions.get('window').width * 0.125,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {userIcon}
        </View>
        <View style={{ justifyContent: 'center' }}>
          <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
            <Text numberOfLines={1} style={styles.followerName}>{item.name}</Text>
            <Text style={styles.followTextTime}>Theo dõi { }2 năm trước</Text>
          </View>
        </View>
      </View>
      <Pressable>
        <View>
          {
            item.isFiend ?
              <Feather name="user-check" size={24} color="#001A72" /> :
              <Feather name="user-plus" size={24} color="#001A72" />
          }
        </View>
      </Pressable>
    </View >
  )
}

const Follow = ({ data }) => {
  const renderFollowItem = ({ item }) => {
    return (
      <View style={{}}>
        <FollowItem item={item} />
      </View>
    )
  }

  return (
    <View style={[styles.contentContainer, { backgroundColor: "#fff" }]}>
      <View style={[styles.follow, { marginTop: Dimensions.get('window').height * 0.03 }]}>
        <FlatList
          data={data}
          renderItem={renderFollowItem}
          alwaysBounceVertical={true}
          scrollEnabled={false}
          keyExtractor={(item, index) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: Dimensions.get('window').width * 0.05, height: Dimensions.get('window').height * 0.02 }}></View>}
        />
      </View>
    </View>
  )
}

const DetailProfile = () => {
  const navigation = useNavigation();
  const [contentActive, SetContentActive] = useState(1);
  const [refreshing, SetRefreshing] = useState(false);
  const [isLoading, SetIsLoading] = useState(true);
  const [follower, SetFollower] = useState([]);
  const [followed, SetFollowed] = useState([]);

  // 
  const onRefresh = useCallback(() => {
    SetRefreshing(true);
    // fetchData(); // Gọi lại fetchData khi người dùng làm mới.
    setTimeout(() => {
      SetRefreshing(false);
    }, 2000);
    // Thành phần này đã tích hợp trong fetchData. Nếu dùng thì comment lại
  }, [fetchData]);

  // const splitData = ((fetchedData) => {
  //   if (fetchedData) {
  //     setDataIntro(fetchedData.introduce.split('|'));
  //     setDataReview(fetchedData.review.split('|'));
  //   }
  // });

  useEffect(() => {
    // Simulate fetching data from an API
    fetchData(); // This is real fetch data, gọi khi render lần đầu.
  }, [fetchData]);

  const fetchData = useCallback(async () => {
    try {
      // const response = await fetch('https://api.example.com/data');
      // const result = await response.json(); // ép dữ liệu từ JSON sang js
      // setData(result);
      // splitData(result);

      // setData(restaurant/* Fetch your data here*/); //Test code
      // splitData(restaurant);
      SetFollower(followerList);
      SetFollowed(followedList);
      SetIsLoading(false);
      SetRefreshing(false);
    } catch (error) {
      console.error(`Lỗi khi tải dữ liệu!`, error);
    } finally {
      SetIsLoading(false);
      SetRefreshing(false);
    }
  }, []);
  // 
  const renderItems = ({ item }) => {
    return <CampItem item={item} />
  }

  let contentView = <MyCampAndSupport renderItems={renderItems} />;
  if (contentActive == 1) {
    contentView = <MyCampAndSupport renderItems={renderItems} />
  } else if (contentActive == 2) {
    contentView = <Follow data={follower} />;
  } else if (contentActive == 3) {
    contentView = <Follow data={followed} />;
  }

  if (isLoading) {
    return (
      <View style={[{
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#FFF5F7",
        rowGap: 15,
      }]}>
        <ActivityIndicator size={"large"} />
        <Text>Loading data</Text>
      </View>
    )
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={[styles.container, contentActive != 1 ? { backgroundColor: "#000" } : null]}>
        <View style={styles.proFileHeader}>
          <View style={[styles.flexRow, {
            columnGap: Dimensions.get('window').width * 0.05,
            alignItems: 'center',
            justifyContent: 'flex-start',
          }]}
          >
            <Pressable
              onPress={() => navigation.goBack()}
            >
              <View style={[styles.backBtn, contentActive != 1 ? { backgroundColor: "#000" } : null]}>
                <AntDesign name="left" size={Dimensions.get('window').width * 0.1} color="white" />
              </View>
            </Pressable>
            <View>
              <Text style={[styles.headerTitle, contentActive != 1 ? { color: "#fff" } : null]}>Trang cá nhân</Text>
            </View>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        >
          <View style={[styles.centered, { marginBottom: Dimensions.get('window').height * 0.01, }, contentActive == 1 ? { height: Dimensions.get('window').height * 0.4, } : { height: Dimensions.get('window').height * 0.3, }]}>
            <View style={{ width: Dimensions.get('window').width * 0.25, height: Dimensions.get('window').width * 0.25 }}>
              <ImageBackground
                source={require('../storages/Ellipse37.png')}
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                resizeMode="cover"
              >
                <Image
                  source={require('../storages/avt.png')}
                  style={{
                    width: Dimensions.get('window').width * 0.22,
                    height: Dimensions.get('window').width * 0.22,
                  }}
                  resizeMode="contain"
                />
              </ImageBackground>
            </View>
            <View style={[styles.centered, { rowGap: Dimensions.get('window').height * 0.005 }]}>
              <Text style={[styles.textBold900Black, contentActive != 1 ? { color: "#fff" } : null]}>{ }Lưu Phương Trà</Text>
              <Text style={contentActive != 1 ? { color: "#757575", fontSize: 14 } : null}>@phuongtra12</Text>
              <Text
                numberOfLines={2}
                style={[styles.smText, {
                  width: Dimensions.get('window').width * 0.75,
                  textAlign: 'center',
                  fontWeight: '700',
                },
                contentActive != 1 ? { display: 'none' } : null,
                ]}
              >BIO người dùng: <Text style={styles.smText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text></Text>
            </View>
            <View style={[styles.flexRow, {
              columnGap: Dimensions.get('window').width * 0.05,
            }, contentActive != 1 ? { width: Dimensions.get('window').width * 0.85, marginBottom: Dimensions.get('window').height * 0.01 } : null]}>
              <Pressable onPress={() => SetContentActive(2)}>
                <View style={[contentActive != 1 ? [styles.flexRow, { width: Dimensions.get('window').width * 0.4, columnGap: 5, }] : { width: Dimensions.get('window').width * 0.25, }, { alignItems: 'center', justifyContent: 'center', paddingVertical: 3 }, contentActive == 2 ? { borderBottomWidth: 1, borderBottomColor: "#fff" } : null]}>
                  <Text style={[contentActive == 1 ? styles.textBold900Black : styles.followTextActive, contentActive == 2 ? styles.contentTextActive : null]}>{ }45</Text>
                  <Text style={[contentActive == 1 ? styles.smText : styles.followTextActive, contentActive == 2 ? styles.contentTextActive : null]} numberOfLines={1}>Người theo dõi</Text>
                </View>
              </Pressable>
              <Pressable onPress={() => SetContentActive(3)}>
                <View style={[contentActive != 1 ? [styles.flexRow, { width: Dimensions.get('window').width * 0.4, columnGap: 5, }] : { width: Dimensions.get('window').width * 0.25, }, { alignItems: 'center', justifyContent: 'center', paddingVertical: 3 }, contentActive == 3 ? { borderBottomWidth: 1, borderBottomColor: "#fff" } : null]}>
                  <Text style={[contentActive == 1 ? styles.textBold900Black : styles.followTextActive, contentActive == 3 ? styles.contentTextActive : null]}>{ }345</Text>
                  <Text style={[contentActive == 1 ? styles.smText : styles.followTextActive, contentActive == 3 ? styles.contentTextActive : null]} numberOfLines={1}>Đang theo dõi</Text>
                </View>
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate('Donation')}
              >
                <View style={[styles.centered, { width: Dimensions.get('window').width * 0.25 }, contentActive != 1 ? { display: 'none', } : null]}>
                  <Text style={styles.textBold900Black}>{ }30</Text>
                  <Text style={styles.smText} numberOfLines={1}>Lượt ủng hộ</Text>
                </View>
              </Pressable>
            </View>
          </View>

          {/* Content View */}
          {contentView}

        </ScrollView >
      </View >
    </>
  );
};

export default DetailProfile;

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
  },
  flexRow: {
    flexDirection: "row",
  },
  centered: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  container: {
    backgroundColor: "#FFF5F7",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  proFileHeader: {
    height: Dimensions.get('window').height * 0.1,
    width: Dimensions.get('window').width * 0.9,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginHorizontal: Dimensions.get('window').width * 0.05,
    marginVertical: Dimensions.get('window').height * 0.02,
  },
  headerTitle: {
    color: "#000000",
    fontSize: 24,
    fontWeight: "500",
    letterSpacing: -0.528,
  },
  backBtn: {
    backgroundColor: "#C7BFC1",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Dimensions.get('window').width * 0.1,
    height: Dimensions.get('window').width * 0.1,
    width: Dimensions.get('window').width * 0.1,
  },
  title: {
    color: "#000",
    fontSize: 16,
    fontWeight: '700',
  },
  textBold900Black: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '900',
  },
  smText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#757575',
  },
  followTextActive: {
    color: "#fff",
    fontSize: 16,
    fontWeight: '400',
  },
  contentContainer: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingBottom: Dimensions.get('window').height * 0.03,
    // height: Dimensions.get('window').height,
    // width: Dimensions.get('window').width,
  },
  myCamp: {
    backgroundColor: '#000000',
    width: Dimensions.get('window').width * 0.85,
    marginHorizontal: Dimensions.get('window').width * 0.075,
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.45,
  },
  image: {
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.4,
    height: (Dimensions.get('window').width * 0.4) / 1.54,
  },
  imageFollowAvatar: {
    borderRadius: Dimensions.get('window').width * 0.125,
    height: Dimensions.get('window').width * 0.125,
    width: Dimensions.get('window').width * 0.125,
  },
  camTitle: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: -0.308,
  },
  titleText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: -0.44,
    marginTop: Dimensions.get('window').height * 0.02,
    marginBottom: Dimensions.get('window').height * 0.015,
  },
  progressText: {
    fontSize: 10,
    fontWeight: '400',
    letterSpacing: -0.22,
  },
  progressNumber: {
    color: progressNumberColor,
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '400',
    letterSpacing: -0.22,
  },
  follow: {
    width: Dimensions.get('window').width * 0.85,
    marginHorizontal: Dimensions.get('window').width * 0.075,
    backgroundColor: "#fff",
  },
  followerName: {
    color: "#000",
    fontSize: 16,
    fontWeight: '700',
    width: Dimensions.get('window').width * 0.5,
  },
  followTextTime: {
    color: "#757575",
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 12 * 1.5,
  },
  contentTextActive: {
    // textDecorationLine: 'underline',
    fontWeight: '700',
  },

});
