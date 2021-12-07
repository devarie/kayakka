// 1. Import classes
// ==================

import React from 'react'
import { AdvancedImage, responsive } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'
// import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
// import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

// Import any actions required for transformations.
// import { fill } from '@cloudinary/url-gen/actions/resize'
// import { theme } from '@cloudinary/url-gen/actions/effect'

// const Item = styled(Paper)(({ theme: any }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }))

const Nightkayaking = () => {
  // 2. Set your cloud name
  //= =======================

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'kayaknews',
    },
  })

  // 3. Get your image
  //= ==================

  // Instantiate a CloudinaryImage object for the image with the public ID, 'sample'.
  const KayakplusBavaria = cld.image('kayakverkantie/Nightkayaking/KayakplusBavaria_knuyfv')
  const Pakhuis = cld.image('kayakverkantie/Nightkayaking/Pakhuis_mwdvz9')
  const Reguliersgracht = cld.image('kayakverkantie/Nightkayaking/Reguliersgracht_etc5bc')
  const Scheepvaartmuseum = cld.image('kayakverkantie/Nightkayaking/Scheepvaartmuseum3_mqwgho.jpg')
  // const Westerkerk = cld.image('kayakverkantie/Nightkayaking/Westerkerk2_uysbok')
  // const Spiegelgracht = cld.image('kayakverkantie/Nightkayaking/Spiegelgracht_a5umen.jpg')
  // const Magerebrug2 = cld.image('kayakverkantie/Nightkayaking/Magerebrug2_d1ndp9.jpg')
  // const Bruggen = cld.image('kayakverkantie/Nightkayaking/7Bruggen_ukfyop.jpg')
  // const Scheepvaartmuseum2 = cld.image('kayakverkantie/Nightkayaking/Scheepvaartmuseum2_ltrxmq.jpg')

  // 4. Transform your image
  //= ========================

  // Resize to 250 x 250 pixels using the 'fill' crop mode.
  

  // 5. Deliver your image
  // =========================

  // Render the image in a React component.
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <AdvancedImage cldImg={KayakplusBavaria} plugins={[responsive(100)]} />
          {/* <Item>xs=8</Item> */}
        </Grid>
        <Grid item xs={4}>
          <AdvancedImage cldImg={Scheepvaartmuseum} plugins={[responsive(1100)]} />
          {/* <Item>xs=4</Item> */}
        </Grid>
        <AdvancedImage cldImg={Pakhuis} plugins={[responsive(100)]} />
        <Grid item xs={4}>
          {/* <Item>xs=4</Item> */}
        </Grid>
        <Grid item xs={4}>
          <AdvancedImage cldImg={Reguliersgracht} plugins={[responsive(100)]} />
          {/* <Item>xs=8</Item> */}
        </Grid>
      </Grid>
    </Box>
  )
}
//     <div>
//     <AdvancedImage cldImg={Scheepvaartmuseum2} plugins={[responsive(100)]} />
//     <AdvancedImage cldImg={Westerkerk} />
//     <AdvancedImage cldImg={Spiegelgracht} />
//     <AdvancedImage cldImg={Magerebrug2} />
//     <AdvancedImage cldImg={Bruggen} />
//   </div>
// )

export default Nightkayaking
