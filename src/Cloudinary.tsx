// 1. Import classes
// ==================

import React from 'react'
import { AdvancedImage, responsive } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'

// Import any actions required for transformations.
import { fill } from '@cloudinary/url-gen/actions/resize'

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
  const Westerkerk = cld.image('kayakverkantie/Nightkayaking/Westerkerk2_uysbok')

  // 4. Transform your image
  //= ========================

  // Resize to 250 x 250 pixels using the 'fill' crop mode.
  KayakplusBavaria.resize(fill().width(300).height(300))
  Pakhuis.resize(fill().width(300).height(300))
  Reguliersgracht.resize(fill().width(250).height(250))
  Westerkerk.resize(fill().width(250).height(250))
  // 5. Deliver your image
  // =========================

  // Render the image in a React component.
  return (
    <div>
      <AdvancedImage cldImg={KayakplusBavaria} />
      <AdvancedImage cldImg={Pakhuis} />
      <AdvancedImage cldImg={Reguliersgracht} />
      <AdvancedImage cldImg={Westerkerk} />
    </div>
  )

}

export default Nightkayaking
