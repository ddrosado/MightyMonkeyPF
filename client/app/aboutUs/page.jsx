import React from 'react'
import style from './page.module.css'
import Image from 'next/image'
import mmc from '../../assets/images/mmc.jpg'

const aboutUs = () => {

  return (
    <div className={style.aboutContainer}>
      <div className={style.aboutStructure}>
      <div className={style.titleContainer}>
      <h1 className={style.clubTitle}>Get to <span>KNOW US</span> a little more</h1>
      </div>
      
      <Image src={mmc} alt='#' />
       <p className={style.infoClub}>
        The Mighty Monkey Club was a magical and special place in the heart of
        the town of Vicente López. Founded by a family passionate about sports and
        family unity, the club became the epicenter of sports activities and
        entertainment for all. Its facilities included an impressive soccer
        field, a basketball court and a refreshing swimming pool. But what made
        the club truly unique was its warm and welcoming atmosphere, where
        everyone felt like part of one big family. Every weekend, parents and
        children would get together to participate in friendly sports
        tournaments. From exciting soccer matches to swimming competitions,
        everyone gave their all with enthusiasm and sportsmanship. It didn't
        matter if they were beginners or experts, it was the fun and camaraderie
        that counted. In addition to sporting activities, the Mighty Monkey Club
        organized family events such as outdoor movie nights, barbecues and
        theme parties. These special occasions strengthened the bonds between
        families and created unforgettable memories for everyone. The essence of
        the Mighty Monkey Club was based on the idea that sports could bring
        families together and encourage an active and healthy lifestyle. The
        values of teamwork, respect and self-improvement were instilled in every
        activity, and children learned important lessons about the importance of
        perseverance and fair play. Over time, the Mighty Monkey Club became a
        symbol of joy and harmony in Vicente López. Laughter echoed through the
        sports fields, and excitement was in the air at every event. Families
        looked forward to the weekend to share quality time and fun at this
        special place. The legacy of the Mighty Monkey Club endured for
        generations to come. As children grew into adults, they carried with
        them the values and memories they acquired at the club. The magic and
        spirit of the Mighty Monkey Club continued to live on in the town,
        transcending time and leaving a positive impact on the community. And so
        it was that the Mighty Monkey Club became a haven for Vicente López
        families, a place where passion for sports merged with love and family
        unity, creating happy and lasting moments for all who were part of this
        endearing sports community.
      </p>
      </div>
    </div>
  )
}

export default aboutUs