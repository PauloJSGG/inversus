import React from 'react'

const Members = (props) => {
  const {dynamicData} = props

  return (
    <div className="content-container content-container--no-flex">
      <div className="parallax">
        {
          dynamicData.members.map((item, i) => {
            const leftOrRight = i % 2 == 0 ? 'left' : 'right';
            return(
              <div className={'parallax__group--'.concat(leftOrRight)}>
                <div className=" parallax__layer parallax__layer--base">
                  <p className="members__text">{item.data.text}</p>
                </div>
                <div className="parallax__layer parallax__layer--back">
                  <img src={item.data.imgUrl} className="members__img"/>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Members;


{/* <div className={leftOrRight.concat(' members')}>
  <img src={item.data.imgUrl} className="members__img"/>
  <p className="members__text">{item.data.text}</p>
</div> */}
